// Função para rolar para o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animação de digitação para o título principal
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
});

// Menu de navegação suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de brilho ao passar o mouse
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 20px #ff3399';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
    });
});

// Efeito de piscar nos botões
const barbieButtons = document.querySelectorAll('.barbie-button');
barbieButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.animation = 'pulse 0.5s infinite';
    });
    button.addEventListener('mouseleave', () => {
        button.style.animation = 'none';
    });
});

// Profile photo upload functionality
const profilePhotoUpload = document.getElementById('profilePhotoUpload');
const profilePhotoContainer = document.getElementById('profilePhotoContainer');

profilePhotoUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePhotoContainer.innerHTML = `<img src="${e.target.result}" alt="Profile Photo">`;
        }
        reader.readAsDataURL(file);
    }
});