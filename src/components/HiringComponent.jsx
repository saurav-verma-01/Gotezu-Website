import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const TrainerHiringForm = ({ trainer }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    trainerName: trainer.name,
    trainerCategory: trainer.category,
    createdAt: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'trainerHiringRequests'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        trainerName: trainer.name,
        trainerCategory: trainer.category
      });
    } catch (error) {
      console.error("Error submitting request: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Hire {trainer.name}</h3>
        
        {submitSuccess ? (
          <div className="text-green-600 mb-4">
            Request submitted successfully! We'll contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
              ></textarea>
            </div>

            <input type="hidden" name="trainerName" value={trainer.name} />
            <input type="hidden" name="trainerCategory" value={trainer.category} />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TrainerHiringForm;