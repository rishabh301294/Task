// Empty array to store the Dynamic Drop Down Values.
var dropDown = [];

// Function to count the number of rows and push the elements into the array as per the condition.
function CountRows() {
        var table = document.getElementById("example");
        var rows = table.getElementsByTagName("tr")
		for(var i=10;i<rows.length - 1;i+=10){
		if(i>20){
		i+=10
	}
	dropDown.push(i)
	}
	var last = $(dropDown).get(-1);
	if (rows.length-1 > last)
	{
	last+=20;
	dropDown.push(last);
	}
  }
  
// Load the datatable and assigning the lengthMenu options to dropDown array.
$(document).ready(function() {
	CountRows()
    $('#example').DataTable( {		
        "lengthMenu": dropDown
    } );
} );
