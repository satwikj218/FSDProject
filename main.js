let carts = document.querySelectorAll('.store-item-icon');

let products = [
    {
        name: "Apple",
        tag: "card-img-top store-img",
        price: 5,
        inCart: 0
    }

]

for (let i=0 ; i < carts.length ; i++) 
{
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
     let productNumbers = localStorage.getItem('cartNumbers');

     if(productNumbers) {
         document.querySelectorAll('cartspan').textContent = productNumbers;
     }

}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelectorAll('cartspan').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelectorAll('cartspan').textContent = 1;
    }
   
}

onLoadCartNumbers();