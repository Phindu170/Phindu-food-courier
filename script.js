// Restaurant data with logo and food images
const restaurants = {
  // Existing restaurants
  kips: {
    name: 'KIPS',
    logo: 'images/kips-logo.jpg',
    icon: 'fa-utensils',
    menu: [
      { name: 'Egg Roll', price: 10300, popular: true, image: 'images/egg-roll.jpg' },
      { name: '1 Fried Chicken & Chips', price: 9270, popular: true, image: 'images/1-chicken-chips.png' },
      { name: 'Chips & Sausage', price: 11330, popular: true, image: 'images/sausage-chips.jpg' },
      { name: 'Chips & Eggs', price: 7210, popular: true, image: 'images/chips-eggs.jpg' },
      { name: 'Chicken Piece', price: 5665, popular: true, image: 'images/kips-chicken.png' },
      { name: 'Nsima & Chambo', price: 20600, popular: true, image: 'images/delicious-meals-chambo-nsima.jpg' },
      { name: '1 Chicken Stew & Chips', price: 10300, popular: true, image: 'images/fried chicken-chips.jpg' },
      { name: '1 Beef Stew & Chips', price: 11330, popular: true, image: 'images/beef-stew-chips.jpg' },
      { name: 'Sausage', price: 5665, popular: true, image: 'images/sausage.webp' },
      { name: 'Beef Samosas', price: 1751, popular: true, image: 'images/beef-samosa.png' },
      { name: 'Burger', price: 10300, popular: true, image: 'images/burger.png' },
      { name: 'Delicious Burger', price: 13390, popular: true, image: 'images/beef-burger.jpg' },
      { name: 'Large Pizza', price: 38000, popular: true, image: 'images/large-pizza.png' },
      { name: 'Medium Pizza', price: 34000, popular: true, image: 'images/medium-pizza.png' },
      { name: 'Small Pizza', price: 28000, popular: true, image: 'images/small-pizza.png' },
      { name: 'Egg Sandwich', price: 7210, image: 'images/egg-cheese-sandwich.jpg' },
      { name: 'Club Sandwich', price: 16480, popular: true, image: 'images/club-sandwich.webp' },
    ]
  },
  bellas: {
    name: "Bella's Food Court",
    logo: 'images/bellas-logo.jpg',
    icon: 'fa-burger',
    menu: [
      { name: 'Chicken Burger', price: 13500, popular: true, image: 'images/chicken-cheese-burger.png' },
      { name: 'Classic Burger', price: 11500, popular: true, image: 'images/chicken-burger.png' },
      { name: 'Chips & Chicken', price: 15000, popular: true, image: 'images/chips-chicken.jpg' },
      { name: 'Chicken Pizza', price: 25000, popular: true, image: 'images/large-pizza.png' },
      { name: 'Surpreme Pizza', price: 24000, popular: true, image: 'images/surpreme-pizza.jpg' },
      { name: 'Hawaiian Pizza', price: 28500, popular: true, image: 'images/hawaiian-pizza.jpg' },
      { name: 'Veggie Pizza', price: 21500, popular: true, image: 'images/medium-pizza.png' },
      { name: 'Meat Lovers', price: 29000, popular: true, image: 'images/pizza.jpg' },
      { name: 'T-bone Steak(Chips/Rice)', price: 14000, popular: true, image: 'images/grilled-t-bone-steak-fried-chips.jpg' },
      { name: 'Local Chicken(Nsima/Rice)', price: 12000, popular: true, image: 'images/local-rice-chicken.jpg' },
      { name: 'Chambo(Rice/Nsima)', price: 19000, popular: true, image: 'images/nsima-chambo.jpg' },
      { name: 'Grilled Chicken(Chips/Rice)', price: 13500, popular: true, image: 'images/grilled-chicken-chips.webp' },
      { name: 'Beef Stir Fry', price: 14000, popular: true, image: 'images/steak-stir-fry-2.jpg' },
      { name: 'Samosas', price: 9500, popular: true, image: 'images/samosas.png' },
      { name: 'Sausages', price: 3000, popular: true, image: 'images/sausage.webp' },
      { name: 'Chicken Wings', price: 10000, popular: true, image: 'images/grilled-chicken-wings.png' },
    ]
  },
  galitos: {
    name: 'Galitos',
    logo: 'images/galitos-logo.jpg',
    icon: 'fa-fire',
    menu: [
      { name: 'Grilled Chicken', price: 12500, popular: true, image: 'images/grilled-chicken.png' },
      { name: '18 Grilled Chicken', price: 72000, popular: true, image: 'images/grilled-bbq-chicken-15.jpg' },
      { name: '12 Grilled Chicken', price: 56000, popular: true, image: 'images/baked-bbq-chicken-23.jpg' },
      { name: '6 Grilled Chicken', price: 31000, popular: true, image: 'images/grilled-bbq-chicken.jpg' },
      { name: 'Chicken + Chips', price: 20000, popular: true, image: 'images/grilled-chicken-chips.webp' },
      { name: '12 Chicken Pieces + Large Chips', price: 61000, popular: true, image: 'images/peri-peri-chicken-chips.jpg' },
      { name: '6 Chicken + Large Chips', price: 37500, popular: true, image: 'images/chips-chicken.jpg' },
      { name: '3 Pieces of Chicken + Chips', price: 25000, popular: true, image: 'images/oven-baked-barbecued-chicken-7-2.jpg' },
      { name: 'Chicken + Rice', price: 21000, popular: true, image: 'images/honey-roasted-chicken-rice.jpg' },
      { name: 'Chicken + Chips + Coleslaw', price: 24500, popular: true, image: 'images/chips-chicken-coleslaw.png' },
      { name: 'Plain Chips', price: 9000, popular: true, image: 'images/plain-chips.png' },
      { name: 'Masala Chips', price: 11000, popular: true,  image: 'images/masala-chips.jpg' },
      { name: 'Chicken Burger', price: 20000, popular: true,  image: 'images/chicken-cheese-burger.png' },
      { name: 'Chicken Burger + Cheese', price: 21500, popular: true,  image: 'images/chicken-burger.png' },
      { name: 'Chicken Burger + Chips', price: 25000, popular: true,  image: 'images/chicken-burger-chips.jpg' },
      { name: 'Chicken Burger + Cheese + Chips', price: 27500, popular: true,  image: 'images/delicious-cheese-burger.jpg' },
      { name: '300ml Coke', price: 2700, popular: true,  image: 'images/300ml-coke.jpg' },
      { name: '300ml Water', price: 2300, popular: true,  image: 'images/300ml-water.png' },
      { name: 'Chilli Beans', price: 8000, popular: true,  image: 'images/chilli-beans.jpg' },
      { name: 'Coleslaw', price: 7000, popular: true,  image: 'images/kfc-coleslaw.jpg' },
      { name: 'Spicy Rice', price: 9000, popular: true,  image: 'images/spicy-rice.png' },
    ]
  },
  kwithu: {
    name: 'Kwithu Coffee Den',
    logo: 'images/kwithu-logo.jpg',
    icon: 'fa-mug-hot',
    menu: [
      { name: 'Kwithu Breakfast', price: 17000, popular: true, image: 'images/kwithu-breakfast.png' },
      { name: 'Beef Burger', price: 19000, popular: true, image: 'images/beef-cheese-burger.jpg' },
      { name: 'Cheese Beef Burger', price: 21000, popular: true, image: 'images/bourbon-basted-cheese-burger-2.jpg' },
      { name: 'Chicken Burger', price: 15500, popular: true, image: 'images/chicken-cheese-burger.png' },
      { name: 'Chicken Sandwish', price: 14000, popular: true, image: 'images/chicken-sandwich.jpg' },
      { name: 'Steak Sandwish', price: 18000, popular: true, image: 'images/steak-sandwich.jpg' },
      { name: 'Chicken Wrap', price: 16300, popular: true,  image: 'images/chicken-wrap.png' },
      { name: 'Beef Wrap', price: 19000, popular: true, image: 'images/beef-wrap.png' },
      { name: 'Grilled Chicken', price: 17000, popular: true, image: 'images/grilled-chicken-2.png' },
      { name: 'T-bone steak', price: 25000, popular: true, image: 'images/t-bone-steak-bbq.png' },
      { name: 'Small Pizza(BBQ Beef)', price: 22000, popular: true,  image: 'images/pizza.jpg' },
      {name: 'Small Pizza(Chicken)', price: 20000, popular: true, image: 'images/large-pizza.png' },
      { name: 'small Pizza(Vegetarian)', price: 25000, popular: true, image: 'images/medium-pizza.png' },
      { name: 'Medium Pizza(BBQ Beef)', price: 27000, popular: true, image: 'images/pizza.jpg' },
      { name: 'Medium Pizza(Chicken)', price: 25000, popular: true, image: 'images/large-pizza.png' },
      { name: 'Medium Pizza(Vegetarian)', price: 28000, popular: true, image: 'images/medium-pizza.png' },
      { name: 'Large Pizza(BBQ Beef)', price: 32000, popular: true, image: 'images/pizza.jpg' },    
      { name: 'Large Pizza(Chicken)', price: 32000, popular: true,  image: 'images/large-pizza.png' },
      { name: 'Large Pizza(Vegetarian)', price: 30000, popular: true,  image: 'images/medium-pizza.png' },
      { name: 'Sticky Wings', price: 19000, popular: true, image: 'images/sticky-chicken- wings.png' },
      { name: 'Samosa', price: 3000, image: 'images/samosas.png' },
      { name: 'Sausage', price: 3000, image: 'images/sausage.webp' },
      { name: 'Doughnuts', price: 1800, image: 'images/doughnuts.jpg' },
      { name: 'Chocolate Doughnuts', price: 3500, image: 'images/chocolate-doughnuts.jpg' },
      { name: 'Eag & Toast', price: 65000, image: 'images/egg-toast.jpg' },
      { name: 'Club Sandwich', price: 12000, image: 'images/club-sandwich.webp' },
    ]
  },

  // ----- NEW RESTAURANTS -----
  chickenLitos: {
    name: 'Chicken Litos',
    logo: 'images/chicken-litos-logo.jpg',
    icon: 'fa-drumstick-bite',
    menu: [
      { name: 'Litos Chips & 1 Chicken', price: 10000, popular: true, image: 'images/1-chicken-chips.png' },
      { name: 'Litos 3pc Chicken', price: 24000, popular: true, image: 'images/kips-chicken.png' },
      { name: 'Chicken Burger', price: 15000, popular: true,  image: 'images/chicken-cheese-burger.png' },
      { name: 'Large Pizza', price: 38000, popular: true, image: 'images/large-pizza.png' },
      { name: 'Medium Pizza', price: 34000, popular: true, image: 'images/medium-pizza.png' },
      { name: 'Small Pizza', price: 28000, popular: true, image: 'images/pizza.jpg' },
      { name: 'Egg Sandwich', price: 7210, image: 'images/egg-cheese-sandwich.jpg' },
      { name: 'Club Sandwich', price: 16480, popular: true, image: 'images/club-sandwich.webp' },
      { name: 'Chilli Beans', price: 8000, popular: true,  image: 'images/chilli-beans.jpg' },
      { name: 'Coleslaw', price: 7000, popular: true,  image: 'images/coleslaw.png' },
      { name: 'Spicy Rice', price: 9000, popular: true,  image: 'images/spicy-rice.png' },
    ]
  },
  meatzone: {
    name: 'Meat Zone',
    logo: 'images/meat zone-logo.jpg',
    icon: 'fa-bolt',
    menu: [
      { name: 'Masala Chips', price: 6000, popular: true, image: 'images/masala-chips.jpg' },
      { name: 'Chips & Eggs', price: 9000, popular: true, image: 'images/chips-eggs.jpg' },
      { name: 'Peri Peri Wings', price: 12000, popular: true, image: 'images/grilled-chicken-wings.png' },
      { name: 'Chicken Wings', price: 17000, popular: true, image: 'images/grilled-chicken-wings.png' },
      { name: 'Grilled Chicken', price: 20000, popular: true, image: 'images/grilled-bbq-chicken-15.jpg' },
      { name: 'Char-grilled Pork ribs', price: 18000, popular: true, image: 'images/tangy-spicy-grilled-ribs.jpg' },
      { name: 'T-bone Steak', price: 16000, popular: true, image: 'images/t-bone-steak-bbq.png' },
      { name: 'Nsima & Chambo', price: 18000, popular: true, image: 'images/nsima-chambo.jpg' },
      { name: 'Stir-Fried Beef', price: 9500, popular: true, image: 'images/steak-stir-fry-2.jpg' },
      { name: 'Chicken Sandwish', price: 14000, popular: true, image: 'images/chicken-sandwich.jpg' },
      { name: 'Steak Sandwish', price: 18000, popular: true, image: 'images/steak-sandwich.jpg' },
      { name: 'Chicken Wrap', price: 16300, popular: true,  image: 'images/chicken-wrap.png' },
      { name: 'Beef Wrap', price: 19000, popular: true, image: 'images/beef-wrap.png' },
      { name: 'Eag & Toast', price: 65000, image: 'images/egg-toast.jpg' },
      { name: 'Club Sandwich', price: 12000, image: 'images/club-sandwich.webp' },
    ]
  },
}

