// Obtém a referência do botão "Comprar Agora"
let buyButton = document.getElementById('buy-button');

// Obtém as referências para os elementos de formulário, checkout e div de imagens pequenas
let addressForm = document.getElementById('address-form');
let checkoutSection = document.getElementById('checkout-section');
let continueToCheckoutButton = document.getElementById('continue-to-checkout');
let smallImagesDiv = document.querySelector('.small-img');
let bigImage = document.getElementById('big-img');

// Armazena o preço inicial
const initialPrice = 'R$ 109,90';

// Oculta inicialmente o formulário de endereço e a seção de checkout
addressForm.style.display = 'none';
checkoutSection.style.display = 'none';

// Adiciona um ouvinte de eventos ao botão "Comprar Agora"
buyButton.addEventListener('click', function (event) {
    // Impede o comportamento padrão do link (pode ser uma âncora)
    event.preventDefault();

    // Oculta a div de imagens pequenas
    smallImagesDiv.style.display = 'none';

    // Torna o formulário de endereço visível
    addressForm.style.display = 'block';

    // Exibe a imagem grande
    bigImage.style.display = 'block';
});

// Adiciona um ouvinte de eventos para mostrar a seção de checkout quando o botão "Continuar para Checkout" for clicado
continueToCheckoutButton.addEventListener('click', function () {
    // Esconde o formulário de endereço
    addressForm.style.display = 'none';

    // Mostra a seção de checkout
    checkoutSection.style.display = 'block';
});

// Função para atualizar a seleção de voltagem inicial
function updateSelectedVoltage() {
    let selectedVoltage = document.getElementById('selected-voltage');
    let voltageOptions = document.querySelectorAll('.voltage-options input[type="radio"]');

    voltageOptions.forEach(function (option) {
        if (option.checked) {
            selectedVoltage.textContent = 'Seleção atual: ' + option.value;
        }
    });
}

// Chama a função para exibir a seleção inicial quando a página carregar
window.addEventListener('load', updateSelectedVoltage);

// JavaScript adicional para o formulário de checkout
let paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário (para fins de exemplo)

    // Simula um erro no pagamento (você pode adicionar sua lógica real aqui)
    let paymentSuccess = false;

    if (!paymentSuccess) {
        // Exibe um alerta de erro
        alert("Sistema do banco temporariamente fora de operação, por favor tente mais tarde.");
    } else {
        // O pagamento foi bem-sucedido, você pode redirecionar ou realizar outras ações aqui
        // Por exemplo, redirecionar o usuário para uma página de confirmação
        window.location.href = 'pagina-de-confirmacao.html';
    }

    // Limpar os campos do formulário (você pode adicionar essa funcionalidade)
});

// Adiciona um ouvinte de eventos de clique a cada imagem da small-img
let smallImages = smallImagesDiv.querySelectorAll('img');

smallImages.forEach(function (image) {
    image.addEventListener('click', function () {
        // Atualiza a imagem grande com a imagem clicada
        bigImage.src = image.src;
    });
});
