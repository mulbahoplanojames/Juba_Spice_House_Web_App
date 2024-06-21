import { Route, Routes } from "react-router-dom";
import Navbar from "/src/Layout/Navbar";

import Home from "/src/Pages/Home/Home.jsx";
import Menu from "./Pages/Menu/Menu";
import ContactUs from "./Pages/Contact_Us/ContactUs";
// import About from "/src/ Pages/About";
import PlaceOrder from "/src/Pages/PlaceOrder/PlaceOrder.jsx";
import Cart from "/src/Pages/Cart/Cart.jsx";
import Footer from "./Layout/Footer";

const App = () => {
	return (
		<>
			<div className='lg:w-[80%] w-[90%] m-auto font-montserrat'>
				<Navbar />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/menu' element={<Menu />} />
					{/* <Route path='/about' element={<About />} /> */}
					<Route path='/contactUs' element={<ContactUs />} />
					<Route path='/order' element={<PlaceOrder />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</div>
			{/* <Footer /> */}
		</>
	);
};

export default App;
