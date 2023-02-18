
// <-----triangle card Even hendeler------->
document.getElementById('batton-triangel').addEventListener('click', function () {

   // --------(0.5 * a * b)----- part

   // first step:-calculating input value of (a),and inpudt value of (b) by a functon named getTotal-----
   const ab = getTotal('triangle-input-a', 'triangle-input-b')
   // 2nd step:-calculating the value of (a*b) with 0.5 ,,,
   const fixed = ab.toFixed(2)
   const total = fixed * 0.5;

   const cal = document.getElementById('calculation-area')

   let calculate = calculationArea(total, cal, "Triangel")




})


// <-----rectangle card Even hendeler------->

document.getElementById("batton-rectangle").addEventListener('click', function () {

   // --------( w * l)----- part

   // first step:-calculating input value of (w),and inpudt value of (l) by a functon named-getTotal-----
   const wl = getTotal('rectangle-input-w', 'rectangle-input-l')

   const fixed = wl.toFixed(2);
   const cal = document.getElementById('calculation-area')

   let calculate = calculationArea(fixed, cal, "rectangle")


})

// <-----Parallelogram card Even hendeler------->

document.getElementById("batton-Parallelogram").addEventListener('click', function () {

   // --------( b * h)----- part

   // first step:-calculating input value of (b),and inpudt value of (h) by a functon named-getTotal-----
   const bh = getTotal('Parallelogram-input-b', 'Parallelogram-input-h')

   const total = bh.toFixed(2);

   const cal = document.getElementById('calculation-area')

   let calculate = calculationArea(total, cal, "Parallelogram")


})


// <-----Rhombus card Even hendeler------->

document.getElementById("batton-Rhombus").addEventListener('click', function () {

   // --------(0.5 * d1 * d2)----- part

   // first step:-calculating input value of (d1),and inpudt value of (d2) by a functon named-getTotal-----
   const d12 = getTotal('Rhombus-input-d1', 'Rhombus-input-d2')

   // 2nd step:-calculating the value of (a*b) with 0.5 ,,,
   const fixed = d12.toFixed(2)
   const total = fixed * 0.5;
   const cal = document.getElementById('calculation-area')

   let calculate = calculationArea(total, cal, "Rhombus")



})


// <-----Pentagon card Even hendeler------->

document.getElementById("batton-Pentagon").addEventListener('click', function () {

   // --------(0.5 * p * b)----- part

   // first step:-calculating input value of (p),and inpudt value of (b) by a functon named-getTotal-----
   const pb = getTotal('Pentagon-input-p', 'Pentagon-input-b')

   // 2nd step:-calculating the value of (p*b) with 0.5 ,,,
   const fixed = pb.toFixed(2)
   const total = fixed * 0.5;

   const cal = document.getElementById('calculation-area')

   let calculate = calculationArea(total, cal, "Pentagon")



})


// <-----Ellipse card Even hendeler------->
document.getElementById('batton-Ellipse').addEventListener('click', function () {




   const ab = getTotal('Ellipse-input-b', 'Ellipse-input-a')

   const fixed = ab.toFixed(2)
   const total = fixed * 3.14;

   const cal = document.getElementById('calculation-area')

   let calculate = calculationArea(total, cal, "Ellipse")




})

document.getElementById('blog').addEventListener('click',function(){

   location.href='myblog.html';
})


