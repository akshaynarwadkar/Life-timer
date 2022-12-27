
let display =true;
const settingsIconEl = document.getElementById('settingsIcon')
const settingsInputEl = document.getElementById('settingsInput')

const toggleDateofBirthSelector=()=>{
    if(display){
        settingsInputEl.classList.add('hide')
    }else{
        settingsInputEl.classList.remove('hide')
    }
    display = !display;
    console.log(display)
}

settingsIconEl.addEventListener('click',toggleDateofBirthSelector)