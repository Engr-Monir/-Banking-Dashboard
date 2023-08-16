document.getElementById('submit').addEventListener( 'click', function(){



    const emailFild=document.getElementById('username');
const mail=emailFild.value ;


   const passwordFild=document.getElementById('password');
const userpassword=passwordFild.value ;


if(mail==='monirweb420@gmail.com'&&  userpassword==='monir' ){
    window.location.href='home.html';
}
else{
   alert('Please Enter your valid user-name and password');
}

});
