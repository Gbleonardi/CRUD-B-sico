let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let phone = document.querySelector("#phone")
let work = document.querySelector("#work")



function cadastrar (){
    if (nome && email && phone && work) {
        let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]" )

        listaUser.push (
        {
            nomeCad: nome.value,
            emailCad: email.value,
            phoneCad: phone.value,
            workCad: work.value
        }
        )
        
        localStorage.setItem("listaUser", JSON.stringify(listaUser))
    }
}
