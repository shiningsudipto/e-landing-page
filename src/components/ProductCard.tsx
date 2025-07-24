import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="group bg-card rounded-xl shadow-card hover:shadow-floating transition-all duration-500 overflow-hidden transform hover:scale-105">
      {/* Image Container */}
      <div className="aspect-square overflow-hidden bg-gradient-card">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < 4 ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">(4.0)</span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-card-foreground">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
          </div>

          <Button
            variant="accent"
            size="sm"
            onClick={handleAddToCart}
            className="group"
          >
            <Plus className="h-4 w-4 mr-1 transition-transform group-hover:rotate-90" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Sale Badge */}
      <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
        Sale
      </div>
    </div>
  );
};

export default ProductCard;