
//Aries - de 21 março a 20 abril
//Touro -  de 21 abril a 20 maio
//Gemeos - de 21 maio a 20 junho
//Cancer - de 21 junho a 22 julho
//Leao - de 23 julho a 22 agosto
//Virgem - de 23 agosto a 22 setembro
//Caso não tenha o signo - Signo não registrado

var signo = prompt('Digite seu signo: ')
switch (signo) {
    case 'aries':
    case 'Touro':
    case 'Gemeos':
    case'Cancer':
    case "Leao":
    case "Virgem"    

    console.log('Aries - de 21 março a 20 abril')  
    console.timeLog('Touro -  de 21 abril a 20 maio') 
    console.log('Gemeos - de 21 maio a 20 junho')
    console.log("Cancer - de 21 junho a 22 julho")
    console.log("Leao - de 23 julho a 22 agosto")
    console.log("Virgem - de 23 agosto a 22 setembro")
    console.log('Virgem - de 23 agosto a 22 setembro')



    break;

    default:
    console.log('Caso não tenha o signo - Signo não registrado');
    break;
}
