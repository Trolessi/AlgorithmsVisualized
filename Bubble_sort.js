


console.log('dawadawa')
let dps = []; // dataPoints
let chart = new CanvasJS.Chart("chartContainer", {
    theme : 'light',

    title :{
        text: "Bubble Sort"
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
let counter = 0;
let dataLength = 20; // number of dataPoints visible at any point



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

const bubbleSort = function () {
    let i, j, temp;
    let swapped;
    let length = n - 1;

    swapped = false;

    for (let l = 0; l < dps.length; l++) {
            dps[l]["color"] = ""

    }
    dps[counter+1]["color"] = "blue"
    if (dps[counter]["y"] > dps[counter + 1]["y"]) {
        // Swap arr[j] and arr[j+1]

        temp = dps[counter]["y"];
        dps[counter]["y"] = dps[counter + 1]["y"];
        dps[counter + 1]["y"] = temp;
        swapped = true;
    }
    chart.render();
    console.log(n);

        // IF no two elements were
        // swapped by inner loop, then break
    if (counter < n - 1){
        counter++;

    } else {
        n = n - 1;
        counter = 0;

    }

}

makingGraph(100);
setInterval(function(){bubbleSort()}, updateInterval);
