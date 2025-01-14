
// can show any algorithm if I store the values at a point and then replay them.
// Only problem is that website might take a bit to load for some slower algorithms for example O(n) or around there. Note the time would still be minimal though. Storing these values in a list converting them into dps, only mishap is figure out how to keep colors.


console.log('dawadawa')
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
var dps = []; // dataPoints
var chart = new CanvasJS.Chart("chartContainer", {
    theme : 'light',


    title :{
        text: "Merge Sort"
    },
    data: [{
        color: '     #ff512b ',
        type: "column",
        dataPoints: dps
    }]
});
var disorganizeList = function (arr){
    let currentIndex = arr.length;
    while (currentIndex != 0) {


        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;


        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }
    return arr;




}


var xVal = 0;
var yVal = 100;
let xValues = Array(101).fill(0).map((_, index)=> index);
let yValues = disorganizeList(Array(100).fill(1).map((_, index)=> index));
var updateInterval = 50;
let counter = 0;
let color = Array(100).fill(1).map((_, index)=> index);
let colorList = [];
let points = [];
var dataLength = 20; // number of dataPoints visible at any point
let paused = false;
let k = 0;

var makingGraph = function (list){
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


var adding = function (list){
    // dps = []
    let arr = [];
    for (var i = 0; i < xValues.length; i++) {
        arr.push({
            x: xValues[i],
            y: list[i],
            color: "",
        });
    }
    return arr;
}


var updateChart = function (values, colors ) {
    for (var j = 0; j < values.length; j++) {
        if (!Number.isInteger(colors[j])){
            dps[j]['color'] = colors[j];
        } else {
            dps[j]['color'] = "";
        }
        dps[j]["y"] = values[j];
    }
};
// color[k] = 'blue';
// colorList.push([...color]);
// points.push([...array]);
// color = Array(100).fill(1).map((_, index)=> index);
function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    // Create temp arrays
    const L = new Array(n1);
    const R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    let i = 0, j = 0;
    let k = left;

    // Merge the temp arrays back into arr[left..right]
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            color[k] = 'blue';
            colorList.push([...color]);
            points.push([...arr]);
            color = Array(100).fill(1).map((_, index)=> index);
            i++;
        } else {
            arr[k] = R[j];
            color[k] = 'blue';
            colorList.push([...color]);
            points.push([...arr]);
            color = Array(100).fill(1).map((_, index)=> index);
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        color[k] = 'blue';
        colorList.push([...color]);
        points.push([...arr]);
        color = Array(100).fill(1).map((_, index)=> index);
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        color[k] = 'blue';
        colorList.push([...color]);
        points.push([...arr]);
        color = Array(100).fill(1).map((_, index)=> index);
        j++;
        k++;
    }
}

function mergeSort(arr, left, right) {
    if (left >= right)
        return;

    const mid = Math.floor(left + (right - left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

makingGraph(yValues);
mergeSort(yValues,0, yValues.length - 1);
console.log('points');
//console.log(points);
// for (let i = 0; i < points.length; i++){
//     console.log(points[i]);
// }


let animation = function (){
    if (!paused && counter < points.length){
        updateChart(points[counter], colorList[counter]);
        counter++;
        
    } else if (!paused && counter >= points.length){
        dps[k]['color'] = '#228B22';
        dps[k+1]['color'] = 'blue';
        k++;
        console.log(k);
    }
    chart.render();
    
}




setInterval(function(){animation()}, updateInterval);

