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
    
   </div>  
    </div>
    <div class="main_bottom">
        <div class="title">
        Best Sellers
        </div>
        <div class="main_table">
<table>
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
        <tr>
            <td>Item 1</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Item 2</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Item 3</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
        </div>
    
    </div>

</div>

    </body>
</html>