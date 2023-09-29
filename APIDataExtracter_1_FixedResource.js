fetch("https://official-joke-api.appspot.com/jokes/ten")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            
            <td>${product.setup}</td>
            <td>${product.punchline}</td>
            <td>${product.id}</td>
			<td>${product.type}<td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});