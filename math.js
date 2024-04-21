class calculator{
    add (a, b){
        return a + b;
    };
    substract (a, b){
        return a - b;
    };
    multiply (a, b){
        return a*b;
    };
    divide (a, b){
        if(b === 0){
            return 'Error: no se puede dividir por cero'
        } 
        return a / b;
    };
    squareRoot (a){
       
        return Math.sqrt(a);
    };
    cubeRoot (a){
        return Math.cbrt(a);
    };
    power (a, b){
        return Math.pow(a, b)
    };

};


function startCalculator(){
    const calculador = new calculator();
    const operation = prompt('Elije la operación: sumar, restar, dividir, multiplicar, raiz cuadrada, raiz cubica, potencia').toLowerCase();

    if(operation === "sumar"){
        const num1 = parseFloat(prompt('Ingresa el primer numero: '));
        const num2 = parseFloat(prompt('Ingresa el segundo Numero: '));
        const result = calculador.add(num1, num2);
        alert(`El resultado es: ${result}`)
    }else if(operation === "restar"){
        const num1 = parseFloat(prompt('Ingresa el primer numero: '));
        const num2 = parseFloat(prompt('Ingresa el segundo Numero: '));
        const result = calculador.substract(num1, num2);
        alert(`El resultado es: ${result}`)
    }else if(operation === "multiplicar"){
        const num1 = parseFloat(prompt('Ingresa el primer numero: '));
        const num2 = parseFloat(prompt('Ingresa el segundo Numero: '));
        const result = calculador.multiply(num1, num2);
        alert(`El resultado es: ${result}`)
    }else if(operation === "dividir"){
        const num1 = parseFloat(prompt('Ingresa el primer numero: '));
        const num2 = parseFloat(prompt('Ingresa el segundo Numero: '));
        const result = calculador.divide(num1, num2);
        alert(`El resultado es: ${result}`)
    }else if(operation === "raiz cuadrada"){
        const num = parseFloat(prompt('Ingresa el numero: '));
        const result = calculador.squareRoot(num);
        alert(`El resultado es: ${result}`)
    }else if(operation === "raiz cuadrada"){
        const num = parseFloat(prompt('Ingresa el numero: '));
        const result = calculador.cubeRoot(num);
        alert(`El resultado es: ${result}`)
    }else if(operation === "potencia"){
        const base = parseFloat(prompt('Ingresa la base: '));
        const potencia = parseFloat(prompt('Ingresa la potencia: '))
        const result = calculador.power(base, potencia);
        alert(`El resultado es: ${result}`)
    }else {
        alert('Operación invalida. Por favor, elige una operación válida.')
    }
}

startCalculator();