// State
let currentResto = 'kips';
let cart = [];

// DOM elements – main ordering
const restoTabs = document.getElementById('restoTabs');
const menuGrid = document.getElementById('menuGrid');
const cartContainer = document.getElementById('cartItemsContainer');
const subtotalSpan = document.getElementById('subtotal');
const totalSpan = document.getElementById('total');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const heroWhatsAppBtn = document.getElementById('heroWhatsAppBtn');
const clearCartBtn = document.getElementById('clearCartBtn');

// Format money
const formatMoney = (amount) => 'MK ' + amount.toLocaleString('en-MW');

// Render restaurant tabs
function renderTabs() {
  let html = '';
  for (const [key, resto] of Object.entries(restaurants)) {
    const activeClass = key === currentResto ? 'active' : '';
    html += `<div class="resto-tab ${activeClass}" data-resto="${key}">
     <img class="logo-img" src="${resto.logo}" alt="${resto.name}"
             onerror="this.src='https://placehold.co/60x60/c73d2c/white?text=${resto.name.charAt(0)}';">
        <span>${resto.name}</span>
        </div>
        `;
  }
  restoTabs.innerHTML = html;

  // Add click listeners
  document.querySelectorAll('.resto-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const newResto = tab.dataset.resto;
      if (newResto === currentResto) return;
      currentResto = newResto;
      cart = []; // clear cart when switching restaurants
      renderTabs();
      renderMenu();
      renderCart();
    });
  });
}

