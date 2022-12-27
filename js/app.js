alert("Bienvenido a rage shop")
let menu = "Ingrese: \n1 Si quiere comprar Remeras \n2 Si quiere comprar Bermudas\n3 Si quiere comprar Zapatillas\n4 Total de la compra\n0 Para salir  "
let opcion = Number(prompt(menu))
let remeras = 8000
let bermudas = 15000
let zapatillas = 20000
let cantRem = 0
let cantBer = 0
let cantZap = 0
let resultado = 0
function sumar2()
      {
          let resultadoTotal = (cantRem * remeras) + (cantBer * bermudas) + (cantZap * zapatillas)
          let sumaIva = resultadoTotal *0.21
          resultado = sumaIva + resultadoTotal
          alert("El total con Iva es: " + resultado);
      }
while (opcion != 0)
  {
    if (opcion == 1){
      let menu2 = "¿Cuantas remeras queres comprar?: "
      cantRem = Number(prompt(menu2))
    }
      else if(opcion == 2)
        {
          let menu3 = "¿Cuantas bermudas queres comprar?: "
          cantBer = Number(prompt(menu3))
        }
      else if(opcion == 3)
        {
          let menu4 = "¿Cuantas zapatillas queres comprar?: "
          cantZap = Number(prompt(menu4))
        }
      else if(opcion == 4)
        {
          sumar2()
          
        }
        else if(opcion == 5) 
        {
        
        alert("numero = ") + resultado
        }
      else 
        {
          alert("opcion incorrecta")
        }
        opcion = Number(prompt(menu))
  }
  