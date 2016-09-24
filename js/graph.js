
   
   
   
    window.simple=function(){
    waitingDialog.show('<center>Running Simulation</center>');
    var mocks=[{message:'Initializing Simulation..',prog:10},{message:'Monte Carlo seeds...',prog:30},{message:'Please wait..',prog:40},{prog:50},{message:'Running Monte Carlo..',prog:55},{prog:56},{prog:57},{message:'Running Monte Carlo..',prog:69},{message:'Running Monte Carlo..',prog:70},{message:'Running Monte Carlo..',prog:75},{message:'Running Monte Carlo..',prog:77},{message:'Running CAMEL',prog:80},{message:'Running CAMEL',prog:99},{message:'Almost Done',prog:100}] ;
    mocks.forEach(function(e,i){
         setTimeout(function(){
		 if(e.message=="Almost Done"){
			waitingDialog.hide();
			chart();
			chart2();
			montecarlo();
			}
            if(e.message){
               waitingDialog.message(e.message)
            }else{
               waitingDialog.message(e.prog+'% ...')
            }
             waitingDialog.progress(e.prog);
         },(i+1)*1000)
    });
    }
    
   function montecarlo(){
	   var MonteCarlo = [];
	   var ShareHequity = parseInt(document.getElementById("ShareholdersEQ").value);
	   var Scenario  = document.getElementById("scenario").value;
	   var shareEquityEval= document.getElementById("shareEquity");
	   if (Scenario=="Standard"){
	   var randomnumber = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
   }
	   for (i=1; i<5000; i++){
		   
		   MonteCarlo[i]= randomnumber * ShareHequity;
		   
		   
		   }
	   var k = MonteCarlo[50];
	   alert(randomnumber);
	   if(ShareHequity<1000000){
	        shareEquity.value= 2;
	   }else if(ShareHequity>1000000){
		    shareEquity.value= 3;

		   
		   
		   }
	   }

    function chart() { 
        var f    = parseInt(document.getElementById("IncomeRate").value);
        var s    = parseInt(document.getElementById("NetInterestIncome").value);
        var t    = parseInt(document.getElementById("AVGearningsAssets").value);

    $(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
         subtitle: {
            text: 'Monte Carlo:Simulation Results'
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: s
            }, {
                name: 'Chrome',
                y: f,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: t
            }]
        }]
    });
});}

function chart2(){
$(function () {
    $('#container2').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
        subtitle: {
            text: 'CAMEL Rating: Results'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature'
            },
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Tokyo',
            marker: {
                symbol: 'square'
            },
            data: [{
                y: 3.9,
                marker: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                }
            }, 2, 4, 6, 8, 10, 12, 18, 10, 8, 6, 4.2]
        }]
    });
});
}

