// js/signup.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleSignup = document.getElementById('toggleSignupPassword');
    const toggleConfirm = document.getElementById('toggleConfirmPassword');
    const passwordInput = document.getElementById('signupPassword');
    const confirmPasswordInput = document.getElementById('signupConfirmPassword');
    const requirements = document.getElementById('passwordRequirements');
    const form = document.getElementById('signupForm');

    // Alternar visibilidade da senha
    toggleSignup?.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        toggleSignup.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    toggleConfirm?.addEventListener('click', () => {
        const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordInput.setAttribute('type', type);
        toggleConfirm.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    // Validação em tempo real da senha
    passwordInput?.addEventListener('input', () => {
        const valid = passwordInput.value.length >= 6;
        requirements.textContent = valid ? 'Senha forte!' : 'A senha deve ter pelo menos 6 caracteres';
        requirements.className = valid ? 'password-requirements valid' : 'password-requirements invalid';
    });

    // Envio do formulário
    form?.addEventListener('submit', function (e) {
        e.preventDefault();
        const pass = passwordInput.value;
        const confirmPass = confirmPasswordInput.value;

        if (pass !== confirmPass) {
            alert('As senhas não coincidem!');
            return;
        }

        if (pass.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        alert('Conta criada com sucesso! Redirecionando...');
        window.location.href = 'login.html';
    });
});