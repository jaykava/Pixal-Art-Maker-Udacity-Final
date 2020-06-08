let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');


let height = document.getElementById('inputHeight').value;    
let width = document.getElementById('inputWidth').value;
makeGrid(height,width);



sizePicker.addEventListener('click',(e) =>{

    e.preventDefault();

    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    table.firstChild.remove();

    makeGrid(height,width);

    
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {

    for (let i = 0; i <= height; i++){
        let row = table.insertRow(i);
        for (let j = 0; j <= width; j++){
            let cell = row.insertCell(j);
            cell.addEventListener('click', (e) => {
                console.log(e);
                cell.style.backgroundColor = color.value; //color fill
            });
        }
    }



}
