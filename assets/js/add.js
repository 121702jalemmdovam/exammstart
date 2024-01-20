const filterdata = document.getElementById('filterdata')
const searchform = document.getElementById('searchform')
const searhinput = document.getElementById('searchinput')
const searchbutton = document.getElementById('searchbutton')
const postform = document.getElementById("postform");
const nameinp = document.getElementById("nameinp");
const priceinp = document.getElementById("priceinp");

const div = document.getElementById('productList');



async function getProducts() {
    try{
        const response = await axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        db=response.data
        db.forEach(item => {
            let addtable = document.createElement("tr")
            addtable.style.display = 'flex'
            addtable.style.width = '100%'   
            addtable.innerHTML=`
            <div>
            <td><img style="width: 50px; height: 50px; border-radius: 50%;" src="${item.image}" alt=""></td>
            <th>Name:${item.name}</th>
            <th>Price:${item.price}</th>
             
              <td>   <button onclick="removeItem(${item.id})">Remove</button></td>
            </div>
            `;
            table.appendChild(addtable)
            
        });
           
    }catch(error){
        console.error('Error fetching products', error);
    }
    
    
}
  getProducts()

  function sortDefault(){
   table.innerHTML = ''
    let productvalue = filterdata.value;
    if(productvalue === '1'){
        axios
        .get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        .then(res => {
          products = res.data
          products.map(item => {
            console.log(item)
            let addtable = document.createElement("tr")
            addtable.style.display = 'flex'
            addtable.style.width = '100%'
            addtable.innerHTML = ` 
            <div class="boxdiv">
            <img style=width:20%" src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button onclick="removeItem(${item.id})">Remove</button>
            </div>v
                `
            table.appendChild(addtable)
          })
        })
    }
    }
  filterdata.addEventListener('change',sortDefault)

  function sortAZ(){
    table.innerHTML = ''
    let productvalue = filterdata.value;
    if(productvalue === '2'){
        axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        .then(res => {
          products = res.data
        let azproduct = products.sort((a,b)=>a.name.localeCompare(b.name))

          azproduct.map(item => {
            console.log(item)
            let addtable = document.createElement("tr")
            addtable.style.display = 'flex'
            addtable.style.width = '100%'
            addtable.innerHTML = ` 
            <div class="boxdiv">
            <img style=width:20%" src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button onclick="removeItem(${item.id})">Remove</button>
            </div>
                `
            table.appendChild(addtable)
          })
   
        })
    }
    }
    filterdata.addEventListener('change',sortAZ)

    function sortZA(){
        table.innerHTML = ''
        let productvalue = filterdata.value;
        if(productvalue === '3'){
            axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
            .then(res => {
              products = res.data
            let zaproduct = products.sort((a,b)=>b.name.localeCompare(a.name))
              zaproduct.map(item => {
                console.log(item)
                let addtable = document.createElement("tr")
                addtable.style.display = 'flex'
                addtable.style.width = '100%'
                addtable.innerHTML = ` 
                <div class="boxdiv">
                <img style=width:20%" src="${item.image}" alt="">
                <p>${item.name}</p>
                <p>${item.price}</p>
                <button onclick="removeItem(${item.id})">Remove</button>
                </div>
                    `
                table.appendChild(addtable)
              })
       
            })
        }
        }
        filterdata.addEventListener('change',sortZA)


        function removeItem(id) {
            axios
              .delete(`https://65680f199927836bd97406d3.mockapi.io/username/products/${id}`)
              .then((res) => {
                getProducts();
              });
          }
          
          function postProduct(e) {
            e.preventDefault();
            axios
              .post(`https://65680f199927836bd97406d3.mockapi.io/username/products`, {
                name: nameinp.value,
                price: priceinp.value,
              })
              .then((res) => {
                getProducts();
                postform.reset();
              });
          }
          
          postform.addEventListener("submit", postProduct);
          


          function searchByName(e){
         
e.preventDefault();
table.innerHTML = ''
axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
      .then(res => {
        products = res.data
        let SearchData = products.filter((item) =>
        item.name.toLowerCase().startsWith(searhinput.value.toLowerCase())
      );
      SearchData.map(item => {
          console.log(item)
          let addtable = document.createElement("tr")
          addtable.style.display = 'flex'
          addtable.style.width = '100%'
          addtable.innerHTML = ` 
          <div class="boxdiv">
          <img style=width:20%" src="${item.image}" alt="">
          <p>${item.name}</p>
            <p>${item.price}</p>
            <button onclick="removeItem(${item.id})">Remove</button>
            </div>
              `
          table.appendChild(addtable)
        })
      })
  }
 searchform.addEventListener('submit',searchByName)