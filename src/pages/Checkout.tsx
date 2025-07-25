import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Truck, Lock } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formFields = [
  {
    name: "email",
    label: "Email",
    placeholder: "john@example.com",
  },
  {
    name: "name",
    label: "Name",
    placeholder: "John Doe",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "123 Main Street",
  },
  {
    name: "city",
    label: "City",
    placeholder: "New York",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "+1 (555) 123-4567",
  },
] as const;

const checkoutSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  address: z.string().min(5, "Please enter a valid address"),
  city: z.string().min(2, "Please enter a valid city"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { state, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: "",
      name: "",
      address: "",
      city: "",
      phone: "",
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Order submitted:", {
      orderData: data,
      cartItems: state.items,
    });
    clearCart();
    setIsProcessing(false);
    navigate("/order-success");
  };

  const shippingCost = 9.99;
  const tax = state.total * 0.08; // 8% tax
  const finalTotal = state.total + shippingCost + tax;

  const summaryItems = [
    { label: "Subtotal", value: state.total },
    { label: "Shipping", value: shippingCost },
    { label: "Tax", value: tax },
  ];

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Add some items to your cart before checking out.
          </p>
          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Store
          </Button>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Customer Information Form */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-accent" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {formFields.map((field) => (
                      <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name}
                        render={({ field: f }) => (
                          <FormItem>
                            <FormLabel>{field.label}</FormLabel>
                            <FormControl>
                              <Input placeholder={field.placeholder} {...f} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Order Summary */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-2">
                        {item.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  {summaryItems.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{item.label}</span>
                      <span>${item.value.toFixed(2)}</span>
                    </div>
                  ))}

                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-accent">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-accent" />
                  Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>
                      Your payment information is secure and encrypted
                    </span>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={form.handleSubmit(onSubmit)}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Processing...
                      </>
                    ) : (
                      `Complete Order - $${finalTotal.toFixed(2)}`
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
