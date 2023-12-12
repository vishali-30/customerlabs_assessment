// // rough


// var cl_cart_viewed = setInterval(function() {
//     var userProps = (window.CLabsgbVar || {}).generalProps || {};
//     if (userProps.uid) {
//         var eventName = "Cart viewed";
        
        
//         var products = [
//             { name: 'Top Up T-Shirt', quantity: 1, price: 250.00 },
//             { name: 'Polo Shirt', quantity: 1, price: 100.00 }

//         ];
        
//         var cartValue = 350.00;

//         var properties = {
//             customProperties: {

//                 "products": {
//                     "t": "Object",
//                     "v": products
//                 },
//                 "cart_value": {
//                     "t": "number",
//                     "v": cartValue
//                 }
//             }
//         };

        
//         _cl.pageview(eventName, properties);

//         clearInterval(cl_cart_viewed);
//     }
// }, 1000);


// var addToCartButtons = document.querySelectorAll('.add-to-cart-button');

// addToCartButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//         var productContainer = button.closest('.product');
//         var productName = productContainer.querySelector('.product-name').textContent;
//         var productPrice = parseFloat(productContainer.querySelector('.product-price').textContent.replace('$', ''));

//         var eventName = "Added to cart";
//         var properties = {
//             "product_name": {
//                 "t": "string",
//                 "v": productName
//             },
//             "product_price": {
//                 "t": "number",
//                 "v": productPrice
//             }
//         };

//         _cl.trackClick(eventName, properties);
//     });
// });


// let n = document.getElementById("place-order-btn");
// n.addEventListener("click", (e) => {
//     var cl_product_viewed = setInterval(function () {
//         if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
//             var eventName = "Purchased clicked"
//             var properties = {
//                 "productProperties": [{
//                     "product_name": {
//                         "t": "string",
//                         "v": "Top Up T-Shirt"
//                     },
//                     "product_quantity": {
//                         "t": "number",
//                         "v": "1"
//                     },
//                     "product_price": {
//                         "t": "number",
//                         "v": "250.00"
//                     },
//                 }]
//             }
//             _cl.trackClick(eventName, properties)
//             clearInterval(cl_product_viewed)
//         }
//     }, 1000);

// })

// let placeOrderButton = document.getElementById("place-order-btn");

// placeOrderButton.addEventListener("click", () => {
//     var checkUserIdInterval = setInterval(function () {
       
//         if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
//             var eventName = "Purchased clicked";
//             var properties = {
//                 "productProperties": [{
//                     "product_name": {
//                         "t": "string",
//                         "v": "Top Up T-Shirt"
//                     },
//                     "product_quantity": {
//                         "t": "number",
//                         "v": 1
//                     },
//                     "product_price": {
//                         "t": "number",
//                         "v": 250.00
//                     },
//                 }],

//                 "productProperties": [{
//                     "product_name": {
//                         "t": "string",
//                         "v": "Polo Shirt"
//                     },
//                     "product_quantity": {
//                         "t": "number",
//                         "v": 1
//                     },
//                     "product_price": {
//                         "t": "number",
//                         "v": 100.00
//                     },
//                 }
//             ]

//             };
//             var total_order = 350.00;

//             _cl.trackClick(eventName, properties);

//             clearInterval(checkUserIdInterval);
//         }
//     }, 1000);
// });









