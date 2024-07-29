function countAllPaarl(regNumbers) {
    // Split the input string into an array of registration numbers
    const regArray = regNumbers.split(','); // Split by comma
  
    // Filter the array to get only those that start with 'CJ'
    const paarlArray = regArray.filter(reg => {
      const trimmedReg = reg.trim(); // Trim any extra spaces
      return trimmedReg.startsWith('CJ'); // Check if it starts with 'CJ'
    });
  
    // Return the count of registration numbers from Paarl
    return paarlArray.length;
  }

  export default countAllPaarl;