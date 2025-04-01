const apiKey = "YOUR_OMDB_API_KEY"; // Replace with your OMDb API Key

function searchMovie() {
    const movieName = document.getElementById("movieInput").value;
    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }

    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                document.getElementById("movieContainer").innerHTML = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <img src="${data.Poster}" alt="Movie Poster">
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Director:</strong> ${data.Director}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                    <p><strong>IMDB Rating:</strong> ⭐${data.imdbRating}</p>
                `;
            } else {
                document.getElementById("movieContainer").innerHTML = `<p>Movie not found! 😞</p>`;
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}
