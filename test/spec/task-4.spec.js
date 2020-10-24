import ShoppingCart from '../../src/task-4/task-4';
import phones from '../../src/task-4/phones.json';

const phone1 = phones[0],
  phone2 = phones[1];

let cartEl, cart;

function createCartStub() {
  cartEl = document.createElement('div');

  cartEl.innerHTML = `
<div>
    <p class="empty-cart-message">Your cart is empty. Buy something!</p>
    <ul class="shopping-cart-list"></ul>

    Total: $<span class="total">0</span>
    <button class="remove-all d-none">Remove All!</button>
</div>`;

  cart = new ShoppingCart(cartEl);
}

describe('Task 4: Shopping Cart', () => {
  beforeEach(createCartStub);

  it('should show "no items" message when there\'s no items in cart', () => {
    const el = cartEl.querySelector('.empty-cart-message');
    expect(el.classList.contains('d-none')).toBe(false);

    cart.addItem(phone1);

    expect(el.classList.contains('d-none')).toBe(true);

    cart.removeItem(phone1.id);

    expect(el.classList.contains('d-none')).toBe(false);
  });

  it('should show "remove all" button when there are items in cart', () => {
    const el = cartEl.querySelector('.remove-all');
    expect(el.classList.contains('d-none')).toBe(true);

    cart.addItem(phone1);

    expect(el.classList.contains('d-none')).toBe(false);

    cart.removeItem(phone1.id);

    expect(el.classList.contains('d-none')).toBe(true);
  });

  it('should add and remove items to/from list', () => {
    expect(cart.isCartEmpty()).toBe(true);
    expect(cart.isItemInCart(phone1.id)).toBe(false);

    cart.addItem(phone1);

    expect(cart.isCartEmpty()).toBe(false);
    expect(cart.isItemInCart(phone1.id)).toBe(true);

    cart.removeItem(phone1.id);

    expect(cart.isCartEmpty()).toBe(true);
    expect(cart.isItemInCart(phone1.id)).toBe(false);
  });

  it('should have "remove all" button which removes all items in cart', () => {
    cart.addItem(phone1);
    cart.addItem(phone1);
    cart.addItem(phone2);

    cartEl.querySelector('.remove-all').click();

    expect(cart.isCartEmpty()).toBe(true);
  });

  it('should have "remove" button for each item in list', () => {
    cart.addItem(phone1);
    cart.addItem(phone2);
    cart.addItem(phone2);

    cartEl.querySelector(`button.remove[data-item-id="${phone2.id}"]`).click();

    expect(cart.isItemInCart(phone1.id)).toBe(true);
    expect(cart.isItemInCart(phone2.id)).toBe(false);
  });

  it('should have "total" sum of all items in cart', () => {
    const totalEl = cartEl.querySelector('span.total');
    expect(+totalEl.innerHTML).toBe(0);

    cart.addItem(phone1);
    expect(+totalEl.innerHTML).toBe(phone1.price);

    cart.addItem(phone1);
    expect(+totalEl.innerHTML).toBe(phone1.price * 2);

    cart.addItem(phone2);
    expect(+totalEl.innerHTML).toBe(phone1.price * 2 + phone2.price);

    cart.removeAll();

    expect(+totalEl.innerHTML).toBe(0);
  });
});
