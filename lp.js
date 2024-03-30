


let cart = []; 

function addToCart(itemName) {
   
    let found = cart.find(item => item.name === itemName);
    
    if (found) {
        
        found.quantity++;
    } else {
        
        cart.push({ name: itemName, quantity: 1 });
    }
    
   
    updateCartIcon();
    
    
    displayTotalCost();
}


function removeFromCart(itemName) {
    
    let index = cart.findIndex(item => item.name === itemName);
    
    if (index !== -1) {
       
        cart.splice(index, 1);
        
        
        updateCartIcon();
        
        
        displayTotalCost();
    }
}


function clearCart() {
    cart = []; 
    
    updateCartIcon();
    
    
    displayTotalCost();
    
    
    let cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = '';
}


function updateCartIcon() {
   
    let cartCountSpan = document.getElementById('cart-count');
    
    let totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    
    cartCountSpan.textContent = totalCount;
}


function displayTotalCost() {
    let totalCost = 0; 
    
    
    cart.forEach(item => {
        
        let itemPrice = getItemPrice(item.name); 
        let itemQuantity = item.quantity;
        
        let subtotal = itemPrice * itemQuantity;
       
        totalCost += subtotal;
    });
    
  
    document.getElementById('totalCost').innerText = formatPrice(totalCost);
}


function formatPrice(price) {
  
    return '₹' + price.toFixed(2); 
}


function getItemPrice(itemName) {
    const itemPrices = {
        'Blueberry baked cheesecake': 849.00,
        'Devils Mousse Pastry': 140.00 ,
        'Eggless Fresh Fruit & Cream Pastry': 155.00,
        'Assorted Box Of Pastries (4 Pc)': 530.00,
        'Choco Chip Brownie': 105.00,
        'Walnut Brownie': 110.00,
        'Oreo Brownie': 95.00,
        'Cookie Brownie': 105.00,
        'Tiramisu Cup': 150.00,
        
    };

    
    return itemPrices[itemName] || 0; 
}


displayTotalCost();


document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', function() {
        let itemName = this.dataset.itemName; 
        addToCart(itemName);
        alert(itemName + ' has been added to the cart!');
    });
});


function showCart() {
    let modal = document.getElementById('cartModal');
    let cartItemsList = document.getElementById('cartItemsList');

    cartItemsList.innerHTML = '';
    
    
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity}`;
        cartItemsList.appendChild(listItem);
    });
    
   
    modal.style.display = 'block';
}


function closeModal() {
    let modal = document.getElementById('cartModal');
    modal.style.display = 'none';
}



document.getElementById("buy-now-button").addEventListener("click", function() {
    alert("You clicked the Buy Now button!");
  });





