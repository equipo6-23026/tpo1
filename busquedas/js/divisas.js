
async function consultaDolar(){
    function consultaDolarApi(){
        const API_URL="https://dolarapi.com/v1/dolares";
            return fetch(`${API_URL}`).then((response) => response.json());
    }


    return consultaDolarApi().then((c) => {
        for (let casakey in Object.keys(c)){
            /*OBJETO EJEMPLO c[casakey]:
            Object { moneda: "USD", casa: "oficial", 
            nombre: "Oficial", compra: "863", venta: "903",
            fechaActualizacion: "2024-05-13T20:58:00.000Z",
            */
            if (c[casakey].casa == "oficial"){
                return c[casakey].venta;
            }
        }
    })

}

 /* llamado de ejemplo (devuelve una promise):
 consultaDolar().then((c) => console.log(c));*/

