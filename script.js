document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                const nav = document.querySelector('.navbar-nav');
                if (nav.classList.contains('mobile-active')) {
                    nav.classList.remove('mobile-active');
                }
            }
        });
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.navbar-mobile-toggle');
    const nav = document.querySelector('.navbar-nav');
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-active');
        });
    }

    // Tabs functionality for Project Showcase
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Deactivate all triggers and contents
            tabTriggers.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Activate clicked trigger and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById('tab-' + tabId).classList.add('active');
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const formMessageDisplay = document.getElementById('form-message');

    if (contactForm && formMessageDisplay) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formMessageDisplay.textContent = ''; // Clear previous messages
            formMessageDisplay.className = 'form-message-display'; // Reset classes


            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const subject = contactForm.subject.value.trim();
            const message = contactForm.message.value.trim();

            let errors = [];
            if (name.length < 2) errors.push("Name must be at least 2 characters.");
            if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("Please enter a valid email address.");
            if (subject.length < 5) errors.push("Subject must be at least 5 characters.");
            if (message.length < 10) errors.push("Message must be at least 10 characters.");

            if (errors.length > 0) {
                formMessageDisplay.textContent = errors.join(' ');
                formMessageDisplay.classList.add('error');
                return;
            }

            // Simulate form submission
            console.log('Form submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Subject:', subject);
            console.log('Message:', message);

            // Display success message
            formMessageDisplay.textContent = "Message Sent! Thank you for reaching out. (This is a demo)";
            formMessageDisplay.classList.add('success');
            contactForm.reset();

            // Remove message after a few seconds
            setTimeout(() => {
                formMessageDisplay.textContent = '';
                formMessageDisplay.className = 'form-message-display';
            }, 5000);
        });
    }

    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Chatbot Widget Mock Interactivity
    const chatbotWidgetButton = document.getElementById('chatbotWidgetButton');
    const chatbotDialog = document.getElementById('chatbotDialog');
    const closeChatbotDialog = document.getElementById('closeChatbotDialog');

    if (chatbotWidgetButton && chatbotDialog && closeChatbotDialog) {
        chatbotWidgetButton.addEventListener('click', () => {
            chatbotDialog.style.display = chatbotDialog.style.display === 'none' || chatbotDialog.style.display === '' ? 'flex' : 'none';
        });
        closeChatbotDialog.addEventListener('click', () => {
            chatbotDialog.style.display = 'none';
        });
    }
});