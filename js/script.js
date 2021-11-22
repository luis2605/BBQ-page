let emailCollectorForm=document.getElementById("email-collector")

emailCollectorForm.addEventListener("submit",Event =>{
    Event.preventDefault()

    let ourFormData = new FormData(Event.target)
    let userFirstName = ourFormData.get("first-name")

    let updatedHtmlContent = ` <h2 class="container-text-title">Congratulations ${userFirstName}, </h2>
    <p class="container-text-sub">you are on your way to become a BBQ master!</p>`

    let ourMainContent = document.getElementsByClassName("container-text")
    ourMainContent[0].innerHTML = updatedHtmlContent
})