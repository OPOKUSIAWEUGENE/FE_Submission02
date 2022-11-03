<!DOCTYPE html>
<html>
    <head>
  <?php include '../Components/header.php'; ?>
  <script type="text/javascript" src="./order.js"></script>
    <link rel="stylesheet" href="order.css">
    </head>
    <body>
<div class="order_wrapper">
<div class="sidenav">
<?php include '../Components/sidenav.php';?>
</div>
<div class="main">
   

    <div class="main_content">
        <div class="main_top">
      <span>Orders</span>
      <div><button onclick=" PopulateTable()"><i class="fa fa-search fa-rotate-90" ></i></button><input type="text" name="search" id="search" /></div>
        </div>
        <div class="main_table">
<table id="order_table">
    <thead>
        <tr>
            <th>
                Product Name
            </th>
            <th>
                Date
            </th>
            <th>
                Price
            </th>
            <th>
                Status
            </th>

        </tr>
    </thead>
    <tbody>
        
    </tbody>
</table>

        </div>
        <div class="table_pagination">
   <button onclick="PopulateTable(page-1)"><i class="fa fa-caret-left"></i></button> 
   <span id="page_number"> </span>
   <button onclick="PopulateTable(page+1)"><i class='fa fa-caret-right'></i></button>
</div>
    </div>

</div>

    </body>
</html>
