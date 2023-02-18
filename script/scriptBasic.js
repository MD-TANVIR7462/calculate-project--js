
// <-----triangle card Even hendeler------->
document.getElementById('batton-triangel').addEventListener('click', function () {

   // --------(0.5 * a * b)----- part

   // first step:-calculating input value of (a),and inpudt value of (b) by a functon named getTotal-----
   const ab = getTotal('triangle-input-a', 'triangle-input-b')
   // 2nd step:-calculating the value of (a*b) with 0.5 ,,,
   const total = ab*0.5;
    const x =total.toFixed(2)
   console.log(x)


})


// <-----rectangle card Even hendeler------->

document.getElementById("batton-rectangle").addEventListener('click', function () {

   // --------( w * l)----- part

   // first step:-calculating input value of (w),and inpudt value of (l) by a functon named-getTotal-----
   const wl = getTotal('rectangle-input-w', 'rectangle-input-l')
 
   const total = wl;
   console.log(total)


})

// <-----rectangle card Even hendeler------->

document.getElementById("batton-rectangle").addEventListener('click', function () {

   // --------( w * l)----- part

   // first step:-calculating input value of (w),and inpudt value of (l) by a functon named-getTotal-----
   const wl = getTotal('rectangle-input-w', 'rectangle-input-l')
 
   const total = wl;
   console.log(total)


})

