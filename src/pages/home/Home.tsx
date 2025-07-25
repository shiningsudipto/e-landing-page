import Header from "@/components/shared/Header";
import Hero from "@/pages/home/components/Hero";
import ProductGrid from "@/pages/home/components/ProductGrid";
import Footer from "@/components/shared/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
