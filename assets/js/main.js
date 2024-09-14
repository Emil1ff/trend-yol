const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', function() {
    navItems.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});


const component = document.querySelector('.component');
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

const slideBy = 6;
const imageWidth = 88; 

nextButton.addEventListener('click', () => {
    component.scrollLeft += slideBy * imageWidth;
});

prevButton.addEventListener('click', () => {
    component.scrollLeft -= slideBy * imageWidth;
});


const cards = document.getElementById('cards');
let allProducts = [];

const getApi = (url) => {
  axios.get(url)
    .then(response => {
      allProducts = response.data; 
      displayProducts(allProducts); 
    });
}

const displayProducts = (products) => {
  cards.innerHTML = ''; 
  products.forEach(item => {
    let card = `
      <div class="card">
        <i class="fa-regular fa-heart"></i>
        <img class="product-img" src="${item.image}" alt="">
        <div class="product-info">
          <h3 class="name">${item.title}</h3>
          <div class="rate-count">
            <span class="rate">${item.rating.rate}</span>
            <span class="count">(${item.rating.count} reviews)</span>
          </div>
          <p class="price">${item.price} AZN</p>
          <div class="bottom">
            <div class="coupon">
              <img src="https://cdn.dsmcdn.com/web/production/campaign-coupon-icon.svg" class="coupon-icon" alt="">
              <span class="coupon-text">Kupon Fırsatı</span>
            </div>
            <div class="promotion">
              <img src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg" class="promotion-icon" alt="">
              <span class="promotion-text">Çok Al Az Öde</span>
            </div>
          </div>
        </div>
      </div>`;
    cards.innerHTML += card;
  });
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = allProducts.filter(product => 
    product.title.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts); 
});

getApi('https://fakestoreapi.com/products');

window.addEventListener("scroll", () => {
    let header = document.getElementById("scroll")
    if (window.scrollY > 100) {
        header.classList.add("headerAnime")
    } else {
        header.classList.remove("headerAnime")
    }
})