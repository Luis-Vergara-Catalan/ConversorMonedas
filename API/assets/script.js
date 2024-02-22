
const valorDolar = document.getElementById('dolar')
const valorUf = document.getElementById('uf')
const btn = document.getElementById('button')
const span = document.getElementById('spanId')


const getUser = async () => {
    const response = await  fetch('https://mindicador.cl/api/')
    return await response.json()
}

const renderUser = (user) => {
    const precioDolar = user.dolar.valor
    console.log(precioDolar)
    const precioUf = user.uf.valor
    console.log(precioUf)
}
const precioDolar = valorDolar  // intente colocar el valor del dolar en la sumatoria con el valor del input pero no lo logre ,entiendo que tengo que pasar los valores de una variable a otra y con eso realizar la operatoria de suma. Tambien entiendo que NaN me dice que uno de los valores obtenidos no es un numero y por lo tanto no puedo sumar aquello

btn.addEventListener("click", () => {
    if ( precioDolar === valorDolar ){
    const valorMoneda = Number(document.getElementById('inputMoneda').value);
    console.log(valorMoneda)
    span.innerHTML = valorDolar * valorMoneda; 
}else {
    const valorMoneda = document.getElementById('inputMoneda').value;
    span.innerHTML = valorUf * valorMoneda;
    
}
   
})

const main = async ()=> {
    const user = await getUser()
    renderUser(user)
}

main()

// intente hacerlo pero no pude, pido mil disculpas por mi trabajo y no estar a las alturas de lo que deberia ser. Se que si me daba más tiempo podría hacer hecho algo muchisimo mejor. 