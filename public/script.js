window.onload = () => { 
  fetchProducts();
}; 
 


const fetchProducts = async () => {
  const url = "http://localhost:4242/api/v1/products"; 
  const config = { 
    method: "get", //get request
    mode: "no-cors", //cross origin resource sharing
    headers: {
      "Content-Type": "application/json" //sending mime type
    }
  }

  const response = await fetch(url, config) //fetch the url with the config

  const results = await response.json(); //parse the json from the response
  
  assembleList(results.products); //pass the products to the assembleList function
}


const assembleList = products => { 
  const list = document.querySelector("#products-list");
  
  for ( const product of products) { 
    const item = document.createElement("li"); 
    item.innerHTML = product.productName;
    list.append(item)
  }
}







