import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/listings">Listings</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;







































// // src/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <nav className="Navbar">
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/listings">Listings</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;
