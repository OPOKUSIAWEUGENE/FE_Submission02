async function login(){

    event.preventDefault();

    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;

    let _data={ username:username , password: password }

   const response= await fetch('https://freddy.codesubmit.io/login',{
    method:"Post",
    headers:{"Content-type":"Application/json"},
    body:JSON.stringify(_data)
})
status= response.status;
data= await response.json();

if(status==200)
{
// console.log(data)
localStorage.setItem('access_token',data.access_token);
localStorage.setItem('refresh_token',data.refresh_token);

Swal.fire({
    title: 'Success!',
    text: 'User Logged in',
    icon: 'success',
    timer:5000,
    
  })
  window.location.replace('../Dashboard/dashboard.php')
 
}
else{
Swal.fire({
    title: 'Error!',
    text: data.msg,
    icon: 'error',
   timer:5000
  })
console.log(data.msg);
}
}
