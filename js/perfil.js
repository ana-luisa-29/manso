document.addEventListener('DOMContentLoaded', function () {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    const nomeEl = document.getElementById('nomeUsuario');
    const emailEl = document.getElementById('emailUsuario');
    const profileName = document.getElementById('profileName');

    if (usuario) {
        nomeEl.textContent = usuario.nome;
        emailEl.textContent = usuario.email;
        profileName.textContent = usuario.nome;
    } else {
        // Não logado → redirecionar para login
        alert('Você precisa estar logado para ver seu perfil.');
        window.location.href = 'login.html';
    }

    // Foto de perfil
    const foto = localStorage.getItem('profilePhoto');
    const photoDisplay = document.getElementById('profilePhotoDisplay');
    if (foto && photoDisplay) {
        photoDisplay.innerHTML = `<img src="${foto}" alt="Foto de Perfil">`;
    }

    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        localStorage.removeItem('usuarioLogado');
        localStorage.removeItem('profilePhoto'); // opcional
        alert('Você saiu da sua conta.');
        window.location.href = 'index.html';
    });
});