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
const getApi = (url) => {
  axios.get(url)
   .then(response => {
     let products = response.data;
      
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
                    <p class="price">${item.price} TL</p>
                    <div class="bottom">
                        <div class="coupon">
                            <img src="https://cdn.dsmcdn.com/web/production/campaign-coupon-icon.svg" class="coupon-icon" alt="">
                            <span class="coupon-text">Kupon Firsati</span>
                        </div>
                        <div class="promotion">
                            <img src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg" class="promotion-icon" alt="">
                            <span class="promotion-text">Cok Al Az Ode</span>
                        </div>
                    </div>
                </div>
            </div>`
            cards.innerHTML += card;
   })})
}

getApi('https://fakestoreapi.com/products')

window.addEventListener("scroll", () => {
    let header = document.getElementById("scroll")
    if (window.scrollY > 100) {
        header.classList.add("headerAnime")
    } else {
        header.classList.remove("headerAnime")
    }
})