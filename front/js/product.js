const pageUrl = window.location.href;
const url = new URL(pageUrl);
const id = url.searchParams.get("id");

const fetch_Url_Id = "http://localhost:3000/api/products/" + id;
console.log(fetch_Url_Id); // A retirer

fetch (fetch_Url_Id)
.then(function (res){
    if (res.ok){
        return res.json();
    }else {
        console.log("res NON ok!");
    }
})
.then(function (value){
    // creation new img for product details
    const newImg = document.createElement("img");
    newImg.setAttribute('src', value.imageUrl);
    newImg.setAttribute('alt', value.altTxt);
    document.querySelector('.item__img').appendChild(newImg);

    // puts name, price, description
    document.getElementById('title').textContent = value.name;
    document.getElementById('price').textContent = value.price;
    document.getElementById('description').textContent = value.description;

    // Fonction qui parcourt les couleurs et les affiches une à une chaque fois en ajoutant un élément option
    for (let i of value.colors){
        const newOption = document.createElement("option");

        newOption.textContent = i;
        newOption.setAttribute('value', i);

        document.getElementById('colors').appendChild(newOption);
    }
})
.catch(function (err){
    console.log("bwahaha tu t'es planté!")
});

// addEventListener sur couleur et récup donnée
const colorSelect = document.querySelector('#colors');

colorSelect.addEventListener('change', function(e){

    localStorage.colorChoice = e.target.value;
    console.log(localStorage.colorChoice); // check
})

// addEventListener sur quantité et récup donnée
const quantityInput = document.querySelector('#quantity');

quantityInput.addEventListener('change', function(e){

    localStorage.quantityChoice = e.target.value;
    console.log(localStorage.quantityChoice); // check
})

const buttonAddToCart = document.querySelector('#addToCart');

buttonAddToCart.addEventListener('click', function(e){
    e.preventDefault();
    // vérifier le choix d'une couleur et d'une quantité
    // !!!!!! PAR DEFAUT AJOUT DES PREMIERES VALEURS DONC 1ere COULEUR ET 1  !!!!!!!
    /*

    if(color.value = ""){
        alert("Choisissez une couleur!")
    }else if(quantity.value = 0){
        alert("Choisissez une quantité")
    }
        
    */
// Pour créer un objet ?

    // Création de l'objet
    let addProductToCart = {
        id : id,
        color : localStorage.colorChoice,
        quantity : localStorage.quantityChoice
    }
    console.log(addProductToCart);   // check
    
// ARRAY

    if(!localStorage.getItem('Array')){ 
        let arrayOfProducts = [];
        arrayOfProducts.push(addProductToCart);
        let productsArray = JSON.stringify(arrayOfProducts);
        localStorage.setItem('Array', productsArray);
    }else{
        let cart = JSON.parse(localStorage.getItem('Array'));
        cart.push(addProductToCart);
        let productsArray = JSON.stringify(cart);
        localStorage.setItem('Array', productsArray);
        console.log(cart); // check
    }

});

console.log(localStorage.length);
