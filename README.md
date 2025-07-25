# Frontend Cart Showcase - TechStore

### Live site: https://techstore-shiningsudipto.netlify.app

This project is a frontend application showcasing a shopping cart experience with products, checkout process, and order confirmation.

## Pages

The application includes the following key pages:

- **Home Page (`/`)**: Displays a grid of products available for purchase.
- **Checkout Page (`/checkout`)**: Allows users to review their cart, enter shipping information, and complete their order.
- **Order Success Page (`/order-success`)**: Confirms the successful placement of an order.
- **Not Found Page (`/*`)**: A catch-all page for routes that do not exist.

## Technology Stack

This project is built using the following technologies:

- **React**
- **TypeScript**
- **Vite**
- **Tailwind**
- **Radix-UI**
- **Zod**
- **Sonner**
- **Vitest**

## Functionality

- **Product Listing**: Browse a variety of products with details like name, description, price, and image.
- **Shopping Cart**: Add products to the cart, adjust quantities, and remove items.
- **Checkout Process**: A multi-step checkout form for entering shipping details.
- **Order Placement**: Simulate order submission and receive an order confirmation.
- **Responsive Design**: The application is designed to be responsive and work well on various screen sizes.
- **Form Validation**: Client-side form validation using Zod and React Hook Form.
- **Notifications**: User feedback through toast notifications powered by Sonner.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shiningsudipto/e-landing-page.git
    cd e-landing-page
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Running Tests

To run the unit tests, use the following command:

```bash
npm test
```
