document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke');
    const jokeButton = document.getElementById('jokeButton');

    function fetchJoke() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(joke => {
                displayJoke(joke);
            })
            .catch(error => {
                console.error('Error fetching joke:', error);
                jokeContainer.innerHTML = 'Failed to load joke. Please try again!';
            });
    }

    // Function to display the joke
    function displayJoke(joke) {
        jokeContainer.innerHTML = `
            <h3>${joke.setup}</h3>
            <p>${joke.punchline}</p>
        `;
    }

    jokeButton.addEventListener('click', fetchJoke);

    // Fetch a joke when the page loads
    fetchJoke();
});