// Render menu based on current restaurant
function renderMenu() {
  const resto = restaurants[currentResto];
  let menuHtml = '';
  resto.menu.forEach((item, index) => {
    const popularTag = item.popular ? '<span class="popular-tag">🔥 popular</span>' : '';
    menuHtml += `
      <div class="menu-card">
          ${popularTag}
        <div class="menu-img">
          <img src="${item.image}" alt="${item.name}"
               onerror="this.src='https://placehold.co/100x100/orange/white?text=${item.name.substring(0,3)}';">
        </div>
        <h3>${item.name}</h3>
        <div class="menu-price"><small>MK</small> ${item.price.toLocaleString()}</div>
        <div class="qty-add">
          <input type="number" min="1" value="1" class="item-qty" id="qty-${currentResto}-${index}">
          <button class="add-btn" data-name="${item.name}" data-price="${item.price}"><i class="fas fa-cart-plus"></i> Add</button>
        </div>
      </div>
    `;
  });
  menuGrid.innerHTML = menuHtml;

  // Attach add-to-cart listeners
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price, 10);
      const card = btn.closest('.menu-card');
      const qtyInput = card.querySelector('.item-qty');
      let qty = parseInt(qtyInput.value, 10);
      if (isNaN(qty) || qty < 1) qty = 1;
      addToCart(name, price, qty);
      qtyInput.value = 1;
    });
  });
}

