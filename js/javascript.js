document.addEventListener('DOMContentLoaded', function () {
    // Função para rolar para o topo
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Animação de digitação
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
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
    }

    // Navegação suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
                window.location.href = targetId;
            }
        });
    });

    // Efeitos visuais
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.boxShadow = '0 0 20px #ff3399');
        card.addEventListener('mouseleave', () => card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)');
    });

    document.querySelectorAll('.barbie-button').forEach(button => {
        button.addEventListener('mouseenter', () => button.style.animation = 'pulse 0.5s infinite');
        button.addEventListener('mouseleave', () => button.style.animation = 'none');
    });

    // ✅ FUNCIONALIDADE DE FOTO DE PERFIL (CORRIGIDA)
    const profilePhotoUpload = document.getElementById('profilePhotoUpload');
    const profilePhotoContainer = document.getElementById('profilePhotoContainer');

    if (profilePhotoUpload && profilePhotoContainer) {
        // Carregar foto salva
        const saved = localStorage.getItem('profilePhoto');
        if (saved) {
            profilePhotoContainer.innerHTML = `<img src="${saved}" alt="Foto de Perfil">`;
        }

        // Upload novo
        profilePhotoUpload.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    profilePhotoContainer.innerHTML = `<img src="${event.target.result}" alt="Foto de Perfil">`;
                    localStorage.setItem('profilePhoto', event.target.result);
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

// Mostrar saudação no index
document.addEventListener('DOMContentLoaded', function () {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    const greetingEl = document.getElementById('userGreeting');
    if (greetingEl && usuario) {
        greetingEl.textContent = `Olá, ${usuario.nome}!`;
    }
});