window.onload = function () {
    var check = document.getElementById("check");
    check.addEventListener("click", function () {
        var estilo = document.getElementById("Estilo");
        if (check.checked) {
            estilo.href = 'StyleClaro.css';
        }
        else {
            estilo.href = 'StyleOscuro.css';
        }
    })

    function GetElementosStr(elemento, tabulacion = "") {
        console.log(tabulacion + elemento.nodeName + "\n")
        let elementosHijos = elemento.childNodes;
        elementosHijos.forEach(element => {
            GetElementosStr(element, tabulacion + "\t");
        })
    }

    GetElementosStr(document.querySelector("body"));
}



