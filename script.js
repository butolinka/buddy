const items=document.querySelectorAll(".item");
console.log(items)
items.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        console.log('fg');
        removeFocuse();
        item.classList.add('selected');
    })

    removeFocuse=()=>{
        items.forEach(item=>{
            item.classList.remove('selected');
        })
    }
})
