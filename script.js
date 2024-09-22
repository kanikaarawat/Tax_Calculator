function calculateTax() {
  const income = parseFloat(document.getElementById('income').value);
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const hra = parseFloat(document.getElementById('HRA').value);
  const ta = parseFloat(document.getElementById('TA').value); 
  const da = parseFloat(document.getElementById('DA').value); 

  if (isNaN(income) || income < 0 || isNaN(age) || age < 0) {
    document.getElementById('result').textContent = 'Invalid income or age';
    return;
  }

  let tax, monthly,annual;
  monthly = income + (income*(hra/100)) + (income*(da/100)) + (income*(ta/100));
  annual = monthly*12;

  if (age < 18) {
    tax = 0;
  } else {
    if (gender === 'male') {
      if (annual < 500000) {
        tax = 0;
      } else if (annual <= 1000000) {
        tax = annual * 0.10;
      } else if (annual <= 1500000) {
        tax = annual * 0.20;
      } else {
        tax = annual * 0.30;
      }
    } else if (gender === 'female') {
      if (annual < 500000) {
        tax = 0;
      } else if (annual <= 1000000) {
        tax = annual * 0.05; 
      } else if (annual <= 1500000) {
        tax = annual * 0.15; 
      } else {
        tax = annual * 0.25; 
      }
    }
  }

  document.getElementById('result').textContent = `Tax: ${tax.toFixed(2)}`;
}
