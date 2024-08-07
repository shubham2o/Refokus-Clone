import Cards from "./components/Cards";
import Marquees from "./components/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

const App = () => {
  return (
    <div className='w-full h-screen font-["satoshi"] select-none'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  )
}

export default App;