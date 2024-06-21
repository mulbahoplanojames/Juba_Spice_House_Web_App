import { useState } from "react";
import ExploreMenu from "../../Components/Explore_Menu/ExploreMenu";
import FoodDsiplay from "../../Components/Food_Display/FoodDsiplay";

const Menu = () => {
	const [category, setCategory] = useState("All");

	return (
		<>
			<div className='md:pt-10 pt-4'>
				<ExploreMenu category={category} setCategory={setCategory} />
				<FoodDsiplay category={category} />
			</div>
		</>
	);
};

export default Menu;
