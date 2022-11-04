let transactiondata = [];
    let transactionlabels = [];
    let myChart;
    let datalabel;
    let x_title_text;

    let  week_sales_graph=[]
     year_sales_graph=[]
   
    var months = ["This month","Last month","Month 3","Month 4",
                    "Month 5","Month 6","Month 7","Month 8","Month 9",
                    "Month 10","Month 11","Month 12"];
    var days=["Today","Yesterday","day 3","day 4", "day 5","day 6","day 7"]

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
       week_sales_graph=data.dashboard.sales_over_time_week;
      year_sales_graph=data.dashboard.sales_over_time_year;
   
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

    //console.log(week_sales_graph);
   // const myObj = JSON.parse(week_sales_graph);

let text = "";
for (const x in week_sales_graph) {
  
  console.log(x)
}


    }
    else{
    
    console.log(data.msg);
    }
    
  //  console.log(week_sales_graph);
   // console.log(year_sales_graph);

    function setgraphdata()
    {

    }

    //gradient for chart background
    var ctx = document.getElementById('myChart').getContext("2d")
    var gradient = ctx.createLinearGradient(0, 0, 0, 170)
    gradient.addColorStop(0, '#F08080');
    gradient.addColorStop(1, 'rgba(250,250,250, 0.0)');

    //todo: draw graph initially with fake data
    function startgraph() {
        transactiondata = [0, 1660, 02, 30000, 0];
        transactionlabels = ['data1', 'data2', 'data3', 'data4', 'data5'];

        datalabel;
        "graph Data";
        x_title_text;
        'graph Data';
        displaygraph();
    }
    startgraph()

function displaygraph() {
        //parameters; to plot graph
        var data = {
            labels: transactionlabels,
            datasets: [{
                label: 'Yearly Transactions (GHs)',
                backgroundColor: gradient,
                borderColor: 'rgb(255, 99, 132, 0.5)',
                fill: {
                    target: 'origin',
                    above: gradient,
                },
                borderWidth: 1,
                data: transactiondata,
            }]
        };

        var config = {
            type: 'bar',
            data: data,
            options: {

                scales: {
                    x: {
                        title: {
                            color: '#CD5C5C',
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        title: {
                            color: '#CD5C5C',
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
    
    loadGraph();
    }
    Dashboard();

   function loadGraph()
    {
      
        let state=document.getElementById("switch").value;
        if(state=="year")
        {
            updateChart(year_sales_graph ,months)
            document.getElementById("switch").value="week"
        }else
        {
            updateChart(week_sales_graph ,days)
            document.getElementById("switch").value="year"
        }

     }
   //function to update graph
   function updateChart(data ,label) {
    myChart.data.datasets[0].data = [];
    myChart.data.labels = [];
    for (const x in week_sales_graph) {
  
        console.log(data[x].total)
        myChart.data.datasets[0].data[x-1] = data [x].total;
        myChart.data.labels[x-1] = label[x-1];
    }
    myChart.data.datasets[0].label = datalabel;
    myChart.config.options.scales.x.title.text = x_title_text;
    myChart.update();
}
    