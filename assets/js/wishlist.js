const wishlistdiv = document.getElementById('product')

function getproducts(){
wishlistdiv.innerHTML = ''
let wishlist = JSON.parse(localStorage.getItem('wishlist'))
wishlist.map((item,index)=>{
    const box = document.createElement('div')
    box.className = "box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
    box.innerHTML = `
    <img src="${item.image}" alt="">
    <p>${item.name}</p>
    <p>${item.price}</p>
    <div class="btndiv">
    <button onclick="removefromwishlist(${index})">Remove from<i class="fa-brands fa-shopify"></i></button>

</div>
    `
    product.appendChild(box)
})
}
getproducts()
function removefromwishlist(index){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
wishlist.splice(index,1)
localStorage.setItem('wishlist',JSON.stringify(wishlist));
getproducts()
}