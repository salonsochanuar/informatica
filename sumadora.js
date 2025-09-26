function sumarnumero(){
    let num1=prompt("ingrese el primer numero:");
    let num2=prompt("ingrese el segundo numero:");
    num1=Number(num1);
    num2=Number(num2);
    if(!isNaN(num1)&&!isNaN(num2)){
        let suma=num1+num2;
        alert("resultado: "+suma);
    }else{
        alert("ingrese solo numeros");
    }
}