// Login functionality
let isLoggedIn = false;

document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        isLoggedIn = true;
        document.body.classList.add('logged-in');
        alert('Login realizado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Quantity selectors
document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        const adventure = this.getAttribute('data-adventure');
        const input = document.getElementById(`${adventure}-qty`);
        let value = parseInt(input.value);
        
        if (this.classList.contains('plus')) {
            if (value < 100) {
                input.value = value + 1;
            }
        } else if (this.classList.contains('minus') && value > 0) {
            input.value = value - 1;
        }
        
        // Update button states
        updateButtonStates();
        calculateTotal();
    });
});

// Input change event
document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', function() {
        let value = parseInt(this.value);
        if (isNaN(value) || value < 0) {
            this.value = 0;
        } else if (value > 100) {
            this.value = 100;
        }
        updateButtonStates();
        calculateTotal();
    });
});

// Update minus button states based on quantity
function updateButtonStates() {
    document.querySelectorAll('.quantity-input').forEach(input => {
        const adventure = input.id.replace('-qty', '');
        const minusBtn = document.querySelector(`.minus[data-adventure="${adventure}"]`);
        if (parseInt(input.value) <= 0) {
            minusBtn.disabled = true;
        } else {
            minusBtn.disabled = false;
        }
    });
}

// Calculate total
function calculateTotal() {
    const raftingQty = parseInt(document.getElementById('rafting-qty').value) || 0;
    const kayakQty = parseInt(document.getElementById('kayak-qty').value) || 0;
    const trilhaQty = parseInt(document.getElementById('trilha-qty').value) || 0;
    
    const raftingPrice = 250;
    const kayakPrice = 180;
    const trilhaPrice = 120;
    
    const total = (raftingQty * raftingPrice) + (kayakQty * kayakPrice) + (trilhaQty * trilhaPrice);
    
    document.getElementById('total-amount').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Form submission
document.getElementById('purchaseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!isLoggedIn) {
        alert('Por favor, faça login para finalizar a compra.');
        return;
    }
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const adventureDate = document.getElementById('adventureDate').value;
    
    // Get quantities
    const raftingQty = document.getElementById('rafting-qty').value;
    const kayakQty = document.getElementById('kayak-qty').value;
    const trilhaQty = document.getElementById('trilha-qty').value;
    
    let message = `✅ Compra realizada com sucesso!\n\n`;
    message += `Aventureiro: ${fullName}\n`;
    message += `Email: ${email}\n`;
    message += `Telefone: ${phone}\n`;
    message += `Data da aventura: ${adventureDate}\n\n`;
    
    if (raftingQty > 0) message += `Rafting: ${raftingQty} pessoa(s)\n`;
    if (kayakQty > 0) message += `Kayak: ${kayakQty} pessoa(s)\n`;
    if (trilhaQty > 0) message += `Trilha: ${trilhaQty} pessoa(s)\n`;
    
    message += `\nTotal: ${document.getElementById('total-amount').textContent}`;
    
    alert(message);
    
    // Reset form
    this.reset();
    document.getElementById('rafting-qty').value = 0;
    document.getElementById('kayak-qty').value = 0;
    document.getElementById('trilha-qty').value = 0;
    updateButtonStates();
    calculateTotal();
});

// Initialize
updateButtonStates();
calculateTotal();