fetch("https://kitsu.io/api/edge/anime")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let placeholder = document.querySelector("#data-output2");
    let out = "";
    
    // Assuming 'data' is the array within the response that you want to iterate over
    for (let x of data.data) {
      out += `
         <tr>
            <td>${x.id}</td>
         </tr>
      `; 
    }
 
    placeholder.innerHTML = out;
  })
  .catch(function(error) {
    console.error("Error fetching data:", error);
  });