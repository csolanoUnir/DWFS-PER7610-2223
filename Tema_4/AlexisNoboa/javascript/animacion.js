window.onload =function(){

    var estilo= document.querySelector("link");
    var button = document.querySelector("button");
    var contenido=document.body.children;
    var subelemento;

    button.onclick=function(){
        
        var m=button.innerText;
        if(m=='Modo Claro'){
            button.innerText='Modo Oscuro';
            estilo.href='css/Style.css';
        }else if (m=='Modo Oscuro') {
            button.innerText='Modo Claro';  
            estilo.href='css/Style2.css';
        } 
    };

    function imprimirElementos(){
        
        for(let i=0;i<contenido.length;i++){
            console.log("<"+contenido[i].tagName+">");
            for(let j=0;j<contenido[i].children.length;j++){
                console.log("    <"+contenido[i].children[j].tagName+">");
            }
        }
    }
    imprimirElementos();
}