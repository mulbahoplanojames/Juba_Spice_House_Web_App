import { menu_list } from "../../data/assets";

const ExploreMenu = () => {
	return (
		<>
			<div className=''>
				<h1 className='text-4xl font-bold '>Explore Our Menu</h1>
				<p className=''>
					Choose from a diverse selection featuring a delectable array of dishes
					crafted with finest ingredients from around the world. Our mission is
					to satisfy your dinning experience, one delicious meal at a time.
				</p>
				<div className=''>
					{
						/* Mapping through the menu items */
						menu_list.map((item, index) => (
							<div key={index} className=''>
								<img src={item.menu_image} alt='menu images' className='' />
								<p>{item.menu_name}</p>
							</div>
						))
					}
				</div>
			</div>
		</>
	);
};

export default ExploreMenu;
