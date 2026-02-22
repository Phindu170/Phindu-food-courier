// Restaurant data with logo and food images
const restaurants = {
  // Existing restaurants
  kips: {
    name: 'KIPS',
    logo: 'food pictures/1771443113986.jpg',
    icon: 'fa-utensils',
    menu: [
      { name: 'Egg Roll', price: 10300, popular: true, image: 'food pictures/maxresdefault.jpg' },
      { name: '1 Fried Chicken & Chips', price: 9270, popular: true, image: 'food pictures/1-Chicken-chips.png' },
      { name: 'Chips & Sausage', price: 11330, popular: true, image: 'food pictures/sandc.jpg' },
      { name: 'Chips & Eggs', price: 7210, popular: true, image: 'food pictures/eggsHOR-11.png' },
      { name: 'Chicken Piece', price: 5665, popular: true, image: 'food pictures/Fried-Chicken-Crispy-Fried-Poultry.png' },
      { name: 'Nsima & Chambo', price: 20600, popular: true, image: 'food pictures/Delicious-meals-Chambo-and-nsima.jpg' },
      { name: '1 Chicken Stew & Chips', price: 10300, popular: true, image: 'food pictures/IMG_20260220_180207.jpg' },
      { name: '1 Beef Stew & Rice', price: 11330, popular: true, image: 'food pictures/beef-stew-mixed-vegetables-chips-goulash-delicious-rich-brown-gravy-fried-potato-viewed-high-angle-white-62836229-2.jpg' },
      { name: 'Sausage', price: 5665, popular: true, image: 'food pictures/WM-Cooked-Sausage-8001-jpg-720x540.webp' },
      { name: 'Beef Samosas', price: 1751, popular: true, image: 'food pictures/Gemini_Generated_Image_h7q5egh7q5egh7q5-1024x559.png' },
      { name: 'Burger', price: 10300, popular: true, image: 'food pictures/pngwing.com (9).png' },
      { name: 'Delicious Burger', price: 13390, popular: true, image: 'food pictures/pngwing.com (10).png' },
      { name: 'Large Pizza', price: 38000, popular: true, image: 'food pictures/pngwing.com (2).png.' },
      { name: 'Medium Pizza', price: 34000, popular: true, image: 'food pictures/pngwing.com (3).png' },
      { name: 'Small Pizza', price: 28000, popular: true, image: 'food pictures/pngwing.com (1).png' },
      { name: 'Egg Sandwich', price: 7210, image: 'food pictures/Epic-Egg-and-Cheese-Sandwich-Hero-Image.jpg' },
      { name: 'Club Sandwich', price: 16480, popular: true, image: 'food pictures/club_sandwich_16496_16x9.jpg.webp' },
    ]
  },
  bellas: {
    name: "Bella's Food Court",
    logo: 'food pictures/1771435492940.jpg',
    icon: 'fa-burger',
    menu: [
      { name: 'Chicken Burger', price: 13500, popular: true, image: 'food pictures/pngwing.com (9).png' },
      { name: 'Classic Burger', price: 11500, popular: true, image: 'food pictures/pngwing.com (11).png' },
      { name: 'Chips & Chicken', price: 15000, popular: true, image: 'food pictures/pngtree-delicious-fried-chicken-and-chips-png-image_15480010.png' },
      { name: 'Chicken Pizza', price: 25000, popular: true, image: 'food pictures/What-is-medium-size-pizza.webp' },
      { name: 'Surpreme Pizza', price: 24000, popular: true, image: 'food pictures/46400_traditional_pizza_pan_02_e-1.jpg' },
      { name: 'Hawaiian Pizza', price: 28500, popular: true, image: 'food pictures/Easy-Hawaiian-Pizza-Recipe-Image-F.jpg' },
      { name: 'Veggie Pizza', price: 21500, popular: true, image: 'food pictures/pngwing.com (1).png' },
      { name: 'Meat Lovers', price: 29000, popular: true, image: 'food pictures/pngwing.com (3).png' },
      { name: 'T-bone Steak(Chips/Rice)', price: 14000, popular: true, image: 'food pictures/tasty-grilled-t-bone-steak-fried-potato-chips-barbecued-salad-greens-roasted-tomato-viewed-above-over-white-147895327-2.jpg' },
      { name: 'Local Chicken(Nsima/Rice)', price: 12000, popular: true, image: 'food pictures/9K8A8884-scaled.jpg' },
      { name: 'Chambo(Rice/Nsima)', price: 19000, popular: true, image: 'food pictures/Delicious-meals-Chambo-and-nsima.jpg' },
      { name: 'Grilled Chicken(Chips/Rice)', price: 13500, popular: true, image: 'food pictures/BBQ-1.webp' },
      { name: 'Beef Stir Fry', price: 14000, popular: true, image: 'food pictures/Pepper-Steak-Stir-Fry-2-1200x1200-1.jpg' },
      { name: 'Samosas', price: 9500, popular: true, image: 'food pictures/pngwing.com.png' },
      { name: 'Sausages', price: 3000, popular: true, image: 'food pictures/WM-Cooked-Sausage-8001-jpg-720x540.webp' },
      { name: 'Chicken Wings', price: 10000, popular: true, image: 'food pictures/pngwing.com (20).png' },
    ]
  },
  galitos: {
    name: 'Galitos',
    logo: 'food pictures/1771439694901.jpg',
    icon: 'fa-fire',
    menu: [
      { name: 'Grilled Chicken', price: 12500, popular: true, image: 'food pictures/pngwing.com (19).png' },
      { name: '18 Grilled Chicken', price: 72000, popular: true, image: 'food pictures/Grilled-BBQ-Chicken-15-of-18-500x500.jpg' },
      { name: '12 Grilled Chicken', price: 56000, popular: true, image: 'food pictures/baked-bbq-chicken-23.jpg' },
      { name: '6 Grilled Chicken', price: 31000, popular: true, image: 'food pictures/Grilled-BBQ-Chicken-18 (1).jpg' },
      { name: 'Chicken + Chips', price: 20000, popular: true, image: 'food pictures/IMG_20260220_180207.jpg' },
      { name: '12 Chicken Pieces + Large Chips', price: 61000, popular: true, image: 'food pictures/fried-chicken-french-fries-white-plate.jpg' },
      { name: '6 Chicken + Large Chips', price: 37500, popular: true, image: 'food pictures/fried-chicken-french-fries-white-plate.jpg' },
      { name: '3 Pieces of Chicken + Chips', price: 25000, popular: true, image: 'food pictures/pngtree-delicious-fried-chicken-and-chips-png-image_15480010.png' },
      { name: 'Chicken + Rice', price: 21000, popular: true, image: 'food pictures/sddefault.jpg' },
      { name: 'Chicken + Chips + Coleslaw', price: 24500, popular: true, image: 'food pictures/6eckoylcoqv51.jpg' },
      { name: 'Plain Chips', price: 9000, popular: true, image: 'food pictures/png-transparent-potato-fries-on-brown-paper-illustration-french-fries-fast-food-junk-food-buffalo-wing-frying-potato-chips-fried-foods-food-baking-chicken-meat-thumbnail.png' },
      { name: 'Masala Chips', price: 11000, popular: true,  image: 'food pictures/photo.jpg' },
      { name: 'Chicken Burger', price: 20000, popular: true,  image: 'food pictures/pngwing.com (16).png' },
      { name: 'Chicken Burger + Cheese', price: 21500, popular: true,  image: 'food pictures/pngwing.com (9).png' },
      { name: 'Chicken Burger + Chips', price: 25000, popular: true,  image: 'food pictures/vecteezy_crispy-and-delicious-burger-with-fries-and-ketchup-served-on_46768485.jpg' },
      { name: 'Chicken Burger + Cheese + Chips', price: 27500, popular: true,  image: 'food pictures/vecteezy_close-up-of-a-delicious-cheeseburger-with-french-fries-and_48159101.jpg' },
      { name: '300ml Coke', price: 2700, popular: true,  image: 'food pictures/download_6_addf3cc3-4df9-4d97-903a-32c6b34b63c6_1024x1024.jpg' },
      { name: '300ml Water', price: 2300, popular: true,  image: 'food pictures/pngwing.com (14).png' },
      { name: 'Chilli Bean', price: 8000, popular: true,  image: 'food pictures/vecteezy_black-bean-chili-with-sour-cream_72604476.jpg' },
      { name: 'Coleslaw', price: 7000, popular: true,  image: 'food pictures/KFC-Coleslaw-Recipe-A_fff_KFC-Coleslaw-Recipe14455_Features_4.jpg' },
      { name: 'Spicy Rice', price: 9000, popular: true,  image: 'food pictures/jollof-rice-isolated-on-transparent-background-free-png.png' },
    ]
  },
  kwithu: {
    name: 'Kwithu Coffee Den',
    logo: 'food pictures/1771443089350.jpg',
    icon: 'fa-mug-hot',
    menu: [
      { name: 'Kwithu Breakfast', price: 17000, popular: true, image: 'food pictures/ALX-L0317-Mediterranean-Bkfst-Fries_1000x1000_4594_0.jpg' },
      { name: 'Beef Burger', price: 19000, popular: true, image: 'food pictures/8667932-garlic-butter-burger-01-4x3-ccd6c1f3548b4aab83ae65dd4221bc7c.jpg' },
      { name: 'Cheese Beef Burger', price: 21000, popular: true, image: 'food pictures/Bourbon-basted-cheeseburger-2.jpg' },
      { name: 'Chicken Burger', price: 15500, popular: true, image: 'food pictures/pngwing.com (9).png' },
      { name: 'Chicken Sandwish', price: 14000, popular: true, image: 'food pictures/Rotisserie-Chicken-Sandwich-202-2000-485b673fe411460e95b512fbf805a5d9.jpg' },
      { name: 'Steak Sandwish', price: 18000, popular: true, image: 'food pictures/steak-sandwich-recipe-snippet-2.jpg' },
      { name: 'Chicken Wrap', price: 16300, popular: true,  image: 'food pictures/pngwing.com (6).png' },
      { name: 'Beef Wrap', price: 19000, popular: true, image: 'food pictures/pngwing.com (5).png' },
      { name: 'Grilled Chicken', price: 17000, popular: true, image: 'food pictures/pngwing.com (19).png' },
      { name: 'T-bone steak', price: 25000, popular: true, image: 'food pictures/T-bone-steak-Tierno-BBQuality-1-1000x1000.png' },
      { name: 'Small Pizza(BBQ Beef)', price: 22000, popular: true,  image: 'food pictures/pngwing.com (3).png' },
      {name: 'Small Pizza(Chicken)', price: 20000, popular: true, image: 'food pictures/What-is-medium-size-pizza.webp' },
      { name: 'small Pizza(Vegetarian)', price: 25000, popular: true, image: 'food pictures/pngwing.com (1).png' },
      { name: 'Medium Pizza(BBQ Beef)', price: 27000, popular: true, image: 'food pictures/pngwing.com (3).png' },
      { name: 'Medium Pizza(Chicken)', price: 25000, popular: true, image: 'food pictures/What-is-medium-size-pizza.webp' },
      { name: 'Medium Pizza(Vegetarian)', price: 28000, popular: true, image: 'food pictures/pngwing.com (1).png' },
      { name: 'Large Pizza(BBQ Beef)', price: 32000, popular: true, image: 'food pictures/pngwing.com (3).png' },    
      { name: 'Large Pizza(Chicken)', price: 32000, popular: true,  image: 'food pictures/What-is-medium-size-pizza.webp' },
      { name: 'Large Pizza(Vegetarian)', price: 30000, popular: true,  image: 'food pictures/pngwing.com (1).png' },
      { name: 'Sticky Wings', price: 19000, popular: true, image: 'food pictures/—Pngtree—plate of crispy chicken wings_23667534.png' },
      { name: 'Samosa', price: 3000, image: 'food pictures/pngwing.com.png' },
      { name: 'Sausage', price: 3000, image: 'food pictures/WM-Cooked-Sausage-8001-jpg-720x540.webp' },
      { name: 'Doughnuts', price: 1800, image: 'food pictures/high-angle-stacked-donuts-with-powdered-sugar.jpg' },
      { name: 'Chocolate Doughnuts', price: 3500, image: 'food pictures/front-view-tower-assortment-with-chocolate-doughnuts.jpg' },
      { name: 'Eag & Toast', price: 65000, image: 'food pictures/sunny-side-egg-in-toast-recipe.jpg' },
      { name: 'Club Sandwich', price: 12000, image: 'food pictures/club_sandwich_16496_16x9.jpg.webp' },
    ]
  },

  // ----- NEW RESTAURANTS -----
  chickenLitos: {
    name: 'Chicken Litos',
    logo: 'food pictures/IMG_20260221_164644.jpg',
    icon: 'fa-drumstick-bite',
    menu: [
      { name: 'Litos Chips & 1 Chicken', price: 10000, popular: true, image: 'food pictures/1-Chicken-chips.png' },
      { name: 'Litos 3pc Chicken', price: 24000, popular: true, image: 'food pictures/Fried-Chicken-Crispy-Fried-Poultry.png' },
      { name: 'Chicken Burger', price: 15000, popular: true,  image: 'food pictures/pngwing.com (16).png' },
      { name: 'Large Pizza', price: 38000, popular: true, image: 'food pictures/pngwing.com (2).png.' },
      { name: 'Medium Pizza', price: 34000, popular: true, image: 'food pictures/pngwing.com (3).png' },
      { name: 'Small Pizza', price: 28000, popular: true, image: 'food pictures/pngwing.com (1).png' },
      { name: 'Egg Sandwich', price: 7210, image: 'food pictures/Epic-Egg-and-Cheese-Sandwich-Hero-Image.jpg' },
      { name: 'Club Sandwich', price: 16480, popular: true, image: 'food pictures/club_sandwich_16496_16x9.jpg.webp' },
      { name: 'Chilli Bean', price: 8000, popular: true,  image: 'food pictures/vecteezy_black-bean-chili-with-sour-cream_72604476.jpg' },
      { name: 'Coleslaw', price: 7000, popular: true,  image: 'food pictures/KFC-Coleslaw-Recipe-A_fff_KFC-Coleslaw-Recipe14455_Features_4.jpg' },
      { name: 'Spicy Rice', price: 9000, popular: true,  image: 'food pictures/jollof-rice-isolated-on-transparent-background-free-png.png' },
    ]
  },
  meatzone: {
    name: 'Meat Zone',
    logo: 'food pictures/IMG_20260221_180228.jpg',
    icon: 'fa-bolt',
    menu: [
      { name: 'Masala Chips', price: 6000, popular: true, image: 'food pictures/photo.jpg' },
      { name: 'Chips & Eggs', price: 9000, popular: true, image: 'food pictures/ALX-L0317-Mediterranean-Bkfst-Fries_1000x1000_4594_0.jpg' },
      { name: 'Peri Peri Wings', price: 12000, popular: true, image: 'food pictures/pngwing.com (20).png' },
      { name: 'Chicken Wings', price: 17000, popular: true, image: 'food pictures/Air-Fryer-Whole-Chicken-Wing-9.jpg' },
      { name: 'Grilled Chicken', price: 20000, popular: true, image: 'food pictures/Grilled-BBQ-Chicken-15-of-18-500x500.jpg' },
      { name: 'Char-grilled Pork ribs', price: 18000, popular: true, image: 'food pictures/tangy-_spicy_grilled_ribs.jpg' },
      { name: 'T-bone Steak', price: 16000, popular: true, image: 'food pictures/T-bone-steak-Tierno-BBQuality-1-1000x1000.png' },
      { name: 'Nsima & Chambo', price: 18000, popular: true, image: 'food pictures/chambo-2.jpg' },
      { name: 'Stir-Fried Beef', price: 9500, popular: true, image: 'food pictures/Pepper-Steak-Stir-Fry-2-1200x1200-1.jpg' },
      { name: 'Chicken Sandwish', price: 14000, popular: true, image: 'food pictures/Rotisserie-Chicken-Sandwich-202-2000-485b673fe411460e95b512fbf805a5d9.jpg' },
      { name: 'Steak Sandwish', price: 18000, popular: true, image: 'food pictures/steak-sandwich-recipe-snippet-2.jpg' },
      { name: 'Chicken Wrap', price: 16300, popular: true,  image: 'food pictures/pngwing.com (6).png' },
      { name: 'Beef Wrap', price: 19000, popular: true, image: 'food pictures/pngwing.com (5).png' },
      { name: 'Eag & Toast', price: 65000, image: 'food pictures/sunny-side-egg-in-toast-recipe.jpg' },
      { name: 'Club Sandwich', price: 12000, image: 'food pictures/club_sandwich_16496_16x9.jpg.webp' },
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
const clearCartBtn = document.getElementById('clearCartBtn')

// Helper: format money
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