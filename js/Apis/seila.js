window.onload = () => {
        function teste (){
            console.log(this)
        }
        var xhr = new XMLHttpRequest();
        xhr.onload = teste;
        xhr.open('GET', 'https://api.github.com/users/israP');
        xhr.send();
}