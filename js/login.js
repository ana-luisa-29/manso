// js/login.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleLoginPassword');
    const passwordInput = document.getElementById('loginPassword');
    const form = document.getElementById('loginForm');

    // Alternar visibilidade da senha
    toggleBtn?.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        toggleBtn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    // Envio do formulário
    form?.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = passwordInput.value;

        if (!email || !password) {
            alert('Preencha todos os campos.');
            return;
        }

        // Simulação de login
        alert('Login realizado com sucesso!');
        // Em produção, aqui iria uma chamada para o backend
        // window.location.href = 'dashboard.html';
    });
});