import React from 'react';
import './App.css';

//DONT KNOW WHERE TO PLACE THIS
// function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }

function App () {

    function Title () {
        var modal = document.getElementById("myModal");
        console.log(modal);
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // When the user clicks on the button, open the modal
        btn.onclick = function() { modal.style.display = "block" }

        return (
            <>
                <div class="wrapper"/>
                <div class="title"/>
                    <h1>Kanban Board</h1> 
                <button id="myBtn">Create New Task</button>
            </>
        )
    }
    function Backlog () {
        
        // Click on a close button to hide the current list item
        var itemclose = document.getElementsByClassName("itemclose");
        var i;
            for (i = 0; i < itemclose.length; i++) {
            itemclose[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
             }
            }

        return (
            <>
                <div class="backlog">
                    <h2>Backlog</h2>
                    <ul id="myUL1" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <li
                        id="item2"
                        class="card"
                        draggable="true"
                        ondragstart="drag(event)"
                    >
                <div class="container">item 2</div>
                    </li>
                    <li
                        id="item3"
                        class="card"
                        draggable="true"
                        ondragstart="drag(event)"
                    >
                <div class="container">item 3</div>
                    </li>
                    </ul>
                </div>
            </>
        )
    }

    function InProgress () {
        return (
            <>
                <div class="inprogress">
                    <h2>In-Progress</h2>
                <ul id="myUL2" ondrop="drop(event)" ondragover="allowDrop(event)"></ul>
                </div>
            </>
        )
    }

    function Completed () {
        // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            }
        }, false);
        
        return (
            <>
                <div class="completed">
                    <h2>Completed</h2>
                <ul id="myUL3" ondrop="drop(event)" ondragover="allowDrop(event)">
                <li
                    id="item1"
                    class="card"
                    draggable="true"
                    ondragstart="drag(event)"
                >
                    item under complete
                </li>
                </ul>
                </div>
            </>
        )
    }

    function NewList () {
    
            // Keep Counting for New ID
            let newID = `i1`;
            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the <mcloseButton> element that closes the modal
            var mcloseButton = document.getElementsByClassName("close")[0];
            // When the user clicks on <mcloseButton> (x), close the modal
            mcloseButton.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target === modal) {
                  modal.style.display = "none";
                }
            }
               
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

            // Create a new list item when clicking on the "Add" button
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
      
            var itemclose = document.getElementsByClassName("itemclose");
    
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

        return (
            <>
                <div id="myModal" class="modal">
                <div class="modal-content">
                <span class="close" id="mcloseButton">&times;</span>
                    <h1>ADD NEW TASK TO BACKLOG</h1>
                <input type="text" id="myInput" placeholder="Title..." />
                <span onclick="newElement()" class="addBtn">Add</span>
                </div>
                </div>
            </>
        )
    }    

    return (
        <div className="App">
          <Title />
          <Backlog />
          <InProgress />
          <Completed />
          <NewList />
        </div>
    )
    
}

export default App;