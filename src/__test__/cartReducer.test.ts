import { describe, it, expect } from "vitest";
import { cartReducer } from "../context/CartContext";
import type { Product, CartState, CartAction } from "../context/CartContext";

const sampleProduct: Product = {
  id: "p1",
  name: "Test Product",
  price: 100,
  image: "img.png",
  description: "A product",
};

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

describe("cartReducer", () => {
  it("should add a new item", () => {
    const action: CartAction = { type: "ADD_ITEM", payload: sampleProduct };
    const state = cartReducer(initialState, action);

    expect(state.items.length).toBe(1);
    expect(state.total).toBe(100);
    expect(state.itemCount).toBe(1);
  });

  it("should increment quantity if item already exists", () => {
    const stateWithItem: CartState = {
      items: [{ ...sampleProduct, quantity: 1 }],
      total: 100,
      itemCount: 1,
    };

    const action: CartAction = { type: "ADD_ITEM", payload: sampleProduct };
    const newState = cartReducer(stateWithItem, action);

    expect(newState.items.length).toBe(1);
    expect(newState.items[0].quantity).toBe(2);
    expect(newState.total).toBe(200);
    expect(newState.itemCount).toBe(2);
  });

  it("should remove an item", () => {
    const stateWithItem: CartState = {
      items: [{ ...sampleProduct, quantity: 2 }],
      total: 200,
      itemCount: 2,
    };

    const action: CartAction = { type: "REMOVE_ITEM", payload: "p1" };
    const newState = cartReducer(stateWithItem, action);

    expect(newState.items.length).toBe(0);
    expect(newState.total).toBe(0);
    expect(newState.itemCount).toBe(0);
  });

  it("should update quantity of an item", () => {
    const stateWithItem: CartState = {
      items: [{ ...sampleProduct, quantity: 2 }],
      total: 200,
      itemCount: 2,
    };

    const action: CartAction = {
      type: "UPDATE_QUANTITY",
      payload: { id: "p1", quantity: 3 },
    };

    const newState = cartReducer(stateWithItem, action);

    expect(newState.items[0].quantity).toBe(3);
    expect(newState.total).toBe(300);
    expect(newState.itemCount).toBe(3);
  });

  it("should remove item if quantity is 0 in update", () => {
    const stateWithItem: CartState = {
      items: [{ ...sampleProduct, quantity: 1 }],
      total: 100,
      itemCount: 1,
    };

    const action: CartAction = {
      type: "UPDATE_QUANTITY",
      payload: { id: "p1", quantity: 0 },
    };

    const newState = cartReducer(stateWithItem, action);

    expect(newState.items.length).toBe(0);
    expect(newState.total).toBe(0);
    expect(newState.itemCount).toBe(0);
  });

  it("should clear cart", () => {
    const filledState: CartState = {
      items: [{ ...sampleProduct, quantity: 2 }],
      total: 200,
      itemCount: 2,
    };

    const action: CartAction = { type: "CLEAR_CART" };
    const newState = cartReducer(filledState, action);

    expect(newState.items.length).toBe(0);
    expect(newState.total).toBe(0);
    expect(newState.itemCount).toBe(0);
  });

  it("should load cart from payload", () => {
    const payloadState: CartState = {
      items: [{ ...sampleProduct, quantity: 5 }],
      total: 500,
      itemCount: 5,
    };

    const action: CartAction = { type: "LOAD_CART", payload: payloadState };
    const newState = cartReducer(initialState, action);

    expect(newState).toEqual(payloadState);
  });
});
