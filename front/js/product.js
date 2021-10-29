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
        // LES COULEURS NE S'AFFICHENT PAS EN TEXTE
        newOption.textContent = value.colors.i;
        newOption.setAttribute('value', value.colors.i);
        document.getElementById('colors').appendChild(newOption);
    }
})
.catch(function (err){
    console.log("bwahaha tu t'es planté!")
});
