let resultScreen=document.getElementById('result')

function display(number){
    resultScreen.value += number;
}
function calculate(){
    try {
       resultScreen.value= eval(resultScreen.value); 
    } catch (error) {
        alert("Invalid syntax");
    }
}
function Clear(){
    resultScreen.value="";
}
function del(){
    resultScreen.value= resultScreen.value.slice(0,-1);

}