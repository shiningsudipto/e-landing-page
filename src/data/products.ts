import { Product } from '@/context/CartContext';
import headphonesImg from '@/assets/product-headphones.jpg';
import phoneImg from '@/assets/product-phone.jpg';
import laptopImg from '@/assets/product-laptop.jpg';
import watchImg from '@/assets/product-watch.jpg';
import speakerImg from '@/assets/product-speaker.jpg';
import mouseImg from '@/assets/product-mouse.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: headphonesImg,
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
  },
  {
    id: '2',
    name: 'Smartphone Pro',
    price: 899.99,
    image: phoneImg,
    description: 'Latest generation smartphone with advanced camera system and lightning-fast performance.',
  },
  {
    id: '3',
    name: 'Ultra-Thin Laptop',
    price: 1299.99,
    image: laptopImg,
    description: 'Powerful laptop with sleek design, perfect for professionals and creative work.',
  },
  {
    id: '4',
    name: 'Smart Fitness Watch',
    price: 399.99,
    image: watchImg,
    description: 'Advanced fitness tracking with heart rate monitoring and GPS functionality.',
  },
  {
    id: '5',
    name: 'Wireless Speaker',
    price: 199.99,
    image: speakerImg,
    description: 'Portable wireless speaker with 360-degree sound and long battery life.',
  },
  {
    id: '6',
    name: 'Gaming Mouse Pro',
    price: 79.99,
    image: mouseImg,
    description: 'Precision gaming mouse with customizable RGB lighting and ergonomic design.',
  },
];