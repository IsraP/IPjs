OnLoad: {
    onload = () => {

        Usuario: {
            user.onchange = () => {
                console.log("User", user.value);
            }
        }

        UsuarioInput: {
            user.oninput = () => {
                let invalidos = '!@#$%¨&*()_+-=';
                let lastchar = user.value.charAt(user.value.length-1);

                if (invalidos.indexOf(lastchar) >= 0){
                    console.log("Ultimo char", lastchar);
                    user.value = user.value.substr(0, user.value.length-1);
                }
                
            }
        }

        Focus: {
            user.onfocus = () => {
                instruct.innerHTML = "Informe o seu nome de usuário"
            }
        }
        
        ForaDoFoco: {
            user.onblur = () => {
                instruct.innerHTML = ""
                if (user.value.length == 0){
                    instruct.innerHTML = "Digite um nome de usuario válido."
                    instruct.style.color = "red";
                    user.style.border = "thin solid red"
                }
                    
            }
        }

        Botao_Block: {
            botaoconfirmar.disabled = true;

            let validaForm = () => {
                if (user.value.length == 0 || pw.value.length == 0){
                    botaoconfirmar.disabled = true;
                }
                else
    
                    botaoconfirmar.disabled = false;
            }

            user.oninput = validaForm;
            pw.oninput = validaForm;
            
        }
    }

    Submit: {
        onsubmit = (event) => {
            console.log({username: user.value, password: pw.value, connected: conectado.checked});
            console.log(event.target);
            //return false;
        }
    }
}


