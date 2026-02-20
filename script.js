// Restaurant data with logo and food images
const restaurants = {
  // Existing restaurants
  kips: {
    name: 'KIPS',
    logo: 'images/kips-logo.png',
    icon: 'fa-utensils',
    menu: [
      { name: 'Egg Roll', price: 10300, popular: true, image: 'images/egg-roll.jpg' },
      { name: '1 Fried Chicken & Chips', price: 9270, popular: true, image: 'images/fried-chicken.jpg' },
      { name: 'Chips & Sausage', price: 11330, popular: true, image: 'images/chips-sausage.jpg' },
      { name: 'Chips & Eggs', price: 7210, popular: true, image: 'images/chips-eggs.jpg' },
      { name: 'Chicken Piece', price: 5665, popular: true, image: 'images/chicken-piece.jpg' },
      { name: 'Nsima & Chambo', price: 20600, popular: true, image: 'images/nsima-chambo.jpg' },
      { name: '1 Chicken Stew & Nsima', price: 10300, popular: true, image: 'images/nsima-chicken stew.jpg' },
      { name: '1 Beef Stew & Nsima', price: 11330, popular: true, image: 'images/beef-stew.jpg' },
      { name: 'Sausage', price: 5665, popular: true, image: 'images/sausage.jpg' },
      { name: 'Beef Samosas', price: 1751, popular: true, image: 'images/beef-samosas.jpg' },
      { name: 'Burger', price: 10300, popular: true, image: 'images/burger.jpg' },
      { name: 'Delicious Burger', price: 13390, popular: true, image: 'images/delicious-burger.jpg' },
      { name: 'Large Pizza', price: 38000, popular: true, image: 'images/large-pizza.jpg' },
      { name: 'Medium Pizza', price: 34000, popular: true, image: 'images/medium-pizza.jpg' },
      { name: 'Small Pizza', price: 28000, popular: true, image: 'images/small-pizza.jpg' },
      { name: 'Ice Cream', price: 4000, popular: true, image: 'images/ice-cream.jpg' },
      { name: 'Egg Sandwich', price: 7210, image: 'images/egg-sandwich.jpg' },
      { name: 'Club Sandwich', price: 16480, popular: true, image: 'images/club-sandwich.jpg' },
    ]
  },
  bellas: {
    name: "Bella's Food Court",
    logo: 'images/bellas-logo.png',
    icon: 'fa-burger',
    menu: [
      { name: 'Chicken Burger', price: 13500, popular: true, image: 'images/chicken-burger.jpg' },
      { name: 'Classic Burger', price: 11500, popular: true, image: 'images/classic-burger.jpg' },
      { name: 'Chips & Chicken', price: 15000, popular: true, image: 'images/chips-chicken.jpg' },
      { name: 'Chicken Pizza', price: 25000, popular: true, image: 'images/chicken-pizza.jpg' },
      { name: 'Surpreme Pizza', price: 24000, popular: true, image: 'images/surpreme-pizza.jpg' },
      { name: 'Hawaiian Pizza', price: 28500, popular: true, image: 'images/hawaiian-pizza.jpg' },
      { name: 'Veggie Pizza', price: 21500, popular: true, image: 'images/Veggie-pizza.jpg' },
      { name: 'Meat Lovers', price: 29000, popular: true, image: 'images/meat-lovers.jpg' },
      { name: 'T-bone Steak(Chips/Rice)', price: 14000, popular: true, image: 'images/t-bone-steak.jpg' },
      { name: 'Local Chicken(Nsima/Rice)', price: 12000, popular: true, image: 'images/local-chicken.jpg' },
      { name: 'Chambo(Rice/Nsima)', price: 19000, popular: true, image: 'images/chambo.jpg' },
      { name: 'Grilled Chicken(Chips/Rice)', price: 13500, popular: true, image: 'images/grilled-chicken.jpg' },
      { name: 'Batala(/Rice/Chips)', price: 19000, popular: true, image: 'images/batala.jpg' },
      { name: 'Beef Stir Fry', price: 14000, popular: true, image: 'images/beef-stir-fry.jpg' },
      { name: 'Samosas', price: 9500, popular: true, image: 'images/samosas.jpg' },
      { name: 'Sausages', price: 3000, popular: true, image: 'images/sausages.jpg' },
      { name: 'Chicken Wings', price: 10000, popular: true, image: 'images/chicken-wings.jpg' },
    ]
  },
  galitos: {
    name: 'Galitos',
    logo: 'images/galitos-logo.png',
    icon: 'fa-fire',
    menu: [
      { name: 'Grilled Chicken', price: 12500, popular: true, image: 'images/grilled-chicken.jpg' },
      { name: '18 Grilled Chicken', price: 72000, popular: true, image: 'images/grilled-chicken.jpg' },
      { name: '12 Grilled Chicken', price: 56000, popular: true, image: 'images/grilled-chicken.jpg' },
      { name: '6 Grilled Chicken', price: 31000, popular: true, image: 'images/grilled-chicken.jpg' },
      { name: 'Chicken + Chips', price: 20000, popular: true, image: 'images/chicken-chips.jpg' },
      { name: '12 Chicken Pieces + Large Chips', price: 61000, popular: true, image: 'images/chicken-chips.jpg' },
      { name: '6 Chicken + Large Chips', price: 37500, popular: true, image: 'images/chicken-chips.jpg' },
      { name: '3 Pieces of Chicken + Chips', price: 25000, popular: true, image: 'images/chicken-chips.jpg' },
      { name: 'Chicken + Rice', price: 21000, popular: true, image: 'images/chicken-rice.jpg' },
      { name: 'Chicken + Chips + Coleslaw', price: 24500, popular: true, image: 'images/chicken-chips-coleslaw.jpg' },
      { name: 'Plain Chips', price: 9000, popular: true, image: 'images/plain-chips.jpg' },
      { name: 'Masala Chips', price: 11000, popular: true,  image: 'images/masala-chips.jpg' },
      { name: 'Chicken Burger', price: 20000, popular: true,  image: 'images/chicken-burger.jpg' },
      { name: 'Chicken Burger + Cheese', price: 21500, popular: true,  image: 'images/chicken burger-cheese.jpg' },
      { name: 'Chicken Burger + Chips', price: 25000, popular: true,  image: 'images/chicken burger-chips.jpg' },
      { name: 'Chicken Burger + Cheese + Chips', price: 27500, popular: true,  image: 'images/chicken burger-cheese-chips.jpg' },
      { name: '300ml Coke', price: 2700, popular: true,  image: 'images/coke.jpg' },
      { name: '300ml Water', price: 2300, popular: true,  image: 'images/water.jpg' },
      { name: 'Chilli Bean', price: 8000, popular: true,  image: 'images/chilli-bean.jpg' },
      { name: 'Coleslaw', price: 7000, popular: true,  image: 'images/coleslaw.jpg' },
      { name: 'Spicy Rice', price: 9000, popular: true,  image: 'images/spicy-rice.jpg' },
    ]
  },
  kwithu: {
    name: 'Kwithu Coffee Den',
    logo: 'images/kwithu-coffee-den-logo.png.',
    icon: 'fa-mug-hot',
    menu: [
      { name: 'Kwithu Breakfast', price: 17000, popular: true, image: 'images/kwithu-breakfast.jpg' },
      { name: 'Beef Burger', price: 19000, popular: true, image: 'images/beef-burger.jpg' },
      { name: 'Cheese Beef Burger', price: 21000, popular: true, image: 'images/cheese-beef-burger.jpg' },
      { name: 'Chicken Burger', price: 15500, popular: true, image: 'images/chicken-burger.jpg' },
      { name: 'Chicken Sandwish', price: 14000, popular: true, image: 'images/chicken-sandwish.jpg' },
      { name: 'Steak Sandwish', price: 18000, popular: true, image: 'images/steak-sandwish.jpg' },
      { name: 'Chicken Wrap', price: 16300, popular: true,  image: 'images/chicken-wrap.jpg' },
      { name: 'Beef Wrap', price: 19000, popular: true, image: 'images/beef-wrap.jpg' },
      { name: 'Grilled Chicken', price: 17000, popular: true, image: 'images/grilled chicken.jpg' },
      { name: 'T-bone steak', price: 25000, popular: true, image: 'images/t-bone steak.jpg' },
      { name: 'Small Pizza(BBQ Beef)', price: 22000, popular: true,  image: 'images/small-pizza(BBQ Beef).jpg' },
      { name: 'Small Pizza(Chicken)', price: 20000, popular: true, image: 'images/small pizza(chicken).jpg' },
      { name: 'small Pizza(Vegetarian)', price: 25000, popular: true, image: 'images/small pizza(vegetarian).jpg' },
      { name: 'Medium Pizza(BBQ Beef)', price: 27000, popular: true, image: 'images/medium pizza(BBQ Beef).jpg' },
      { name: 'Medium Pizza(Chicken)', price: 6000, popular: true,  image: 'images/medium pizza(chicken).jpg' },
      { name: 'Medium Pizza(Vegetarian)', price: 28000, popular: true, image: 'images/medium pizza(vegetarian).jpg' },
      { name: 'Large Pizza(BBQ Beef)', price: 32000, popular: true, image: 'images/large pizza(BBQ beef).jpg' },    
      { name: 'Large Pizza(Chicken)', price: 32000, popular: true,  image: 'images/large pizza(chicken).jpg' },
      { name: 'Large Pizza(Vegetarian)', price: 30000, popular: true,  image: 'images/large pizza(vegetarian).jpg' },
      { name: 'Sticky Wings', price: 19000, popular: true, image: 'images/sticky-wings.jpg' },
      { name: 'Samosa', price: 3000, image: 'images/samosa.jpg' },
      { name: 'Sausage', price: 3000, image: 'images/sausage.jpg' },
      { name: 'Doughnuts', price: 1800, image: 'images/doughnuts.jpg' },
      { name: 'Chocolate Doughnuts', price: 3500, image: 'images/chocolate-doughnuts.jpg' },
      { name: 'Eag & Toast', price: 65000, image: 'images/egg-toast.jpg' },
      { name: 'Club Sandwich', price: 12000, image: 'images/club-sandwich.jpg' },
    ]
  },

  // ----- NEW RESTAURANTS -----
  chickenLitos: {
    name: 'Chicken Litos',
    logo: 'images/chicken-litos-logo.png',
    icon: 'fa-drumstick-bite',
    menu: [
      { name: 'Litos 2pc Chicken', price: 14500, popular: true, image: 'images/litos-2pc.jpg' },
      { name: 'Litos 4pc Chicken', price: 26000, popular: true, image: 'images/litos-4pc.jpg' },
      { name: 'Chicken Burger', price: 11000, popular: true,  image: 'images/litos-burger.jpg' },
    ]
  },
  laCriso: {
    name: 'La Criso Eatery',
    logo: 'images/la-criso-logo.png',
    icon: 'fa-utensil-spoon',
    menu: [
      { name: 'Beef Stew with Rice', price: 16000, popular: true, image: 'images/beef-stew.jpg' },
      { name: 'Grilled Fish with Chips', price: 18500, image: 'images/grilled-fish.jpg' },
      { name: 'Chicken Curry with Nsima', price: 15000, image: 'images/chicken-curry.jpg' },
      { name: 'Vegetable Stir Fry', price: 12000, image: 'images/veg-stirfry.jpg' },
      { name: 'Chapati (2pcs)', price: 3000, image: 'images/chapati.jpg' },
      { name: 'Fresh Juice (Mango)', price: 5000, image: 'images/mango-juice.jpg' }
    ]
  },
  meatzone: {
    name: 'Meat Zone',
    logo: 'images/meat-zone-logo.png',
    icon: 'fa-bolt',
    menu: [
      { name: 'Masala Chips', price: 6000, popular: true, image: 'images/masala-chips.jpg' },
      { name: 'Chips & Eggs', price: 6000, popular: true, image: 'images/.jpg' },
      { name: 'Peri Peri Wings', price: 12000, popular: true, image: 'images/.jpg' },
      { name: 'Chicken Wings', price: 17000, popular: true, image: 'images/.jpg' },
      { name: 'Grilled Chicken', price: 20000, popular: true, image: 'images/.jpg' },
      { name: 'Char-grilled Pork ribs', price: 18000, popular: true, image: 'images/.jpg' },
      { name: 'T-bone Steak', price: 16000, popular: true, image: 'images/.jpg' },
      { name: 'Chambo(Fried/Open grilled)', price: 18000, popular: true, image: 'images/.jpg' },
      { name: 'Mac & Cheese', price: 16000, popular: true, image: 'images/.jpg' },
      { name: 'Batala(medium)', price: 14000, popular: true, image: 'images/.jpg' },
      { name: 'Batala(large)', price: 16500, popular: true, image: 'images/.jpg' },
      { name: 'Stir-Fried Beef', price: 9500, popular: true, image: 'images/.jpg' },
    ]
  },
}

// State
let currentResto = 'kips';
let cart = [];

// DOM elements
const restoTabs = document.getElementById('restoTabs');
const menuGrid = document.getElementById('menuGrid');
const cartContainer = document.getElementById('cartItemsContainer');
const subtotalSpan = document.getElementById('subtotal');
const totalSpan = document.getElementById('total');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const heroWhatsAppBtn = document.getElementById('heroWhatsAppBtn');

// Helper: format money
const formatMoney = (amount) => 'MK ' + amount.toLocaleString('en-MW');

// Render restaurant tabs
function renderTabs() {
  let html = '';
  for (const [key, resto] of Object.entries(restaurants)) {
    const activeClass = key === currentResto ? 'active' : '';
    html += `<div class="resto-tab ${activeClass}" data-resto="${key}"><i class="fas ${resto.icon}"></i> ${resto.name}</div>`;
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
        <div class="menu-img"><i class="fas ${resto.icon}"></i></div>
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