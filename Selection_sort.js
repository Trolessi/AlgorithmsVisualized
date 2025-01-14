


console.log('dawadawa');
const button = document.getElementById('btn');
button.addEventListener('click', (e) => {
    if (!paused){
        paused = true;
        button.innerText = 'Play';
    } else {
        paused = false;
        button.innerText = 'Stop';
    }
});
let dps = []; // dataPoints
let chart = new CanvasJS.Chart("chartContainer", {
    theme : 'light',

    title :{
        text: "Selection Sort"
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
const updateInterval = 200;
let i = 0;
let paused  = false;



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

const selectionSort = function () {
    if (!paused){
        chart.render();
        let min_idx = i;
    
        for (let j = i + 1; j < dps.length; j++) {
            if (dps[j]['y'] < dps[min_idx]['y']) {
    
                min_idx = j;
            }
        }
        for (let l = 0; l < dps.length; l++) {
            dps[l]["color"] = ""
    
        }
        dps[min_idx]["color"] = "blue"
        let temp = dps[i]['y'];``
        dps[i]['y'] = dps[min_idx]['y'];
        dps[min_idx]['y'] = temp;
        dps[min_idx]["color"] = "blue"
        if (i < dps.length - 1){
            i++;
        }
    }
}

makingGraph(100);
setInterval(function(){selectionSort()}, updateInterval);