// Cart functions
function addToCart(name, price, qty) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ name, price, quantity: qty });
  }
  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartContainer.innerHTML = '<div style="text-align: center; color: #b9a99b; padding: 1.2rem;">Your cart is empty</div>';
    subtotalSpan.innerText = formatMoney(0);
    totalSpan.innerText = formatMoney(0);
    return;
  }

  let html = '';
  let subtotal = 0;
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    html += `
      <div class="cart-item" data-name="${item.name}">
        <div class="cart-item-left">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-detail">${item.quantity} × ${formatMoney(item.price)}</span>
        </div>
        <div class="cart-item-right">
          <span class="cart-item-price">${formatMoney(itemTotal)}</span>
          <button class="remove-item" data-name="${item.name}" title="remove"><i class="fas fa-trash-can"></i></button>
        </div>
      </div>
    `;
  });
  cartContainer.innerHTML = html;
  subtotalSpan.innerText = formatMoney(subtotal);
  totalSpan.innerText = formatMoney(subtotal);

  // Remove buttons
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = btn.dataset.name;
      cart = cart.filter(item => item.name !== name);
      renderCart();
    });
  });
}

// Clear entire cart
clearCartBtn.addEventListener('click', () => {
  if (cart.length > 0) {
    cart = [];
    renderCart();
  }
});

// WhatsApp order
function buildWhatsAppOrder() {
  const name = document.getElementById('customerName').value.trim() || 'Customer';
  const location = document.getElementById('customerLocation').value.trim() || 'Mzuzu';
  const phone = document.getElementById('customerPhone').value.trim() || 'not provided';

  let message = `🍽️ *Phindu Food Courier order* (${restaurants[currentResto].name})%0A%0A`;
  if (cart.length === 0) {
    message += `(no items yet)%0A`;
  } else {
    cart.forEach(item => {
      message += `• ${item.name} x${item.quantity} = ${formatMoney(item.price * item.quantity)}%0A`;
    });
  }
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  message += `%0A*Subtotal:* ${formatMoney(subtotal)}%0A`;
  message += `*Name:* ${name}%0A*Location:* ${location}%0A*Phone:* ${phone}`;
  return message;
}

function openWhatsApp() {
  const text = buildWhatsAppOrder();
  window.open(`https://wa.me/265881006198?text=${text}`, '_blank');
}

// Event listeners for WhatsApp buttons
placeOrderBtn.addEventListener('click', openWhatsApp);
heroWhatsAppBtn.addEventListener('click', openWhatsApp);

// Initial render
renderTabs();
renderMenu();
renderCart();