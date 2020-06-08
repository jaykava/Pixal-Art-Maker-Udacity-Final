let color = document.getElementById('colorPicker'); //color picker shown to user
let table = document.getElementById('pixelCanvas'); //canvas pixal table
let sizePicker = document.getElementById('sizePicker'); //size pick by user


let height = document.getElementById('inputHeight').value;    
let width = document.getElementById('inputWidth').value;
makeGrid(height,width); // grid generation based on user input


sizePicker.addEventListener('click',(e) =>{

    e.preventDefault();

    let height = document.getElementById('inputHeight').value;  
    let width = document.getElementById('inputWidth').value;
    table.firstChild.remove(); 

    makeGrid(height,width); // grid generation based on user input


});

// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) { //function define here whole logic.

    for (let i = 0; i < height; i++){
        let row = table.insertRow(i);
        for (let j = 0; j < width; j++){
            let cell = row.insertCell(j);
            cell.addEventListener('click', (e) => {
                console.log(e);
                cell.style.backgroundColor = color.value; //color fill by user.
            });
        }
    }

}
