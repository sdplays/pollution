
var data = [" As a country, what percent of the world's waste do you think has been produced by the United States?",
    "How many tons of carbon dioxide do you think have been added to our atmosphere ? ",
    "As a country, what percent of the world's waste do you think has been produced by the U.S.?",
    "What percent of a typical landfill consists of solely packaging material?",
    "How many jobs do you think were created in the wind power sector in 2015 alone?",
    "According to statistics, how many trees do you think could be saved if all newspapers were to be recycled?",
    "What percent of water on earth is drinkable?",
    "Of the 150 glaciers present in northern Montana in 1910, how many do you think remain today?",
    "How many tons of Carbon Dioxide do you think we add to the atmosphere each MINUTE?",
    "What percent chance greater risk do you have of dying from lung cancer when living in a heavily air-polluted.",
    "What percent of all U.S. consumption of energy do you think comes from Solar Panels?",
    "How many children do you think die worldwide anually due to polluted water?",
    "What percent of U.S. carbon emmissions come from transportation alone?",
    "How many metric tons of carbon dioxide were prevented from entering into the atmosphere due to recycling in recent years?",
    "How many jobs in wind energy are projected to be created by 2030?",
    "How many species of animals do you think have become extinct in the last 100 years?",
    "What percent of antibiotic medication do you think is used for livestock in the U.S?",
    "How many jobs do you think have been created for solar energy?",
    "When do you think was the first hydroelectric generating facility created in the U.S.?",
    "What percent more effective do you think wind farms in the ocean are than from land?"];
//var data = ["hello", "asdf", "ikikik"];
var index = 0;
var dataEx = ["According to theworldcounts.com, over 2.15 Billion tons of waste are dumped annually.",
    "According to theworldcounts.com, over 2.3 Trillion tons of carbon dioxide have been accumulated over the last two centuries. Half of that was from the last 30 years!",
    "According to earthecho.org, despite having 5% of the population, the United States produces 40% of the world's waste, with each American producing an average of 1,609 lbs annually.",
    "According to earthecho.org, approximately 30% consists of packaging material!",
    "According to kidsconnect.com/science/environment, about 88,000 wind sector jobs were created at this time!",
    "According to kidsconnect.com/science/environment, almost 250 million trees could be saved annually from recycling newspapers!",
    "According to truthbeknown.com/earthstatistics.htm, only 1% is drinkable. The other 97% of the earth's water is saltwater, and the last 2% of water is frozen on the North and South Poles.",
    "According to truthbeknown.com/earthstatistics.htm, nly 27 remain at this time.",
    "According to truthbeknown.com/earthstatistics.htm, we add almost 12,000 tons of carbon dioxide into the atmosphere every minute.",
    "According to www.eia.gov, you are at a 20% higher risk when living in a highly polluted area.",
    "According to www.eia.gov, only 1.3% comes from solar energy.",
    "According to www.conserve-energy-future.com, over 5,000 children die every year from polluted water.",
    "According to weather.com/health/news, over 32% comes from cars, trucks, airplanes, and other forms of U.S. transportation.",
    "According to www.greengeeks.com/blog, over 181 million metric tons have been saved thanks to recycling!",
    "According to www.greengeeks.com/blog, thanks to increased demand for renewable energy, the wind power industry is projected to expand with an additional 400,000 jobs by 2030!",
    "According to www.greengeeks.com/blog, dating back to the early 1920's, about 50 animal species have become extinct due to deforestation, hunting, and habitat destruction.",
    "According to the 2009 Summary Report on Antimicrobials conducted by the FDA, approximately 4 out of 5 antibiotics in america are used for livestock alone.",
    "According to www.thesolarfoundation.org, despite only about 1.3% of U.S. energy coming from solar, over 250,000 people are currently employed in the industry, a 168% increase from just 8 years ago!",
    "According to planetsave.com/2016/03/30/hydropower, the first U.S. hydroelectric facility was created in 1881 at Niagra Falls.",
    "According to insideclimatenews.org, because wind speeds average to be 70% higher on the ocean than on land, wind farms in the ocean have proven to be 300% more effective!"];

var indexEx = 0;

var dataCorrect = ["2.3 Trillion", "40%", "30%", "88,000", "250 Million", "1%", "27", "12,000 Tons", "20%", "1.3%", "5,000", "32%", "181 Million", "400,000", "50", "4 out of 5", "250,000", "1881", "300%"];
var indexCorrect = 0;

var dataA = ["2.3 Trillion", "40%", "30%", "88,000", "250 Million", "1%", "27", "12,000 Tons", "20%", "1.3%", "5,000", "32%", "181 Million", "400,000", "50", "4 out of 5", "250,000", "1881", "300%"];
var indexA = 0;
var dataB = ["500 billion", "50%", "50%", "99,000", "2 billion", "33%", "68", "2,000 lbs.", "90%", "13%", "100", "33%",
    "281 million", "1", "2,000", "3 out of 27", "25,000", "1927", "110%"];
