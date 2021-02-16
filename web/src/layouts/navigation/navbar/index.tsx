import NavbarIO from './navbar_io';
import NavbarLayout from './navbar_layout';

const Navbar = ({ year }) => {
	return (
		<NavbarIO>
			{({ loading, menuItems }) => (
				<NavbarLayout
					year={year}
					loading={loading}
					menuItems={menuItems}
				></NavbarLayout>
			)}
		</NavbarIO>
	);
};

export default Navbar;
