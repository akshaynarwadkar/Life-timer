
let display =true;
const settingsIconEl = document.getElementById('settingsIcon')
const settingsInputEl = document.getElementById('settingsInput')
const initialTextEl=document.getElementById('initialText')
const afterTextEl=document.getElementById('afterText')
const dobInputEl=document.getElementById('dobInput')
const dobButtonEl=document.getElementById('dobButton')
const yearEl=document.getElementById('year')
const monthEl=document.getElementById('month')
const dayEl=document.getElementById('day')
const hourEl=document.getElementById('hour')
const minuteEl=document.getElementById('minute')
const secondEl=document.getElementById('second')



const toggleDateofBirthSelector=()=>{
    if(display){
        settingsInputEl.classList.add('hide')
    }else{
        settingsInputEl.classList.remove('hide')
    }
    display = !display;
    console.log(display)
}

const storeDOB=()=>{
    const dobString=dobInputEl.value;
    dateOfBirth=new Date(dobString);

    // const year=localStorage.getItem('year');
    // const month=localStorage.getItem('month');
    // const date=localStorage.getItem('date');
    // if(year && month && date){
    //     dateOfBirth=new Date(year,month,date)
    // }

    if(dateOfBirth){

        // localStorage.setItem('year',dateOfBirth.getFullYear())
        // localStorage.setItem('month',dateOfBirth.getMonth())
        // localStorage.setItem('date',dateOfBirth.getDate())


        initialTextEl.classList.add('hide');
        afterTextEl.classList.remove('hide');
        setInterval(updateAge,1000);
        // updateAge()
    }else{
        initialTextEl.classList.remove('hide');
        afterTextEl.classList.add('hide');
    }
}

const makeTwoDigit=(number)=>{
    if(number>9){
        return number
    }else{
        return `0${number}`
    }
}

const updateAge=()=>{
    const CurrentDate = new Date();
    const dateDiff = CurrentDate - dateOfBirth ;
    const years=Math.floor(dateDiff/(1000*60*60*24*365));
    const months=Math.floor((dateDiff/(1000*60*60*24*365)%12));
    const days=Math.floor((dateDiff/(1000*60*60*24))%30);
    const hours=Math.floor((dateDiff/(1000*60*60))%24);
    const minutes=Math.floor((dateDiff/(1000*60))%60);
    const seconds=Math.floor(dateDiff/1000)%60;
    



    yearEl.innerHTML=makeTwoDigit(years);
    monthEl.innerHTML=makeTwoDigit(months);
    dayEl.innerHTML=makeTwoDigit(days);
    hourEl.innerHTML=makeTwoDigit(hours);
    minuteEl.innerHTML=makeTwoDigit(minutes);
    secondEl.innerHTML=makeTwoDigit(seconds);
}







settingsIconEl.addEventListener('click',toggleDateofBirthSelector)
dobButtonEl.addEventListener('click',storeDOB)