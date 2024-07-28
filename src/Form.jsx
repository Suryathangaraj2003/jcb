import React, { forwardRef } from 'react';
import axios from 'axios';

const FormComponent = forwardRef((props, ref) => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    place: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Form submitted:', formData);
    const data ={
        name: formData.name,
        phone: formData.phone,
        place: formData.place
    }
    axios.post('https://sheet.best/api/sheets/2a16e910-15cd-47ef-86f0-b9aba0e262de',data).then((response)=>{
        //console.log(response.data);
        //formData.name  ="",
        //formData.phone  ="",
        //formData.place  =""
        setFormData({
            name: '',
            phone: '',
            place: ''
        })
    })
  };

  return (
    <div ref={ref} className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-left">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-blue-500 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-left">Phone Number:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-blue-500 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="place" className="block text-gray-700 font-semibold mb-2 text-left">Place:</label>
          <input 
            type="text" 
            id="place" 
            name="place" 
            value={formData.place} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-blue-500 rounded-lg"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
});

export default FormComponent;
