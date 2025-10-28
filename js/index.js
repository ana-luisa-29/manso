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
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        } else {
            // Links externos (ex: CONTATO)
            window.location.href = targetId;
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

// ✅ CORREÇÃO: Upload de foto de perfil SEM quebrar o estilo
const profilePhotoUpload = document.getElementById('profilePhotoUpload');
const profilePhotoContainer = document.getElementById('profilePhotoContainer');

if (profilePhotoUpload && profilePhotoContainer) {
    // Carregar foto salva ao iniciar
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
        profilePhotoContainer.innerHTML = `<img src="${savedPhoto}" alt="Foto de Perfil">`;
    }

    // Lidar com novo upload
    profilePhotoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                // Limpa e insere a imagem DENTRO da div.profile-photo
                profilePhotoContainer.innerHTML = `<img src="${event.target.result}" alt="Foto de Perfil">`;
                // Salva no localStorage
                localStorage.setItem('profilePhoto', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}