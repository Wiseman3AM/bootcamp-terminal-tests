function fromWhere(RegP){
    if (RegP.startsWith("CY")){
      return "Bellville";
    }else if (RegP.startsWith("CJ")){
      return "Paarl";
    }else if (RegP.startsWith("CA")){
      return "Cape Town";
    } else {return 'Some other place!';
           }
  }

  export default fromWhere;