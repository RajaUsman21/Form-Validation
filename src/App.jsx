// import { useState } from "react";
// import "./App.css";
// import SignupForm from "./pages/signup";
// import LoginForm from "./pages/login"; 

// function App() {
//   return (
//     <>
//       <Header />
//       <Counter />
//       <SignupForm />
//       <LoginForm /> 
//       <p className='read-the-docs'>
//         This is practice for form validation in React
//       </p>
//     </>
//   );
// }



// const Header = () => {
//   return <h1>Form Validation with React Library Yup and Formik</h1>;
// };

// const Counter = () => {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");

//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log(fname, lname, phone, email);
//   };

//   return (
//     <div className='card'>
//       <h2>HTML Forms</h2>
//       <form>
//         <label htmlFor='fname'>First name:</label>
//         <br />
//         <input
//           type='text'
//           name='fname'
//           value={fname}
//           onChange={(e) => setFname(e.target.value)}
//         />
//         <br />
//         <label htmlFor='lname'>Last name:</label>
//         <br />
//         <input
//           type='text'
//           name='lname'
//           value={lname}
//           onChange={(e) => setLname(e.target.value)}
//         />
//         <br />
//         <label htmlFor='phone'>Phone Number:</label>
//         <br />
//         <input
//           type='text'
//           name='phone'
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <br />
//         <label htmlFor='email'>Email:</label>
//         <br />
//         <input
//           type='text'
//           name='email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <input type='submit' value='Submit' onClick={handleFormSubmission} />
//       </form>
//     </div>
//   );
// };

// export default App;
import { Route, Routes } from 'react-router-dom';
import SignupForm from './pages/signup';
import LoginForm from './pages/login';
import Home from './pages/home';
import Products from './pages/products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/products" element={<Products/>}/>
    </Routes>
  );
}

export default App;
