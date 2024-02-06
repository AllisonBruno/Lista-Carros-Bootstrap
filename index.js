let listCarros = [
    {
        "nome": "carro1",
        "img": "img/pexels-brett-sayles-1638459.jpg",
        "descricao": "Carro vermelho"
    },
    {
        "nome": "carro2",
        "img": "img/pexels-czapp-árpád-11396006.jpg",
        "descricao": "Jipe preto"
    },
    {
        "nome": "carro3",
        "img": "img/pexels-jay-pizzle-3954418.jpg",
        "descricao": "Ferrari amarela"
    },
    {
        "nome": "carro4",
        "img": "img/pexels-lloyd-freeman-1429775.jpg",
        "descricao": "Jipe prata"
    },
    {
        "nome": "carro5",
        "img": "img/pexels-mike-bird-116675.jpg",
        "descricao": "Carro branco"
    },
    {
        "nome": "carro6",
        "img": "img/pexels-pixabay-210019.jpg",
        "descricao": "Ferrari Vermelha"
    },
    
]

listCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById('cards');
    cardCarro.innerHTML += `
        <div class="col-md-4">
        <div class="card m-2">
            <img src="${carro.img}" class="card-img-top" style="height:15rem;" alt="...">
            <div class="card-body">
            <h5 class="card-title">${carro.nome}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-secundary" onclick= "zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
            </div>
        </div>
    </div>
    `
})

function zoomImg(posicao){
    let carroSelect = listCarros[posicao];
    document.getElementById('nomeCarro').innerHTML = carroSelect.nome;
    document.getElementById('descricao').innerHTML = carroSelect.descricao;
    document.getElementById('imgModal').src = carroSelect.img;

    new bootstrap.Modal('#zoomImg').show();

}

function alterarTema(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme")

    if(tema === 'dark'){
        document.querySelector('html').setAttribute('data-bs-theme', 'light');
        document.querySelector("#alteraTema").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }else{
        document.querySelector('html').setAttribute('data-bs-theme', 'dark');
        document.querySelector("#alteraTema").innerHTML = `<i class="bi bi-brightness-low-fill" ></i>`

    }
}

