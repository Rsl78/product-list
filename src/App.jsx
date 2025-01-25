import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductBoard from "./components/ProductBoard";
import {
  CartDataProvider,
  CategoryDataProvider,
  ProductDataProvider,
} from "./provider";

const App = () => {
  return (
    <ProductDataProvider>
      <CategoryDataProvider>
        <CartDataProvider>
          <Header />
          <ProductBoard />
          <Footer />
        </CartDataProvider>
      </CategoryDataProvider>
    </ProductDataProvider>
  );
};

export default App;
