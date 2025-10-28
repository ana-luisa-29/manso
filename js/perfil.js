document.addEventListener('DOMContentLoaded', function () {
    const photoUpload = document.getElementById('photoUpload');
    const profilePhotoDisplay = document.getElementById('profilePhotoDisplay');
    const profileName = document.getElementById('profileName');
    const profileBio = document.getElementById('profileBio');
    const activityList = document.getElementById('activityList');

    // Carregar dados do perfil (simulados ou do localStorage)
    const savedPhoto = localStorage.getItem('profilePhoto');
    const savedName = localStorage.getItem('profileName') || 'Visitante';
    const savedBio = localStorage.getItem('profileBio') || 'Aventureiro nas águas do Rio Manso 🌊';

    if (savedPhoto) {
        profilePhotoDisplay.innerHTML = `<img src="${savedPhoto}" alt="Foto de Perfil">`;
    }

    profileName.textContent = savedName;
    profileBio.textContent = savedBio;

    // Simular atividades recentes (você pode expandir isso depois)
    const atividades = JSON.parse(localStorage.getItem('atividades')) || [];
    if (atividades.length > 0) {
        activityList.innerHTML = '';
        atividades.slice(0, 5).forEach(ativ => {
            const li = document.createElement('li');
            li.textContent = ativ;
            activityList.appendChild(li);
        });
    }

    // Upload de nova foto
    photoUpload.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                profilePhotoDisplay.innerHTML = `<img src="${event.target.result}" alt="Foto de Perfil">`;
                localStorage.setItem('profilePhoto', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Atualizar contagem de reservas (simulada)
    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    document.getElementById('reservasCount').textContent = reservas.length;
});