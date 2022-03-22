// Carne - 400gr por pessoa + de 6 horas - 650
// Cerveja - 1300 l por pessoa + 6 horas 2000ml
// Refrigerante/ Agua - 1000ml por pessoa + 6 horas 1500 ml

// criaçãs valem por 0,5






let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')
let tituloC = document.getElementById('tituloC');

let footer = document.getElementById('fott')

let contBorda = document.getElementsByClassName('container')


function calcular() {
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let qtdTotalCarne = carnePP(duracao) * adultos + carnePP(duracao) * criancas
  let qtdTotalCerveja = cervejaPP(duracao) * adultos
  console.log(qtdTotalCarne)
  let qtdTotalBebida =
    bebidaPP(duracao) * adultos + bebidaPP(duracao) * criancas

     
    
   /* setTimeout(()=> {   
    
      document.getElementById("resultado").animate([
         keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-300px)' }
      ], {
        timing options
        duration: 1000,
        interations:
      });

    
     tituloC.innerHTML = "<h1>Itens</h1>"
      }, 50)*/

    setTimeout(()=> {
      var carnezin = document.querySelector("#resultado");
    
      if(carnezin.style.display = "none") {
          carnezin.style.display = "grid";
                } else {
                  carnezin.style.display = "grid";
              }  
        resultado.innerHTML = `<p>${qtdTotalCarne / 1000} - Kg de Carne</p>`
        }, 100)
    setTimeout(()=> {
      resultado.innerHTML += `<p>${Math.ceil(
        qtdTotalCerveja / 355
        )} - Latas de Cerveja</p>`
          }, 100)

    setTimeout(()=> {
            
      resultado.innerHTML += `<p>${Math.ceil(
      qtdTotalBebida / 2000
      )} - Pet's (2L) de refrigerante</p>`
            }, 100)
    
  

  //Footer 
  setTimeout(()=> {
    var div = document.querySelector("#fott");
    
    if(div.style.display = "none") {
          div.style.display = "block";
      } else {
        div.style.display = "none";
    }     
  
          }, 100)
  

  //Borda Left
  let borda = document.querySelector("#container");

  if(borda.style.borderBottomLeftRadius = "10px") {
    borda.style.borderBottomLeftRadius = "0";
} else {
  borda.borderBottomLeftRadius = "none";
}

  // Borda Right

if(borda.style.borderBottomRightRadius = "10px") {
  borda.style.borderBottomRightRadius = "0";
} else {
borda.borderBottomRightRadius = "none";
}

//Padding

setTimeout(()=> {
  let resultados = document.querySelector("#resultado");

  if(resultados.style.padding = "0px") {
    resultados.style.padding = "5px";
  } else {
  resultados.padding = "none";
  }
  

        }, 120)



}



function carnePP(duracao) {
  let carne = 400
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}

function cervejaPP(duracao) {
  let cerveja = 400
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}

function bebidaPP(duracao) {
  let cerveja = 400
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}



