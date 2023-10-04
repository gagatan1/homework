
function fun1(row) {
 
  if (row.className.indexOf("selected") != -1) {
    
    row.className = row.className.replace("selected", "");
    
} else {
    
    row.className += " selected";
    row.color='black';
}

  }

function imgClick(img){
  var table = document.getElementById("z");
  var rowCount = table.rows.length;
  for (var i = 0; i < rowCount; i++) {
    var row = table.rows[i];

    if (row.getElementsByTagName("input")[0].className.indexOf("selected")!=-1) {
      // if (rowCount <= 1) {
      //     alert("Cannot delete all the rows.");
      //     break;
      // }
      table.deleteRow(i);
      rowCount--;
      i--;
  }

  }
//   var chbox;
  
//   if (chbox.checked) {
    
// }
}
function work() {
 
    var Name;
    var row;
    var td1;
    

    Name = document.getElementById("name");
    row = document.createElement("TR");
    td1 = document.createElement("TD");
    td1.textContent = Name.value;

    var inpt = document.createElement("input");
    inpt.setAttribute("type","checkbox");
    inpt.setAttribute('onchange','fun1(this)');
    inpt.setAttribute('id',td2);

    var img = document.createElement("img");
    img.setAttribute('onclick','imgClick(this)');
    img.src = "https://cdn.icon-icons.com/icons2/2783/PNG/512/delete_remove_trash_icon_177304.png";
    var src = document.getElementById("z");
    row.append(inpt)
    row.append(td1);
    row.appendChild(img);

    document.getElementById("z").appendChild(row);
    td2++;
  }
  var td2=1;
  work()

