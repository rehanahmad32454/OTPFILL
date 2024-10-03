// const codes = document.querySelectorAll(".code");
// codes[0].focus();
// let otp = [];
// codes.forEach((code, idx) => {
//   code.addEventListener("keydown", (e) => {
//     if (e.key >= 0 && e.key <= 9) {
//       e.preventDefault(); // Prevent default behavior
//       code.value = e.key; // Set the value to the pressed key

//       // Move to the next input if it exists
//       if (idx < codes.length - 1) {
//         setTimeout(() => codes[idx + 1].focus(), 10);
//       }
//     } else if (e.key === "Backspace") {
//       e.preventDefault(); // Prevent default behavior
//       code.value = ""; // Clear current input

//       // Move to the previous input if it exists
//       if (idx > 0) {
//         setTimeout(() => codes[idx - 1].focus(), 10);
//       }
//     }
//     otp[idx] = code.value;
//   });
// });
const codes = document.querySelectorAll(".code");
codes[0].focus();
let otp = [];

// Function to handle OTP paste
codes.forEach((code, idx) => {
  code.addEventListener("paste", (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, codes.length); // Limit the pasted data to the length of the inputs
    pastedData.split("").forEach((char, i) => {
      if (codes[i]) {
        codes[i].value = char;
        otp[i] = char;
      }
    });

    if (pastedData.length === codes.length) {
      codes[codes.length - 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      e.preventDefault(); // Prevent default behavior
      code.value = e.key; // Set the value to the pressed key

      // Move to the next input if it exists
      if (idx < codes.length - 1) {
        setTimeout(() => codes[idx + 1].focus(), 10);
      }
    } else if (e.key === "Backspace") {
      e.preventDefault(); // Prevent default behavior
      code.value = ""; // Clear current input

      // Move to the previous input if it exists
      if (idx > 0) {
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
    }
    otp[idx] = code.value;
  });
});