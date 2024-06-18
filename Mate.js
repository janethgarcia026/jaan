const mate = {};

//SUMA 
function suma(a,b){
    return a+b
};

//RESTA
function resta (a,b){
    return a-b
};

//MULTIPLICACIÓN
function multiplicación (a,b) {
    return a*b
};

//DIVISIÓN
function división (b,a) {
    return b/a
};

mate.suma=suma;

mate.resta=resta;

mate.multiplicación=multiplicación;

mate.división=división;

module.exports=mate;