const madiv = document.querySelector("#main");
const myRequest = new Request("_static/externe/plantes/les_plantes_9.json");
const t_header = document.createElement("thead")
fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
    for (const key in Object.keys(data["plantes"][0]))
    {
    t_header.appendChild(document.createElement("th")).textContent = Object.keys(data["plantes"][0])[key];
    }
    const table = document.createElement("table")
    table.append(t_header)
    for (const plante of data.plantes) {
      const rangee = document.createElement("tr");
      const cellule = document.createElement("td");
      rangee.appendChild(cellule).textContent =
        plante.nom;
      rangee.appendChild(document.createElement("td")).textContent =
        `${plante.ec_min.toFixed(1)}`;
      rangee.appendChild(document.createElement("td")).textContent =
        `${plante.ec_max.toFixed(1)}`;
     rangee.appendChild(document.createElement("td")).textContent =
        `${plante.ph_min.toFixed(1)}`;
     rangee.appendChild(document.createElement("td")).textContent =
        `${plante.ph_max.toFixed(1)}`;
     rangee.appendChild(document.createElement("td")).textContent =
        `${plante.prod}`;
      table.appendChild(rangee);
    }
    madiv.append(table);

  })
  .catch(console.error);
