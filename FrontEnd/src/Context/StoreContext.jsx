import { createContext, useState } from "react";
import { food_list } from "../data/assets";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
	const [cartItems, setCartItems] = useState({});

	const addTOCart = (itemId) => {
		if (!cartItems[itemId]) {
			setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
		} else {
			setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
		}
	};

	const contextValue = {
		food_list,
	};

	return (
		<storeContext.Provider value={contextValue}>
			{props.children}
		</storeContext.Provider>
	);
};

export default StoreContextProvider;
