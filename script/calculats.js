// <-------function for multyply  given inputs----> 
let x = 0;
function calculationArea(amount,calculate,name){
   x+=1;
   const child = amount;
   const perent = calculate;
   const names = name

   const tr = document.createElement('tr');
   tr.innerHTML =`
   <td class = 'ps-1'>${x}.</td>
   <td class = 'pe-2'>${names}</td>
   <td class = 'px-1'>${child}cm<span>&#178;</span></td>
   <td><button type="button" type="button" class="btn btn-danger mt-2">Cnvert m<span>&#178;</span></button></td>
   
   `;
   perent.appendChild(tr);
 
   }
   