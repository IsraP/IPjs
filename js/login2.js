ForaDeTudo: {
    EventHandler: {
        var eventHandler = (event) => {
            console.log(`Event ${event.type}, with target ${event.target.id}`)
        }
    }
}

OnLoad: {
    onload = () => {

        EventInAction: {
            let imglist = document.querySelectorAll("#images > img");
            imglist.forEach((item) => item.onclick = eventHandler);
        }
        
        
    }
}
