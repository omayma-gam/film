let movies=[];

function ajouterFilm(event) {   // function to add a film to the list of films


    event.preventDefault();//bach matrelaodach page

 
    const title=document.getElementById("Titre").value;  // get the value of the title input
    const Annee=document.getElementById("annee").value;
    const statut=document.getElementById("statut").value;
    const Réalisateur =document.getElementById("réalisateur").value;
    const Image=document.getElementById("image").value;
    const Déscription=document.getElementById("description").value;



    const film= {
        name: title,
        description: Déscription,
        catégorie: Réalisateur,
        Statut:statut,
        Année:Annee,
        Image: Image,
    };                                       

   movies.push(film);   

   localStorage.setItem("movies",JSON.stringify(movies));  // save the array in the local storage

   location.assign("Acceuil.html");  // redirect to the index page
// clear the input
}


document.getElementById("addRecipeForm").addEventListener("submit", ajouterFilm);  // add an event listener to the form to call the function ajouterFilm when the form is submitted

   // get the value of the title input