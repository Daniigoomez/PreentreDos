
function saludar(){
let nombreUsuario = prompt ("Hola!! ingresa por favor tu nombre")

let apellidoNombre = prompt ("Ingresa tu apellido")
alert("hola " + nombreUsuario + " " + apellidoNombre)
}
saludar()


let edad = 18
let edadDelUsuario = prompt("ingrese edad")
if (edadDelUsuario <9){
    alert ("usted es menor, no puede ingresar")
}else if(edadDelUsuario >=9 && edadDelUsuario <=17){
    alert ("no cumple con su edad")
}else if(edadDelUsuario >18){
    alert ("ya falta poco, digame su color")
}else{
    alert ("no cumple la condición intente mas tarde")
}
let color = prompt("¿cual es tu color favorito?")
if(color == "rojo"){
    alert("usted eligio su color")
}else {
    alert("color incorrecto!")

}

let mascota = prompt ("animal preferido")
if(mascota =="perro"){
    alert("tu respuesta es correcta")

}else {
    alert("usuario incorrecto,intentemos con codigo mas tarde")
}
 
intento = alert("Te presentamos nuestros productos y marcas que trabajamos")


const Alimento = function (nombre,caracteristica,kg,precio){
    this.nombre = nombre
    this.caracteristica= caracteristica
    this.kg = kg
    this.precio = precio
    }


let alimento1 = new Alimento ("kongo","adulto", 20 , 8999)
let alimento2 = new Alimento ("pedigree","cachorro", 15 , 7000)
let alimento3 = new Alimento ("royal canin","adulto", 15 , 15000)
let alimento4 = new Alimento ("proplan","cachorro", 20 , 1400)
let alimento5 = new Alimento ("old prince","adulto", 15 , 12000)
let alimento6 = new Alimento ("nutribom","cachorro", 20 , 7000)


let stock = [alimento1,alimento2,alimento3,alimento4,alimento5,alimento6]

function filtrarStock(){
    let marcaProducto = prompt("ingresa marca del alimento que busca").toUpperCase().trim()
    let resultado = stock.filter((x)=>x.nombre.toUpperCase().includes(marcaProducto) )

    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro la marca " + marcaProducto)
        let agrego = confirm("suma tu nueva Marca")

        if(agrego == true){
            agregarAlimento()
        }
        
    }

}

const productos = [
    {nombre: "correa", precio: 1000, cantidad:80},
    {nombre: "juguete", precio: 500, cantidad:150},
    {nombre: "ropa", precio:2500, cantidad:200},
    {nombre: "pipetas", precio:850, cantidad:54},
    {nombre: "huesos", precio:140, cantidad:32},
    {nombre: "mordillos", precio:150, cantidad:35},
    {nombre: "pastillas", precio:350, cantidad: 150},

]



const nombres = productos.map ((producto) => producto.nombre + "Selecionar" )


console.table(productos)



bolsa = console.log("Buscar alimento balanceado por marca - filtrarStock()")

bolsa2 = console.log("Para agregar alimento - agregarAlimento()")

function agregarAlimento(){

    let nombre =  prompt ("ingrese la marca del alimento balanceado")
    let caracteristica = prompt("ingresar si es cachorro o adulto")
    let kg = parseInt (prompt ("ingresar kg del alimento"))
    let precio = parseInt (prompt("ingrese el precio del alimento"))


    if(isNaN(precio) || isNaN(kg) ||nombre==="" || nombre ==null || caracteristica==="" ||caracteristica ==null){
        alert("cumplir con los valores requeridos")
        return
}
let producto = new Alimento(nombre,caracteristica,kg,precio)


stock.push(producto)
console.table(stock)

}










