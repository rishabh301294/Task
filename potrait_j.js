// Declared an array to store the table content

var TableData = new Array();
    
// Function to insert data into array from datatable	
$('#landscapeTable tr').each(function(row, tr){
    TableData[row]={
        "Name" : $(tr).find('td:eq(0)').text()
        , "Position" :$(tr).find('td:eq(1)').text()
        , "Office" : $(tr).find('td:eq(2)').text()
		, "DepartMent" : $(tr).find('td:eq(3)').text()
    }
}); 

// First row removed since its table header
TableData.shift();  

//For loop to append the data dynamically in Template String
for(var i=0;i<TableData.length;i++) {
	var x = i + 1;
	var div1 = $('#potraitDiv')
	console.log(TableData[i].Name)
	div1.append(`<button class="collapsible btn btn-default">Row${x}<i class="pull-right glyphicon glyphicon-chevron-down"></i><i id = "Row${x}" class="pull-right glyphicon glyphicon-pencil">EDIT </i></button><div class = "content"><table id= Table${i}class="display" style="width:100%"><tbody><tr><td>Name</td><td align="left"> ${TableData[i].Name}</td></tr><tr><td>Position</td><td align="left"> ${TableData[i].Position}</td></tr><tr><td  align="left">Office</td><td> ${TableData[i].Office}</td></tr><tr><td  align="left">Department</td><td> ${TableData[i].DepartMent}</td></tr></tbody></table></div>`)
}

//Code to make the Buttons and table content collapsible and toggle between the classes.
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
	  var x = this.innerText
	  console.log(x);
	  $(`#${this.innerText.slice(0,4)}`).css("display","none")
    } else {
      content.style.display = "block";
	  $(`#${this.innerText}`).css("display","block")
    }	
  });
}


//To load the Datatable
$(document).ready(function() {
    $('#landscapeTable').DataTable( {
    } );
	
} );

//To check for the Potrait Mode condition after every 100ms and switch the view accordingly
setInterval(function(){ if(window.innerHeight > window.innerWidth){
		$('#potraitDiv').css("display","block")
		$('#FirstDiv').css("display","none")
		
}
	else {
	$('#potraitDiv').css("display","none")
		$('#FirstDiv').css("display","block")
	 }
 }, 100);