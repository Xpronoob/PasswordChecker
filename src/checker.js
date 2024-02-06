const input = document.getElementById('input')
const length = document.getElementById('length')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')
const upperCase = document.getElementById('upperCase')
const lowerCase = document.getElementById('lowerCase')
var existUpperCase = false
var existLowerCase = false

function mayuscula(letra) {
  if (/^[a-zA-Z]$/.test(letra)) {
    return letra === letra.toUpperCase()
  } else return false
}

input.addEventListener('input', () => {
  const value = input.value
  // console.log(value)

  // Revisar letra por letra si existen mayusculas y minusculas
  for (let index = 0; index < value.length; index++) {
    var letra = value.charAt(index)

    if (mayuscula(letra)) {
      existUpperCase = true
      break
    } else {
      existUpperCase = false
    }
  }

  if (existUpperCase) {
    upperCase.style.color = 'green'
  } else {
    upperCase.style.color = 'red'
  }

  // Validar longitud de contraseña >= 8
  if (value.length >= 8) {
    length.style.color = 'green'
  } else if (value.length < 8) {
    length.style.color = 'red'
  }

  // Validar si existe algun numero en la contraseña mediante expresion regular
  const haveNumber = /\d/.test(value) //.test retorna true or false
  if (haveNumber) {
    number.style.color = 'green'
  } else {
    number.style.color = 'red'
  }

  // Validar si existe algun simbolo en la contraseña
  const haveSymbol = /\W/.test(value)
  if (haveSymbol) {
    symbol.style.color = 'green'
  } else {
    symbol.style.color = 'red'
  }
})
