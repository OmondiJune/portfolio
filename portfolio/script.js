function myMenuFunction() {
    var menuBtn= document.getElementById("myNav");

    if (menuBtn.className==="nav-menu") {
        menuBtn.className +="responsive";
    }else{
        menuBtn.className = "nav-menu";
    }
}
/*-----------------NAVBAR SCROLL SHADOW--------------------*/
window.onscroll = function () {headerShadow();}
function headerShadow(){
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop> 50 || document.documentElement.scrollTop>50) {
        
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height="70px";
        navHeader.style.lineHeight="70px";

    } else {
        
        navHeader.style.boxShadow = "none";
        navHeader.style.height="90px";
        navHeader.style.lineHeight="90px";

    }
}

// Add this to your script.js
let chatOpen = false;

function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatOpen = !chatOpen;
    chatBox.style.display = chatOpen ? 'flex' : 'none';
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const messagesDiv = document.getElementById('chatMessages');
    const userMessage = input.value.trim();

    if (userMessage === '') return;

    // Add user message
    messagesDiv.innerHTML += `<div class="user-message">${userMessage}</div>`;

    // Simple bot responses based on keywords
    let botResponse = getBotResponse(userMessage.toLowerCase());

    // Add bot response after a small delay to seem more natural
    setTimeout(() => {
        messagesDiv.innerHTML += `<div class="bot-message">${botResponse}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 500);

    // Clear input
    input.value = '';
}

function getBotResponse(message) {
    // Simple response logic based on keywords
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! How can I help you today?";
    }
    else if (message.includes('contact') || message.includes('email')) {
        return "You can contact us at juneomondi676@gmail.com or call +254111539762";
    }
    else if (message.includes('services') || message.includes('what do you do')) {
        return "I specialize in Flutter development, UI Design, and Computer & Network Maintenance. Would you like to know more about any specific service?";
    }
    else if (message.includes('location') || message.includes('address')) {
        return "We are located at Kirawa Road.";
    }
    else if (message.includes('project') || message.includes('portfolio')) {
        return "I have completed 8+ projects and worked with 7 different clients. Would you like to know more about specific projects?";
    }
    else if (message.includes('experience')) {
        return "I have 1 year of experience in Flutter development and related technologies.";
    }
    else if (message.includes('bye') || message.includes('goodbye')) {
        return "Goodbye! Have a great day!";
    }
    else {
        return "I'm not sure I understand. Could you rephrase that or ask about our services, projects, contact information, or location?";
    }
}

// Add event listener for Enter key in input field
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

//blink text
// Add this to your script.js
const typeElement = document.querySelector('.type');
const roles = ['a Developer', 'IT Support', ' a UI/UX Designer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = false;

function typeText() {
    const currentRole = roles[roleIndex];
    
    if (isWaiting) {
        setTimeout(() => {
            isWaiting = false;
            isDeleting = true;
            typeText();
        }, 1500); // Wait time at the end of word
        return;
    }

    if (isDeleting) {
        typeElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    // Speed of typing
    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentRole.length) {
        isWaiting = true;
        typeSpeed = 500;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

// Start the typing animation when the page loads
window.onload = function() {
    typeText();
}