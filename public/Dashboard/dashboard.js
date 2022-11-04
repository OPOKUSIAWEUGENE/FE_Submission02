
//chart variables
    let myChart;
    let datalabel;
    let x_title_text;

    //an array variable for storing chart data
    let  week_sales_graph=[]
     let year_sales_graph=[]
   
     //an array variable storing months
    const months = [
        "This month",
        "Last month",
        "Month 3",
        "Month 4",
        "Month 5",
        "Month 6",
        "Month 7",
        "Month 8",
        "Month 9",
        "Month 10",
        "Month 11",
        "Month 12"];
    
    //an array variable storing days
    const days=[
        "Today",
        "Yesterday",
        "day 3",
        "day 4",
         "day 5",
         "day 6",
         "day 7"]

    //function to load data onto dashboard
    async function Dashboard(){

    //get stored acces token
    let access_token=localStorage.getItem('access_token');
    const response= await fetch('https://freddy.codesubmit.io/dashboard',{
                    method:"Get",
                    headers:{"Content-type":"Application/json", 'Authorization':'Bearer '+access_token},
                    })

    //get request status
    status= response.status;
    
    //store retrieved data
    data= await response.json();
    
    //if status code is 200, update dashboard page with data
    if(status==200)
    {
    
    //variable to store data for table
    let tabledata=data.dashboard.bestsellers;

    //storing array data for bar chart
        week_sales_graph=data.dashboard.sales_over_time_week;
        year_sales_graph=data.dashboard.sales_over_time_year;
   
    //construct rows with retrieved data for table with id products_table
    let myTable=document.getElementById('products_table').getElementsByTagName('tbody')[0];
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
    cell2.innerHTML="";
    cell3.innerHTML=item.units;
    cell4.innerHTML=item.revenue;
    }
    }
    else{
    
    //log all error messages
    console.log(data.msg);
    }
    
    //start chart initially with fake data
    startGraph()
    
    //load chart with actual data
    loadGraph();
    }
   
   //update dashboard with dashboard data
    Dashboard();

  //todo: plot chart initially with fake data
  function startGraph() {
    
    //fake chart data
    let graphData = [0, 1660, 02, 30000, 0];
    let  graphLabels = ['data1', 'data2', 'data3', 'data4', 'data5'];

    //load fake chart data 
    displayGraph(graphData, graphLabels)
    }

    //function to switch between weekly graph data and yearly graph data using the toogle switch
   function loadGraph()
    {
        //get value of toogle switch
        let state=document.getElementById("switch").value;
        if(state=="year")
        {
            //set chart title
             datalabel="sales_over_time_year";

             //set x axis title
             x_title_text="Months";

            //load chart data
            updateChart(year_sales_graph ,months)

            // set switch toggle value to 'week'
            document.getElementById("switch").value="week"
        }else
        {   
            //set chart title
            datalabel="sales_over_time_week";

            //set x axis title
             x_title_text="Days";

            //load chart data
            updateChart(week_sales_graph ,days)

            //set switch toggle value to 'year'
            document.getElementById("switch").value="year"
        }

     }
 
     //function to display chart
    function displayGraph(graphData, graphLabels) {
   
        //parameters; to plot chart
    const data = {
        labels: graphLabels,
        datasets: [{
            label: 'Yearly Transactions (GHs)',
            backgroundColor: 'rgb(192,192,192, 0.7)',
            borderColor: 'rgb(192,192,192, 0.7)',
            fill: {
                target: 'origin',
                above: 'rgb(192,192,192, 0.7)',
            },
            borderWidth: 1,
            data: graphData,
        }]
    };

    //chart configurations
    const config = {
        type: 'bar',
        data: data,
        options: {

            scales: {
                x: {
                    title: {
                        color: 'rgb(92,92,92)',
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    title: {
                        color: 'rgb(92,92,92)',
                        display: true,
                        text: 'Total Recieved(GHs)'
                    },
                    beginAtZero: true,

                  //  max: 10000
                }
            }
        }
    };
    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
    
  //function to update graph
  function updateChart(data ,label) {

    //empty chart array variables
    myChart.data.datasets[0].data = [];
    myChart.data.labels = [];

    //load chart array variables
    for (const x in data) {
  
        myChart.data.datasets[0].data[x-1] = data [x].total;
        myChart.data.labels[x-1] = label[x-1];
    }
    
    //set chart label
    myChart.data.datasets[0].label = datalabel;
    myChart.config.options.scales.x.title.text = x_title_text;

    //update graph
    myChart.update();
}