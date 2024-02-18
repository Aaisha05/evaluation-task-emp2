import React, { useState } from 'react';
import './form.css'

function Form() {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeId: '',
    department: '',
    dob: '',
    gender: '',
    designation: '',
    salary: ''
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

    if (
      formData.employeeName.trim() === '' ||
      formData.employeeId.trim() === '' ||
      formData.department.trim() === '' ||
      formData.dob.trim() === '' ||
      formData.gender.trim() === '' ||
      formData.designation.trim() === '' ||
      formData.salary.trim() === ''
    ) {
      alert('Please fill in all fields');
      return;
    }
    
    if (formData.employeeName.length > 30) {
      alert('Employee name must be within 30 characters');
      return;
    }
   
    if (formData.salary.length > 8) {
      alert('Salary must be within 8 digits');
      return;
    }
    
    alert('Form submitted successfully!');
    // You can perform further actions like sending the data to the backend here
  };

  return (
    
    <div>
      <h1 className='font-semibold text-3xl text-center mt-10 mb-6'>Employee Management Form</h1>
      <div className="flex justify-center px-60">
        <form onSubmit={handleSubmit} className="w-full mx-auto rounded-lg px-10 py-8 bg-white mt-3 border border-gray-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
            <div className="mb-1">
              <label htmlFor="employeeName" className="block mb-3">Employee Name:</label>
              <input type="text" id="employeeName" name="employeeName" value={formData.employeeName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="mb-1">
              <label htmlFor="employeeId" className="block mb-3">Employee ID:</label>
              <input type="text" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="mb-1">
              <label htmlFor="department" className="block mb-3">Department:</label>
              <select id="department" name="department" value={formData.department} onChange={handleChange} className="w-full px-3 py-2 border rounded-md">
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
              </select>
            </div>
            <div className="mb-1">
              <label htmlFor="dob" className="block mb-3">Date of Birth:</label>
              <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="mb-1">
              <label className="block mb-3">Gender:</label>
              <div>
                <label htmlFor="male" className="mr-4">
                  <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} /> Male
                </label>
                <label htmlFor="female" className="mr-4">
                  <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} /> Female
                </label>
                <label htmlFor="other">
                  <input type="radio" id="other" name="gender" value="Other" onChange={handleChange} /> Other
                </label>
              </div>
            </div>
            <div className="mb-1">
              <label htmlFor="designation" className="block mb-3">Designation:</label>
              <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="mb-10">
              <label htmlFor="salary" className="block mb-3">Salary:</label>
              <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-20 py-3 rounded-sm hover:bg-blue-600 mx-auto block">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;


