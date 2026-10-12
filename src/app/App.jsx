import { CartProvider, CartDrawer } from '@features/cart';
import { Header } from '@features/header';
import { Hero } from '@features/hero';
import { DealsSection } from '@features/deals';
import { MenuSection } from '@features/menu';
import { AboutSection } from '@features/about';
import { LocationsSection } from '@features/locations';
import { Footer } from '@features/footer';

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <DealsSection />
        <MenuSection />
        <AboutSection />
        <LocationsSection />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
