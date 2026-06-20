let users=[10,20,30,40];

let input = document.querySelector("#input"). 
addEventListener('input',function(){
    input= this.value;
    })

  let root = document.querySelector("#root");
  let ul = document.createElement("ul");
 

// ADDBEGIN
document.querySelector("#addBegin"). 
addEventListener('click',function(){
 users.unshift(input)
function render(){
  users.forEach(function(ele){
       ul.innerHTML +=`<li>${ele}</li>`
 })
 root.append(ul);
}
 render();
})
// ADDEND
document.querySelector("#addEnd"). 
addEventListener('click',function(){
 users.push(input)
function render(){
 users.forEach(function(ele){
       ul.innerHTML +=`<li>${ele}</li>`
 })
 root.append(ul);
}
 render();
})
// DELETEBEGIN
 document.querySelector("#deleteBegin"). 
addEventListener('click',function(){
 users.shift()
function render(){
 users.forEach(function(ele){
       ul.innerHTML +=`<li>${ele}</li>`
 })
 root.append(ul);
}
 render();
})

//DELETEEND
document.querySelector("#deleteEnd"). 
addEventListener('click',function(){
 users.pop()
function render(){
users.forEach(function(ele){
       ul.innerHTML +=`<li>${ele}</li>`
 })
 root.append(ul);
}
 render();
})


