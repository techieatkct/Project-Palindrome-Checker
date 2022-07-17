function palindrome(){
    var num = document.querySelector(".inputbox").value.toLowerCase();
    var alpha = num
        .split('')
        .reverse()
        .join('');
    if(num.length<=2){
        document.querySelector(".list").innerHTML = "TYPE MORE VALUES"
    }else if(num.length>=3 && num===alpha){
        document.querySelector(".list").innerHTML =`<b>"${num}"</b> is a palindrome!`
    }else{
        document.querySelector(".list").innerHTML =`<b>"${num}"</b> is not a palindrome!`
    }
}
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}