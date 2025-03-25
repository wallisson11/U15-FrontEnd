let time  = 2000,
    currentImageIndex = 0, 
    images = document.querySelectorAll("#slider img"), // pega todas as imagens
    max = images.length; // pega o tamanho do array de imagens (quantidade de imagens)      
    
function nextImage() {
    console.log(images);


    images[currentImageIndex].classList.remove("selected"); // remove a classe selected da imagem atual
    currentImageIndex++; // incrementa o index da imagem atual
    if(currentImageIndex >= max) { // se o index da imagem atual for maior ou igual ao tamanho do array de imagens      
        currentImageIndex = 0; // volta para a primeira imagem
    }


    images[currentImageIndex].classList.add("selected"); // adcionei a classe selected da imagem atual
}

function start() {
    console.log("window loaded");
    setInterval(() => {
        console.log("funçao rodada");
        console.log("trocar imagem");
        nextImage();
    }, time);
}

window.addEventListener("load", start); // quando a janela carregar, chama a função start
