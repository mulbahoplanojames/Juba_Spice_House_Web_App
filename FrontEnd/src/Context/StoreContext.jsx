import { createContext, useEffect, useState } from "react";
import { food_list } from "../data/assets";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
	const [cartItems, setCartItems] = useState({});

	const addToCart = (itemId) => {
		if (!cartItems[itemId]) {
			setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
		} else {
			setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
		}
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);

	const contextValue = {
		food_list,
		cartItems,
		setCartItems,
		addToCart,
		removeFromCart,
	};

	return (
		<storeContext.Provider value={contextValue}>
			{props.children}
		</storeContext.Provider>
	);
};

export default StoreContextProvider;
