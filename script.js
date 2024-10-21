





function check(){
    let letter = document.getElementById('input').value;
    let result = document.getElementById('result');
    if( letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U'){
        result.innerHTML=(`Its a Vowel`);

    }

    else if( letter !== 'a' || letter !== 'e' || letter !== 'i' || letter !== 'o' || letter !== 'u' || letter !== 'A' || letter !== 'E' || letter !== 'I' || letter !== 'O' || letter !== 'U'){
        result.innerHTML=(`Its a consonant`);
    }

    else {
        result.innerHTML=(`Please enter a character`);

    }

}

function reset(){
    letter = document.getElementById('input').value = '';
    result = document.getElementById('result').innerHTML ='';
 

}
