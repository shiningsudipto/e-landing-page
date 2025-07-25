import React, { useState, useEffect } from "react";
import { Package } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Loader from "@/components/shared/Loader";

const ProductGrid: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // visualize loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="products" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please wait...
            </p>
          </div>

          <Loader />
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Package className="h-4 w-4 text-accent" />
            <span className="text-accent text-sm font-medium">
              Featured Products
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover cutting-edge technology designed to enhance your digital
            lifestyle with premium quality and innovation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
