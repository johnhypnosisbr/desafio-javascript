//creates variable equal to screen element on HTML
const screenElement = document.getElementById('screen');

//Sets the screenElement to 0
screenElement.value = '0';

//Clears the screen element value back to 0
function clearFunction(){
    document.getElementById('screen').value = '0'
};

//Adds the number specified in the HTML button to the current screen Element string
function addNumber(n){
    let screenContent = screenElement.value;
    if (screenContent == '0'){
        screenContent = ''
    }
    screenContent += n;
    screenElement.value = screenContent
};


//Applies eval calculation function to the current string 
function equalsBtn(){
    let screenContent = screenElement.value;
    screenContent = eval(screenContent);
    showResult(screenContent);
};

//Inputs the number onto the screen
function showResult(n){
    screenElement.value = n;
}