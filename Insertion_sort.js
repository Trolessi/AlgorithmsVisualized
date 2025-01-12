

let dps = []; // dataPoints
let chart = new CanvasJS.Chart("chartContainer", {
    theme : 'light',

    title :{
        text: "Insertion sort"
    },
    data: [{
        color: ' #ff512b ',
        type: "column",
        dataPoints: dps
    }]
});

const disorganizeList = function (arr){
    let currentIndex = arr.length;
    while (currentIndex !== 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}

const xVal = 0;
const yVal = 100;
let xValues = Array(101).fill(0).map((_, index)=> index);
let yValues = disorganizeList(Array(100).fill(1).map((_, index)=> index));
const updateInterval = 0;
let n = yValues.length
let i = 1;
let j = i - 1;
let key = yValues[i];


const makingGraph = function (list){
    // dps = []
    console.log(yValues);
    for (let i = 0; i < xValues.length; i++){
        dps.push({
            x: xValues[i],
            y: yValues[i],
            color: "",
        });
    }
    chart.render();
}

const updateChart = function () {

    for (let j = 0; j < yValues.length; j++) {
        dps[j]["y"] = yValues[j];
    }
};

const InsertionSort = function () {
    let gone = false;
    console.log(i)
    chart.render();
    for (let l = 0; l < dps.length; l++) {
        dps[l]["color"] = ""

    }

    if (j >= 0 && dps[j]["y"] > key){
        dps[j]["color"] = "blue"
        dps[j + 1]['y'] = dps[j]['y'];
        j = j - 1;
    }
    else
    {
        gone = true;
    }
    dps[j + 1]['y'] = key;
    if ( i < dps.length && gone)
    {
        i++;
        key = dps[i]['y'];
        j = i - 1;
    }
    else if (i > dps.length)
    {
        i = 1;
        console.log('done')
    }








}

makingGraph(100);
setInterval(function(){InsertionSort()}, updateInterval);