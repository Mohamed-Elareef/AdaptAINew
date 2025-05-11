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
                // Close mobile menu if open and it's a mobile view
                const nav = document.querySelector('.navbar-nav');
                if (window.innerWidth < 768 && nav.classList.contains('mobile-active')) {
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
    // Close mobile menu when clicking outside of it (optional)
    document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('mobile-active')) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnToggle = mobileToggle.contains(event.target);
            if (!isClickInsideNav && !isClickOnToggle) {
                nav.classList.remove('mobile-active');
            }
        }
    });


    // Tabs functionality for Project Showcase
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            tabTriggers.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            const activeTabContent = document.getElementById('tab-' + tabId);
            if (activeTabContent) {
                activeTabContent.classList.add('active');
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const formMessageDisplay = document.getElementById('form-message');

    // Individual error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    function clearErrors() {
        if (nameError) nameError.textContent = '';
        if (emailError) emailError.textContent = '';
        if (subjectError) subjectError.textContent = '';
        if (messageError) messageError.textContent = '';
        if (formMessageDisplay) {
            formMessageDisplay.textContent = '';
            formMessageDisplay.className = 'form-message-display';
        }
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearErrors();

            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const subject = contactForm.subject.value.trim();
            const message = contactForm.message.value.trim();
            let isValid = true;

            if (name.length < 2) {
                if (nameError) nameError.textContent = "Name must be at least 2 characters.";
                isValid = false;
            }
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                if (emailError) emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }
            if (subject.length < 5) {
                if (subjectError) subjectError.textContent = "Subject must be at least 5 characters.";
                isValid = false;
            }
            if (message.length < 10) {
                if (messageError) messageError.textContent = "Message must be at least 10 characters.";
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            // Simulate form submission success
            if (formMessageDisplay) {
                formMessageDisplay.textContent = "Message Sent! Thank you for reaching out. (This is a demo)";
                formMessageDisplay.classList.add('success');
            }
            contactForm.reset();

            setTimeout(() => {
                clearErrors();
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
    // const chatbotInput = document.getElementById('chatbotInput');
    // const chatbotSendButton = document.getElementById('chatbotSendButton');
    // const chatMessagesContainer = chatbotDialog ? chatbotDialog.querySelector('.chat-messages') : null;

    if (chatbotWidgetButton && chatbotDialog && closeChatbotDialog) {
        chatbotWidgetButton.addEventListener('click', () => {
            // Toggle 'active' class for display
            const isActive = chatbotDialog.classList.contains('active');
            if (isActive) {
                chatbotDialog.classList.remove('active');
            } else {
                chatbotDialog.classList.add('active');
            }
        });
        closeChatbotDialog.addEventListener('click', () => {
            chatbotDialog.classList.remove('active');
        });
    }
    
    // Optional: Close chatbot dialog if escape key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && chatbotDialog && chatbotDialog.classList.contains('active')) {
            chatbotDialog.classList.remove('active');
        }
    });

    // Illustrative: Add a mock user message if chat was functional
    /*
    if (chatbotSendButton && chatbotInput && chatMessagesContainer) {
        chatbotSendButton.addEventListener('click', function() {
            const messageText = chatbotInput.value.trim();
            if (messageText) {
                const userMessageDiv = document.createElement('div');
                userMessageDiv.className = 'message-container user';
                userMessageDiv.innerHTML = `
                    <div class="message user">
                        ${messageText}
                        <p class="message-timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                    <div class="message-avatar">
                        <svg class="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                `;
                chatMessagesContainer.appendChild(userMessageDiv);
                chatbotInput.value = '';
                chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight; // Scroll to bottom
            }
        });
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                chatbotSendButton.click();
            }
        });
    }
    */
});
