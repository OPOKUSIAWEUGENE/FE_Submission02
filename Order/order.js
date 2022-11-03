let endpoint="";
let page=1;
let search="";
function PopulateTable(pages=1)
{ 
   page= (pages<1)?1:pages;
   search=document.getElementById('search');
//  
   //alert(search);
    endpoint="https://freddy.codesubmit.io/orders?page="+page+"&q="+search;
    Order()
}
function Search()
{

}
async function Order(){
    let access_token=localStorage.getItem('access_token');
    const response= await fetch(endpoint,{
    method:"Get",
    headers:{"Content-type":"Application/json", 'Authorization':'Bearer '+access_token},
    })
    status= response.status;
    data= await response.json();
    
    if(status==200)
    {
        if(data.orders.length==0)
        {
            if(page>1)
            {
            PopulateTable(page-1);
            }
        }
     let tabledata=data.orders;
    let myTable=document.getElementById('order_table').getElementsByTagName('tbody')[0];
    myTable.innerHTML="";
  document.getElementById('page_number').innerHTML="Page "+page;
    
    tabledata.forEach(myFunction);
    
    function myFunction(item){
    
    let row=myTable.insertRow();
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    
    
    cell1.innerHTML=item.product.name;
    cell2.innerHTML=item.created_at.split('T')[0];
    cell3.innerHTML=item.currency +" "+item.total;
    let status=""
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
    
    console.log(data.msg);
    }
    
    }
    PopulateTable(page)

    function RemoveRows(table)
    {

    }