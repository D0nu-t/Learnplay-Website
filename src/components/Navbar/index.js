import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
//style={{color : "white"}}
const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='./pg2'  >
		About Us
		</NavLink>
		<NavLink to='./pg2'  >
		Schools
		</NavLink>
		<NavLink to='./pg2' >
		Parents
		</NavLink>
		<NavLink to='./pg2'  >
		Teachers
		</NavLink>
		<NavLink to='./pg2'  >
		Careers
		</NavLink>
		<NavLink to='./pg2'  >
		Contact Us
		</NavLink>
		
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Login/Signup</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
