import { Route, Routes } from "react-router-dom";
import Navbar from "/src/Layout/Navbar";

import Home from "/src/Pages/Home/Home.jsx";
// import Menu from "/src/Pages/Menu";
// import About from "/src/ Pages/About";
// import Contact from "/src/ Pages/Contact";
import PlaceOrder from "/src/Pages/PlaceOrder/PlaceOrder.jsx";
import Cart from "/src/Pages/Cart/Cart.jsx";

const App = () => {
	return (
		<div className='lg:w-[80%] w-[90%] m-auto font-montserrat'>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/menu' element={<Menu />} /> */}
				{/* <Route path='/about' element={<About />} /> */}
				{/* <Route path='/contact' element={<Contact />} /> */}
				<Route path='/order' element={<PlaceOrder />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</div>
	);
};

export default App;
