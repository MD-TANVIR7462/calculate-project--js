
// <-----triangle card Even hendeler------->
document.getElementById('batton-triangel').addEventListener('click', function () {

   // --------(0.5 * a * b)----- part

   // first step:-calculating input value of (a),and inpudt value of (b) by a functon named getTotal-----
   const ab = getTotal('triangle-input-a', 'triangle-input-b')
   // 2nd step:-calculating the value of (a*b) with 0.5 ,,,
const fixed = ab.toFixed(2)
   const total = fixed*0.5;
   console.log(total)

 


})


// <-----rectangle card Even hendeler------->

document.getElementById("batton-rectangle").addEventListener('click', function () {

   // --------( w * l)----- part

   // first step:-calculating input value of (w),and inpudt value of (l) by a functon named-getTotal-----
   const wl = getTotal('rectangle-input-w', 'rectangle-input-l')
 
   const fixed= wl.toFixed(2);
   console.log(fixed)


})

// <-----Parallelogram card Even hendeler------->

document.getElementById("batton-Parallelogram").addEventListener('click', function () {

   // --------( b * h)----- part

   // first step:-calculating input value of (b),and inpudt value of (h) by a functon named-getTotal-----
   const bh = getTotal('Parallelogram-input-b', 'Parallelogram-input-h')
 
   const total = bh.toFixed(2);
   console.log(total)


})


// <-----Rhombus card Even hendeler------->

document.getElementById("batton-Rhombus").addEventListener('click', function () {

  // --------(0.5 * d1 * d2)----- part

   // first step:-calculating input value of (d1),and inpudt value of (d2) by a functon named-getTotal-----
   const d12 = getTotal('Rhombus-input-d1', 'Rhombus-input-d2')

 // 2nd step:-calculating the value of (a*b) with 0.5 ,,,
   const fixed = d12.toFixed(2)
   const total = fixed*0.5;
   console.log(total)



})
