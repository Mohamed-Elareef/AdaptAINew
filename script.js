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
                if (window.innerWidth < 768 && nav && nav.classList.contains('mobile-active')) {
                    nav.classList.remove('mobile-active');
                }
            }
        });
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.navbar-mobile-toggle');
    const nav = document.querySelector('.navbar-nav');
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from bubbling to document
            nav.classList.toggle('mobile-active');
        });
    }
    // Close mobile menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('mobile-active')) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnToggle = mobileToggle && mobileToggle.contains(event.target);
            if (!isClickInsideNav && !isClickOnToggle) {
                nav.classList.remove('mobile-active');
            }
        }
    });
    // Close mobile menu if escape key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && nav && nav.classList.contains('mobile-active')) {
            nav.classList.remove('mobile-active');
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
            formMessageDisplay.className = 'form-message-display'; // Reset classes
        }
    }
    function displayFormMessage(message, type) {
        if (formMessageDisplay) {
            formMessageDisplay.textContent = message;
            formMessageDisplay.className = 'form-message-display'; // Reset
            if (type === 'success') {
                formMessageDisplay.classList.add('success');
            } else if (type === 'error') {
                formMessageDisplay.classList.add('error');
            }
        }
    }


    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearErrors();

            const nameInput = contactForm.querySelector('#name');
            const emailInput = contactForm.querySelector('#email');
            const subjectInput = contactForm.querySelector('#subject');
            const messageInput = contactForm.querySelector('#message');

            const name = nameInput ? nameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const subject = subjectInput ? subjectInput.value.trim() : "";
            const message = messageInput ? messageInput.value.trim() : "";
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
                 displayFormMessage("Please correct the errors in the form.", "error");
                return;
            }

            // Simulate form submission success
            displayFormMessage("Message Sent! Thank you for reaching out. (This is a demo)", "success");
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
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSendButton = document.getElementById('chatbotSendButton');
    const chatMessagesContainer = chatbotDialog ? chatbotDialog.querySelector('.chat-messages') : null;

    if (chatbotWidgetButton && chatbotDialog && closeChatbotDialog) {
        chatbotWidgetButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const isActive = chatbotDialog.classList.contains('active');
            if (isActive) {
                chatbotDialog.classList.remove('active');
            } else {
                chatbotDialog.classList.add('active');
                 if (chatMessagesContainer) chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight; // Scroll to bottom on open
            }
        });
        closeChatbotDialog.addEventListener('click', () => {
            chatbotDialog.classList.remove('active');
        });
    }
    
    // Optional: Close chatbot dialog if escape key is pressed or clicking outside
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && chatbotDialog && chatbotDialog.classList.contains('active')) {
            chatbotDialog.classList.remove('active');
        }
    });
    document.addEventListener('click', function(event) {
        if (chatbotDialog && chatbotDialog.classList.contains('active')) {
            const isClickInsideDialog = chatbotDialog.contains(event.target);
            const isClickOnWidgetButton = chatbotWidgetButton && chatbotWidgetButton.contains(event.target);
            if (!isClickInsideDialog && !isClickOnWidgetButton) {
                chatbotDialog.classList.remove('active');
            }
        }
    });


    // Illustrative: Add a mock user message if chat was functional (currently disabled inputs)
    /*
    if (chatbotSendButton && chatbotInput && chatMessagesContainer && !chatbotInput.disabled) {
        const addMessageToChat = (text, sender) => {
            const messageContainerDiv = document.createElement('div');
            messageContainerDiv.className = `message-container ${sender}`;
            
            let avatarHTML = '';
            if (sender === 'user') {
                avatarHTML = `
                    <div class="message-avatar">
                        <svg class="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>`;
            } else { // AI
                 avatarHTML = `
                    <div class="message-avatar">
                        <svg class="lucide lucide-brain-circuit" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9.5 9.5 0 0 0-7.423 15.052"/><path d="M12 2a9.5 9.5 0 0 17.423 15.052"/><path d="M12 21a9.5 9.5 0 0 07.423-15.052"/><path d="M12 21a9.5 9.5 0 0 1-7.423-15.052"/><path d="M5.5 11.5a1.5 1.5 0 0 00 3h.01"/><path d="M18.5 11.5a1.5 1.5 0 0 00 3h.01"/><path d="M12 8.5a1.5 1.5 0 0 00 3h.01"/><path d="M12 14v1"/><path d="M12 5v1"/><path d="M16.5 7.5a1.5 1.5 0 0 00 3h.01"/><path d="M7.5 7.5a1.5 1.5 0 0 00 3h.01"/></svg>
                    </div>`;
            }

            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            messageDiv.textContent = text;
            
            const timestampP = document.createElement('p');
            timestampP.className = 'message-timestamp';
            timestampP.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            messageDiv.appendChild(timestampP);

            if (sender === 'user') {
                messageContainerDiv.appendChild(messageDiv);
                messageContainerDiv.insertAdjacentHTML('beforeend', avatarHTML); // Avatar after message for user
            } else {
                messageContainerDiv.insertAdjacentHTML('afterbegin', avatarHTML); // Avatar before message for AI
                messageContainerDiv.appendChild(messageDiv);
            }
            
            chatMessagesContainer.appendChild(messageContainerDiv);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight; // Scroll to bottom
        };

        chatbotSendButton.addEventListener('click', function() {
            const messageText = chatbotInput.value.trim();
            if (messageText) {
                addMessageToChat(messageText, 'user');
                chatbotInput.value = '';
                // Here you would typically send to AI and get response
                setTimeout(() => {
                    addMessageToChat("This is a mock AI response.", 'ai');
                }, 1000);
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

