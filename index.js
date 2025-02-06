const submit = document.getElementById('submit');
let datamovie = localStorage.getItem('movieinfo') ? JSON.parse(localStorage.getItem('movieinfo')) : [];

if (submit) {
    submit.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page
        let newmovie = {
            nom: document.getElementById('nom')?.value,
            realisateur: document.getElementById('realisateur')?.value,
            annee: document.getElementById('annee')?.value,
            genre: document.getElementById('genre')?.value,
            image: document.getElementById('image')?.value,
            description: document.getElementById('description')?.value
        }
        datamovie.push(newmovie);
        localStorage.setItem('movieinfo', JSON.stringify(datamovie));

        // Rediriger vers la page d'accueil après ajout
        location.assign('Acceuil.html');
    });
}


// // Function to display movies in the list
// function showData() {
//     if (listMovies) {
//         listMovies.innerHTML = '';
//         dataMovie.forEach((movie, index) => {
//             const movieElement = document.createElement('div');
//             movieElement.classList.add('card');
//             movieElement.innerHTML = `         <div class="card">
//         <img src="${movie.image}" class="card-img-top" alt="" id="image">
//         <div class="card-body">
//           <a href="detail.html"><img src="/assets/icon/add-to-playlist.png" alt="" style="width: 40px; height: 40px;"></a>
//           <a href="" ><img src="/assets/icon/pencil_7797848.png" alt="" style="width: 40px; height: 40px;"></a>
//           <a href="#" onclick="supprimerFilm(${index})"><img src="/assets/icon/bin_10020353.png" alt="" style="width: 40px; height: 40px;"></a>
//         </div>
//         </div>
//       </div>`
 
//             ;
//             listMovies.appendChild(movieElement);
//         });
//     }
// }



function showData() {
    const listMovies = document.getElementById('listmovie');
    if (listMovies) {
        listMovies.innerHTML = '';
        datamovie.forEach((movie, index) => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('card');
            movieElement.innerHTML = `
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.name}" id="image">
                    <div class="card-body">
        
                        <a href="détaille.html"><button style="background-color:rgb(28, 76, 189); border:none; border-radius:10px;  cursor: pointer;">Détail</button></a>
                        <a href="Ajoute.html"><button style="background-color:rgb(5, 235, 17); border:none; border-radius:10px;  cursor: pointer;">Modifier</button></a>
                        <a href="#" onclick="supprimerFilm(${index})"><button style="background-color:rgb(223, 12, 12); border:none; border-radius:10px;cursor: pointer;">Supprimer</button></a>
                    </div>
                </div>
            `;
            listMovies.appendChild(movieElement);
        });
    }
}

// Appel initial pour afficher les films existants au chargement de la page
document.addEventListener("DOMContentLoaded", showData);

// Fonction pour supprimer un film
function supprimerFilm(index) {
    datamovie.splice(index, 1);
    localStorage.setItem('movieinfo', JSON.stringify(datamovie));
    showData();
}