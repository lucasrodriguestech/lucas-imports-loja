// Product data
const products = [
    {
        id: 1,
        name: "Fone Bluetooth Hmaston LY13",
        category: "fones",
        price: 65.00,
        image: "img/fone_bluetooth_hmaston_ly13.jpg"
    },
    {
        id: 2,
        name: "Controle Para Ps4 ou PC - Altomex",
        category: "gaming",
        price: 85.00,
        image: "img/controle-altomex-ps4.jpg"
    },
    {
        id: 3,
        name: "Suporte Para Celular Automotivo",
        category: "suportes",
        price: 35.00,
        image: "img/suporte-carro-itblue.jpg"
    },
    {
        id: 4,
        name: "Fone de Ouvido Bluetooth Redmi Air Dots",
        category: "fones",
        price: 35.00,
        image: "img/fone-airdots.jpg"
    },
    {
        id: 5,
        name: "Fone de Ouvido para IPhone",
        category: "fones",
        price: 30.00,
        image: "img/fone-ouvido-iphone.jpg"
    },
    {
        id: 6,
        name: "Fone de Ouvido Intra Auricular LeLong",
        category: "fones",
        price: 20.00,
        image: "img/fone-ouvido-lelong.jpg"
    },
    {
        id: 7,
        name: "Carregador De iPhone ou Android À Pronta Entrega",
        category: "carregadores",
        price: 35.00,
        image: "img/carregadores-variados.jpg"
    },
    {
        id: 8,
        name: "Controle Remoto de TV Universal Reforçado Original",
        category: "remotes",
        price: 35.00,
        image: "img/controle-tv-universal.jpg"
    },
    {
        id: 9,
        name: "Máquina para cortar pelos no nariz e orelha",
        category: "maquininhas",
        price: 20.00,
        image: "img/maquininha-corta-pelos-nariz-e-orelha.jpg"
    },
    {
        id: 10,
        name: "Fonte Plug p4 bivolt (Universal - Tv Box)",
        category: "fontes",
        price: 30.00,
        image: "img/fonte-universal-tvbox.jpg"
    },
    {
        id: 11,
        name: "Tv box - Transforma qualquer TV em Smart",
        category: "aparelhos",
        price: 160.00,
        image: "img/tvbox.jpg"
    },
    {
        id: 12,
        name: "Afiador de faca profissional",
        category: "ferramentas",
        price: 20.00,
        image: "img/afiador-facas.jpg"
    },
    {
        id: 13,
        name: "Mouse sem fio recarregável - BMax",
        category: "utilitarios-pc",
        price: 40.00,
        image: "img/mouse-semfio-recarregavel.jpg"
    },
    {
        id: 14,
        name: "Fone de Ouvido Bluetooth",
        category: "fones",
        price: 35.00,
        image: "img/fone-bluetooth-altomex-s6.jpg"
    },
    {
        id: 15,
        name: "Suporte De Telefone Para Moto C/ Carregamento",
        category: "suportes",
        price: 40.00,
        image: "img/suporte-moto-carregamento.jpg"
    },
    {
        id: 16,
        name: "Fone de Ouvido Gamer Bluetooth BMax",
        category: "fones",
        price: 60.00,
        image: "img/fone-gamer-bmax.jpg"
    },
    {
        id: 17,
        name: "Fone Com Fio Conexão Tipo C",
        category: "fones",
        price: 35.00,
        image: "img/fone-conexao-c.jpg"
    },
    {
        id: 18,
        name: "Fone Para IPhone - conexão Lightning",
        category: "fones",
        price: 35.00,
        image: "img/fone-iphone-jh7al.jpg"
    },
    {
        id: 19,
        name: "Fone intra-auricular - Conexão p3 - C/ Microfone",
        category: "fones",
        price: 30.00,
        image: "img/fone-p3-microfone.jpg"
    },
    {
        id: 20,
        name: "Suporte para tv fixo",
        category: "suportes",
        price: 25.00,
        image: "img/suporte-tv-fixo.jpg"
    },
    {
        id: 21,
        name: "Fone Bluetooth M10",
        category: "fones",
        price: 30.00,
        image: "img/fone-bluetooth-m10.jpg"
    },
    {
        id: 22,
        name: "Fone Bluetooth Hmaston Original - Ear pods",
        category: "fones",
        price: 60.00,
        image: "img/fone-blueetooth-hmaston-ly11.jpg"
    },
    {
        id: 23,
        name: "Conector Bluetooth",
        category: "utilitarios-pc",
        price: 25.00,
        image: "img/conector-bluetooth.jpg"
    },
    {
        id: 24,
        name: "Receptor Wi-Fi",
        category: "utilitarios-pc",
        price: 25.00,
        image: "img/receptor-wifi.jpg"
    },
    {
        id: 25,
        name: "Mouse Gamer Com Fio Altomex - A-G703",
        category: "utilitarios-pc",
        price: 35.00,
        image: "img/mousegamer-ag703.jpg"
    },
    {
        id: 26,
        name: "Maquininha de Cortar Cabelo",
        category: "maquininhas",
        price: 30.00,
        image: "img/maquininha-dragao.jpg"
    },
    {
        id: 27,
        name: "Caixinha de Som Eletromex",
        category: "audio",
        price: 75.00,
        image: "img/caixinha-eletromex.jpg"
    },
    {
        id: 28,
        name: "Mini Teclado USB Portátil",
        category: "utilitarios-pc",
        price: 55.00,
        image: "img/mini-teclado-portatil.jpg"
    },
    {
        id: 29,
        name: "Filtro de Linha 3 Metros Bivolt",
        category: "ferramentas",
        price: 45.00,
        image: "img/filtro-de-linha-3metros.jpg"
    },
    {
        id: 30,
        name: "Balança de Bioimpedância Com Valores Confiáveis",
        category: "ferramentas",
        price: 49.00,
        image: "img/balança-bioimpedancia.jpg"
    },
    {
        id: 31,
        name: "Fone Headset Bluetooth",
        category: "fones",
        price: 49.00,
        image: "img/fone-bluetooth-headset.jpg"
    },
    {
        id: 32,
        name: "Caixa de Som Hmaston 8w A prova D'agua",
        category: "audio",
        price: 49.00,
        image: "img/caixa-de-som-hmaston-8w.jpg"
    }
];

