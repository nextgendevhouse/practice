document.getElementById("generate-btn").addEventListener("click", generateUser);

function generateUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];

      document.getElementById("user-image").src = user.picture.large;
      document.getElementById(
        "user-name"
      ).innerText = `${user.name.first} ${user.name.last}`;
      document.getElementById("user-email").innerText = user.email;
      document.getElementById(
        "user-location"
      ).innerText = `${user.location.city}, ${user.location.country}`;
      document.getElementById("user-container").style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
    });
}
