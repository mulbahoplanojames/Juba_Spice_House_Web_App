import { useState } from "react";

/*
 * Importing the ExploreMenu component from the Explore_Menu folder.
 * This component contains the menu items on the home page.
 */
import ExploreMenu from "../../Components/Explore_Menu/ExploreMenu";

/*
 * Importing the Header component from the Header folder.
 * This component contains the header of the website.
 */
import Header from "../../Components/Header/Header";

/*
 * Importing the FoodDsiplay component from the Food_Display folder.
 * This component contains the food items on the home page that is order in a card layout.
 */
import FoodDsiplay from "../../Components/Food_Display/FoodDsiplay";

const Home = () => {
	/*
	 * Using the useState hook to manage the state of the category.
	 * The initial value of category is "All".
	 */
	const [category, setCategory] = useState("All");

	return (
		<>
			{/* Rendering the Header component */}
			<Header />
			{/* Rendering the ExploreMenu component and passing the category and setCategory as props */}
			<ExploreMenu category={category} setCategory={setCategory} />
			{/* Rendering the FoodDsiplay component and passing the category as props */}
			<FoodDsiplay category={category} />
		</>
	);
};

// Exporting the Home component so that it can be used in other parts of the application.
export default Home;
