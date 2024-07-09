// Selecting form and result elements from the DOM
const form = document.querySelector('#form');
const result = document.querySelector('.result p')

// Event listener for form submission
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior, it will stop to reload page
    e.preventDefault();

    // Extracting height and weight values from the form
    const height = parseInt(e.target.height.value);
    const weight = parseInt(e.target.weight.value);

    // Validation for height input
    if (height === '' || height === '' || isNaN(height) || height < 1) {
        result.innerHTML = `Please Enter a valid Height`;
    } 
    // Validation for weight input
    else if (weight === '' || weight === '' || isNaN(weight) || weight < 1) {
        result.innerHTML = `Please Enter a valid Weight`;
    } 
    // Calculate BMI and display result
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Categorize BMI and display corresponding message
        if (bmi < 18.5) {
            result.innerHTML = `BMI score : <b>${bmi}<br></b> Oops! You are <b> Under Weight. </b>`;
        } else if (bmi <= 24.90 && bmi >= 18.50) {
            result.innerHTML = `BMI score : <b>${bmi}<br></b> Hurray! Your weight is <b> Normal. </b>`;
        } else if (bmi <= 29.9 && bmi >= 25) {
            result.innerHTML = `BMI score : <b>${bmi}<br></b> Oops! You are <b> Over Weight. </b>`;
        } else {
            result.innerHTML = `BMI score : <b>${bmi}<br></b> Oops! You are <b> Obese. </b>`;
        }

    }

    // Reset the form after submission
    e.target.reset();
});
