import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Listings from './Listings';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';
import Navbar from './Navbar';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <h1>Welcome To Your Real Estate Website</h1>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listings" element={<Listings />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;




























// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
// import Home from './Home';
// import Listings from './Listings';
// import Contact from './Contact';
// import Footer from './footer';
// import './App.css';
// import Navbar from './Navbar';


// const App = () => {
//     return (
//         <Router>
//             <div className="App">
//                 <header className="App-header">
//                     <h1>Find Your Own Home Here...</h1>
//                 </header>
//                 <main>
//                     <Routes>
//                         <Route path="/" exact component={Home} />
//                         <Route path="/listings" component={Listings} />
//                         <Route path="/contact" component={Contact} />
//                     </Routes>
//                 </main>
//                 <Footer />
//             </div>
//         </Router>
//     );
// };

// export default App;































// // Importing necessary modules from React and axios, and the CSS file for styling.
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
// import './App.css';
// import Footer from './footer';
// import Home from './Home';
// import Listings from './Listings';
// import Contact from './Contact';


// // Defining the main App component.
// const App = () => {
//     // useState hook to manage the listings state, initialized as an empty array.
//     const [listings, setListings] = useState([]);

//     // useEffect hook to perform side effects in function components.
//     useEffect(() => {
//         // Making a GET request to fetch the listings data from the server.
//         axios.get('http://localhost:5000/listings')
//             .then(response => setListings(response.data)) // On success, update the listings state with the fetched data.
//             .catch(error => console.error(error)); // On failure, log the error to the console.
//     }, []); // The empty dependency array ensures this effect runs only once after the initial render.

//     // Returning the JSX to be rendered.
//     return (
//         <Router>

        
//         <div className="App">
//             <header className="App-header">
//                 <h1>Find Your Own Home Hear...</h1> {/* Main header of the app */}
//             </header>
//             <main>
//                 <div className="listings">
//                     {/* Mapping over the listings array to display each listing. */}
//                     {listings.map(listing => (
//                         <div className="listing" key={listing._id}> {/* Unique key for each child element */}
//                             <img src={listing.imageUrl} alt={listing.title} /> {/* Image of the listing */}
//                             <h2>{listing.title}</h2> {/* Title of the listing */}
//                             <p>{listing.description}</p> {/* Description of the listing */}
//                             <p>${listing.price}</p> {/* Price of the listing */}
//                         </div>
//                     ))}
//                 </div>
//             </main>
//             <Footer />
//         </div>
//         </Router>
//     );
// }

// // Exporting the App component as the default export.
// export default App;




































































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';

// const App = () => {
//     const [listings, setListings] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5000/listings')
//             .then(response => setListings(response.data))
//             .catch(error => console.error(error));
//     }, []);

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Real Estate Listings</h1>
//             </header>
//             <main>
//                 <div className="listings">
//                     {listings.map(listing => (
//                         <div className="listing" key={listing._id}>
//                             <img src={listing.imageUrl} alt={listing.title} />
//                             <h2>{listing.title}</h2>
//                             <p>{listing.description}</p>
//                             <p>${listing.price}</p>
//                         </div>
//                     ))}
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default App;































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
