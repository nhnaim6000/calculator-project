let calValue = () => {

    let f_value =     document.getElementById('f_val').value;
    let s_value =  document.getElementById('s_val').value;
    let opson = document.getElementById('opson') .value;
    let show_val = document.getElementById('show_here');





   let matchh = /^[A-Za-z ]+$/;
 
    if( f_value ==="" && s_value ==="" ){

        alert('blank')
    }

    else if (f_value.match(matchh) || s_value.match(matchh)){

        alert('no string allow');
    }

    else if ( !f_value.match(matchh)){

       f_value = parseInt(f_value);
        s_value = parseInt(s_value);
      
        if(opson == '+'){
            console.log(f_value + s_value);
            show_val.value= f_value +s_value;
      
            
        }
      else  if(opson == '-'){
            console.log(f_value - s_value);
            show_val.value= f_value - s_value;
        }
       else if(opson == 'x'){
            console.log(f_value * s_value);
            show_val.value= f_value * s_value;
        }
       else if(opson == '/'){
            console.log(f_value / s_value);
            show_val.value= f_value / s_value;
        }
   
    }

    let naim = document.getElementById('hello');

    naim.addEventListener('click', () =>{
    
        show_val.value=null;
    
    });
    





}






