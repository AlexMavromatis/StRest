
   
	  
   
   
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
			MonteCarlo();		
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
	  
	 
	  
	   var TotalTier;
	   var ShareHequity      =    parseInt(document.getElementById("ShareholdersEQ").value,10);
	   var RetainedEarnings  =    parseInt(document.getElementById("RetainedEarnigs").value,10);
	   var RiskWassets       =    parseInt(document.getElementById("RiskwAssets").value,10);
	   var TotalCapital      =    parseInt(document.getElementById("TotalCapital").value,10);
   	   var TotalLoans        =    parseInt(document.getElementById("TotalLoans").value,10);
	   var TotalAssets       =    parseInt(document.getElementById("TotalAssets").value,10);
	   var NetinterestIncome =    parseInt(document.getElementById("NetInterestIncome").value,10);
	   var AvgAssetsEarnings =    parseInt(document.getElementById("AVGearningsAssets").value,10);
	   var TotalEquityShares =    parseInt(document.getElementById("TotalEquityShares").value,10);
	   var OperatingExpenses =    parseInt(document.getElementById("OpExpenses").value,10);
	   var NonInterestIncome =    parseInt(document.getElementById("NonInterestIncome").value,10);
	   var AssetsGrate		 =    parseInt(document.getElementById("AssetRate").value,10);
	   var ShareHEquitygRate =    parseInt(document.getElementById("ShareHoldersRate").value,10);
       var TotalDeposits     =    parseInt(document.getElementById("TotalDeposits").value,10);
       var NPL 				 =    parseInt(document.getElementById("NPL").value); //Non performing loans
	   var LoansProvision    =    document.getElementById("NPLprovision");
	   var ProvisionOpt      =    LoansProvision.options[LoansProvision.selectedIndex].text;
       var IncomeRate 		 =    parseInt(document.getElementById("IncomeRate").value,10);
	   var CAR;	  // Capital adequacy variable for camel rating
	   var ASQ;	  // Assett quality evaluation variable for camel rating
	   var AQE;	  // Assett quality evaluation variable for camel rating
	   var AQE2;
	   var EEC;   // Earnings Evaluation variables EEC for final camel rating
	   var EEC1; 
	   var EEC2; 
	   var EEC3;
	   var EDE;   // Earnigns dynamics evaluation
	   var LQE;   // Liquitidy evaluation variable
	   var LQE2;  // Liquitidy evaluation variable
	   var LQE3;  // Liquitidy evaluation variable
	   var MAE;
	   var CAPE;
	   var Tier1;
	   var Tier2;
	   var GeneralCamel;


