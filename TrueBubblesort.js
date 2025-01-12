
// can show any algorithm if I store the values at a point and then replay them.
// Only problem is that website might take a bit to load for some slower algorithms for example O(n) or around there. Note the time would still be minimal though. Storing these values in a list converting them into dps, only mishap is figure out how to keep colors.


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
var dps = []; // dataPoints
var chart = new CanvasJS.Chart("chartContainer", {
    theme : 'light',


    title :{
        text: "Bubble Sort"
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
var updateInterval = 0;
let counter = 0;
var dataLength = 20; // number of dataPoints visible at any point
let paused = false;






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


function bubbleSort(arr) {
    var i, j, temp;
    var swapped;
    var n = arr.length;
    let color = Array(100).fill(1).map((_, index)=> index);
    let colorList = [];
    let list = [];
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;


                // Push a copy of arr to the list
                color[j+1] = 'blue';
                colorList.push([...color]);
                list.push([...arr]);
                color = Array(100).fill(1).map((_, index)=> index);



                swapped = true;
            }
        }
        // IF no two elements were swapped by inner loop, then break
        if (swapped === false) break;
    }
    return [list, colorList];
}


makingGraph(yValues);
const [points, colorList] = bubbleSort(yValues);
console.log('points');
//console.log(points);
for (let i = 0; i < points.length; i++){
    console.log(points[i]);
}


let animation = function (){
    updateChart(points[counter], colorList[counter]);
    //console.log(points[1]);
    counter++;
    chart.render();
}




setInterval(function(){animation()}, updateInterval);

