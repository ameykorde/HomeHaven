import React from 'react';
import './AddressSelectPage.css'; // Import your custom styles

import { useNavigate } from "react-router-dom";
const AddressSelectPage = () => {

  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/summary");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Side - Add New Address */}
        <div className="col-md-6">
          <h4>Add New Address</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="fullName" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">Contact Number</label>
              <div className="input-group">
                <span className="input-group-text">🇮🇳</span>
                <input type="text" className="form-control" id="contactNumber" placeholder="Enter 10 digit number" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea className="form-control" id="address" rows="3" placeholder="Enter your address here including flat/building no."></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="landmark" className="form-label">Nearest Landmark</label>
              <input type="text" className="form-control" id="landmark" placeholder="Enter your nearest landmark (e.g. school, office, park, etc)" />
            </div>
            <div className="mb-3">
              <label htmlFor="postalCode" className="form-label">Postal Code</label>
              <input type="text" className="form-control" id="postalCode" placeholder="Enter 6 digit postal code" />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" value="Pune" readOnly />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleProceed}>Save & Proceed</button>
          </form>
        </div>

        {/* Right Side - Rental Payment Info */}
        <div className="col-md-6">
          <div className="p-4 bg-light rounded">
            <p>Your rental payment and tenure will begin from the date of delivery</p>
            <p>Once the order has been placed, you might be required to share a few documents for KYC</p>
            <h5>Total rent (Excl GST):</h5>
            <p className="fs-3">₹ 25,456.00</p>
            <button className="btn btn-link">View cart breakup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSelectPage;
