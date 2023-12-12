let track_order = setInterval(function(){
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
        let event_name = "purchase_products";
        let prperties = {
            "product_properties" : [{
                "product_name": {
                    "t": "string",
                    "v": "Top Up T-Shirt"
                },
                "product_price": {
                    "t": "number",
                    "v": "250"
                },
                "product_quantity": {
                    "t": "number",
                    "v": "1"
                },
                "product_name": {
                    "t": "string",
                    "v": "Polo Shirt"
                },
                "product_price": {
                    "t": "number",
                    "v": "100"
                },
                "product_quantity": {
                    "t": "number",
                    "v": "1"
                }
            }],
            "custome_properties" : {
                "currency" : {
                    "t" : "string",
                    "v" : "USD"
                },
                "coupen" : {
                    "t" : "string",
                    "v" : "CLABS"
                },
                "total_amt" : {
                    "t" : "number",
                    "v" : "350"
                }
            }
        }
        _cl.trackClick(event_name, prperties);
        clearInterval(track_order);
    }
   
}, 1000);

document.querySelector("button.btn btn-black btn-lg py-3 btn-block").addEventListener("click", track_order);


// 2. 

let first_name = document.getElementById("c_fname").value;
let last_name = document.getElementById("c_lname").value;
let email = document.getElementById("c_email_address").value;
let phone = document.getElementById("c_phone").value;
let country = document.getElementById("c_country").value;
let state = document.getElementById("c_state_country").value;
let zip_code = document.getElementById("c_postal_zip").value;

let track_user = setInterval(function(){
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
        let properties = {
            "custom_properties" : {
                "user_details" : {
                    "t" : "object",
                    "v" : {
                        "first_name" : {
                            "t" : "string",
                            "t" : first_name
                        },
                        "last_name" : {
                            "t" : "string",
                            "v" : last_name
                        },
                        "email" : {
                            "t" : "string",
                            "v" : email
                        }, 
                        "phone" : {
                            "t" : "number",
                            "v" : phone
                        }, 
                        "country" : {
                            "t" : "string",
                            "v" : country
                        },
                        "state" : {
                            "t" : "string",
                            "v" : state
                        },
                        "zip_code" : {
                            "t" : "number",
                            "v" : zip_code
                        }
                    }
                },
                "identify_by_email" : {
                    "t" : "string",
                    "v" : email,
                    "ib" : false
                }
            }
            }
            _cl.identify(properties);
            clearInterval(track_user);
        }
   
}, 1000);

document.querySelector("button.btn btn-black btn-lg py-3 btn-block").addEventListener("click", track_user);


// 3. 


let cart_viewed = setInterval(function() {
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
        let event_name = "cart_page_viewed";
        let properties = {
            "customProperties": {
                "page_url": {
                    "t": "string",
                    "v": "http://127.0.0.1:5500/demo_site/cart.html"
                },
                "page_title": {
                    "t": "string",
                    "v": "Cart page"
                }
            }
        }
        _cl.pageview(event_name, properties);
        clearInterval(cart_viewed);
    }
}, 1000);


//  4. 


let track_cart2 = setInterval(function() {
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {

        let pdt_name = document.getElementsByClassName("h3.product-title").value;
        let pdt_price = document.getElementsByClassName("strong.product-price").value;        

        let event_name = "add_to_cart";
        let properties = {
            "productProperties": [{
                "product_name": {
                    "t": "string",
                    "v": prod_name
                },
                "product_price": {
                    "t": "number",
                    "v": prod_price
                }
            }],
            "customProperties": {
                "page_url": {
                    "t": "string",
                    "v": "http://127.0.0.1:5500/demo_site/index.html"
                },
                "clicked_from": {
                    "t": "string",
                    "v": "index/products"
                }
            }
        }
        _cl.trackClick(event_name, properties)
        clearInterval(track_cart2)
    }
}, 1000);

document.querySelector("span.icon-cross").addEventListener("click", track_cart2);


//   4. 


let track_cart = setInterval(function() {
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {

        let pdt_name_s = document.getElementsByClassName("h3.product-title").value;
        let pdt_price_s = document.getElementsByClassName("strong.product-price").value;

        let event_name = "cart";
        let properties = {
            "productProperties": [{
                "product_name": {
                    "t": "string",
                    "v": prod_name
                },
                "product_price": {
                    "t": "number",
                    "v": prod_price
                }
            }],
            "customProperties": {
                "page_url": {
                    "t": "string",
                    "v": "http://127.0.0.1:5500/demo_site/shop.html"
                },
                "clicked_from": {
                    "t": "string",
                    "v": "shop/products"
                }
            }
        }
        _cl.trackClick(event_name, properties)
        clearInterval(track_cart)
    }
}, 1000);

document.querySelector("span.add_to_cart_btn").addEventListener("click", track_cart);

//5

function trackPurchase(data) {
   
    if (!data || !data.event || !data.ecommerce || !data.ecommerce.transaction_id) {
        console.error("Invalid data format. Required fields missing.");
        return;
    }

    
    var { event, ecommerce } = data;


    var properties = {
        "transaction_id": { "t": "string", "v": ecommerce.transaction_id },
        "value": { "t": "number", "v": ecommerce.value || 0 },
        "tax": { "t": "number", "v": ecommerce.tax || 0 },
        "shipping": { "t": "number", "v": ecommerce.shipping || 0 },
        "currency": { "t": "string", "v": ecommerce.currency || "" },
        "coupon": { "t": "string", "v": ecommerce.coupon || "" },
        "items": []
    };


    if (ecommerce.items && ecommerce.items.length > 0) {
        ecommerce.items.forEach(function (item) {
            var itemProperties = {
                "item_id": { "t": "string", "v": item.item_id || "" },
                "item_name": { "t": "string", "v": item.item_name || "" },
                "discount": { "t": "number", "v": item.discount || 0 },
                "item_brand": { "t": "string", "v": item.item_brand || "" },
                "item_category": { "t": "string", "v": item.item_category || "" },
                "item_variant": { "t": "string", "v": item.item_variant || "" },
                "price": { "t": "number", "v": item.price || 0 },
                "quantity": { "t": "number", "v": item.quantity || 0 }
            };

            
            properties.items.push(itemProperties);
        });
    }

    
    _cl.trackClick(event, { "customProperties": properties });
}

var data = {
    event: "purchase",
    ecommerce: {
        transaction_id: "T_12345",
        value: 25.42,
        tax: 4.90,
        shipping: 5.99,
        currency: "USD",
        coupon: "SUMMER_SALE",
        items: [
            {
                item_id: "SKU_12345",
                item_name: "Stan and Friends Tee",
                discount: 2.22,
                item_brand: "Google",
                item_category: "Apparel",
                item_variant: "green",
                price: 9.99,
                quantity: 1
            },
            {
                item_id: "SKU_12346",
                item_name: "Google Grey Women's Tee",
                item_category: "Apparel",
                discount: 3.33,
                item_brand: "Google",
                item_variant: "gray",
                price: 20.99,
                quantity: 1
            }
        ]
    }
};

trackPurchase(data);

