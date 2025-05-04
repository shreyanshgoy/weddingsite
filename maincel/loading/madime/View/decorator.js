let cartItems = [];

function addToCart(element) {
  const $thumbnail = $(element).closest('.thumbnail');
  const item = {
    image: $thumbnail.find('img').attr('src'),
    title: $thumbnail.find('h4').text().trim(),
    contact: $($(element).data('contact-modal')).find('.modal-body').html(),
    address: $($(element).data('address-modal')).find('.modal-body').html()
  };


  
  cartItems.push(item);
  updateCartUI();
  saveCartToStorage();
}

function openpage(){
  window.location.href = '../paymentgatway/index.html'
}

function updateCartUI() {
  $('.cart-count').text(cartItems.length);
  const $cartContent = $('#cart-content');  //this will update at the side of logo at navbar
  $('#cart-count').text(cartItems.length); // this will update at the side of section
  $cartContent.empty();
  
  cartItems.forEach((item, index) => {
    $cartContent.append(`
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}">
        <h5>${item.title}</h5>
        <div class="contact-info">${item.contact}</div>
        <div class="address-info">${item.address}</div>
        
        <hr class="custom-line"> 
        <button onclick="removeCartItem(${index})" class="btn btn-sm btn-danger mt-2">Remove</button>
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-sm btn-danger mt-2" onclick = "openpage()">Enroll</button>
      </div>
    `);
  });
}

function removeCartItem(index) {
  cartItems.splice(index, 1);
  updateCartUI();
  saveCartToStorage();
}

function saveCartToStorage() {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cartItems = JSON.parse(savedCart);
    updateCartUI();
  }
}

function toggleCart() {
  $('#cart-sidebar').toggleClass('active');
}

function closeCart() {
  $('#cart-sidebar').removeClass('active');
}

// Initialize cart on page load
$(document).ready(() => {
  loadCartFromStorage();
});


