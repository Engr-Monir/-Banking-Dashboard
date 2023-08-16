//this is diposit set evenhandeler

document.getElementById('diposit-btn').addEventListener('click',function(){
const dipositFild=document.getElementById('diposit-fild');
const NewdipositAmountString=dipositFild.value ;
const NewdipositAmount=parseFloat(NewdipositAmountString);
dipositFild.value='';

const dipositTotalElement=document.getElementById('dipositValue');
// dipositTotal.innerText=dipositAmount;
const previousDipositString=dipositTotalElement.innerText;
const previousDiosit=parseFloat(previousDipositString);

const newdipositTotal=previousDiosit+NewdipositAmount;
dipositTotalElement.innerText=newdipositTotal;





// Total amount calculate
const BlanceTotalElements= document.getElementById('TotalBlance');

const previousBlanceTotalString=BlanceTotalElements.innerText;

const previousBlanceTotal=parseFloat(previousBlanceTotalString);


const Total=previousBlanceTotal+NewdipositAmount;
console.log(Total);
BlanceTotalElements.innerText=Total;










});


//this is withdrow evenhendeler


// document.getElementById('Withdraw-btn').addEventListener('click',function(){
//     const withdrawFild=document.getElementById('Withdraw-fild');
//     const  withdrawAmount= withdrawFild.value ;
//     withdrawFild.value='';
    
//     const withdrawTotal=document.getElementById('withdrawValue');
    
//     withdrawTotal.innerText=withdrawAmount;
    
    
//     });
    

document.getElementById('Withdraw-btn').addEventListener('click',function(){
    const withdrawFild=document.getElementById('Withdraw-fild');
    const newWithdrawAmountString=withdrawFild.value;
    const newWithdrtawAmoun=parseFloat(newWithdrawAmountString);
    withdrawFild.value='';


    const previousTotalWithdrawElement=document.getElementById('withdrawValue');
    const previouswithdrawString=previousTotalWithdrawElement.innerText;
    const previouswithdraw=parseFloat(previouswithdrawString);

    const Totalwitdraw=newWithdrtawAmoun+previouswithdraw;
    previousTotalWithdrawElement.innerText=Totalwitdraw;








// Total amount calculate
const BlanceTotalElements= document.getElementById('TotalBlance');

const previousBlanceTotalString=BlanceTotalElements.innerText;

const previousBlanceTotal=parseFloat(previousBlanceTotalString);

if(previousBlanceTotal>newWithdrtawAmoun){
    const Total=previousBlanceTotal-newWithdrtawAmoun;

    BlanceTotalElements.innerText=Total;
}
else(
    alert('Erro Mess')
)








});


