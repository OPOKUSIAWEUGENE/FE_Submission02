<!DOCTYPE html>
<html>
    <head>
  <?php include '../Components/header.php'; ?>
        <link rel="stylesheet" href="dashboard.css">

    </head>
    <body>
<div class="dashboard_wrapper">
<div class="sidenav">
<?php include '../Components/sidenav.php'; ?>

</div>
<div class="main">
    <div class="main_top">
        <div class="title">
            Dashboard
        </div>
       <div class="main_top_content">
        <div class="card">
<span>
    Today
</span>
<span>
 $1455/9 orders
</span>
        </div>
        <div class="card">
            <span>
                Last Week
            </span>
            <span>
                $34K/120 orders
            </span>
            
        </div>
        <div class="card">
            <span>
                Last Month
            </span>
            <span>
             $95k/876 orders
            </span>
        </div>
       </div>
</div>
<div class="main_middle">
    <div class="title">
        Revenue last 7 days
    </div>
   <div class="main_chart">
    <div class="chart">
        
    </div>
   </div>  
    </div>
    <div class="main_bottom">
        <div class="title">
        Best Sellers
        </div>
        <div class="main_table">
<table id="products_table">
    <thead>
        <tr>
            <th>
                Product Name
            </th>
            <th>
                Price
            </th>
            <th>
                # Units Sold
            </th>
            <th>
                Revenue
            </th>

        </tr>
    </thead>
    <tbody>
       
    </tbody>
</table>
        </div>
    
    </div>

</div>

    </body>
</html>

<script>

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

</script>