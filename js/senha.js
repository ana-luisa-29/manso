// js/forgot-password.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('forgotForm');

    form?.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('forgotEmail').value;

        if (!email || !email.includes('@')) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Simulação: em um site real, enviaria para um backend
        alert(`Instruções enviadas para ${email}!\nVerifique sua caixa de entrada.`);
        window.location.href = 'login.html';
    });
});