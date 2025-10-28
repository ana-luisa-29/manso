document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleLoginPassword');
    const passwordInput = document.getElementById('loginPassword');
    
    toggleBtn?.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        toggleBtn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    document.getElementById('loginForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const senha = passwordInput.value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario = usuarios.find(u => u.email === email && u.senha === senha);

        if (usuario) {
            localStorage.setItem('usuarioLogado', JSON.stringify({ nome: usuario.nome, email: usuario.email }));
            alert('Login realizado com sucesso!');
            window.location.href = 'index.html'; // ✅ Redireciona automaticamente
        } else {
            alert('E-mail ou senha incorretos.');
        }
    });
});