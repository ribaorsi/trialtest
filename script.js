/*function loaded() {

    const rootElement = document.getElementById("root");

       
    rootElement.insertAdjacentHTML("beforeend", form);
}

window.addEventListener("load", loaded); */



function simplifyNumber(a) {
  
    let result;
  if (a < 0) {
      result = 0;
  }
    else if (a > 10){
     result = "sok";
    }
    else (a % 1 < 1){
      result = math.floor(a);
    }
    
    return result;
  }
  console.log(result);
  
window.addEventListener("load", loaded);