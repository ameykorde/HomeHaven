import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddressSelectPage.css'; // Import your custom styles
import { BASE_URL } from '../../../services/url'; // Update with your actual path

const AddressSelectPage = () => {
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newAddress, setNewAddress] = useState({
    street: '',
    city: 'Pune', // Default city
    state: '',
    postalCode: '',
    mobileNumber: '',
  });
  const [cartTotal, setCartTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddresses = async () => {
      // Retrieve userId from localStorage
      const userData = JSON.parse(localStorage.getItem('userData'));
      const userId = userData?.userId;

      if (!userId) {
        alert('User is not logged in. Please log in first.');
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/addresses/user/${userId}`);
        setSavedAddresses(response.data || []);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    const fetchCartTotal = async () => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      const userId = userData?.userId;

      if (!userId) {
        alert('User is not logged in. Please log in first.');
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/carts/user/${userId}`);
        const total = response.data.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(total);
      } catch (error) {
        console.error('Error fetching cart total:', error);
      }
    };

    fetchAddresses();
    fetchCartTotal();
  }, []);

  const handleProceed = () => {
    navigate("/summary");
  };

  const handleAddNewAddress = () => {
    setIsAddingNew(true);
  };
  const handleSaveAddress = async (event) => {
    event.preventDefault();
    // Retrieve userId from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData?.userId;
  
    if (!userId) {
      alert('User is not logged in. Please log in first.');
      return;
    }
  
    try {
      // POST request with the address payload
      const response = await axios.post(`${BASE_URL}/addresses/user/${userId}`, newAddress);
      // Add the new address to the list
      setSavedAddresses([...savedAddresses, response.data]);
      setIsAddingNew(false);
      // Clear the form
      setNewAddress({
        street: '',
        city: 'Pune',
        state: '',
        postalCode: '',
        mobileNumber: '',
      });
    } catch (error) {
      console.error('Error saving address:', error.response ? error.response.data : error.message);
      alert('Failed to add address. Please try again.');
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Side - Saved Addresses or Add New Address */}
        <div className="col-md-6">
          <h4>{isAddingNew ? 'Add New Address' : 'Select or Add New Address'}</h4>
          {isAddingNew ? (
            <form onSubmit={handleSaveAddress}>
              <div className="mb-3">
                <label htmlFor="street" className="form-label">Street</label>
                <input type="text" name="street" className="form-control" id="street" value={newAddress.street} onChange={handleChange} placeholder="Enter street address" required />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" name="city" className="form-control" id="city" value={newAddress.city} onChange={handleChange} placeholder="Enter city" required />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">State</label>
                <input type="text" name="state" className="form-control" id="state" value={newAddress.state} onChange={handleChange} placeholder="Enter state" required />
              </div>
              <div className="mb-3">
                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                <input type="text" name="postalCode" className="form-control" id="postalCode" value={newAddress.postalCode} onChange={handleChange} placeholder="Enter postal code" required />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                <input type="text" name="mobileNumber" className="form-control" id="mobileNumber" value={newAddress.mobileNumber} onChange={handleChange} placeholder="Enter mobile number" required />
              </div>
              <button type="submit" className="btn btn-outline" style={{ backgroundColor: "#079bab", color: "white" }}>Save Address</button>
              <button type="button" className="btn btn-outline-danger ms-2" onClick={() => setIsAddingNew(false)}>Cancel</button>
            </form>
          ) : (
            <div>
              {savedAddresses.length > 0 ? (
                <div>
                  <h5>Saved Addresses</h5>
                  {savedAddresses.map((address, index) => (
                    <div key={index} className="address-card">
                      <p><strong>{address.fullName}</strong></p>
                      <p>{address.street}, {address.city}, {address.state} - {address.postalCode}</p>
                      <p>Mobile: {address.mobileNumber}</p>
                      <button className="btn btn-outline-primary" onClick={() => handleProceed()}>Select</button>
                    </div>
                  ))}
                  <button className="btn btn-secondary mt-3" onClick={handleAddNewAddress}>Add New Address</button>
                </div>
              ) : (
                <div>
                  <p>No address available.</p>
                  <button className="btn btn-primary" onClick={handleAddNewAddress}>Add New Address</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side - Rental Payment Info */}
        <div className="col-md-6">
          <div className="p-4 bg-light rounded">
            <p>Your rental payment and tenure will begin from the date of delivery</p>
            <p>Once the order has been placed, you might be required to share a few documents for KYC</p>
            <h5>Total rent (Excl GST):</h5>
            <p className="fs-3">₹ {cartTotal.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSelectPage;
