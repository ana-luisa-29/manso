document.addEventListener('DOMContentLoaded', function () {
    const toggleSignup = document.getElementById('toggleSignupPassword');
    const toggleConfirm = document.getElementById('toggleConfirmPassword');
    const passwordInput = document.getElementById('signupPassword');
    const confirmPasswordInput = document.getElementById('signupConfirmPassword');
    const requirements = document.getElementById('passwordRequirements');
    const form = document.getElementById('signupForm');

    [toggleSignup, toggleConfirm].forEach((btn, i) => {
        const input = i === 0 ? passwordInput : confirmPasswordInput;
        btn?.addEventListener('click', () => {
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            btn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    });

    passwordInput?.addEventListener('input', () => {
        const valid = passwordInput.value.length >= 6;
        requirements.textContent = valid ? 'Senha forte!' : 'A senha deve ter pelo menos 6 caracteres';
        requirements.className = valid ? 'password-requirements valid' : 'password-requirements invalid';
    });

    form?.addEventListener('submit', function (e) {
        e.preventDefault();
        const nome = document.getElementById('signupUsername').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const senha = passwordInput.value;
        const confirmSenha = confirmPasswordInput.value;

        if (!nome || !email || !senha || !confirmSenha) {
            alert('Preencha todos os campos.');
            return;
        }
        if (senha !== confirmSenha) {
            alert('As senhas não coincidem!');
            return;
        }
        if (senha.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        if (usuarios.some(u => u.email === email)) {
            alert('Este e-mail já está cadastrado!');
            return;
        }

        usuarios.push({ nome, email, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Conta criada com sucesso!');
        window.location.href = 'login.html';
    });
});