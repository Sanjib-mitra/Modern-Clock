const hourHand=document.querySelector('[data-hour-hand]');
const miniteHand=document.querySelector('[data-minite-hand]');
const secondHand=document.querySelector('[data-second-hand]');
setInterval(setClock,1000);
function setClock(){
    const currentDate=new Date();
    const secondRatio=currentDate.getSeconds()/60;
    const miniteRatio=(secondRatio+currentDate.getMinutes())/60;
    const hourRatio=(miniteRatio+currentDate.getHours())/12;
    setRotation(secondHand,secondRatio);
    setRotation(miniteHand,miniteRatio);
    setRotation(hourHand,hourRatio);
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360);
}
setClock();