// Obtém a referência do botão "Comprar Agora"
let buyButton = document.getElementById('buy-button');

// Obtém as referências para os elementos de formulário, checkout e div de imagens pequenas
let addressForm = document.getElementById('address-form');
let checkoutSection = document.getElementById('checkout-section');
let continueToCheckoutButton = document.getElementById('continue-to-checkout');
let divText = document.querySelector('.div-text');
let divImg = document.querySelector('.div-img');
let priceElement = document.querySelector('.div-text h2');
let smallImagesDiv = document.querySelector('.small-img');

// Armazena o preço inicial
const initialPrice = 'R$ 109,90';

// Oculta inicialmente o formulário de endereço, a seção de checkout e a div de imagens pequenas
addressForm.style.display = 'none';
checkoutSection.style.display = 'none';
smallImagesDiv.style.display = 'none';

// Adiciona um ouvinte de eventos ao botão "Comprar Agora"
buyButton.addEventListener('click', function (event) {
    // Impede o comportamento padrão do link (pode ser uma âncora)
    event.preventDefault();

    // Oculta a div com o texto e o botão "Comprar Agora!"
    divText.style.display = 'none';

    // Mantém o preço na tela
    priceElement.style.display = 'block';

    // Torna o formulário de endereço visível
    addressForm.style.display = 'block';

    // Oculta a div de imagens pequenas
    smallImagesDiv.style.display = 'none';
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

// Função existente para trocar a imagem principal
let bigImage = document.getElementById('big-img');

function myImage(shirt) {
    bigImage.src = shirt;
}

// JavaScript adicional para o formulário de checkout
let paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário (para fins de exemplo)

    // Obtenha os valores do formulário
    let cardHolder = document.getElementById('card-holder').value;
    let cardNumber = document.getElementById('card-number').value;
    let expirationDate = document.getElementById('expiration-date').value;
    let cvv = document.getElementById('cvv').value;
    let address = document.getElementById('address').value;
    let cpf = document.getElementById('cpf').value;

    // Aqui, você pode processar os dados do pagamento e realizar a lógica de pagamento
    // Por enquanto, apenas exibiremos os dados no console para fins de teste
    console.log('Nome no Cartão:', cardHolder);
    console.log('Número do Cartão:', cardNumber);
    console.log('Data de Validade:', expirationDate);
    console.log('CVV:', cvv);
    console.log('Endereço:', address);
    console.log('CPF:', cpf);

    // Limpar os campos do formulário (você pode adicionar essa funcionalidade)
});
