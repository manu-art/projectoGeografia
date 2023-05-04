// Define an array of country-capital city pairs
const countries = [
    { country: 'France', capital: 'Paris' },
    { country: 'Spain', capital: 'Madrid' },
    { country: 'Germany', capital: 'Berlin' },
    // add more countries and capitals here
  ];
  
  // Get a random country and its capital
  const randomIndex = Math.floor(Math.random() * countries.length);
  const question = countries[randomIndex];
  const correctAnswer = question.capital;
  
  // Shuffle the answer options
  const answerOptions = [
    correctAnswer,
    getCapital(),
    getCapital(),
    getCapital(),
  ].sort(() => Math.random() - 0.5);
  
  // Render the question and answer options to the user
  const questionElement = document.getElementById('question');
  const answerElements = document.querySelectorAll('.answer');
  questionElement.textContent = `What is the capital city of ${question.country}?`;
  answerElements.forEach((element, index) => {
    element.textContent = answerOptions[index];
    element.addEventListener('click', () => {
      if (element.textContent === correctAnswer) {
        alert('Correct!');
      } else {
        alert('Incorrect!');
      }
    });
  });
  
  // Helper function to get a random capital city
  function getCapital() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex].capital;
  }
  