// Importing the useContext hook from the React library. This hook allows us to access the context
// provided by the StoreContext.
import { useContext } from "react";

// Importing the storeContext from the StoreContext file. This context provides the food_list array
// that we will be using to display the food items.
import { storeContext } from "../../Context/StoreContext";

// Importing the FoodCard component from the Food_Card folder. This component is responsible for
// displaying each individual food item.
import FoodCard from "../Food_Card/FoodCard";

// Defining the FoodDisplay component. This component is responsible for displaying the top dishes
// near the user.
const FoodDsiplay = ({ category }) => {
	// Using the useContext hook to access the food_list array from the storeContext.
	const { food_list } = useContext(storeContext);

	// Returning JSX that will be rendered on the screen.
	return (
		<>
			{/* Adding a margin top of 8 pixels to create some space between this component and the 
          previous component. */}
			<div className='mt-8'>
				{/* Adding a heading that says "Top dishes near you" */}
				<h1 className='pb-6 text-2xl'>Top dishes near you</h1>

				{/* Adding a grid layout with 4 columns for large devices, 2 columns for medium devices, 
            and a single column for small devices. The items in the grid are centered both 
            vertically and horizontally. */}
				<div className='lg:grid-cols-4 md:grid-cols-2 place-items-center grid grid-cols-1 gap-6'>
					{/* Mapping through the food_list array and rendering a FoodCard component for each item. 
              The key prop is set to the index of the item in the array. */}
					{food_list.map((foodItem, i) => (
						<FoodCard
							key={i}
							// Passing the name, image, price, description, and category of the food item as props
							// to the FoodCard component.
							name={foodItem.name}
							image={foodItem.image}
							price={foodItem.price}
							description={foodItem.description}
							cateory={foodItem.category}
						/>
					))}
				</div>
			</div>
		</>
	);
};

// Exporting the FoodDisplay component so that it can be used in other parts of the application.
export default FoodDsiplay;