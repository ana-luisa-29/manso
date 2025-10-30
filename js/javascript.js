document.addEventListener('DOMContentLoaded', function () {
    // === Animações existentes ===
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

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.boxShadow = '0 0 20px #ff3399');
        // card.addEventListener('mouseleave', () => card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
    });

    const barbieButtons = document.querySelectorAll('.barbie-button');
    barbieButtons.forEach(button => {
        button.addEventListener('mouseenter', () => button.style.animation = 'pulse 0.5s infinite');
        // button.addEventListener('mouseleave', () => button.style.animation = 'none';
    });

    // === Foto de perfil na sidebar ===
    const profilePhotoUpload = document.getElementById('profilePhotoUpload');
    const profilePhotoContainer = document.getElementById('profilePhotoContainer');
    if (profilePhotoUpload && profilePhotoContainer) {
        const savedPhoto = localStorage.getItem('profilePhoto');
        if (savedPhoto) {
            profilePhotoContainer.innerHTML = `<img src="${savedPhoto}" alt="Foto de Perfil">`;
        }
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

    // === Atualizar header com foto + nome do usuário logado ===
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const headerProfile = document.getElementById('headerProfile');
    const headerProfilePhoto = document.querySelector('.header-profile-photo');

    if (usuarioLogado && headerProfile) {
        // Remover botão de login
        const loginBtn = document.querySelector('.btn-inicio[href="login.html"]');
        if (loginBtn) loginBtn.remove();

        // Carregar foto ou usar ícone
        const fotoSalva = localStorage.getItem('profilePhoto');
        if (fotoSalva && headerProfilePhoto) {
            headerProfilePhoto.innerHTML = `<img src="${fotoSalva}" alt="Perfil" style="width:40px; height:40px; border-radius:50%; border:2px solid #ff3399;">`;
        } else if (headerProfilePhoto) {
            headerProfilePhoto.innerHTML = `<span style="font-size:24px;">👤</span>`;
        }
    }
});