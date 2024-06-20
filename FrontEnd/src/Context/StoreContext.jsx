import { createContext } from "react";
import { food_list } from "../data/assets";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
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
