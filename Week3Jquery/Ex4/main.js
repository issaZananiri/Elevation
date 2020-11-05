
let cartArray=[]
const cart = $('#cart')
const arr = function(array){
    let arr=[...array]
let objArray =[]
for (let i=0;i<arr.length;i++) {
    let count =0
    let item=arr[i]
   for (let j=0;j<arr.length;j++) {
       if (item==arr[j]) {
           count++
           arr.splice(j,1)
           j--
           i=-1
       }
   }
   objArray.push({item,count})
}

return objArray
}
const render = function () {
cart.empty()

for (const item of ar(cartArray)) {

    let newItemPost=$(`  <h3>${item.item} x ${item.count}</h3>   `)
    //$('body').append(newItemPost)
    cart.append(newItemPost)
    
}
}
const item = $('.item')
item.on('click',function () {
    let itm=$(this)
    if(itm.data('instock')){
        let na=itm.text()
        
        cartArray.push(na)


    }else{console.log('item are out');}
    render()
})

