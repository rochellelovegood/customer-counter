const countEl=document.querySelector('.count')
const titleEl=document.querySelector('h1')
console.log(countEl)

let count=0;
let customerCounts=[]
let greeting='Good Morning'
let Customername='Cheryl'
function greet(){
    titleEl.textContent= greeting+" "+Customername
}
greet()

function increase(){
    count = count+1
    countEl.textContent=count
}
increase()

function decrease(){
    if (count>0){

    count=count-1
    }
    countEl.textContent=count
}
decrease()
function reset(){
    count=0
    countEl.textContent=count
}

function save(){
    customerCounts.push(count)
    console.log(customerCounts)

}
