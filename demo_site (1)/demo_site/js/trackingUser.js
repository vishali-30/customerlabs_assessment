
// // rough
// let placeOrderButton = document.getElementById("place-order-btn");

// placeOrderButton.addEventListener("click", () => {

    
// var cl_create_user = setInterval(function() {
//     var userProps = (window.CLabsgbVar || {}).generalProps || {};
//     if (userProps.uid) {
//         var properties = {
//             customProperties: {
//                 user_traits: {
//                     t: "Object",
//                     v: {
                       
//                         first_name: {
//                              t: "string",
//                               v: "arjun" 
//                             },
//                         last_name: {
//                              t: "string",
//                               v: "k" 
                            
//                             },
//                         phone: {
//                              t: "number", 
//                              v: "+91980045604" 
//                             },
//                         email: {
//                              t: "string", 
//                              v: "arjun@clabs.co"
//                              }
//                     }
//                 },
//                 identify_by_email: {
//                     t: "string",
//                     v: "arjun@clabs.co",
//                     ib: true
//                 }
//             }
//         };
//         _cl.identify(properties);
//         clearInterval(cl_create_user);
//     }
//     window.location.href = '/thankyou.html';
// }, 1000);

// });


// //5

// function trackPurchase(data) {
   
//     if (!data || !data.event || !data.ecommerce || !data.ecommerce.transaction_id) {
//         console.error("Invalid data format. Required fields missing.");
//         return;
//     }

    
//     var { event, ecommerce } = data;


//     var properties = {
//         "transaction_id": { "t": "string", "v": ecommerce.transaction_id },
//         "value": { "t": "number", "v": ecommerce.value || 0 },
//         "tax": { "t": "number", "v": ecommerce.tax || 0 },
//         "shipping": { "t": "number", "v": ecommerce.shipping || 0 },
//         "currency": { "t": "string", "v": ecommerce.currency || "" },
//         "coupon": { "t": "string", "v": ecommerce.coupon || "" },
//         "items": []
//     };


//     if (ecommerce.items && ecommerce.items.length > 0) {
//         ecommerce.items.forEach(function (item) {
//             var itemProperties = {
//                 "item_id": { "t": "string", "v": item.item_id || "" },
//                 "item_name": { "t": "string", "v": item.item_name || "" },
//                 "discount": { "t": "number", "v": item.discount || 0 },
//                 "item_brand": { "t": "string", "v": item.item_brand || "" },
//                 "item_category": { "t": "string", "v": item.item_category || "" },
//                 "item_variant": { "t": "string", "v": item.item_variant || "" },
//                 "price": { "t": "number", "v": item.price || 0 },
//                 "quantity": { "t": "number", "v": item.quantity || 0 }
//             };

            
//             properties.items.push(itemProperties);
//         });
//     }

    
//     _cl.trackClick(event, { "customProperties": properties });
// }

// var data = {
//     event: "purchase",
//     ecommerce: {
//         transaction_id: "T_12345",
//         value: 25.42,
//         tax: 4.90,
//         shipping: 5.99,
//         currency: "USD",
//         coupon: "SUMMER_SALE",
//         items: [
//             {
//                 item_id: "SKU_12345",
//                 item_name: "Stan and Friends Tee",
//                 discount: 2.22,
//                 item_brand: "Google",
//                 item_category: "Apparel",
//                 item_variant: "green",
//                 price: 9.99,
//                 quantity: 1
//             },
//             {
//                 item_id: "SKU_12346",
//                 item_name: "Google Grey Women's Tee",
//                 item_category: "Apparel",
//                 discount: 3.33,
//                 item_brand: "Google",
//                 item_variant: "gray",
//                 price: 20.99,
//                 quantity: 1
//             }
//         ]
//     }
// };

// trackPurchase(data);

