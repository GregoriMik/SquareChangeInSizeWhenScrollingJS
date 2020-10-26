// alert('to działa');
const squere = document.createElement('div');
document.body.appendChild(squere);

let grow = true;

let size = 100;// wielkość kwadratu
squere.style.width = size +"px";
//100 + "px" ->"100" + "px" ->"100px"
squere.style.height = size +"px";

//maksymalna wielkość kwadratu 
// window.innerWidth * 0.5

window.addEventListener("scroll",function(){
    
    // size = size + 10;
    

    if (size>= this.window.innerHeight / 2){
        grow = false
        //grow = !grow to również jest bardzo poprawny zapis
    }
    else if(size <= 0){
        grow = true;
    }
    if(grow == true){
        size += 5
        squere.style.width = size + "px";
        squere.style.height = size + "px";
        }
    
        else{
            size -= 5
            squere.style.width = size + "px";
            squere.style.height = size + "px";
        }
})