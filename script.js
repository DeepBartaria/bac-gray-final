function convertToGray() {
    let bcd = document.getElementById("bcdInput").value;
    
    // Validate input (must be 4-bit binary)
    if (bcd.length !== 4 || !/^[01]+$/.test(bcd)) {
        document.getElementById("result").innerHTML = "Please enter a valid 4-bit binary number.";
        return;
    }

    // Convert BCD to Gray code
    let gray = bcd[0]; // First bit remains the same
    for (let i = 1; i < bcd.length; i++) {
        gray += (bcd[i - 1] ^ bcd[i]); // XOR each bit with the previous bit
    }

    document.getElementById("result").innerHTML = `Gray Code: ${gray}`;
}