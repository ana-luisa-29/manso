// Armazenamento de usuários (em memória - para demonstração)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Função para salvar usuários no localStorage
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Função para redirecionar para o site principal
function redirectToSite() {
    // Redireciona para a página principal do site
    window.location.href = 'index.html';
}

// Toggle password visibility
document.getElementById('toggleLoginPassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('loginPassword');
    const icon = this.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        icon.className = 'fas fa-eye';
    }
});

document.getElementById('toggleSignupPassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('signupPassword');
    const icon = this.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        icon.className = 'fas fa-eye';
    }
});

document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('signupConfirmPassword');
    const icon = this.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        icon.className = 'fas fa-eye';
    }
});

// Validação de senha em tempo real
document.getElementById('signupPassword').addEventListener('input', function() {
    const password = this.value;
    const requirements = document.getElementById('passwordRequirements');
    
    if (password.length >= 6) {
        requirements.textContent = 'Senha válida ✓';
        requirements.className = 'password-requirements valid';
    } else {
        requirements.textContent = 'A senha deve ter pelo menos 6 caracteres';
        requirements.className = 'password-requirements invalid';
    }
});

// Page navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    const backBtn = document.getElementById('backBtn');
    if (pageId === 'loginPage') {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'block';
    }
}

document.getElementById('showSignup').addEventListener('click', () => showPage('signupPage'));
document.getElementById('showLoginFromSignup').addEventListener('click', () => showPage('loginPage'));
document.getElementById('forgotPasswordBtn').addEventListener('click', () => showPage('forgotPage'));
document.getElementById('showLoginFromForgot').addEventListener('click', () => showPage('loginPage'));
document.getElementById('backBtn').addEventListener('click', () => showPage('loginPage'));

// Form submissions
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Verifica se o usuário existe
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        alert(`✅ Login bem-sucedido!\nBem-vindo, ${user.username}!`);
        // Redireciona para o site principal após 1 segundo
        setTimeout(redirectToSite, 1000);
    } else {
        alert('❌ Credenciais incorretas.\nVerifique seu e-mail e senha.');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    // Validação de senha mínima
    if (password.length < 6) {
        alert('❌ A senha deve ter pelo menos 6 caracteres!');
        return;
    }
    
    // Verifica se o e-mail já está cadastrado
    if (users.some(u => u.email === email)) {
        alert('❌ Este e-mail já está cadastrado!');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('❌ As senhas não coincidem!');
        return;
    }
    
    // Cria novo usuário
    users.push({ username, email, password });
    saveUsers();
    
    alert('✅ Conta criada com sucesso!\nBem-vindo ao Arakaki Aventuras!');
    // Redireciona para o site principal após 1 segundo
    setTimeout(redirectToSite, 1000);
    
    // Limpa o formulário
    this.reset();
    // Reseta a mensagem de validação
    document.getElementById('passwordRequirements').textContent = 'A senha deve ter pelo menos 6 caracteres';
    document.getElementById('passwordRequirements').className = 'password-requirements';
});

document.getElementById('forgotForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value;
    
    // Verifica se o e-mail existe
    const user = users.find(u => u.email === email);
    
    if (user) {
        alert('💌 Verifique seu e-mail para redefinir sua senha!');
        // Em um sistema real, aqui você enviaria um e-mail com link de recuperação
    } else {
        alert('❌ Este e-mail não está cadastrado em nosso sistema.');
    }
    
    showPage('loginPage');
});