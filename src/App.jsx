import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductBoard from "./components/ProductBoard";
import {ProductDataProvider} from "./provider"

const App = () => {
  return (
    <ProductDataProvider>
      <Header />
      <ProductBoard />
      <Footer />
    </ProductDataProvider>
  );
};

export default App;
