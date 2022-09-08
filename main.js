function calculaMedia(){

    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    
    let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

    if (media >= 7){
        notaFinal.style.color = "#229a00";
        notaFinal.innerHTML =`Uhuu! Você se saiu muito bem, sua nota final foi ${media} foi aprovado! Parabéns!!`
    }else if(media > 5 && media < 7){
        notaFinal.style.color = "#ff6400";
        notaFinal.innerHTML = `Eita, você quase conseguiu, sua nota final foi ${media} você fará a recuperação, não desista!`
    }
    else {
        notaFinal.style.color = "#F20574";
        notaFinal.innerHTML = `Ops! Sua nota final foi ${media} você reprovou!Até o próximo semestre:)`
    }   
    
}

