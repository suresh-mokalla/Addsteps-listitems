import React, { useState } from "react";

const StepForm = () => {
  const [steps, setSteps] = useState([
    { title: "Step 1", description: "" },
  ]);

  const handleDescriptionChange = (index, event) => {
    const newSteps = [...steps];
    newSteps[index].description = event.target.value;
    setSteps(newSteps);
  };

  const addStep = () => {
    const newStepIndex = steps.length + 1;
    const newStep = {
      title: `Step ${newStepIndex}`,
      description: "",
    };
    setSteps([...steps, newStep]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>List Items</h2>
      
      {/* Add Step button */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={addStep}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Step
        </button>
      </div>

      {/* Step Cards */}
      <div style={{ position: "relative", marginTop: "20px" }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #000",
              margin: "10px 0",
              padding: "10px",
              position: "relative", // Make each card relative to contain the line
            }}
          >
            <h3>{step.title}</h3>
            <textarea
              style={{ width: "100%", padding: "1px", resize: "none" }}
              rows="3"
              value={step.description}
              onChange={(event) => handleDescriptionChange(index, event)}
              placeholder={`Enter description for ${step.title}`}
            />
            
            {/* Vertical Line below the card */}
            {index < steps.length - 1 && (
              <div
              style={{
                position: "absolute",
                top: "100%",  // Starts at the bottom of the card
                left: "50%",  // Center line horizontally
                width: "2px",
                height: "13px",  // Increased height between steps to match the larger cards
                backgroundColor: "#000",
                zIndex: 0,
              }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepForm;
