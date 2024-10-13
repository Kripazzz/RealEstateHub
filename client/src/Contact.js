import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/contact', formData)
            .then(response => {
                alert('Message sent successfully');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(error => console.error('There was an error sending the message!', error));
    };

    return (
        <div className="Contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;









































































// // src/Contact.js (Updated)
// import React, { useState } from 'react';
// import './Contact.css';
// import axios from 'axios';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:5000/contact', formData)
//             .then(response => {
//                 alert('Message sent successfully');
//                 setFormData({ name: '', email: '', message: '' });
//             })
//             .catch(error => console.error('There was an error sending the message!', error));
//     };

//     return (
//         <div className="Contact">
//             <h2>Contact Us</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} />
//                 </label>
//                 <label>
//                     Email:
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} />
//                 </label>
//                 <label>
//                     Message:
//                     <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default Contact;
























// // import React from 'react';
// // import './Contact.css';

// // const Contact = () => {
// //     return (
// //         <div className="Contact">
// //             <h2>Contact Us</h2>
// //             <form>
// //                 <label>
// //                     Name:
// //                     <input type="text" name="name" />
// //                 </label>
// //                 <label>
// //                     Email:
// //                     <input type="email" name="email" />
// //                 </label>
// //                 <label>
// //                     Message:
// //                     <textarea name="message"></textarea>
// //                 </label>
// //                 <button type="submit">Submit</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Contact;
