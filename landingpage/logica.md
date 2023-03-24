
### ejercicio 2

inicio
    imprima "ingrese los numeros a sumar"
### definir variables
    suma, numero1, numero2
### datos de entrada
    escriba (numero1, numero2)
### proceso
    suma = numero1 + numero2
fin
==================================================
### ejercicio 3
inicio
    "ingrese su fecha de nacimiento y clicken aceptar"
## Definir Variables
    fechaNac, fechaSis, edad
### datos de entrada
    fechaSis = año de fecha del sistema
    fechaNac= (fecha nacimiento)
    si FechaNac es diferente (vacio)
        edad = fechaSis - fechaNac
    sino 
        imprima "Digite fecha"
    fin si
    imprima "Su edad es " + edad
fin
==================================================
### ejercicio 4
inicio
    "Ingrese notas de estudiante y click en aceptar"
## Definir variables
    nota1, nota2, nota3, nota4, nota5, notaProm
## datos de entrada
    si 
        campoNota1 = (vacio)
        campoNota2 = ""
        campoNota3 = ""
        campoNota4 = ""
        campoNota5 = ""
            imprima "debe llenar todos los campos"
    sino
        notaProm = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
    fin si

    imprima "Su nota promedio es " + notaProm
fin
===================================================
### ejercicio 5
inicio
### definir variables
    contarNum = 1
    inicio contador
        si contarNum diferente 21
            contarNum = contarNum + 2
            volver al inicio contador
        fin si
    fin loop
    imprima "La suma de primeros 10 n[umero impares es ]" + contarNum
fin
    
        





