document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll('.menu-item');
  const cartItems = document.querySelector('.cart-items');
  const totalPrice = document.querySelector('.total-price');
  const payOnlineBtn = document.querySelector('.pay-online-btn');
  const paymentModal = document.getElementById('paymentModal');
  const closeModalBtn = document.querySelector('.close');
  const processPaymentBtn = document.querySelector('.process-payment');

  let cart = [];

  menuItems.forEach(item => {
    const addToCartBtn = item.querySelector('.add-to-cart');
    const itemId = item.dataset.id;
    const itemName = item.querySelector('h3').textContent;
    const itemPrice = parseFloat(item.querySelector('.price').textContent.slice(4));  

    addToCartBtn.addEventListener('click', function () {
      addToCart(itemId, itemName, itemPrice);
      updateCart();
    });
  });

  payOnlineBtn.addEventListener('click', function () {
    if (cart.length > 0) {
      openModal();
    } else {
      alert('Your cart is empty. Add items before proceeding to payment.');
    }
  });

  closeModalBtn.addEventListener('click', closeModal);

  processPaymentBtn.addEventListener('click', function () {
     
    alert('Processing payment...');
    closeModal();
  });

  function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
  }

  function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span>${item.name} x${item.quantity}</span><span>LKR ${formatPrice(item.price * item.quantity)}</span>`;
      cartItems.appendChild(listItem);
      total += item.price * item.quantity;
    });

    totalPrice.textContent = `Total: LKR ${formatPrice(total)}`;
  }

  function openModal() {
    paymentModal.style.display = 'block';
  }

  function closeModal() {
    paymentModal.style.display = 'none';
  }

  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format(price);
  }
});
