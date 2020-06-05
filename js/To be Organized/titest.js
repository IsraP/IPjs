Funcoes: {

    ReadData = () => {
        let strData = localStorage.getItem('db');
        let objData = {}

        if(strData){
            objData = JSON.parse(strData);
        }
        else{
            objData = {contacts: [
                {name: "IsraPeres", telefone: "1111-1111"},
                {name: "NotIsraPeres", telefone: "2222-2222"},
                {name: "TotallyNotIsraPeres", telefone: "3333-3333"}
            ]}
        }

        return objData;
    }

    SaveData = (data) => {
        localStorage.setItem('db', JSON.stringify(data))
    }

    IncludeContact = () => {
        let objData = ReadData()

        let name = nameForm.value
        let cel = celForm.value
        let newContact = {
            name: name,
            telefone: cel
        }

        objData.contacts.push(newContact);

        SaveData(objData);
    }

    PrintData = () => {
        let screen = document.getElementById('tela');
        let strHTML = "";
        let objData = ReadData();

        for(i = 0; i < objData.contacts.length; i++){
            strHTML += `<p>${objData.contacts[i].name} - ${objData.contacts[i].telefone}</p>`
        }

        screen.innerHTML = strHTML;
    }
}

Botoes: {
    document.getElementById("loadContact").addEventListener("click", PrintData)

    document.getElementById("addContact").addEventListener("click", IncludeContact)
}

/* Onload: {
    onload = () => {

        Adicionar_Contato: {
            addContact.onclick = () => {
                localStorage.setItem("ContactName", nameForm.value);
                localStorage.setItem("CelNumber", celForm.value);
            }
        }
        
    }
} */