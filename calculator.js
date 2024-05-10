const OutputScreen = document.getElementById('output-screen');

function display(num){
    OutputScreen.value += num;
}
function del(){
    OutputScreen.value = OutputScreen.value.slice(0,-1);
}
function clr(){
    OutputScreen.value = "";
}
function calculate(){
    try{
        OutputScreen.value = eval(OutputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}