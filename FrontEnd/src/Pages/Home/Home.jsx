import { useState } from "react";
import ExploreMenu from "../../Components/Explore_Menu/ExploreMenu";
import Header from "../../Components/Header/Header";
import FoodDsiplay from "../../Components/Food_Display/FoodDsiplay";

const Home = () => {
	const [category, setCategory] = useState("All");
	return (
		<>
			<Header />
			<ExploreMenu category={category} setCategory={setCategory} />
			<FoodDsiplay category={category} />
		</>
	);
};

export default Home;