var indexB = 0;

var dataC = ["10 trillion", "5%", "80%", "10,000", "2,000,000", "50%", "12", "10 tons", "5%", "20%", "100", "6%", "1 million", "1,000,000", "100", "1/3", "100,000", "1968", "50%"];
var indexC = 0;

var dataD = ["5 million", "90%", "9%", "100,000", "100,000", "90%", "80", "4,000 tons", "50%", "5%", "10,000", "90%", "2,000", "500,000", "30", "6/7", "900,000", "1814", "99%"];
var indexD = 0;

var myList = [["data", "dataCorrect", "dataA", "dataB", "dataC", "dataD", "dataEx"]];
var number=0;



function submitAnswer() {
    var radios = document.getElementsByName("choice");
   var answers = document.getElementsByTagName("span");
    var i = 0, len = radios.length;
    var checked = false;
    var userAnswer;
    //var nextQ;

    var msg = document.getElementById("explanation").innerHTML;

    for (; i < len; i++) {
        if (radios[i].checked) {
            checked = true;
            userAnswer = answers[i].id;
        }


    }
    // if user click submit button without selecting any option, print "please select choice answer".
    if (!checked) {
        document.getElementById("msg-container").innerHTML = "Please select an answer"
        return;
    }
    // Correct answer
    else if ((userAnswer === "choiceA")&&(number==0)) {
        document.getElementById("msg-container").innerHTML = "Answer is Correct!"
    }
  else if ((userAnswer === "choiceB")&&(number==1)) {
        document.getElementById("msg-container").innerHTML = "Answer is Correct!"
    }
  else if ((userAnswer === "choiceC")&&(number==2)) {
        document.getElementById("msg-container").innerHTML = "Answer is Correct!"
    }
   else if ((userAnswer === "choiceD")&&(number==3)) {
        document.getElementById("msg-container").innerHTML = "Answer is Correct!"
    }
    // Incorrect answer
    else {
        document.getElementById("msg-container").innerHTML = "Answer is Incorrect!"
    }

    if (checked)
        document.getElementById("explanation").innerHTML = dataEx[index]




    // display the hidden msg.
    document.getElementById("msg-container").style.display = "inline";


}

function nextQ() {
    index = index + 1;
    number=Math.floor(Math.random() * 4); document.getElementById("next").innerHTML = data[index];
    console.log(index);

    document.getElementById("explanation").innerHTML = "";
    indexEx = indexEx + 1;
    console.log(indexEx);
    document.getElementById("msg-container").innerHTML = "";


if(number == 0){    document.getElementById("choiceA").innerHTML = dataA[indexA];
    indexA = indexA + 1;
    console.log(indexA);

    document.getElementById("choiceB").innerHTML = dataB[indexB];
    indexB = indexB + 1;
    console.log(indexB);

    document.getElementById("choiceC").innerHTML = dataC[indexC];
    indexC = indexC + 1;
    console.log(indexC);
                document.getElementById("choiceD").innerHTML = dataD[indexD];
    indexD = indexD + 1;
    console.log(indexD);
               }
 else if(number == 1){    document.getElementById("choiceA").innerHTML = dataC[indexC];
    indexC = indexC + 1;
    console.log(indexC);

    document.getElementById("choiceB").innerHTML = dataA[indexA];
    indexA = indexA + 1;
    console.log(indexA);

    document.getElementById("choiceC").innerHTML = dataB[indexB];
    indexB = indexB + 1;
    console.log(indexB);
 document.getElementById("choiceD").innerHTML = dataD[indexD];
    indexD = indexD + 1;
    console.log(indexD);
               }
   else if(number == 2){    document.getElementById("choiceA").innerHTML = dataC[indexC];
    indexC = indexC + 1;
    console.log(indexC);

    document.getElementById("choiceB").innerHTML = dataB[indexB];
    indexB = indexB + 1;
    console.log(indexB);

    document.getElementById("choiceC").innerHTML = dataA[indexA];
    indexA = indexA + 1;
    console.log(indexA);
                        document.getElementById("choiceD").innerHTML = dataD[indexD];
    indexD = indexD + 1;
    console.log(indexD);
               }
 else{    document.getElementById("choiceA").innerHTML = dataB[indexB];
    indexB = indexB + 1;
    console.log(indexB);

    document.getElementById("choiceB").innerHTML = dataC[indexC];
    indexC = indexC + 1;
    console.log(indexC);

    document.getElementById("choiceC").innerHTML = dataD[indexD];
    indexD = indexD + 1;
    console.log(indexA);
      
 document.getElementById("choiceD").innerHTML = dataA[indexA];
    indexA = indexA + 1;
    console.log(indexA);
               }
    

  //  [["data","dataCorrect]]

}

