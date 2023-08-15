//this is diposit set evenhandeler

document.getElementById('diposit-btn').addEventListener('click',function(){
const dipositFild=document.getElementById('diposit-fild');
const dipositAmount=dipositFild.value ;
dipositFild.value='';

const dipositTotal=document.getElementById('dipositValue');

dipositTotal.innerText=dipositAmount;


});


//this is withdrow evenhendeler


document.getElementById('Withdraw-btn').addEventListener('click',function(){
    const withdrawFild=document.getElementById('Withdraw-fild');
    const  withdrawAmount= withdrawFild.value ;
    withdrawFild.value='';
    
    const withdrawTotal=document.getElementById('withdrawValue');
    
    withdrawTotal.innerText=withdrawAmount;
    
    
    });
    


