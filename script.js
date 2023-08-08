var i = 0;
var quantImagem = 8;

for( i; i < quantImagem; i++ ) {
    var boxImagem = document.createElement("div");
    var imagem = document.createElement("img");

    imagem.setAttribute("src","https://picsum.photos/285?random=" + i);

    boxImagem.appendChild(imagem);
    document.querySelector(".grid-imagem").appendChild(boxImagem);
}

function carregarMaisImagens(quant) {
    for( var x = 0; x < quant; x++ ) {
        var boxImagem = document.createElement("div");
        var imagem = document.createElement("img");
        i++;
        
        imagem.setAttribute("src","https://picsum.photos/285?random=" + i);

        boxImagem.appendChild(imagem);
        document.querySelector(".grid-imagem").appendChild(boxImagem);
    }

}