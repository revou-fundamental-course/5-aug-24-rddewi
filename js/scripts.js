function hitungBMI() {
    // Get input values and convert to numbers
    const beratBadan = parseFloat(document.getElementById("bb").value);
    const tinggiBadan = parseFloat(document.getElementById("tinggi").value) / 100; // Convert to meters

    // Validate input
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || beratBadan <= 0 || tinggiBadan <= 0) {
        alert("Mohon masukkan berat badan dan tinggi badan yang valid.");
        return;
    }

    // Calculate BMI
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);

    // Determine BMI category and message
    let measure;
    if (bmi <= 18.4) {
        measure = "Your BMI is " + bmi.toFixed(1) + " which means " + "you are Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Your BMI is " + bmi.toFixed(1) + " which means " + "You are Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Your BMI is " + bmi.toFixed(1) + " which means " + "You are Overweight";
    } else if (bmi >= 30) {
        measure = "Your BMI is " + bmi.toFixed(1) + " which means " + "You are Obese";
    }

    // Display the result
    document.getElementById("hasilBMI").textContent = bmi.toFixed(1); 
    document.getElementById("hasilContainer").style.display = "block"; // Show the result section
}