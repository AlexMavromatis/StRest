
   
	  
   
   
    window.simple=function(){
    waitingDialog.show('<center>Running Simulation</center>');
    var mocks=[{message:'Initializing Simulation..',prog:10},{message:'Monte Carlo seeds...',prog:30},{message:'Please wait..',prog:40},{prog:50},{message:'Running Monte Carlo..',prog:55},{prog:56},{prog:57},{message:'Running Monte Carlo..',prog:69},{message:'Running Monte Carlo..',prog:70},{message:'Running Monte Carlo..',prog:75},{message:'Running Monte Carlo..',prog:77},{message:'Running CAMEL',prog:80},{message:'Running CAMEL',prog:99},{message:'Almost Done',prog:100}] ;
    mocks.forEach(function(e,i){
         setTimeout(function(){
		 if(e.message=="Almost Done"){
			waitingDialog.hide();
			CAMEL();
			var monte = MonteCarlo();		
			chart();
			chart2(monte);
			pyramid();
			cameldepict();
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
		    
		    seed = (TotalTier/80000)+0.0001;
	   
	   }else if(Sensitiviy=="Medium"){
		
		    seed = (TotalTier/60000)+0.0002;
	   
	   }else if(Sensitiviy=="Extreme"){
			   
		    seed = (TotalTier/45000)+0.004;
			   
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
	  var cl=0;
	  
	  while(i<100000){
		 
		  if ( MonteCarlo[i]==1){
			  c++;
		  }else{
			  cl++;
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
	  seedswon.value=c;
	  seedslost.value=cl;
	  
	  return MonteCarlo;
	  
} 
	   
	   
	   
	   
	   
	   
	   

    function chart() { 
        var f    = parseInt(document.getElementById("seedswon").value);
        var s    = parseInt(document.getElementById("seedslost").value);
		

    $(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Monte Carlo Seeds visualization based on datasets'
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
            name: 'Monte Carlo Seeds',
            colorByPoint: true,
            data: [{
                name: 'Passed',
                y: f
            }, {
                name: 'Failed',
                y: s        
            }]
        }]
    });
});

}

function pyramid(){
	   $('#container1').highcharts({
        chart: {
            type: 'pyramid',
            marginRight: 100
        },
        title: {
            text: 'Sales pyramid',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [
                ['Website visits',      35000],
                ['Downloads',            65000],
                ['Requested price list', 1987],
                ['Invoice sent',          976],
                ['Finalized',             846]
            ]
        }]
    });
	
	
	}


function chart2(monte){


var mySeries = [];

for(i=1;i<2000;i++){
   mySeries.push(monte[i]);
}
$(function () {
    $('#container2').highcharts({
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Success', 'Failure']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: mySeries
        }]
    });
});

}



function cameldepict(){
	
	
	
	
var x=3;
var y=1.2;
var z=4;
var k=1;
var w =3;
$(function () {
    $('#container3').highcharts({
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 10,
                beta: 25,
                depth: 70
            }
        },
        title: {
            text: '3D chart with null values'
        },
        subtitle: {
            text: 'Notice the difference between a 0 value and a null point'
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        xAxis: {
            categories: Highcharts.getOptions().lang.shortMonths
        },
        yAxis: {
            title: {
                text: null
            }
        },
        series: [{
            name: 'Sales',
            data: [1,x,1,y,1,z,1,w,1,k]
        }]
    });
});
	
	
	
	
	
	
	
	}















