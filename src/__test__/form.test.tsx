import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Checkout from "@/pages/Checkout";
import { CartProvider } from "@/context/CartContext";

// render CartProvider
const renderWithProviders = () =>
  render(
    <MemoryRouter>
      <CartProvider>
        <Checkout />
      </CartProvider>
    </MemoryRouter>
  );

describe("Shipping Information Form", () => {
  beforeEach(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 20,
            quantity: 2,
            image: "test.jpg",
          },
        ],
        total: 40,
      })
    );
  });

  it("renders all form fields", () => {
    renderWithProviders();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
  });

  it("accepts valid input and submits", async () => {
    renderWithProviders();

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/address/i), {
      target: { value: "123 Main Street" },
    });
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "New York" },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "017111111" },
    });

    fireEvent.click(screen.getByRole("button", { name: /complete order/i }));

    // 👇 Processing indicator should appear
    expect(await screen.findByText(/processing/i)).toBeInTheDocument();
  });
});
