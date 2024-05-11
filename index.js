let btn = document.querySelector('.btn')
let ekran = document.querySelector('.ekran')
let deleteBtn = document.querySelector('.delete')
let svet = document.querySelector('.let')
let bir = document.querySelector('.bir')

btn.addEventListener('click', function (){
    ekran.value = parseInt(ekran.value) +1
    console.log(ekran.value);
    if(ekran.value >= 15 && ekran.value < 30 ){
        bir.style.backgroundColor = 'blue'
    }
      else if( ekran.value >= 30 && ekran.value < 35){
        bir.style.backgroundColor = 'red'
    }
    else if( ekran.value >= 40 && ekran.value < 50){
        bir.style.backgroundColor = 'aqua'
    }
    else if( ekran.value >= 60 && ekran.value < 70){
        bir.style.backgroundColor = 'lime'
    }
    else if( ekran.value >= 70 && ekran.value < 80){
        bir.style.backgroundColor = 'black'
    }
    else if( ekran.value >= 90 && ekran.value < 100){
        bir.style.backgroundColor = 'grey'
    }

})

deleteBtn.addEventListener('click', function(){
    let restart = 0;
    ekran.value = restart;
    console.log(restart); 
})

svet.addEventListener('click', function(){
    ekran.classList.toggle('inp2')
})