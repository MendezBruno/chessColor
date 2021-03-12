const challengeFunction = function(cell1, cell2){
    celdasPares = ["B","D","F","H"];
    colorcell1 =  celdasPares.includes(cell1.charAt(0)) ^ Number(cell1.charAt(1))%2 === 0;
    colorCell2 =  celdasPares.includes(cell2.charAt(0)) ^ Number(cell2.charAt(1))%2 === 0;
    return colorcell1 ^ colorCell2 ? false : true;
}

module.exports = challengeFunction
