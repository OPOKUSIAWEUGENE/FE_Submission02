<!DOCTYPE html>
<html>
    <head>
  <?php include '../Components/header.php'; ?>
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
      <div><button><i class="fa fa-search fa-rotate-90" ></i></button><input type="text" name="text"/></div>
        </div>
        <div class="main_table">
<table>
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