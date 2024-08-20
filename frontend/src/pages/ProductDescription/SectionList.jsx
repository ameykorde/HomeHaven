import React from "react";
import "./SectionList.css"; // Import the CSS file

const SectionList = () => {
  const toggleOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasExample");
    if (offcanvasElement) {
      const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
      bsOffcanvas.toggle();
    } else {
      console.error("Offcanvas element not found!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="">
        {[
          { name: "Cancellation And Returns", icon: "package_2" },
          { name: "Care Instruction", icon: "fact_check" },
          { name: "Quality Performance", icon: "thumb_up" },
          { name: "Warranty", icon: "verified" },
          { name: "FAQ", icon: "help_outline" },
        ].map((section) => (
          <div key={section.name} className="section-item" onClick={toggleOffcanvas}>
            <div className="section-content">
              <span className="material-symbols-outlined icon">{section.icon}</span>
              <span>{section.name}</span>
              <span className="material-symbols-outlined arrow">arrow_circle_right</span>
            </div>
          </div>
        ))}
      </div>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-end" id="offcanvasExample">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Section Details
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Here will be the content related to the clicked section.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionList;
