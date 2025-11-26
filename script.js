document.addEventListener('DOMContentLoaded', () => {
    console.log('Lex | Next Level Development loaded.');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add dynamic glitch effect trigger here if needed

    // Hidden Admin Login Logic
    const lotrTrigger = document.getElementById('LOTR');
    const adminModal = document.getElementById('adminModal');
    const closeModal = document.querySelector('.close-modal');
    const adminForm = document.getElementById('adminForm');

    if (lotrTrigger && adminModal) {
        // Open modal on secret trigger click
        lotrTrigger.addEventListener('click', () => {
            adminModal.classList.add('visible');
            document.getElementById('username').focus();
        });

        // Close modal on close button click
        closeModal.addEventListener('click', () => {
            adminModal.classList.remove('visible');
        });

        // Close modal on outside click
        window.addEventListener('click', (e) => {
            if (e.target === adminModal) {
                adminModal.classList.remove('visible');
            }
        });

        // Handle form submission (dummy logic for now)
        adminForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Admin login logic to be implemented.');
            adminModal.classList.remove('visible');
        });
    }
});
