// =============================
// PHINDU FOOD COURIER SCRIPT
// =============================

let cart = [];
let deliveryFee = 0;

// Add item to cart
function addToCart() {

    const itemName = document.getElementById("itemName").value;
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);
    const itemQty = parseInt(document.getElementById("itemQty").value);

    if (itemName === "" || isNaN(itemPrice) || isNaN(itemQty)) {
        alert("Please fill all item details correctly.");
        return;
    }

    const total = itemPrice * itemQty;

    cart.push({
        name: itemName,
        price: itemPrice,
        qty: itemQty,
        total: total
    });

    updateCart();
    clearItemFields();
}

// Update cart display
function updateCart() {

    const cartList = document.getElementById("cartList");
    const subtotalElement = document.getElementById("subtotal");

    cartList.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.total;

        cartList.innerHTML += `
            <li>
                ${item.name} - MK ${item.price} x ${item.qty} = MK ${item.total}
                <button onclick="removeItem(${index})">❌</button>
            </li>
        `;
    });

    subtotalElement.innerText = subtotal;

    updateGrandTotal();
}

// Remove item
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Delivery fee selection
function selectDelivery(area) {

    if (area === "town") deliveryFee = 2500;
    if (area === "medium") deliveryFee = 4000;
    if (area === "far") deliveryFee = 6500;

    document.getElementById("deliveryFee").innerText = deliveryFee;

    updateGrandTotal();
}

// Update grand total
function updateGrandTotal() {

    let subtotal = 0;
    cart.forEach(item => subtotal += item.total);

    const grandTotal = subtotal + deliveryFee;

    document.getElementById("grandTotal").innerText = grandTotal;
}

// Clear item fields
function clearItemFields() {
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQty").value = "";
}

// Place order via WhatsApp
function placeOrder() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const customerName = document.getElementById("customerName").value;
    const location = document.getElementById("location").value;
    const phone = document.getElementById("phone").value;

    if (customerName === "" || location === "" || phone === "") {
        alert("Please fill customer details.");
        return;
    }

    let message = "Hello Phindu Food Courier,%0A%0A";
    message += "Customer: " + customerName + "%0A";
    message += "Phone: " + phone + "%0A";
    message += "Location: " + location + "%0A%0A";
    message += "Order Details:%0A";

    let subtotal = 0;

    cart.forEach(item => {
        message += "- " + item.name + " (MK " + item.price + " x " + item.qty + ") = MK " + item.total + "%0A";
        subtotal += item.total;
    });

    const grandTotal = subtotal + deliveryFee;

    message += "%0ASubtotal: MK " + subtotal;
    message += "%0ADelivery Fee: MK " + deliveryFee;
    message += "%0AGrand Total: MK " + grandTotal;

    const whatsappNumber = "265881006198"; // REPLACE WITH YOUR NUMBER

    const url = "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(url, "_blank");

    // Reset cart
    cart = [];
    deliveryFee = 0;
    updateCart();
    document.getElementById("deliveryFee").innerText = 0;
}