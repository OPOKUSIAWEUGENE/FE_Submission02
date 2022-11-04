<!DOCTYPE html>
<html>
    <head>
        <?php include '../Components/header.php'; ?>
        <link rel="stylesheet" href="dashboard.css">
        <script type="text/javascript" src="./dashboard.js"></script>
    </head>
    
    <body>
    <div class="dashboard_wrapper">

    <!-- adding the side navigation bar -->
        <div class="sidenav">
        <?php include '../Components/sidenav.php'; ?>
        </div>

       <!-- the main content  -->
    <div class="main">

        <!-- the top content -->
    <div class="main_top">

        <!-- title -->
        <div class="title"> Dashboard </div>
       <div class="main_top_content">

       <!-- card contents -->
        <div class="card">
        <span>Today</span>
        <span> $1455/9 orders </span>
        </div>

        <div class="card">
        <span> Last Week</span>
        <span> $34K/120 orders</span>
        </div>

        <div class="card">
            <span> Last Month</span>
            <span> $95k/876 orders</span>
        </div>
    </div>
    </div>

    <!-- middle content -->
    <div class="main_middle">

  
    <div class="title">
    <!-- title -->
      <span>  Revenue last 7 days</span> 
     
      <!-- the chart toggle button -->
      <span> 
        <input type="checkbox" id="switch" value="week" onchange="loadGraph()" class="checkbox" />
        <label for="switch" class="toggle">  </label>
    </span>
    </div>

    <!-- bar chart -->
   <div class="main_chart">
    <div class="chart">
        <div  style="width:100%; height:240px;">               
         <canvas style=" width:100%; height:240px;" id="myChart"></canvas>
        </div>
    </div>
   </div> 
    </div>

    <!-- bottom content -->
    <div class="main_bottom">

    <!-- title -->
        <div class="title">
        Best Sellers
        </div>

        <!-- table -->
        <div class="main_table">
        <table id="products_table">
            
            <thead>
            <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th># Units Sold </th>
            <th>Revenue</th>
            </tr>
            </thead>
            
            <tbody> </tbody>
        </table>

        </div>
    </div>

    </div>
    </body>
</html>
