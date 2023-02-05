
function check() {
  for (i = 1; i <= 5; i++) {
    var checkBox = document.getElementById("check"+i);
    var text = document.getElementById("text"+i);
    
    if (checkBox.checked == true){
      text.style.textDecoration = "line-through";
      document.getElementById("file").value = +20*i;
      document.getElementById("tm").innerHTML= file.value;
      } else {
      text.style.textDecoration = "none";
       } 
  }}
 

  document.getElementById("but").onclick= function(){
    var checkBox = document.getElementById("check1");
    text.style.textDecoration="line-through";
    checkBox.checked= "true";
    document.getElementById("file").value = +10;
  }

