function hitungBMI() {      
  // Get input values and convert to numbers
  const beratBadan = parseFloat(document.getElementById("bb").value);
  const tinggiBadan = parseFloat(document.getElementById("tall").value) / 100; // Convert to meters

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
    measure = "BMI Anda adalah " + bmi.toFixed(1) + " yang artinya " + "Anda berat badan kurang";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    measure = "BMI Anda adalah " + bmi.toFixed(1) + " yang artinya " + "Anda normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    measure = "BMI Anda adalah " + bmi.toFixed(1) + " yang artinya " + "Anda kelebihan berat badan";
  } else if (bmi >= 30) {
    measure = "BMI Anda adalah " + bmi.toFixed(1) + " yang artinya " + "Anda Obesitas";
  }
  
  // Display the result
  document.getElementById("hasilBMI").textContent = bmi.toFixed(1);
  document.querySelector(".keterangan").innerHTML = `<span id="hasilBMI">${measure}</span>`;
  document.getElementById("hasilContainer").style.display = "block"; // Show the result section 
  }