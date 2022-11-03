async function Dashboard(){
    let access_token=localStorage.getItem('access_token');
    const response= await fetch('https://freddy.codesubmit.io/dashboard',{
    method:"Get",
    headers:{"Content-type":"Application/json", 'Authorization':'Bearer '+access_token},
    })
    status= response.status;
    data= await response.json();
    
    if(status==200)
    {
     let tabledata=data.dashboard.bestsellers;
    let myTable=document.getElementById('products_table').getElementsByTagName('tbody')[0];
    
    
    tabledata.forEach(myFunction);
    
    function myFunction(item){
    
    let row=myTable.insertRow();
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    
    
    cell1.innerHTML=item.product.name;
    cell2.innerHTML="";
    cell3.innerHTML=item.units;
    cell4.innerHTML=item.revenue;
    }
    }
    else{
    
    console.log(data.msg);
    }
    
    }
    Dashboard();