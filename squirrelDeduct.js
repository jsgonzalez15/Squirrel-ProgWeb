// Promesa Javascript para solicitud de data
/*
let pA=new Promise((resolve,reject)=>{
    let reqA=new XMLHttpRequest();
    urlA='https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json'
    reqA.open('GET',urlA);
    reqA.onload=function(){
        if(reqA.status==200){
            resolve(reqA.response) //req.responseXML)
        } else{
            reject('falló la solicitud de información A')
        }
    };
    req.send()
})

pA.then((respuestaA)=>{
  jsonResponseA=JSON.parse(respuestaA)
  let maximoVendedor=jsonResponse[0]["nombreProducto"]

  for (i=0; i<jsonResponseA.length;i++)
    {
      console.log(jsonResponseA[i])
      //if (jsonResponse.[""]>maximaCantidad){
        //maximaCantidad=jsonResponse[i][""]
        //maximoVendedor=jsonResponse[i]["nombreProducto"]
      //}
    }
}).catch((respuesta)=>{
    console.log(respuesta)
})*/

function addEventSquirrel() {
    var table = document.getElementsByClassName("tableEvents");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell2.innerHTML = "woooooork";
  }
