
const healthCategories = document.getElementById("health-item");



let generateDataEco = () => {
    return (healthCategories.innerHTML = healthPage.map((item) => {
      let { id, img, productName, price }= item;
        return `
                 <a href="" class="Category-list">
                    <div class="product-frame">
                            <div class="deal-image">
                                <img src=${img} alt="">
                            </div>
                    </div>
                    <div class="product-price">
                        <h6 class="product-name">${productName}</h6>
                        <div class="cart-section">
                        <p class="price">₦${price}</p>
                        <div class="icon">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        </div>
                          <div class="rating">
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                  </div>
                    </div>
                </a>
              `
    }).join(""))
}




generateDataEco()

