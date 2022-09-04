function cadastro() {
    let modelo, fabricante, cor, placa, ano;

    modelo = document.getElementById("modeloInput").value;

    fabricante = document.getElementById("fabricanteInput").value;

    cor = document.getElementById("corInput").value;

    placa = document.getElementById("placaInput").value;

    ano = document.getElementById("anoInput").value;

    console.log(modelo)
    console.log(fabricante)
    console.log(cor)

    let html = "<div class='dadosCard '>" +
        "<span class='col-md-6'>" + "<b>" + "Modelo: " + "</b>" + "<span/>" + "<span class='col-md-6'>" + modelo + "</span>" + "<br/>" +
        "<span class='col-md-6'>" + "<b>" + "Fabricante: " + "</b>" + "<span/>" + "<span class='col-md-6'>" + fabricante + "</span>" + "<br/>" +
        "<span class='col-md-6'>" + "<b>" + "Cor: " + "</b>" + "<span/>" + "<span class='col-md-6'>" + cor + "</span>" + "<br/>" +
        "<span class='col-md-6'>" + "<b>" + "Placa: " + "</b>" + "<span/>" + "<span class='col-md-6'>" + placa + "</span>" + "<br/>" +
        "<span class='col-md-6'>" + "<b>" + "Ano: " + "</b>" + "<span/>" + "<span class='col-md-6'>" + ano + "</span>" + "<br/>" +
        "</div>";

    document.getElementById("dadosCadastrados").innerHTML += html;
    document.getElementById("formulario").reset();
}

