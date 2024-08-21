import React, { useState } from "react";
import "./SectionList.css";

const sections = [
  { 
    name: "Cancellation And Returns", 
    icon: "package_2", 
    description: "Learn about our cancellation and return policies." 
  },
  { 
    name: "Care Instruction", 
    icon: "fact_check", 
    description: "Tips on how to care for your product to ensure longevity." 
  },
  { 
    name: "Quality Performance", 
    icon: "thumb_up", 
    description: "Details about the quality standards we adhere to." 
  },
  { 
    name: "Warranty", 
    icon: "verified", 
    description: "Information on the warranty provided for the product." 
  },
  { 
    name: "FAQ", 
    icon: "help_outline", 
    description: "Frequently Asked Questions to help you out." 
  },
];

const SectionList = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="container mt-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className="section-item d-flex align-items-center justify-content-between"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          onClick={() => handleSectionClick(section)}
        >
          <span className="material-symbols-outlined icon me-2">{section.icon}</span>
          <span>{section.name}</span>
          <span className="material-symbols-outlined arrow">arrow_circle_right</span>
        </div>
      ))}

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            {selectedSection ? selectedSection.name : "Section Details"}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            {selectedSection ? selectedSection.description : "Select a section to see more details."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionList;
