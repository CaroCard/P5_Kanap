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
    console.log(value);

    // creation new img for product details
    const newImg = document.createElement("img");
    newImg.setAttribute('src', value.imageUrl);
    newImg.setAttribute('alt', value.altTxt);
    document.querySelector('.item__img').appendChild(newImg);

    // puts name, price, description
    document.getElementById('title').textContent = value.name;
    document.getElementById('price').textContent = value.price;
    document.getElementById('description').textContent = value.description;

    // Créer une fonction qui parcourt les couleurs et les affiches une à une chaque fois en ajoutant un élément option
    for (let i of value.colors){
        const newOption = document.createElement("option");

        newOption.textContent = i;
        newOption.setAttribute('value', value.colors.i);

        document.getElementById('colors').appendChild(newOption);
    }
})
.catch(function (err){
    console.log("bwahaha tu t'es planté!")
});

//
// CODE POURRI SI DESSOUS =)
//

// addEventListener sur couleur et récup donnée ${event.target.value}
const colorSelect = document.querySelector('#colors');

colorSelect.addEventListener('change', function(e){

    const colorChoice = e.target.value;
    console.log(colorChoice); // undefined
})

// addEventListener sur quantité et récup donnée ${event.target.value}
const quantityInput = document.querySelector('#quantity');

quantityInput.addEventListener('change', function(e){

    const quantityChoice = e.target.value;
    console.log(quantityChoice); // undefined
})

//
// CODE POURRI SI DESSUS =)
//

const buttonAddToCart = document.querySelector('#addToCart');

buttonAddToCart.addEventListener('click', function(e){
    e.preventDefault();

    localStorage.id = id;
    const recupId = localStorage.id; // check
    console.log(recupId);   // check



});
    // Add au localStorage: id, couleur, quantité
    // Ajout    localStorage.prenom = "dany";
    // Récup    localStorage.prenom;

    /* Si stockage en objet, "kanap-"i (i = localStorage.length +1) poru gérer l'ajout de plusieurs canapés...logique pas évidente
    */
