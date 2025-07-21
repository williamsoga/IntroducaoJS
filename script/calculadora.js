function somar(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    
    let soma=parseFloat(num1)+ parseFloat(num2);

    document.getElementById("resultado").innerHTML="Resultado" + soma;
}

function subtrair() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    let resultado = parseFloat(num1) - parseFloat(num2);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function dividir() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    if(parseFloat (num2)===0){
        document.getElementById("resultadp").innerHTML="erro:divisão por zero";

    } else { 
        let resultado = parseFloat(num1) / parseFloat(num2);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

    }
     
    
}

function multiplicar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    let resultado = parseFloat(num1) * parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
