document.body.onkeyup = function(e) {
    if(e.keyCode == 13){
        newItem();
        console.log("enter clicked!");
    }
  };

function newItem() {
    console.log("Inside newItem");
    var item = document.getElementById("input").value;
    console.log(item);
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));
    ul.appendChild(li);
    document.getElementById("input").value = ""
    li.onclick = removeItem;
}

function removeItem(e) {
    e.target.remove()
  }