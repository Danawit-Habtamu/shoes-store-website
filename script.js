document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const productContainer = document.getElementById('product-container');
     const dynamicContent = document.getElementById('dynamic-content');
  const cartIcon = document.querySelector('.cart-icon');
  const cartModal = document.getElementById('cart-modal');
  const closeBtn = document.querySelector('.close');
  const cartCountSpan = document.getElementById('cart-count');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');
   const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
   const thankYouLettersSection = document.getElementById('thank-you-letters');
  const contactSection = document.getElementById('contact-section');
    const homeSection = document.getElementById('home-section');
        const loginSection = document.getElementById('login-section');
    const loginForm = document.getElementById('login-form');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
  let cartItems = [];
  let cartTotal = 0;
    let isDarkMode = false;


   function openCartModal() {
      cartModal.style.display = 'block';
  }

  function closeCartModal() {
     cartModal.style.display = 'none';
  }
   cartIcon.addEventListener('click', openCartModal);
    closeBtn.addEventListener('click', closeCartModal);
    window.addEventListener('click', function(event) {
  if (event.target == cartModal) {
    closeCartModal();
  }
 });


 function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
     cartTotal = 0;
    cartItems.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
          cartItemDiv.innerHTML = `
          <p>${item.name} - $${item.price} - Size: ${item.size}, Color: ${item.color}</p>
            <button class="remove-item" data-index="${index}">Remove</button>
         ` ;
       cartItemsContainer.appendChild(cartItemDiv);
        cartTotal += Number(item.price);
      });
   cartTotalSpan.innerText = `Total: $${cartTotal.toFixed(2)}`;
  cartCountSpan.innerText = cartItems.length;
  const removeButtons = document.querySelectorAll('.remove-item');
     removeButtons.forEach(button => {
      button.addEventListener('click', function() {
      const indexToRemove = this.dataset.index;
       cartItems.splice(indexToRemove, 1);
       updateCartDisplay();
  })
});
}
  const productsData = {
        home: [
      { type: 'thankYou'}
    ],
      women: [
      {
          name: 'Addidas Campus',
          price: '120.00',
          sizes: ['36', '37', '38', '39'],
          colors: ['Black', 'White', 'Red'],
          images: {
           Black: 'images/women1.jpg',
          White: 'images/women1.2.avif',
         Red: 'images/women1.1.jpg'
         }
       },
       {
          name: 'All star converse',
          price: '150.00',
           sizes: ['36', '37', '38', '39'],
           colors: ['Black', 'White', 'Blue'],
            images: {
            Black: 'images/women3.jpg',
           White: 'images/women3.1.webp',
            Blue: 'images/womwn3.2.jpg'
         }
     },
      {
           name: 'Heels',
          price: '130.00',
          sizes: ['36', '37', '38', '39'],
         colors: ['Pink', 'White', 'Red'],
          images: {
           Pink: 'images/women2.jpg',
          White: 'images/women2.1.jpg',
          Red: 'images/women2.2.jpg'
         }
       },
       {
          name: 'Boots',
          price: '110.00',
          sizes: ['36', '37', '38', '39'],
          colors: ['Black', 'Green', 'Red'],
           images: {
            Black: 'images/women4.jpg',
             Green: 'images/women4.1.avif',
           Red: 'images/women4.2.webp'
         }
      },
      ],
      men: [
        {
             name: 'jordan 4',
            price: '100.00',
             sizes: ['39', '40', '41', '42'],
             colors: ['Black', 'Brown', 'Gray'],
              images:{
              Black: 'images/men1.jpg',
            Brown: 'images/men1.1.jpg',
               Gray: 'images/men1.2.jpeg'
         }
        },
        {
          name: 'Addidas Samba',
          price: '110.00',
          sizes: ['39', '40', '41', '42'],
           colors: ['Black', 'Navy', 'White'],
             images:{
             Black: 'images/men2.jpg',
              Navy: 'images/men2.1.jpg',
             White: 'images/men2.2.webp'
         }
      },
      {
         name: 'Jordan 1',
           price: '140.00',
             sizes: ['39', '40', '41', '42'],
             colors: ['Gray', 'Brown', 'Green'],
               images:{
             Gray: 'images/men3.jpeg',
             Brown: 'images/men3.1.jpeg',
             Green: 'images/men3.2.jpeg'
         }
       },
      {
           name: 'New Balance 530',
           price: '125.00',
             sizes: ['39', '40', '41', '42'],
              colors: ['Black', 'White', 'Red'],
                 images:{
              Black: 'images/men4.jpg',
               White: 'images/men4.1.jpg',
                Red: 'images/men4.2.jpg.crdownload'
         }
      }
     ],
   kids: [
       {
         name: 'Jordan 1',
           price: '50.00',
           sizes: ['1', '2', '3', '4'],
          colors: ['Red', 'Blue', 'Yellow'],
          images:{
             Red: 'images/kid4.webp',
             Blue: 'images/kid4.1.webp',
            Yellow: 'images/kid4.2.jpg'
         }
       },
        {
          name: 'Jordan 1 low',
            price: '70.00',
          sizes: ['1', '2', '3', '4'],
             colors: ['Pink', 'Purple', 'White'],
               images:{
             Pink: 'images/kid3.1.jpg',
               Purple: 'images/kid3.jpg',
            White: 'images/kid3.3.jpeg'
         }
      },
      {
           name: 'all star converse',
             price: '80.00',
             sizes: ['1', '2', '3', '4'],
              colors: ['Red', 'Green', 'Yellow'],
              images:{
            Red: 'images/kid2.jpg',
             Green: 'images/kid2.1.jpg',
               Yellow: 'images/kid2.2.jpg'
         }
     },
      {
         name: 'Sendals',
            price: '60.00',
           sizes: ['1', '2', '3', '4'],
            colors: ['Black', 'Gray', 'White'],
             images:{
             Black: 'images/kid5.jpg',
               Gray: 'images/kid5.1.jpg',
             White: 'images/kid5.2.jpg.crdownload'
         }
      }
      
     
      
    ],
     login:[],
    contact: []
  };


    function displayProducts(category) {
      productContainer.innerHTML = '';
         dynamicContent.querySelectorAll('section').forEach(section => section.style.display = 'none');
      thankYouLettersSection.style.display = 'none';
      contactSection.style.display = 'none';
       homeSection.style.display = 'none';
      loginSection.style.display = 'none';
      const products = productsData[category];
       if (category === 'home') {
          homeSection.style.display = 'block';
          thankYouLettersSection.style.display = 'block';
           productContainer.style.display = 'none';
      }
        else if (category === 'login'){
        loginSection.style.display = 'block';
         productContainer.style.display = 'none';
      }
       else if(category === 'contact'){
          contactSection.style.display = 'block';
            productContainer.style.display = 'none';
       }
        else{
          productContainer.style.display = 'grid';
          products.forEach(product => {
             const productDiv = document.createElement('div');
             productDiv.classList.add('product');
         let imageElements = '';

      if(product.images){
           imageElements = `
          <div class="color-images">
             ${Object.entries(product.images).map(([color, src], index) =>
             `<img src="${src}" alt="${product.name} ${color}" class="${index === 0 ? 'active' : ''}" data-color="${color}">`
        ).join('')}
          </div>
        ` ;
      }else{
         imageElements = `
        <img src="images/placeholder.jpg" alt="${product.name}">`
      }
              productDiv.innerHTML = `
                ${imageElements}
                  <h3>${product.name}</h3>
                   <p>$${product.price}</p>
                   <div class="options">
                      <select class="size-select">
                           <option value="" disabled selected>Select Size</option>
                            ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                      </select>
                      <select class="color-select">
                         <option value="" disabled selected>Select Color</option>
                         ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                      </select>
                   </div>
                   <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
               `;
                productContainer.appendChild(productDiv);
                 const colorSelect = productDiv.querySelector('.color-select');
          const colorImages = productDiv.querySelectorAll('.color-images img');
          colorSelect.addEventListener('change', function(){
           const selectedColor = this.value;
          colorImages.forEach(img => {
           if(img.dataset.color === selectedColor){
             img.classList.add('active')
           }else{
             img.classList.remove('active');
          }
        })
       });
             });
       }


     const addToCartButtons = document.querySelectorAll('.add-to-cart');
      addToCartButtons.forEach(button => {
          button.addEventListener('click', function() {
           const productDiv = this.closest('.product');
           const sizeSelect = productDiv.querySelector('.size-select');
            const colorSelect = productDiv.querySelector('.color-select');
          const itemName = this.dataset.name;
          const itemPrice = this.dataset.price;
            const selectedSize = sizeSelect.value;
              const selectedColor = colorSelect.value;
             if(selectedSize && selectedColor){
                  cartItems.push({name: itemName, price: itemPrice, size: selectedSize, color: selectedColor});
                  updateCartDisplay();
            }else{
                alert('Please select both size and color')
            }
     });
    });
       navLinks.forEach(link => {
        link.classList.remove('active')
      });
       const activeLink = document.querySelector(`nav a[data-category="${category}"]`);
     activeLink.classList.add('active');
  }
    loginForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form submission
        alert('Login submission is not yet functional')

     });

navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
      event.preventDefault();
      const category = this.dataset.category;
      displayProducts(category);
      });
  });


     themeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    header .container.toggle('dark-mode');
    document.querySelectorAll('.product').forEach(product => product.classList.toggle('dark-mode'));
    document.querySelectorAll('.letter').forEach(letter => letter.classList.toggle('dark-mode'));
    document.querySelectorAll('.social-icons').forEach(icons => icons.classList.toggle('dark-mode'));
     cartModal.classList.toggle('dark-mode');
    loginForm.classList.toggle('dark-mode');
     document.querySelectorAll('.form-group input').forEach(input => input.classList.toggle('dark-mode'))
      if (isDarkMode) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
         themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
  });
  displayProducts('home');

});
