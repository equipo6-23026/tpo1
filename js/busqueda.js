function seParecen(str1, str2){
    var puntaje_de_parecido = 0;
    if ((String(str1).toUpperCase() == String(str2).toUpperCase))
        {puntaje_de_parecido = puntaje_de_parecido +1;
        }

    str1 = String(str1).toUpperCase().replace(/[^0-9a-z ]/gi, "").split(" ");
    str2 = String(str2).toUpperCase().replace(/[^0-9a-z ]/gi, "").split(" ");

    for (let palabra in str1){
        if (str2.includes(palabra)){
            str2.splice(str2.indexOf(palabra),1);
            puntaje_de_parecido = puntaje_de_parecido +1;
        }
    }
    return puntaje_de_parecido;
}


function buscarTitulo(tituloABuscar, jsonFileUrl){
    return fetch(jsonFileUrl).then((response) => response.json()).then((j) => {
        var resultados=[];
        for (let juego in Object.keys(j)){
            if (seParecen(String(j[juego].nombre),String(tituloABuscar))>0){
                resultados.push(j[juego]);
            }

        var aux;
        for (let i=0;i<resultados.length-1;i++){
            for (let j=0;j<resultados.length-1-j;j++){
                if (seParecen(resultados[i],tituloABuscar) > seParecen(resultados[i+1],tituloABuscar)){
                    aux=resultados[i+1];
                    resultados[i+1]=resultados[i];
                    resultados[i]=aux;
                }
            }
        }

        return resultados;
        }
    });
}
