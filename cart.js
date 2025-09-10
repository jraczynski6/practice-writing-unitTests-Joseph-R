function addItem(cart, item, quantity) {
    if (!item || typeof item !== "string") return cart;      
    if (typeof quantity !== "number" || quantity <= 0) return cart; // 

    if (cart[item]) {
        cart[item] += quantity;
    } else {
        cart[item] = quantity;
    }
    return cart;
}

function removeItem(cart, item) {
    if (cart[item]) {
        delete cart[item];
    }
    return cart;
}

function getTotalItems(cart) {
    let cartTotal = 0;
    for (let item in cart) {
        cartTotal += cart[item];
    }
    return cartTotal;
}

module.exports = {
    addItem,
    removeItem,
    getTotalItems
};