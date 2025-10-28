// Rolar para o topo (não usado, mas mantido)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animação de digitação
document.addEventListener('DOMContentLoaded', function () {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent.trim();
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
    }
});

// Navegação suave (apenas para âncoras internas)
document.querySelectorAll('nav a').forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (href && href.startsWith('#')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Efeito de brilho nos cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 20px #ff3399';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
    });
});

// Piscar nos botões
const barbieButtons = document.querySelectorAll('.barbie-button, .barbie-button2');
barbieButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.animation = 'pulse 0.5s infinite';
    });
    button.addEventListener('mouseleave', () => {
        button.style.animation = 'none';
    });
});

// Upload de foto de perfil
const profilePhotoUpload = document.getElementById('profilePhotoUpload');
const profilePhotoContainer = document.getElementById('profilePhotoContainer');

if (profilePhotoUpload && profilePhotoContainer) {
    profilePhotoUpload.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePhotoContainer.innerHTML = `<img src="${e.target.result}" alt="Foto de Perfil">`;
            };
            reader.readAsDataURL(file);
        }
    });
}