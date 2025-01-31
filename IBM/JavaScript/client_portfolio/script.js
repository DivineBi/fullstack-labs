function addRecommendation() {
    var recommendation = document.getElementById("recommendationBox").value;
    var name = document.getElementById("recommenderName").value;
    var title = document.getElementById("recommenderTitle").value;
    var company = document.getElementById("recommenderCompany").value;
    //Créer un paragraphe pour chaque recommandation
    if (recommendation && name && title && company) {
        var listItem = document.createElement("p");
        listItem.innerHTML = `${recommendation} \<br\> - <strong>${name}, ${title} chez ${company}</strong>`;
        document.getElementById("recommendationList").appendChild(listItem);
        
        alert("Recommandation ajoutée !");
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}
