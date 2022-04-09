window.addEventListener("load",bindEvents);
let buttons;


function bindEvents() {
  buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", btnpress);
  }
}

function btnpress(){
    var buttontext = this.innerText;
    console.log(buttontext);
    let display = document.getElementById("screen");
        
    if(buttontext =='*'){
        display.value += buttontext;
    }
    else if(buttontext == '+'){
        display.value += buttontext;
        
    }
    else if(buttontext == '-'){
        display.value += buttontext;
        
    }
    else if(buttontext == '/'){
        display.value += buttontext;
        
    }
    else if(buttontext == '7'){
        display.value += buttontext;
        
    }
    else if(buttontext == '8'){
        display.value += buttontext;
        
    }
    else if(buttontext == '9'){
        display.value += buttontext;
        
    }
    else if(buttontext == '4'){
        display.value += buttontext;
        
    }
    else if(buttontext == '5'){
        display.value += buttontext;
        
    } else if(buttontext == '6'){
        display.value += buttontext;
        
    } else if(buttontext == '1'){
        display.value += buttontext;
        
    }
    else if(buttontext == '2'){
        display.value += buttontext;
        
    }
    else if(buttontext == '3'){
        display.value += buttontext;
        
    }
    else if(buttontext == '='){
        display.value = eval(display.value);

        
    }
    else if(buttontext == '0'){
        display.value += buttontext;
        
    }
    else if(buttontext == '.'){
        display.value += buttontext;
        
    }
    else if(buttontext == 'AC'){
        display.value="";
        
    }
    else if(buttontext == '('){
        display.value += buttontext;
        
    }
    else if(buttontext == ')'){
        display.value += buttontext;
        
    }
    else if(buttontext == '%'){
        display.value += buttontext;
        
    }
     


    
   
    
}