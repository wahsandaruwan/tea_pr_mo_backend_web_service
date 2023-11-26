// ----------Utility function to shuffle an array----------
const ShuffleArray = (array) => {
  // Create a copy of the original array
  const shuffledArray = [...array];

  // Start from the last element and iterate backwards
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the current element with the randomly selected element
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
};

module.exports = { ShuffleArray };
