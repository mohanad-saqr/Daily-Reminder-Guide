const create = document.getElementById("create");

create.addEventListener("click", async (event)=> {
    event.preventDefault()
   const additem = document.getElementById("additem").value;
   const items = document.getElementById("items")
try{
   const sendItem = await fetch("/create", {
    method: "POST",
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({item:additem})
   });

   const returnedItem = await sendItem.json()
   console.log(returnedItem)

   const newitem = returnedItem [returnedItem.length-1];
    const li = document.createElement("li");
    const node = document.createTextNode(newitem);
        li.appendChild(node)
    items.appendChild(li);

   } catch(e) {
    console.log(e)
}

});