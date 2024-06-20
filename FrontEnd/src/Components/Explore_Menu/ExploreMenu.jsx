/*
 * This component is responsible for rendering the Explore Menu section
 * It receives a "category" and a "setCategory" prop, which are used to manage
 * the currently selected category
 */

/*
 * The assets object contains a collection of image paths and header text.
 * The menu_list array contains a collection of objects representing each menu option.
 */
import { assets, menu_list } from "../../data/assets";

const ExploreMenu = (props) => {
	const { category, setCategory } = props;

	return (
		<>
			<div className=''>
				<h1 className='text-[2rem] text-text_bold font-bold pb-3 '>
					Explore our menu
				</h1>
				{/* Header text */}
				<p className='text-base pb-4 max-w-[50rem]'>{assets.headerText}</p>
				{/* Menu items container */}
				<div
					className='flex justify-between items-center gap-6 text-center my-6 md:overflow-x-scroll overflow-x-scroll'
					id='explore_menu_list'
				>
					{
						// Map through the menu items
						menu_list.map((item, index) => (
							<div
								key={index}
								// Handle click event to set the category
								onClick={() =>
									setCategory((prev) =>
										prev === item.menu_name ? "All" : item.menu_name
									)
								}
								className=''
							>
								{/* Menu item image */}
								<img
									src={item.menu_image}
									alt='menu images'
									className={`md:w-24 md:h-24 w-20 h-20 rounded-full transition-all cursor-pointer ${
										category === item.menu_name
											? "border-4 border-yellow_accent_2 p-[2px]"
											: ""
									}`}
								/>
								{/* Print the current category */}
								{console.log(category)}
								{/* Menu item name */}
								<p className='mt-3 text-text_light'>{item.menu_name}</p>
							</div>
						))
					}
				</div>
				{/* Horizontal line */}
				<hr className='h-[2px] bg-[#e2e2e2] border-none my-3' />
			</div>
		</>
	);
};

export default ExploreMenu;
