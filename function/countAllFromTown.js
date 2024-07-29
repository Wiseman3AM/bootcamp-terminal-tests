// Function to count all registration numbers from a specific town
function countAllFromTown(regNumbers, townCode) {
    // Split the input string into an array of registration numbers
    const regArray = regNumbers.split(','); // Split by comma
  
    // Filter the array to get only those that start with the specified town code
    const townArray = regArray.filter(reg => {
      const trimmedReg = reg.trim(); // Trim any extra spaces
      return trimmedReg.startsWith(townCode); // Check if it starts with the specified code
    });
  
    // Return the count of registration numbers from the specific town
    return townArray.length;
  }
  
export default countAllFromTown;  