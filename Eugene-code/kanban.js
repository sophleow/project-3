// Get the modal
var modal = document.getElementById("myModal");

// Keep Counting for New ID
let newID = `i1`;

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <mcloseButton> element that closes the modal
var mcloseButton = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <mcloseButton> (x), close the modal
mcloseButton.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Start of Todo List
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "itemclose";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var itemclose = document.getElementsByClassName("itemclose");
var i;
for (i = 0; i < itemclose.length; i++) {
  itemclose[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL1").appendChild(li);
    modal.style.display = "none";
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "itemclose";
  span.appendChild(txt);
  li.appendChild(span);
  li.setAttribute('id', newID);
  li.setAttribute('class', 'card');
  li.setAttribute('draggable', 'true');
  li.setAttribute('ondragstart', 'drag(event)');
  newID = newID + `a`;


  for (i = 0; i < itemclose.length; i++) {
    itemclose[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// End of Todo List

//Start of drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}