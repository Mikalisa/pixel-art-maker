
// Get the color picker using its id
const colorPicker = document.getElementById('colorPicker');

// Get the pixel canvas using its id
const table = document.getElementById('pixelCanvas');
let hightX, widthY;


/*
  This function lets the user create a grid of squares 
  representing their design, and apply colors to those squares.
  Users can set the size of the table dynamically, click a cell in
  the grid to fill that cell with the chosen color, and choose the color they want.
*/
function makeGrid() {
  // Your code goes here!
  table.innerHTML = '';

  //get the user input values for grid height and grid width.
  hightX = document.getElementById("inputHeight").value;
  widthY = document.getElementById("inputWidth").value;
  
  // A loop for inserting the rows number given by the user.
  for (var i = 0; i<hightX; i++){
    let row = table.insertRow(i);
    // A loop for inserting the cells into the rows
    for (var j = 0; j < widthY; j++){
      let cell = row.insertCell(j);

      // add a color when the click event fire.
      cell.addEventListener('click', function(event){
        cell.style.backgroundColor = colorPicker.value;
      });
      
      // clear the color when making a double
      // click that triggers the dbclick event on a square.
      cell.addEventListener('dblclick', function(){
        cell.style.backgroundColor = '';
      });
    }
  }
}


// Get the submit button using its id
const submitSize = document.querySelector('#submitSize');
// Run makeGrid function when click event triggered by the user on submit button.
submitSize.addEventListener("click", function(e){
    e.preventDefault();
    makeGrid();
});




