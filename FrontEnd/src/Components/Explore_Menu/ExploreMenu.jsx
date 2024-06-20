import { menu_list } from "../../data/assets";

const ExploreMenu = (props) => {
	const { category, setCategory } = props;

	return (
		<>
			<div className=''>
				<h1 className='text-[2rem] text-text_bold font-bold pb-3 '>
					Explore our menu
				</h1>
				<p className='text-base pb-4 max-w-[50rem]'>
					Choose from a diverse selection featuring a delectable array of dishes
					crafted with finest ingredients from around the world. Our mission is
					to satisfy your dinning experience, one delicious meal at a time.
				</p>
				<div
					className='flex justify-between items-center gap-6 text-center my-6 md:overflow-x-scroll overflow-x-scroll'
					id='explore_menu_list'
				>
					{
						/* Mapping through the menu items */
						menu_list.map((item, index) => (
							<div
								key={index}
								onClick={() =>
									setCategory((prev) =>
										prev === item.menu_name ? "All" : item.menu_name
									)
								}
								className=''
							>
								<img
									src={item.menu_image}
									alt='menu images'
									className={`md:w-24 md:h-24 w-20 h-20 rounded-full transition-all cursor-pointer ${
										category === item.menu_name
											? "border-4 border-yellow_accent_2 p-[2px]"
											: ""
									}`}
								/>
								{console.log(category)}
								<p className='mt-3 text-text_light'>{item.menu_name}</p>
							</div>
						))
					}
				</div>
				<hr className='h-[2px] bg-[#e2e2e2] border-none my-3' />
			</div>
		</>
	);
};

export default ExploreMenu;
