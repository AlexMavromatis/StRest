
   
   
   
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
	  
	   var CamelC;
	   var CamelC2;
	   var CAR;	 // Capital adequacy variable for camel rating
	   var ASQ;	 // Assett quality evaluation variable for camel rating
	   var AQE;	 // Assett quality evaluation variable for camel rating
	   var AQE2;
	   var EEC;  // Earnings Evaluation variables EEC for final camel rating
	   var EEC1; 
	   var EEC2; 
	   var EEC3;
	   var EDE;  // Earnigns dynamics evaluation
	   var LQE;  // Liquitidy evaluation variable
	   var LQE2;  // Liquitidy evaluation variable
	   var LQE3;  // Liquitidy evaluation variable
	   var MonteCarlo = [];
	   var Tier1;
	   var Tier2;
	  
	   var TotalTier;
	   var ShareHequity      =    parseInt(document.getElementById("ShareholdersEQ").value);
	   var RetainedEarnings  =    parseInt(document.getElementById("RetainedEarnigs").value);
	   var RiskWassets       =    parseInt(document.getElementById("RiskwAssets").value);
	   var TotalCapital      =    parseInt(document.getElementById("TotalCapital").value);
   	   var TotalLoans        =    parseInt(document.getElementById("TotalLoans").value);
	   var TotalAssets       =    parseInt(document.getElementById("TotalAssets").value);
	   var NetinterestIncome =    parseInt(document.getElementById("NetInterestIncome").value);
	   var AvgAssetsEarnings =    parseInt(document.getElementById("AVGearningsAssets").value);
	   var TotalEquityShares =    parseInt(document.getElementById("TotalEquityShares").value);
	   var OperatingExpenses =    parseInt(document.getElementById("OpExpenses").value);
	   var NonInterestIncome =    parseInt(document.getElementById("NonInterestIncome").value);
	   var AssetsGrate		 =    parseInt(document.getElementById("AssetRate").value);
	   var ShareHEquitygRate =    parseInt(document.getElementById("ShareHoldersRate").value);
       var TotalDeposits     =    parseInt(document.getElementById("TotalDeposits").value);
       var NPL = (document.getElementById("NPL").value); //Non performing loans
	   var LoansProvision = document.getElementById("NPLprovision");
	   var ProvisionOpt   = LoansProvision.options[LoansProvision.selectedIndex].text;
       var IncomeRate = parseInt(document.getElementById("IncomeRate").value);



	   Tier1=  (ShareHequity+RetainedEarnings)/RiskWassets;
	   Tier2=   TotalCapital/RiskWassets;
	   TotalTier = Tier1+Tier2;
	   CamelC  = (Tier1-Tier2)/RiskWassets;
	   CamelC2 = TotalCapital/TotalAssets;
	   CAR = (CamelC+CamelC2)*1000;
	   
	
	   if (TotalTier > 8){
		   StressPass.value= "Passed"
	   }else{
				StressPass.value= "Failed"
	   }
		   

	   camel:  if (CAR <= 18 || TotalTier<8){
	   
		 shareEquity.value= 5;	   
	     break camel;
		
		 }else if (CAR <= 23){
		 
			shareEquity.value= 4;	  
			 
		 }else if (CAR<= 28){
		 
			shareEquity.value=3;
				   
		 }else if (CAR <= 33){
			
			shareEquity.value= 2;	   
			
		 }else   if (CAR<=38){
				 if (CAR==33){
					 
					    shareEquity.value= 1.4;	   
					    
		 }else   if (CAR > 34 && CAR<37){
			 
					    shareEquity.value= 1.4;	  
					    
			}else if (CAR > 37){
				
					shareEquity.value= 1;	  
				}
		
		   alert(CAR);
		   alert(TotalTier);
	
		   AQE = (NPL/TotalLoans)*100;
	   
		   AQE2 = (NPL/TotalEquityShares)*100;
	   
	   
	   if (AQE>=1 && AQE2>=1){
		   
		   ASQ=1;
		   
	   }else if(AQE <=2 && AQE2 <= 2){
		   
		   
		   ASQ=2;
		   
		   
		   }else if(AQE <=3 && AQE2 <= 3){
		   
		   
		   ASQ=3;
		   
		   
		} else { 
			  
		   ASQ=5; 
	
		  }
		  
	   if (ProvisionOpt !=="100%"){
		 
		   ASQ=5;
		  
	   }
	
	   if (ASQ==null){
		
		   AssetQEVal.value= "OOps Something went wrong";  
		 
		 }
		 
	       AssetQEVal.value=ASQ;
	  
	  
	   if (IncomeRate <= 10){
		  
		  ManagementEval.value= 4;
		  
	      }else if (IncomeRate >=10 && IncomeRate<= 13){
		  
		   ManagementEval.value= 3;
		  
		  
		  }else if (IncomeRate >=13 && IncomeRate<= 15){
		  
		   ManagementEval.value= 2;
		  
		  
		  }else if (IncomeRate > 15){
			  		
		 
           ManagementEval.value= 1;

			  
		  }else {
				  
		   ManagementEval.value= "OOps Something went wrong";  
		  
		  }
		
		
		if ((NetinterestIncome / AvgAssetsEarnings) <= 4.5) {
						
			EEC=5;
			
		} else if ((NetinterestIncome / AvgAssetsEarnings) >4.5 && (NetinterestIncome / AvgAssetsEarnings) < 8.5){
		
			EEC=4;
		
		} else if ((NetinterestIncome / AvgAssetsEarnings) >8.5 && (NetinterestIncome / AvgAssetsEarnings) < 11.5){
		
			EEC=3;
		
		} else if ((NetinterestIncome / AvgAssetsEarnings) >11.5 && (NetinterestIncome / AvgAssetsEarnings) < 14){
		
			EEC=2;
		
		} else if ((NetinterestIncome / AvgAssetsEarnings) >14.5){
		
			EEC=1;
		
		}
		
	
		if (((OperatingExpenses / NetinterestIncome) + NonInterestIncome) <= 70 ){
			
			EEC1 = 5;
			
		}else if ( ((OperatingExpenses / NetinterestIncome) + NonInterestIncome) < 70 && ((OperatingExpenses / NetinterestIncome) + NonInterestIncome) > 40){
			
			EEC1 = 3;
		
		}else if (((OperatingExpenses / NetinterestIncome) + NonInterestIncome) > 20){
			
			EEC1 = 1;
		
		}else{
			
			EEC	 = "OOps Something went wrong"; 
			
		} 
			
			
		if ((NetinterestIncome/AssetsGrate) <= 1 ){
			
			EEC2 = 4;
			
		}else if ( (NetinterestIncome/AssetsGrate) > 1 && (NetinterestIncome/AssetsGrate) < 3){
			
			EEC2 = 3;
			
		}else if ( (NetinterestIncome/AssetsGrate) > 3){
			
			EEC2 = 1;
			
		}else {
			
			EEC	 = "OOps Something went wrong"; 
					
		} 
		
		if ( (NetinterestIncome / ShareHEquitygRate) <= 15 ){
			
			EEC3 = 5;
			
		}else if ((NetinterestIncome / ShareHEquitygRate) > 15 && (NetinterestIncome / ShareHEquitygRate) < 20 ){
			
			EEC3 = 3;
		
		}else if ((NetinterestIncome / ShareHEquitygRate) > 20 && (NetinterestIncome / ShareHEquitygRate) < 25 ){
			
			EEC3 = 2;
		
		}else if ((NetinterestIncome / ShareHEquitygRate) > 25 ){
			
			EEC3 = 1;
		
		}else {
		
		    EEC3 = 5;
		
		}
		
		
		EDE = (EEC + EEC1 + EEC2 + EEC3)/4;
		EarningsEval.value = EDE;
			
			
			}
			
			
			
		if ((TotalDeposits/TotalAssets)*100 <=75){
			
			LQE=5;
			
		}else if ((TotalDeposits/TotalAssets)*100 > 75 && (TotalDeposits/TotalAssets) < 85 ){
			
			LQE=4;
			
		}else if ((TotalDeposits/TotalAssets)*100 > 85 && (TotalDeposits/TotalAssets) < 95 ){
			
			LQE=3;
			
		}else if ((TotalDeposits/TotalAssets)*100 > 95 && (TotalDeposits/TotalAssets) < 97 ){
			
			LQE=2;
			
		}else if ((TotalDeposits/TotalAssets)*100 > 99 ){
			
			LQE=1;
			
		}
			
		if ((TotalLoans/TotalDeposits)*100 <= 80){
			
			LQE2 =5;
			
		}else if ((TotalLoans/TotalDeposits)*100 > 80 && (TotalLoans/TotalDeposits) < 90){
			
			LQE2 =3;
		
		}else if ((TotalLoans/TotalDeposits)*100 > 90){
			
			LQE2 =1;
		
		}
			
			LQE3 = (LQE + LQE2)/2;

		LiquitidyEval.value = LQE3;

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

