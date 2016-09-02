
   
   
   
    window.simple=function(){
    waitingDialog.show('<center>Running Simulation</center>');
    var mocks=[{message:'Initializing Simulation..',prog:10},{message:'Monte Carlo seeds...',prog:30},{message:'Please wait..',prog:40},{prog:50},{message:'Running Monte Carlo..',prog:55},{prog:56},{prog:57},{message:'Running Monte Carlo..',prog:69},{message:'Running Monte Carlo..',prog:70},{message:'Running Monte Carlo..',prog:75},{message:'Running Monte Carlo..',prog:77},{message:'Running CAMEL',prog:80},{message:'Running CAMEL',prog:99},{message:'Almost Done',prog:100}] ;
    mocks.forEach(function(e,i){
         setTimeout(function(){
		 if(e.message=="Almost Done"){
			waitingDialog.hide();
			chart();
			chart2();
			CAMEL();
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
    
   function CAMEL(){
	   var MonteCarlo = [];
	   var Tier1;
	   var Tier2;
	   var TotalTier;
	   var ShareHequity = parseInt(document.getElementById("ShareholdersEQ").value);
	   var RetainedEarnings = parseInt(document.getElementById("RetainedEarnigs").value);
	   var RiskWassets = parseInt(document.getElementById("RiskwAssets").value);
	   var TotalCapital = parseInt(document.getElementById("TotalCapital").value);
	   var CamelC;

	   Tier1=  (ShareHequity+RetainedEarnings)/RiskWassets;
	   Tier2=   TotalCapital/RiskWassets;
	   TotalTier = Tier1+Tier2;
	   CamelC = (Tier1-Tier2)/RiskWassets;
	
	   if (TotalTier>0.08){
		   StressPass.value= "Passed"
		   }else {
				StressPass.value= "Failed"
			}
		   
	   if (CamelC >= 0.08){
	   
	   shareEquity.value= 3;	   
	   
	 }else if (CamelC>=0.1){
		 
	   shareEquity.value= 2;	   
		 }else if (CamelC>=0.18){
		 
	   shareEquity.value= 1;	   
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
	var t1=23;
	var t2=14;
	var t3=19;
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
            }, t3, 4, 6, 8, 10, t2, 18, t1, 8, 6, 4.2]
        }]
    });
});
}

