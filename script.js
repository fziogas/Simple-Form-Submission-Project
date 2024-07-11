window.onload = () => {
    const inputField = document.getElementById("numberInput");
    const errorElement = document.getElementById("error");
    const submitButton = document.getElementById("submitButton");
  
    inputField.addEventListener("input", () => {
      const value = parseFloat(inputField.value);
      if (isNaN(value) || value <= 10) {
        errorElement.textContent = "Please enter a number greater than 10.";
        submitButton.disabled = true;
      } else {
        errorElement.textContent = "";
        submitButton.disabled = false;
      }
    });
  
    document.getElementById("form").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
    });
  };
  