async function login(){

    event.preventDefault();
  
    //get username and password
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;

    let _data={ username:username , password: password }

    //make a login post request using fetch
   const response= await fetch('https://freddy.codesubmit.io/login',{
          method:"Post",
          headers:{"Content-type":"Application/json"},
          body:JSON.stringify(_data)
          })
    //get request status
    status= response.status;

    //store response 
    data= await response.json();

    //check if status code is 200
    if(status==200)
    {
    // if status code is 200, store refresh and access_tokens in the local storage
    localStorage.setItem('access_token',data.access_token);
    localStorage.setItem('refresh_token',data.refresh_token);

    // promt the user of a successfull login using sweet alert
        Swal.fire({
            title: 'Success!',
            text: 'User Logged in',
            icon: 'success',
            timer:5000,
            
          })
      //navigate to the dashboard page
      window.location.replace('../Dashboard/dashboard.php')
    
    }
    else{

      // for invalid credentials, fire an error message
      Swal.fire({
          title: 'Error!',
          text: data.msg,
          icon: 'error',
        timer:5000
        })
    
        //log all error mesages
        console.log(data.msg);
    }
}
