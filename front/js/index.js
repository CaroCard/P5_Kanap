    // Get the products from the API
    fetch ("http://localhost:3000/api/products")
    .then(function (res){
        if (res.ok){
            return res.json();
        }else {
            console.log("res NON ok!");
        }
    })
    .then(function (value){
        // Function to create products blocks and filling them with the right information 
        for (let i of value){
            // Creation of the product url
            let urlProductPage = 'product.html?id=';
            let urlProduct = urlProductPage + i._id;

            // Elements creation
            const newA = document.createElement("a");
            const newArticle = document.createElement("article");
            const newImg = document.createElement("img");
            const newH3 = document.createElement("h3");
            const newP = document.createElement("p");
                
            // Elements supplements
            newA.setAttribute('href', urlProduct);
            
            newImg.setAttribute('src', i.imageUrl);
            newImg.setAttribute('alt', i.altTxt);
                
            newH3.classList.add('productName');
            newH3.textContent = i.name;
                
            newP.classList.add('productDescription');
            newP.textContent = i.description;
            
            // Elements put as child of...
            document.getElementById('items').appendChild(newA);
            newA.appendChild(newArticle);
            newArticle.appendChild(newImg);
            newArticle.appendChild(newH3);
            newArticle.appendChild(newP);
        }
    })
    .catch(function (err){
        console.log("bwahaha tu t'es planté!")
    });

  
/*
function send(){
    fetch ("http://localhost:3000/api/products/order", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonBody)
    });
}

send();
*/