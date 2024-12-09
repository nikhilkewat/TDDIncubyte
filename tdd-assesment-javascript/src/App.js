import React, { useState } from "react";
import { Calculator } from "./classes/calculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState({ message: '', success: true });
  const [operation] = useState("add");
  const [allowNegative, setAllowNegative] = useState(false);

  const handleCalculate = () => {
    try {
      const calculator = new Calculator({ operation, allowNegative });
      const calculationResult = calculator.calculate(input);
      setResult({ message: calculationResult, success: true });
    } catch (error) {
      setResult({ message: error.message, success: false });
    }
  };

  return (
    <div className="container">
      <div style={{ height: "100vh", padding: "50px 20px" }}>
        <div className="border border-info rounded border-2 p-3">
          <h5>TDD String Calculator</h5>
          <div className="row g-3">
            <div className="col-12">
              <textarea
                type="text"
                rows={3}
                placeholder="Enter numbers (e.g., 1,2,3)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="form-control"
                name="txtValue"
              />
            </div>
            <div className="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  name="chkAllowNegative"
                  type="checkbox" checked={allowNegative}
                  onChange={(e) => setAllowNegative(e.target.checked)}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Allow Negative Numbers
                </label>
              </div>
            </div>
            <div className="col-12 d-grid">
              <button onClick={handleCalculate} className="btn btn-success btn-medium btn-block">
                Calculate
              </button>
            </div>

          </div>
          {result.message !== "" && <div className="d-grid">
            <div className={`${result.success ? "text-success" : "text-danger"} fw-bold`}>Result: {result.message}</div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default App;
