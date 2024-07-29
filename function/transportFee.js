function transportFee(timeOfDay){
    const M = "R20"
    const A = "R10"
    const N = "free"
    switch(timeOfDay){
      case 'morning':
        return M;
      case 'afternoon':
        return A;
      case 'nightshift':
        return N;
                       }
     }

     export default transportFee;