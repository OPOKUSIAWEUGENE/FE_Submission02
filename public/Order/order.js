
//variables
let endpoint="";
let page=1;
let search="";

//todo: populate table using page numbers and search params
function PopulateTable(pages=1)
{ 
    //todo: let all page numbers less than 1 to 1
   page= (pages<1)?1:pages;

   //todo: retrieve search params
   search=document.getElementById('search');

   //todo: check if search params is not null
   if(search)
   {
    
    //store end point
    endpoint="https://freddy.codesubmit.io/orders?page="+page+"&q="+search.value;
   }
   else
   {
    endpoint="https://freddy.codesubmit.io/orders?page="+page;
   }
  
  //todo: load data onto order page
   Order()
   
}

//todo: 
async function Order(){

    //todo: retrieve access token
    let access_token=localStorage.getItem('access_token');
    const response= await fetch(endpoint,{
    method:"Get",
    headers:{"Content-type":"Application/json", 'Authorization':'Bearer '+access_token},
    })

    //get request status
    status= response.status;

    //store request data;
    data= await response.json();
    
    //populate table only if status code is 200
    if(status==200)
    {
        if(data.orders.length==0)
        {
            if(page>1)
            {
            PopulateTable(page-1);
            }
        }

        //store table data
        let tabledata=data.orders;

    //construct table rows with the obtained table data
        let myTable=document.getElementById('order_table').getElementsByTagName('tbody')[0];
        myTable.innerHTML="";
        document.getElementById('page_number').innerHTML="Page "+page;

        tabledata.forEach(myFunction);
    
    function myFunction(item){
    
        //construct table rows and cells
    let row=myTable.insertRow();
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    
    //add table data
    cell1.innerHTML=item.product.name;
    cell2.innerHTML=item.created_at.split('T')[0];
    cell3.innerHTML=item.currency +" "+item.total;
    let status=""

    //check item status and assign colors
    if(item.status=="delivered")
    {
       status ="<span style='color:green'>"+item.status+"</span>";
    }
    else if(item.status=="shipped")
    {
        status ="<span style='color:black'>"+item.status+"</span>";
    }else{
        status ="<span style='color:red'>"+item.status+"</span>";
    }
    cell4.innerHTML=status;
   
    }
    }
    else{
    
        //log all errors
    console.log(data.msg);
    }
    
    }
    PopulateTable(page)

   