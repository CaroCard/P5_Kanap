// Récup données objets de local storage, à installer!
/*let newProductInCart = localStorage.getItem('newProduct');

let addProductToCart = JSON.parse(newProductInCart);

console.log(addProductToCart);
alert(addProductToCart.id) // renvoie l'id du produit */


let productsArray = localStorage.getItem('Array');
let arrayOfProducts = JSON.parse(productsArray);
console.log(arrayOfProducts);


// for(i of localStorage){

/*                 CONDITION DE CREATION D'ELEMENT
    IF ((l'id de i est identique à un élément déjà affiché dans le panier) && (la couleur de i est identique à cet élément)){
        code de modification de la quantité: quantité + i.quantité;
                             et du prix: prix * quantité;                               
    } 
        ELSE{
            Code de création d'un block complet; ci-dessous. */
                        // DECLARATION NEW ELEMENTS
/*            const newArticle = document.createElement("article");

            const newDivImg = document.createElement("div"); 
            const newImg = document.createElement("img");

            const newBlockItem = document.createElement("div"); 

            const newDivPrice = document.createElement("div"); 
            const newH2 = document.createElement("h2"); 
            const newPrice = document.createElement("p"); 

            const newBlockSettings = document.createElement("div");

            const newDivQuantity = document.createElement("div"); 
            const newQuantity = document.createElement("p"); 
            const newInput = document.createElement("input"); 

            const newDivDelete = document.createElement("div"); 
            const newDelete = document.createElement("p"); 

                                        // brouillon ajout d'infos
            newArticle.classList.add('cart__item');
            newArticle.setAttribute('data-id', '{product-ID}'); // {product-ID} à changer ptet

            // IMG
            newDivImg.classList.add('cart__item__img');
            newImg.setAttribute('src', i.imageUrl); 
            newImg.setAttribute('alt', i.altTxt);

            // ITEM
            newBlockItem.classList.add('cart__item__content');

            // PRICE
            newDivPrice.classList.add('cart__item__content__titlePrice');
            newH2.textContent = i.name;
            newPrice.textContent = i.price + ",00 €";

            // SETTINGS
            newBlockSettings.classList.add('cart__item__content__settings');

            // QUANTITY
            newDivQuantity.classList.add('cart__item__content__settings__quantity');

            newQuantity.textContent = "Qté :";

            newInput.setAttribute('type', 'number');
            newInput.setAttribute('name', 'itemQuantity');
            newInput.setAttribute('min', '1');
            newInput.setAttribute('max', '100');
            newInput.setAttribute('value', localStorage.id.quantity);
            newInput.classList.add('itemQuantity');

            // DELETE
            newDivDelete.classList.add('cart__item__content__settings__delete');
            newDelete.classList.add('deleteItem');

                                    // CHILD OF...
            document.getElementById('cart__items').appendChild('newArticle');
            newArticle.appendChild('newDivImg');
            newArticle.appendChild('newBlockItem');

            newDivImg.appendChild('newImg'),

            newBlockItem.appendChild('newDivPrice');
            newBlockItem.appendChild('newBlockSettings');

            newDivPrice.appendChild('newH2');
            newDivPrice.appendChild('newPrice');

            newBlockSettings.appendChild('newDivQuantity');
            newBlockSettings.appendChild('newDivDelete');

            newDivQuantity.appendChild('newQuantity');
            newDivQuantity.appendChild('newInput');

            newDivDelete.appendChild('newDelete');
            //}
}
*/






