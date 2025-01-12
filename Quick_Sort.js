
console.log('dawadawa')
// const button = document.getElementById('btn');
// button.addEventListener('click', (e) => {
//     if (!paused){
//         paused = true;
//         button.innerText = 'Play';
//     } else {
//         paused = false;
//         button.innerText = 'Stop';
//     }
// });
let dps = []; // dataPoints
let chart = new CanvasJS.Chart("chartContainer", {
    theme : 'light',


    title :{
        text: "Quick Sort"
    },
    data: [{
        color: '     #ff512b ',
        type: "column",
        dataPoints: dps
    }]
});
function disorganizeList(arr){
    let currentIndex = arr.length;
    while (currentIndex != 0) {


        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;


        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }
    return arr;




}

const updateInterval = 50;
const xVal = 0;
const yVal = 100;
const xValues = Array(101).fill(0).map((_, index)=> index);
let yValues = disorganizeList(Array(100).fill(1).map((_, index)=> index));
let counter = 0;
let color = Array(100).fill(1).map((_, index)=> index);
let colorList = [];
let points = [];
let paused = false;

function makingGraph (list){
    // dps = []
    console.log(yValues);
    for (var i = 0; i < xValues.length; i++){
        dps.push({
            x: xValues[i],
            y: list[i],
            color: "",
        });
    }
    console.log(dps);
    chart.render();
}




function updateChart(values, colors ) {
    for (var j = 0; j < values.length; j++) {
        if (!Number.isInteger(colors[j])){
            dps[j]['color'] = colors[j];
        } else {
            dps[j]['color'] = "";
        }
        dps[j]["y"] = values[j];
    }
};


function partition(arr, low, high)
{
    let pivot = arr[high];

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, high);
    return i + 1;
}


function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    color[i] = 'blue';
    colorList.push([...color]);
    points.push([...arr]);
    color = Array(100).fill(1).map((_, index)=> index);
    arr[j] = temp;
    color[j] = 'green';
    colorList.push([...color]);
    points.push([...arr]);
    color = Array(100).fill(1).map((_, index)=> index);
}


function quickSort(arr, low, high)
{
    if (low < high) {

        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

makingGraph(yValues);
quickSort(yValues, 0, yValues.length - 1);


let animation = function (){
    updateChart(points[counter], colorList[counter]);
    counter++;
    chart.render();
}




setInterval(function(){animation()}, updateInterval);

