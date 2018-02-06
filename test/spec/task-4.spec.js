import chai from "chai";
import ShoppingCart from "../../src/task-4/task-4";
import phones from "../../src/task-4/phones.json";

const assert = chai.assert;

let cartEl, cart;

function createCartStub() {
    cartEl = document.createElement("div");

    cartEl.innerHTML = `
<div>
    <p class="empty-cart-message">Your cart is empty. Buy something!</p>
    <ul class="shopping-cart-list"></ul>

    Total: $<span class="total">0</span>
    <button class="remove-all d-none">Remove All!</button>
</div>`;

    cart = new ShoppingCart(cartEl);
}

describe("Task 3: TableFilterer", () => {
    beforeEach(createCartStub);

    it("should show 'no items' message when there's no items in cart", () => {
        const el = cartEl.querySelector(".empty-cart-message");
        assert.isFalse(el.classList.contains("d-none"));

        cart.addItem(phones[0]);

        assert.isTrue(el.classList.contains("d-none"));

        cart.removeItem(phones[0].id);

        assert.isFalse(el.classList.contains("d-none"));
    });
});
