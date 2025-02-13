// DOM
const passwordForm = document.querySelector("#password-submitter");
const passwordInput = document.querySelector("#password");

// Function
const passwordSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/api/password-submit", {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify({password: passwordInput.value}),
    })
    .then((response) => {
        if (!response.ok) throw new Error(`HTTP Error! ${response.status}`);
    })
    .then(data => console.log(data))
    .catch((error) => console.error(error));
};

// Event
passwordForm.addEventListener("submit", passwordSubmit);