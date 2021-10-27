    fetch ("http://localhost:3000/api/products")
    .then(function (res){
        if (res.ok){
            return res.json();
        }else {
            console.log("res NON ok!");
        }
    })
    .then(function (value){
        console.log(value);
        for (let i of value){
            // Elements creation
            const newA = document.createElement("a");
            const newArticle = document.createElement("article");
            const newImg = document.createElement("img");
            const newH3 = document.createElement("h3");
            const newP = document.createElement("p");
                
            // Elements supplements
            newA.setAttribute('href', '/pages/sensor-details.html?facadeId=${product.id}');
                
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

// Creates a whole item block with its elements
function createItem(){
    // Elements creation
    const newA = document.createElement("a");
    const newArticle = document.createElement("article");
    const newImg = document.createElement("img");
    const newH3 = document.createElement("h3");
    const newP = document.createElement("p");
    
    // Elements supplements
    newA.setAttribute('href', '/pages/sensor-details.html?facadeId=${product.id}');
    newA.textContent = "Nouveau Lien A";
    
    newArticle.textContent = "article";
    
    newImg.setAttribute('src', 'source/img');
    newImg.setAttribute('alt', i.altTxt);
    
    newH3.classList.add('productName');
    newH3.textContent = "H3";
    
    newP.classList.add('productDescription');
    newP.textContent = "paragraphe";
    
    // Elements put as child of...
    document.getElementById('items').appendChild(newA);
    newA.appendChild(newArticle);
    newArticle.appendChild(newImg);
    newArticle.appendChild(newH3);
    newArticle.appendChild(newP);
  }
  
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