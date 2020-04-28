/*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/JoaoPedroLott');
xhr.send(null);

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
};
*/

/*
//Utilizando Promisse
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/JoaoPedroLott');
        xhr.send(null);

        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    })
}

minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
*/

//Utilizando Axios
axios.get('https://api.github.com/users/JoaoPedroLott')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });