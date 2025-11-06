document.addEventListener('DOMContentLoaded', function () {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const loginRequired = document.getElementById('loginRequired');
    const purchaseArea = document.getElementById('purchaseArea');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');

    if (usuarioLogado) {
        // ✅ Usuário está logado
        loginRequired.style.display = 'none';
        purchaseArea.style.display = 'block';
        userName.textContent = usuarioLogado.nome;
        userEmail.textContent = usuarioLogado.email;
    } else {
        // ❌ Não está logado
        loginRequired.style.display = 'block';
        purchaseArea.style.display = 'none';
    }

    // Função para atualizar total
    function calcularTotal() {
        const precos = { rafting: 250, kayak: 180, trilha: 120 };
        let total = 0;
        Object.keys(precos).forEach(key => {
            const qty = parseInt(document.getElementById(`${key}-qty`).value) || 0;
            total += precos[key] * qty;
        });
        document.getElementById('total-amount').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    // Eventos de +/- e input
    document.querySelectorAll('.quantity-btn, .quantity-input').forEach(el => {
        el.addEventListener('click', calcularTotal);
        el.addEventListener('input', calcularTotal);
    });

    // Formulário de compra
    document.getElementById('purchaseForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('adventureDate').value;

        if (!phone || !date) {
            alert('Preencha todos os campos.');
            return;
        }

        alert(`Reserva realizada com sucesso!\nData: ${date}\nContato: ${phone}`);
        // Aqui você pode salvar no localStorage ou simular compra
    });
});