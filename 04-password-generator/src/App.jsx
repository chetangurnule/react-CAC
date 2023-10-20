// import { useEffect, useState, useRef } from 'react'
// import './App.css'

// function App() {
//   const[length, setLength] = useState(8);
//   const[number, setNumber] = useState(false);
//   const[symbol, setSymbol] = useState(false);
//   const[password, setPassword] = useState("");


//   // useRef Hook
//     let passwordRef = useRef(null);

//   // function to implement logic of password generator
//   function passGenerator(){
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     let num = "0123456789";
//     let sym = "!@#$%^&*-_+=[]{}~`"
//     if(number) str += num;
//     if(symbol) str += sym;
//     console.log(str);
//     for(let i = 1; i <= length; i++){
//       let index = Math.floor(Math.random() * str.length);
//       pass += str.charAt(index);
//     }
//     setPassword(pass);
//   }

//   // function to copy password to clipboard
//   function copyPasswordToClipboard(){
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 20);
//     window.navigator.clipboard.writeText(password);
//   }



//   // useEffect hook to call passGenerator function when any of the dependencies form [length, number, character] this arr changes
//   useEffect(() => {
//     passGenerator();
//   },[length, number, symbol]);



//   return (
//     <>
//       <div className=' bg-gray-800 w-full max-w-md mx-auto my-4 px-4 py-4 rounded-lg text-white'>
//         <h2 className=' text-4xl text-white text-center'>Password Generator</h2>


//         {/* ******************** div for input tag and button ***************** */}
//         <div className='flex overflow-hidden my-4 gap-1'>
//           <input
//             type='text'
//             value={password}
//             className='rounded-lg outline-none w-full px-2 py-2 text-black'
//             placeholder='Password'
//             readOnly
//             ref={passwordRef}
//           />
//           <button className='bg-blue-500 px-3 py-2 rounded-lg hover:bg-blue-800 hover:text-black' onClick={copyPasswordToClipboard}>Copy</button>
//         </div>

//         {/* ******************** div for length numbers and characters *************** */}
//         <div className='flex text-sm gap-x-5 justify-center flex-wrap'>
//           <div className='flex items-center gap-x-1'>
//             <input
//               type='range'
//               min={8}
//               max={20}
//               value={length}
//               className=' cursor-pointer'
//               onChange={(e) => setLength(e.target.value)}
//             />
//             <label className='text-orange-500'>Length ({length})</label>
//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input
//               type='checkbox'
//               className=' cursor-pointer'
//               onChange={() => {
//                 setNumber((prev) => !prev);
//               }}
//             />
//             <label className='text-orange-500'>Numbers</label>
//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input
//               type="checkbox"
//               className=' cursor-pointer'
//               onChange={() => {
//                 setSymbol((prev) => !prev);
//               }}
//             />
//             <label className='text-orange-500'>Symbols</label>
//           </div>
//         </div>
//       </div>
//     </> 
//   )
// }

const schema = [
  {
    name: "userName",
    input: "text",
    defaultValue: "john doe",
    isRequired: true,
  },
  {
    name: "email",
    input: "email",
    defaultValue: "",
    isRequired: true,
  },
  {
    name: "age",
    input: "number",
    defaultValue: 25,
    isRequired: false,
  },
];

// export default App
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState(
    schema.reduce((data, field) => {
      data[field.name] = field.defaultValue;
      return data;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    schema.forEach((field) => {
      if (field.isRequired && !formData[field.name]) {
        newErrors[field.name] = `${field.name} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form Data:", formData);
    }
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit}>
        {schema.map((field) => (
          <div key={field.name}>
            <label>{field.name}:</label>
            <input
              type={field.input}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
            {errors[field.name] && <span>{errors[field.name]}</span>}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
