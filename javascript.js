let num = window.document.getElementById('txtnum')  
let atri = window.document.getElementById('atribuidor')
let res = window.document.getElementById('res')
let valores = []

//função que verifica se é um numero
function isnumero(n) {
  if( Number(n)>=1 && Number(n)<=100 ){
        return true
  } else{
        return false
  }
}

//função que verifica é numero e se ele nao esta na lista 
function inlista(n,l) {
    if( l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

//verifica se é um numero e se nao esta na lista para adicionar o numero para mostrar ao usuario
function adiciona() {

    if (isnumero(num.value) && !inlista(num.value,valores)){
       valores.push(Number(num.value)) 
       let item = document.createElement('option')
       item.text = `valor ${num.value} adicionado`
       atri.appendChild(item)
       res.innerHTML=''
    }else{
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value =''
    num.focus()

}

function finalizar() {
    if (valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        //verificar maior e menor valor
        let maior= valores[0]
        let menor= valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        
       
       
        }
        media= soma/tot
        res.innerHTML=''
        res.innerHTML += `<p>ao todos temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>o maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>a media de todos os valores temos ${media}</p>`
    }
}
