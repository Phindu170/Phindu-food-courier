// ============================
// PHINDU FOOD COURIER SYSTEM
// FULL AUTOMATIC VERSION
// ============================

let cart = [];
let deliveryFee = 0;

const restaurantLocation = {
    lat: -11.459,
    lng: 34.020
};

// ================= ADD TO CART =================

function addToCart(name, price, qtyId){

    let quantity = parseInt(document.getElementById(qtyId).value);

    if(quantity <= 0){
        alert("Quantity must be at least 1");
        return;
    }

    let existingItem = cart.find(item => item.name === name);

    if(existingItem){
        existingItem.qty += quantity;
        existingItem.total = existingItem.qty * existingItem.price;
    }else{
        cart.push({
            name: name,
            price: price,
            qty: quantity,
            total: price * quantity
        });
    }

    updateCart();
}

// ================= UPDATE CART =================

function updateCart(){

    let cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item,index)=>{
        subtotal += item.total;

        cartList.innerHTML += `
            <li>
                ${item.name} (x${item.qty}) - MK ${item.total}
                <button onclick="removeItem(${index})">❌</button>
            </li>
        `;
    });

    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("deliveryFee").innerText = deliveryFee;
    document.getElementById("grandTotal").innerText = subtotal + deliveryFee;
}

// ================= REMOVE ITEM =================

function removeItem(index){
    cart.splice(index,1);
    updateCart();
}

// ================= DISTANCE =================

function calculateDistance(lat1, lon1, lat2, lon2){
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI/180;
    const dLon = (lon2 - lon1) * Math.PI/180;

    const a =
        Math.sin(dLat/2)*Math.sin(dLat/2) +
        Math.cos(lat1*Math.PI/180) *
        Math.cos(lat2*Math.PI/180) *
        Math.sin(dLon/2)*Math.sin(dLon/2);

    const c = 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    return R*c;
}

// ================= LIVE DELIVERY CALCULATION =================

function calculateDeliveryLive(){

    if(!navigator.geolocation){
        alert("Geolocation not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(function(position){

        const distance = calculateDistance(
            restaurantLocation.lat,
            restaurantLocation.lng,
            position.coords.latitude,
            position.coords.longitude
        );

        // DELIVERY RULES
        if(distance <= 15){
            deliveryFee = 5000;
        }else if(distance <= 30){
            deliveryFee = 8000;
        }else if(distance <= 45){
            deliveryFee = 12000;
        }else if(distance <= 60){
            deliveryFee = 15000;
        }

        updateCart(); // 🔥 THIS refreshes totals instantly

    }, function(){
        alert("Please allow location access to calculate delivery fee.");
    });
}

// ================= PLACE ORDER =================

function placeOrder(){

    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }

    let restaurant = document.getElementById("restaurant").value;
    let locationText = document.getElementById("location").value;
    let phone = document.getElementById("phone").value;

    if(locationText === "" || phone === ""){
        alert("Please enter location and phone number.");
        return;
    }

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(function(position){

            const distance = calculateDistance(
                restaurantLocation.lat,
                restaurantLocation.lng,
                position.coords.latitude,
                position.coords.longitude
            );

            let subtotal = cart.reduce((sum,item)=>sum+item.total,0);
            let total = subtotal + deliveryFee;

            // Build WhatsApp Message
            let message = "Hello Phindu Food Courier,%0A%0A";
            message += "Restaurant: " + restaurant + "%0A";
            message += "Phone: " + phone + "%0A";
            message += "Location: " + locationText + "%0A";
            message += "Distance: " + distance.toFixed(2) + " km%0A%0A";
            message += "Order Details:%0A";

            cart.forEach(item=>{
                message += "- " + item.name + " (x" + item.qty + ") = MK " + item.total + "%0A";
            });

            message += "%0ASubtotal: MK " + subtotal;
            message += "%0ADelivery Fee: MK " + deliveryFee;
            message += "%0AGrand Total: MK " + total;

            let whatsappNumber = "265881006198"; // REPLACE

            let url = "https://wa.me/" + whatsappNumber + "?text=" + message;
            window.open(url, "_blank");

            cart = [];
            updateCart();

        });

    }else{
        alert("Geolocation not supported.");
    }
}