// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table = $("#pixelCanvas");
const colorPicker = $("#colorPicker");


function makeGrid() {
    const height = parseInt($("#inputHeight").val());
    const width = parseInt( $("#inputWidth").val());
    
    for(let row = 0; row < height; row++) {
        let tr = $("<tr></tr>");
        
        for(let col = 0; col < width; col++) {
            tr.append("<td></td>");
        }
    table.append(tr);
    }
}

$("#submitBtn").on("click", makeGrid);


$(table).on("click", "td", function(){
    let color = colorPicker.val();
    $(this).css("background-color", color);
});