let cart = [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartDisplay();
});

// Display products
function displayProducts(productsToShow) {
    productGrid.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add to cart
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

// Update cart display
function updateCartDisplay() {
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">Remover</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Add event listeners to cart buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', updateQuantity);
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

// Update quantity
function updateQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const action = e.target.getAttribute('data-action');
    const item = cart.find(item => item.id === productId);

    if (action === 'increase') {
        item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity--;
    } else if (action === 'decrease' && item.quantity === 1) {
        removeFromCart(e);
        return;
    }

    updateCartDisplay();
}

// Remove from cart
function removeFromCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showNotification('Produto removido do carrinho!');
}

// Filter products by category
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        if (category === 'all') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(p => p.category === category);
            displayProducts(filteredProducts);
        }
    });
});

// Checkout button
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio! Adicione alguns produtos.');
        return;
    }

    // Prepare WhatsApp message
    const message = encodeURIComponent(
        `Olá! Gostaria de finalizar meu pedido da Lucas Imports:\n\n` +
        `Itens do pedido:\n${cart.map(item => `- ${item.name} (Qtd: ${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`).join('\n')}\n\n` +
        `Total: R$ ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2).replace('.', ',')}\n\n` +
        `Local de entrega: Londrina e região\n` +
        `Por favor, confirme a disponibilidade e o prazo de entrega.`
    );

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/5543984866569?text=${message}`;
    window.open(whatsappUrl, '_blank');
});

// Show notification
function showNotification(message) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.backgroundColor = 'var(--laranja)';
    notification.style.color = 'var(--branco)';
    notification.style.padding = '1rem';
    notification.style.borderRadius = '4px';
    notification.style.position = 'fixed';
    notification.style.top = '1rem';
    notification.style.right = '1rem';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}