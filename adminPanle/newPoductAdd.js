function newProductAdd() {

    let productName = document.getElementById("name").value;
    let productSKU = document.getElementById("sku").value;
    let productQuantity = document.getElementById("qty").value;
    let productPrice = document.getElementById("price").value;


    let product = {
        name: productName,
        sku: productSKU,
        quantity: productQuantity,
        price: productPrice
    };

    // old products
    let products = JSON.parse(localStorage.getItem("products")) || [];


    // new added product
    products.push(product);

    // save back
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Added Successfully!");

    // clear fields
    document.getElementById("name").value = "";
    document.getElementById("sku").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
}