const { addItem, removeItem, getTotalItems } = require("../cart");

describe("Shopping Cart Module", () => {
    let cart;

    //beforeEach in Jest is a setup function that executes a specified callback function before each individual test
    beforeEach(() => {
        cart = {};
    });

    //positives
    test("add item to cart", () => {
        addItem(cart, "fruit", 2);
        expect(cart.fruit).toBe(2);
    });
    
    test("remove item from cart", () => {
        addItem(cart, "fruit", 2);
        removeItem(cart, "fruit",);
        expect(cart).toEqual({});
    });

    test("total number of items", () => {
        addItem(cart, "fruit", 2);
        expect(getTotalItems(cart)).toBe(2);
    });

    //Negatives
    test("Invalid quantity when additem", () => {
        addItem(cart, "fruit", -1);
        expect(cart).toEqual({});
    });

    test("invalid item name when remove item", () => {
        addItem(cart, "fruit", 2);
        removeItem(cart, "");
        expect(cart).toEqual({fruit: 2});
    });

    //Edge Cases
    test("0 items in cart", () => {
        expect(getTotalItems(cart)).toBe(0);
    });

    test("removeItem when cart is empty", () => {
        removeItem(cart, "fruit");
        expect(cart).toEqual({});
    });

})