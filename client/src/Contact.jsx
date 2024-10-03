/**
 * File Name: Contact.jsx
 * Student’s Name: Toluwalase Fasoyin
 * StudentID: 301359772
 * Date: September 30th 2024
 */

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
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
    // Here you can handle form submission logic (e.g., sending data to a server)
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:tfasoyi2@my.centennialcollege.ca">tfasoyi2@my.centennialcollege.ca</a></p>
        <p>Phone: <a href="tel:+6479979634">+1 (647) 997-9634</a></p>
      </div>
    </div>
  );
};

export default Contact;
