import Topbar from './pages/components/Topbar';
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Product from './pages/Product';
import Price from './pages/Price';
import Team from './pages/Teams';
import Testimonials from './pages/Testimonials';
import Blogs from './pages/Blogs';
import Details  from './pages/Details';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