//Calculating tiers of bank and Camel ratings 

	   Tier1     =   ((ShareHequity+RetainedEarnings)/RiskWassets)*100;
	   Tier2	 =   (TotalCapital/RiskWassets)*100;
	   TotalTier =   Tier1+Tier2;   
	   CAR       =   (TotalCapital/TotalAssets)*100;
	   AQE		 =	 (NPL/TotalLoans)*100;
	   AQE2 	 =   (NPL/TotalEquityShares)*100;
	   ASQ		 =    AQE + AQE2;
	   
	   
	   if (TotalTier > 8){
		   StressPass.value= "Passed"
	   }else{
		   StressPass.value= "Failed"
	   }
		   

	   if (CAR <= 1.8){
	   
		     
	         CAPE=5;
		
	   }else if (CAR <= 2.3){
		 
		  
			 CAPE=4;
			 
	   }else if (CAR<= 2.8){
		 
			 
			 CAPE=3;	   
			 
	   }else if (CAR <= 3.3){
			
			CAPE=2;
			
	   }else if (CAR<=3.5){
		   	 
			CAPE=1.4;
				    
	   }else if (CAR >= 3.7){
				
		
		    CAPE=1;
		    
		}
		
	   
	//------------------------------------------------------------- 
	 
	   
	   
	   if (ASQ <=1 ){
		   
		   ASQ=1;
		   
	   }else if(ASQ <=2 && ASQ > 3){
		   
		   ASQ=2;   
		   
	   }else if(ASQ <=3 && ASQ > 4){
		   		   
		   ASQ=3;
		  		   
		} else if (ASQ > 4){ 
			  
		   ASQ=5; 
	
		  }
		  
	   if (ProvisionOpt !=="100%"){
		 
		   ASQ=5;
		  
	   }
		//------------------------------------------------------------- 
	
	  
	   if (IncomeRate <= 10){
		  
		   MAE=4;
		   
	   }else if (IncomeRate >10 && IncomeRate <=13){
		  
		   MAE=3;
		  
	   }else if (IncomeRate >13 && IncomeRate <= 15){
		  
		   MAE=2;
		  
	   }else if (IncomeRate > 15){
			  		
		   MAE=1;
			  
	   }
		 	//------------------------------------------------------------- 
		
		
		
		if ((NetinterestIncome/AvgAssetsEarnings) <= 4.5) {
						
			EEC=5;
			
		} else if ((NetinterestIncome/AvgAssetsEarnings) >4.5 && (NetinterestIncome/AvgAssetsEarnings) < 8.5){
		
			EEC=4;
		
		} else if ((NetinterestIncome/AvgAssetsEarnings) > 8.5 && (NetinterestIncome/AvgAssetsEarnings) < 11.5){
		
			EEC=3;
		
		} else if ((NetinterestIncome/AvgAssetsEarnings) >11.5 && (NetinterestIncome/AvgAssetsEarnings) < 14){
		
			EEC=2;
		
		} else if ((NetinterestIncome/AvgAssetsEarnings) > 14.5){
		
			EEC=1;
		
		}
		
		//------------------------------------------------------------- 
	
		if (((OperatingExpenses/NetinterestIncome) + NonInterestIncome) <= 70 ){
			
			EEC1 = 5;
			
		}else if (((OperatingExpenses/NetinterestIncome) + NonInterestIncome) < 70 && ((OperatingExpenses/NetinterestIncome) + NonInterestIncome) > 40){
			
			EEC1 = 3;
		
		}else if (((OperatingExpenses/NetinterestIncome) + NonInterestIncome) > 20){
			
			EEC1 = 1;
		
		}
				//------------------------------------------------------------- 
	
			
		if ((NetinterestIncome/AssetsGrate) <= 1 ){
			
			EEC2 = 4;
			
		}else if ( (NetinterestIncome/AssetsGrate) > 1 && (NetinterestIncome/AssetsGrate) < 3){
			
			EEC2 = 3;
			
		}else if ( (NetinterestIncome/AssetsGrate) > 3){
			
			EEC2 = 1;
			
		}
		
		
			//------------------------------------------------------------- 
	
	
		if ((NetinterestIncome/ShareHEquitygRate) <= 15 ){
			
			EEC3 = 5;
			
		}else if ((NetinterestIncome/ShareHEquitygRate) > 15 && (NetinterestIncome/ShareHEquitygRate) < 20 ){
			
			EEC3 = 3;
		
		}else if ((NetinterestIncome/ShareHEquitygRate) > 20 && (NetinterestIncome/ShareHEquitygRate) < 25 ){
			
			EEC3 = 2;
		
		}else if ((NetinterestIncome/ShareHEquitygRate) > 25 ){
			
			EEC3 = 1;
		
		}else {
		
		    EEC3 = 5;
		
		}
			
				//------------------------------------------------------------- 
			
			
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
		
			//------------------------------------------------------------- 
	
		
		if ((TotalLoans/TotalDeposits)*100 <= 80){
			
			LQE2 =5;
			
		}else if ((TotalLoans/TotalDeposits)*100 > 80 && (TotalLoans/TotalDeposits) < 90){
			
			LQE2 =3;
		
		}else if ((TotalLoans/TotalDeposits)*100 > 90){
			
			LQE2 =1;
		
		}
		
			//------------------------------------------------------------- 
		
			
        shareEquity.value= CAPE;	  
			
	    ManagementEval.value= MAE;
			
		EDE = (EEC + EEC1 + EEC2 + EEC3)/4;
		
		EarningsEval.value = EDE;
		
		LQE3 = (LQE + LQE2)/2;

		LiquitidyEval.value = LQE3;
		
	    AssetQEVal.value=ASQ;

		GeneralCamel = (LQE3 + EDE + MAE + ASQ + CAPE)/5;

		FinalCamel.value = GeneralCamel;

	



}
		 
		
function MonteCarlo(){
	   
	   var ShareHequity      =    parseInt(document.getElementById("ShareholdersEQ").value,10);
	   var RetainedEarnings  =    parseInt(document.getElementById("RetainedEarnigs").value,10);
	   var RiskWassets       =    parseInt(document.getElementById("RiskwAssets").value,10);
	   var TotalCapital      =    parseInt(document.getElementById("TotalCapital").value,10);
	   var Scenario 		 =    document.getElementById("scenario");
	   var Sensitiviy        =    Scenario.options[Scenario.selectedIndex].text;
	   var MonteCarlo = [];
	   var Tier1;
	   var Tier2;
	   var seed;
	   var DAlambert;
	   var ProbabilityOfsuccess;
	   
	   Tier1     =   ((ShareHequity+RetainedEarnings)/RiskWassets)*100;
	   Tier2	 =   (TotalCapital/RiskWassets)*100;
	   TotalTier =   Tier1+Tier2; 
	 
	 
	   if (TotalTier<8){
	       
	       StressSuccessProb.value="0%"
	   
	   }
	   
	   
	   if (Sensitiviy=="Standard"){
		    
		    seed = TotalTier/80000;
	   
	   }else if(Sensitiviy=="Medium"){
		
		    seed = TotalTier/60000;
	   
	   }else if(Sensitiviy=="Extreme"){
			   
		    seed = TotalTier/45000;
			   
	   }
	   
	   
	   for (i=1; i<100000; i++){
	   
	   var sample = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
	
	       if ((TotalTier/sample)>seed){
		   
		       DAlambert++;
		       MonteCarlo[i]=1;
		   
	       }else if((TotalTier/sample)<seed){
		   
		       DAlambert--;
		       MonteCarlo[i] = 0;
	
	
		   }	
	  }
	  var c=0;
	  var i=0;
	  
	  while(i<100000){
		 
		  if ( MonteCarlo[i]==1){
			  c++;
			  }
		  i++;
		  
	  }
		 
		 
      if(c>50000 && TotalTier>8){
		  
		  ProbabilityOfsuccess=70;
		  
	  }else if(c>50000 && TotalTier >=10){
		  
		  ProbabilityOfsuccess=78;
	  
	  }else if(c>60000 && TotalTier>8){
		  
		  ProbabilityOfsuccess=85;
	  
	  }else if(c>60000 && TotalTier>=10){
		  
		  ProbabilityOfsuccess=89;
	  
	  }else if(c>70000 && TotalTier>8){
		  
		  ProbabilityOfsuccess=94;
	  
	  }else if(c>70000 && TotalTier>=10){
		  
		  ProbabilityOfsuccess=96;
	  
	  }else if(c>75000 && TotalTier>8){
		  
		  ProbabilityOfsuccess=97;
	  
	  }else if(c>75000 && TotalTier>=10){
		  
		  ProbabilityOfsuccess=98;
	  
	  }else if(c>80000 && TotalTier>8){
		  
		  ProbabilityOfsuccess=99;
	  
	  }else if(c>80000 && TotalTier>10){
		  
		  ProbabilityOfsuccess=100;
	  
	  }
	  
	  StressSuccessProb.value=ProbabilityOfsuccess + "%";
	  Drawdown.value=c;
	  
	  
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

