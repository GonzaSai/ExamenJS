//1

function SalarioEnElMes (x)
{
    let SalarioAnual = 21600 / x
    return 'Lo que cobrará en el saño será ' + SalarioAnual
}
console.log(SalarioEnElMes(12))

//2

function SalarioEnElAño (x)
{
    let SalarioMensual = 1500 * x
    return 'En el año, cobrará un total de ' + SalarioMensual
}
console.log(SalarioEnElAño(12))

//3

function PromedioDeNotas (a, b, c)
{
    
    let promedio = (a + b + c) / 3
    return 'El promedio de esas notas es igual a ' + promedio
}
    let Nota1 = Number(prompt('Introduce una nota'))
    let Nota2 = Number(prompt('Introduce otra nota'))
    let Nota3 = Number(prompt('Introduce una ultima nota'))
    alert(PromedioDeNotas(Nota1, Nota2, Nota3))
