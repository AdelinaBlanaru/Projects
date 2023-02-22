//DARK-LIGHT MODE
function toggle() {
    let toggleSwitch = document.body;
    toggleSwitch.classList.toggle("light-bg");
}

//HAMBURGER MENU
function openMenu() {
    document.getElementsByID("navbarTogglerDemo03").style.display = "block";
}

//FORM
let form = document.getElementById("contact-form");
async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("submitFdbck");
    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thank you! Your submission has been received!";
            status.style.color = "#0bceaf";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                    status.style.color = "red";
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
        status.style.color = "red";
    });
}
form.addEventListener("submit", handleSubmit)
