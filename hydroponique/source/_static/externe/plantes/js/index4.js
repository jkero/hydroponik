const URL = "_static/externe/plantes/les_plantes_8b.json";
const main = document.getElementById("main");
main.innerHTML = "<p>Loading...";fetch(URL)
  .then((response) => response.json())
  .then((nom) => main.innerHTML = getListOfNames(nom));
  
  const getListOfNames = (nom) => {

  const names = nom
    .map((nom) => `<tr><td>${nom.nom}</td><td>${nom.ec_min.toFixed(1)}</td><td>${nom.ec_max.toFixed(1)}</td><td>${nom.ph_min.toFixed(1)}</td><td>${nom.ph_max.toFixed(1)}</td><td>${nom.prod}</td><tr>`).join('');
    
    return `<button class="b_vert" onclick="history.back()">Retour</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="b_vert" onclick="location.href='#lebottom';">Bas de page</button><a name="letop"/><table class="plantes">${names}</table><a name="lebottom"/><button class="b_vert" onclick="location.href='#letop';">Haut de page</button>`;
};

/*
String interpolation is the process of embedding an expression, like a variable, into a string of text. The way we embed an expression is by using template literals, using backticks (`) instead of normal quotes (“ or ‘). Then, we incorporate the expression by using a dollar sign ($) and curly braces ({}). For example:

“This is an ${expression} in a string of text.”
*/