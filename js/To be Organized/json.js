basico: {
    let user = {
        "username": "Isra",
        "password": "pw"
    }

    var str = JSON.stringify(user);
    var json = JSON.parse(str);

    console.log(user)
    console.log(str)
    console.log(json);
}

onload: {
    onload = () => {

        FormLogin: {
            if(localStorage.length > 0){
                user.value = JSON.parse(localStorage.getItem('userID')).username
            }
            else{
                defaultz = {username: '', password: ''};
                localStorage.setItem("userID", JSON.stringify(defaultz))
            }
            

            login.onsubmit = (event) => {
                userI = {username: user.value, password: pw.value}
                

                if (user.value == JSON.parse(localStorage.getItem("userID")).username){
                    console.log("LOGIN SUCESSO!")
                }

                user.value = ""
                pw.value = ""
    
                localStorage.setItem("userID", JSON.stringify(userI))

                event.preventDefault()
                // .removeItem(chave) remove o item
                // .getItem(chave) pega o item
                // .clear() limpa tudo
            }
        }
        

    }
}