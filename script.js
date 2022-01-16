const imagem = document.querySelector('img');
const botao =  document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

TraduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não Sabemos'; 
    }else if(data.status == 'Alive') {
        return 'Sim';
    } else {
        return 'Não. Está morto'
    }
    }

gerarValorAleatorio = () => {
    return Math.floor(Math.random() *3 );
}
pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio(); 

    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET', 
          headers:{
              Accept: 'application/json',
             "Content-type": 'application/json'
            }   
    } ) .then((response) => response.json()).then((data) => {
             imagem.src = data.imagem;
             imagem.alt = data.name;
             nomeDoPersonagem.innerHTML = data.name;
             especie.innerHTML = data.species;
             condicao.innerHTML = data.status;
            } );
} 

botao.onclick = pegarPersonagem;
