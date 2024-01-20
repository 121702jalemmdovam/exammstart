const apidiv =  document.getElementById('productList')

function getproducts(){
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
    .then(res=>{
        products = res.data
        products.map(item=>{
            const box  = document.createElement('div')
            box.className = 'box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'
            box.innerHTML = `
            <div class="boxdiv">
            <img style="width: 30%;" src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button onclick="addtobasket(${item.id})">Add to<i class="fa-solid fa-bag-shopping"></i></button>
            <button onclick="addtowishlist(${item.id})">Add to<i class="fa-solid fa-heart"></i></button>
            </div>
 
            `
            productList.appendChild(box)
        })
    })
}
getproducts();

function addtobasket(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let productItem = cart.find(item => item.id == id)
    if(productItem) {
        productItem.count = (productItem.count || 1) + 1
    } else {
        cart.push(products.find(item => item.id == id))
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}

function addtowishlist(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    
    if(productItem){
        alert('This product has already become a favorite')
    } else {
        wishlist.push(products.find(item => item.id == id))
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }

}