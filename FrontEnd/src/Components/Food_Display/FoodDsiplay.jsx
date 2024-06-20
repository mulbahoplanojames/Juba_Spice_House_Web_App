import { useContext } from "react";
import { storeContext } from "../../Context/StoreContext";
import FoodCard from "../Food_Card/FoodCard";

const FoodDsiplay = ({ category }) => {
  const { food_list } = useContext(storeContext);

  return (
    <>
      <div className="mt-8">
        <h1 className="pb-6 text-2xl">Top dishes near you</h1>

        <div className="lg:grid-cols-4 md:grid-cols-2 place-items-center grid grid-cols-1 gap-6">
          {food_list.map((foodItem, i) => (
            <FoodCard
              key={i}
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

export default FoodDsiplay;
