// function myFunction() {
//     var x = document.getElementById("myText").value;
//     console.log(x);
//   }

var buttonChangeColor = document.getElementById("color");
//var color="white";

function mycolor() {
    // if(color==="white")
    //  {
    //     document.body.style.backgroundColor = "black";
    //     color="red";
    //  }
    //  else{
    //     document.body.style.backgroundColor = "white";
    //     color="white";
    //  }

    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.style.color = "#" + randomColor;
}

buttonChangeColor.addEventListener("click", mycolor);