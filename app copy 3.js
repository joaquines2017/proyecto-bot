const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')
const axios = require('axios');

const PROJECT_ID = 29;
const TRACKER_ID = 3;


jsonPostIssue = {
  issue: {
    project_id: PROJECT_ID,
    tracker_id: TRACKER_ID,
    status_id: null,
    priority_id: null,
    subject: null,
    description: null,
    category_id: null
  }
}

//* Desde aquí todas los flowopA* son tickets de las opciones flowopA1

/*const flowopM = addKeyword(['@', 'siguiente']).addAnswer(['👉 *@* Volver menú anterior '
],
null,
null
)*/
//****************************conexion con api rest de redmine*****************************/
// redmineApi.js
/***************************************conexión de api***************************************************** */
const apiKey = 'caa5569e969a7a7dd08f2dd1268579aceb93b3f4';  // Reemplaza con tu clave de API de Redmine
const redmineUrl = 'https://incidentes.mpftucuman.gob.ar';  // Reemplaza con la URL de tu instancia de Redmine

// Endpoint para obtener información de issues
const issuesEndpoint = '/issues.json';

// Función para obtener datos de issues
async function getIssuesData() {
  try {
    const response = await axios.get(`${redmineUrl}${issuesEndpoint}?key=${apiKey}`);
    return response.data.issues;
  } catch (error) {
    console.error('Error al obtener datos de Issues:', error);
    throw error;
  }
}


module.exports = { getIssuesData };
// main.js (o cualquier otro archivo)

//const redmineApi = require('./redmineApi');

// Array para almacenar datos de issues
let issuesDataArray = [];

// Obtén los datos de issues utilizando la función del módulo
getIssuesData()
  .then(data => {
    issuesDataArray = data;
    console.log('Datos de Issues almacenados:', issuesDataArray);

    issuesDataArray.forEach(issue => {
      console.log("custom_field", issue.custom_field);
    })
    // Ahora puedes trabajar con issuesDataArray como desees
  })
  .catch(error => {
    // Maneja los errores aquí
    console.error('Error al obtener datos de Issues:', error);
  });

  

  /*  


 tarea.forEach(issues =>  {

        id =console.log('ID', issues.id)
         name =console.log('Asignado_ID', issues.assigned_to.name)
    });
})
 //   console.log('ID', id['id']);

  .catch(error => {
    // Maneja los errores aquí
    console.error('Error al realizar la solicitud a la API:', error);
  });
*/
/* 
const axios = require('axios');
async function obtenerDatosRedmine() {

    const apiKey = 'caa5569e969a7a7dd08f2dd1268579aceb93b3f4';  // Reemplaza con tu clave de API de Redmine
    const redmineUrl = 'https://incidentes.mpftucuman.gob.ar';  // Reemplaza con la URL de tu instancia de Redmine
    
    // Endpoint de ejemplo, ajusta según tus necesidades
    const endpoint = '/issues.json';
    
    // Construye la URL completa
    const apiUrl = `${redmineUrl}${endpoint}?key=${apiKey}`;
    
    // Realiza la solicitud a la API utilizando Axios
    let id;
    let nombre;
    axios.get(apiUrl)
      .then(response => {
    
        // Maneja la respuesta de la API aquí
        resultado = response.data;
        console.log(resultado);
     
        // const datos = response.data.issues; // Suponiendo que los datos están en la propiedad "issues"
        
        // Accede al valor de un parámetro específico (en este caso, "subject" como ejemplo)
        tarea = response.data.issues;
        tarea.forEach(issue => {
             id = issue.id; // Reemplaza "subject" con el nombre del parámetro que deseas obtener
             nombre = issue.assigned_to.name;
            console.log('Nombre:', id); 
            console.log('Nombre:', nombre);
          });
        })
        .catch(error => {
          console.error('Error al obtener datos:', error);
        });
    }
    module.exports = obtenerDatosRedmine;
*/

/****************************************fin de conexión con la API de Redmine ********************* */
async function obtenerDatosRedmine() {
    try {
      const apiKey = 'caa5569e969a7a7dd08f2dd1268579aceb93b3f4';  // Reemplaza con tu clave de API de Redmine
      const redmineUrl = 'https://incidentes.mpftucuman.gob.ar';  // Reemplaza con la URL de tu instancia de Redmine
      const endpoint = '/issues.json';
      const apiUrl = `${redmineUrl}${endpoint}?key=${apiKey}`;
      const response = await axios.get(apiUrl);
  
      // Accede al valor de un parámetro específico (en este caso, "subject" como ejemplo)
      const issuesData = response.data.issues;
      
      // Construye un mensaje con la información obtenida
      const message = issuesData.map(issue => `ID: ${issue.id}, Asignado a: ${issue.assigned_to.name}`).join('\n');
  
      return message;
    } 
    catch (error) {
      console.error('Error al obtener datos de Redmine:', error);
      throw error;
    }
  }
  
 
/* //////////////////OPCIONES DE TICKET//////////////////////////*/
const flowOp1_Tk1_Ipm1 = addKeyword(['1','siguiente']).addAnswer(['-🤝Gracias por contactar con la oficina de sistemas - área IT. Hemos generado el ticket N°',' 8033 📋',
'el sistema asignó la tarea al técnico 👨‍💻 "Santiago Rocha."', 
'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',
'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️* '
],
/*
async () => {
    // Al seleccionar la opción 1, obtenemos datos de Redmine y los mostramos
    const redmineData = await obtenerDatosRedmine();
    console.log(redmineData);
    return addAnswer([`Datos de Redmine:\n${redmineData}`]);
},*/   
null,
).addAnswer();

const flowOp2_Tk2_Ipm1 = addKeyword(['2','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT. Hemos generado el ticket N°' , '8037 📋', 
'el sistema asignó la tarea al técnico 👨‍💻 "Santiago Marco Rocha".',
' 👉Cerraremos el chat, si necesita algo siempre estaremos disponibles. 🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp3_Tk3_Ipm1 = addKeyword(['3','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT. Hemos generado el ticket N° 8039 📋', 
'el sistema asignó la tarea al técnico 👨‍💻 "Miguel Angel Furlan".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles. 🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp4_Tk4_Ipm1 = addKeyword(['4','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',
' Hemos generado el ticket N° 8295 📋, el sistema asignó la tarea al técnico 👨‍💻 "Rodrigo Masaguer".',
'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',
'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp5_Tk5_Ipm1 = addKeyword(['5','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8032 📋, el sistema asignó la tarea al técnico 👨‍💻 "Mariano Delgado".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp6_Tk6_Ipm1 = addKeyword(['6','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8296 📋, el sistema asignó la tarea al técnico 👨‍💻 "José Ruiz".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

/* ///////////////////////////////SUBMENU PROBLEMA DE IMPRESION///////////////////////////////////// */

/* ///////////////////////////////TIKET DE PROBLEMAS DE CONEXIÓN///////////////////////////////////// */

const flowOp1_Tk1_Ipm2 = addKeyword(['1','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8038 📋, el sistema asignó la tarea al técnico 👨‍💻 "Santiago Marco Rocha".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp2_Tk2_Ipm2 = addKeyword(['2','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8302 📋, el sistema asignó la tarea al técnico 👨‍💻 "Miguel Angel Furlan".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp3_Tk3_Ipm2 = addKeyword(['3','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8304 📋, el sistema asignó la tarea al técnico 👨‍💻 "Alejandro Gianuzzi".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)
/* ///////////////////////////FIN DE TIKET DE PROBLEMAS DE CONEXIÓN////////////////////////////// */


/* ///////////////////////INICIO TIKET DE MENSAJE DE ERROR EN PANTALLA////////////////////// */

const flowOp1_Tk1_Ipm4 = addKeyword(['1','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8305 📋, el sistema asignó la tarea al técnico 👨‍💻 "Mariano Delgado".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp2_Tk2_Ipm4 = addKeyword(['2','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8358 📋, el sistema asignó la tarea al técnico 👨‍💻 "Miguel Angel Furlan".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp3_Tk3_Ipm4 = addKeyword(['3','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8359 📋, el sistema asignó la tarea al técnico 👨‍💻 "Alejandro Gianuzzi".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp4_Tk4_Ipm4 = addKeyword(['4','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8360 📋, el sistema asignó la tarea al técnico 👨‍💻 "José Ruiz".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

/* ///////////////////////////FIN TIKET DE MENSAJE DE ERROR EN PANTALLA////////////////////////////// */

/* ///////////////////////INICIO TIKET DE PROBLEMAS CON MI PC////////////////////// */

const flowOp1_Tk1_PC1 = addKeyword(['1','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8305 📋, el sistema asignó la tarea al técnico 👨‍💻 "Rodrigo Masaguer".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp2_Tk2_PC1 = addKeyword(['2','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8361 📋, el sistema asignó la tarea al técnico 👨‍💻 "José Ruiz".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp3_Tk3_PC1 = addKeyword(['3','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8359 📋, el sistema asignó la tarea al técnico 👨‍💻 "Alejandro Gianuzzi".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp4_Tk4_PC1 = addKeyword(['4','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8306 📋, el sistema asignó la tarea al técnico 👨‍💻 "Santiago Marco Rocha".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp5_Tk5_PC1 = addKeyword(['5','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8309 📋, el sistema asignó la tarea al técnico 👨‍💻 "Rodrigo Masaguer".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp6_Tk6_PC1 = addKeyword(['6','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8361 📋, el sistema asignó la tarea al técnico 👨‍💻 "Mariano Delgado".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp7_Tk7_PC1 = addKeyword(['7','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8362 📋, el sistema asignó la tarea al técnico 👨‍💻 "Santiago Marco Rocha".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp8_Tk8_PC1 = addKeyword(['8','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8363 📋, el sistema asignó la tarea al técnico 👨‍💻 "Miguel Angel Furlan".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)

const flowOp9_Tk9_PC1 = addKeyword(['9','siguiente']).addAnswer(['🤝Gracias por contactar con la oficina de sistemas - área IT.',

'Hemos generado el ticket N° 8364 📋, el sistema asignó la tarea al técnico 👨‍💻 "Miguel Angel Furlan".',

'👉Cerraremos el chat, si necesita algo siempre estaremos disponibles.',

'🙏Por favor, nos ayudaría mucho si nos deja una calificación. Del 1 al 5,¿qué tan satisfecho/a está con nuestra atención?🎫 *🎟️*'
],
null,
null,
)


/* ///////////////////////////FIN TIKET DE PROBLEMAS CON MI PC////////////////////////////// */





const flowOp1_SubM1_Imp1 = addKeyword(['1']).addAnswer('Elije el número que más se acerque a tu problema 👇')
.addAnswer([

'\n*1*- No imprime nada. 🤦',
'\n*2*- Imprime borroso. 📃',
'\n*3*- Atascos de papel. 📃🖨️',
'\n*4*- Imprime  muchos símbolos 💙✔️💲▪️▫️',
'\n*5*- Hace ruidos extraños cuando imprime',
'\n*6*- Otros  🤷‍♂️'

],
null,
null,
[flowOp1_Tk1_Ipm1, flowOp2_Tk2_Ipm1, flowOp3_Tk3_Ipm1, flowOp4_Tk4_Ipm1, flowOp5_Tk5_Ipm1, flowOp6_Tk6_Ipm1]
)


/* ///////////////////////////////SUBMENU PROBLEMA DE CONEXION///////////////////////////////////// */


const flowOp2_SubM2_Imp2 = addKeyword(['2']).addAnswer('Elije el número que más se acerque a tu problema 👇')
.addAnswer([
    
    '\n*1*- No enciende 🔌🤦',
    '\n*2*- Se encuentra encendida, pero no muestra indicios de  que esta imprimiento',
    '\n*3*- Otro  🤷‍♂️'

],
null,
null,
[flowOp1_Tk1_Ipm2, flowOp2_Tk2_Ipm2, flowOp3_Tk3_Ipm2]
)

    /* flowOp2Tk2, flowOp4Tk4, flowOp5Tk5, flowOp6Tk6]*/

/* ///////////////////////////////SUBMENU MENSAJE DE ERROR DE PANTALLA///////////////////////////////////// */
const flowOp3_SubM3_Imp3 = addKeyword(['3']).addAnswer('Elije el número que más se acerque a tu problema 👇')
.addAnswer([

    '\n*1*- Pantalla de error color rojo  🔴❗',
    '\n*2*- Mensaje sin toner o tinta 🩸',
    '\n*3*- Falla de fusor ⚙️',
    '\n*4*- Otro  🤷‍♂️'

],
null,
null,
[flowOp1_Tk1_Ipm4, flowOp2_Tk2_Ipm4, flowOp3_Tk3_Ipm4,flowOp4_Tk4_Ipm4]
)

/* ///////////////////////////////SUBMENU MENSAJE DE ERROR DE PANTALLA///////////////////////////////////// */

/* ///////////////////////////////SUBMENU OTROS///////////////////////////////////// */

const flowOp1MPC1 = addKeyword(['2']).addAnswer('Elije el número que más se acerque a tu problema 👇')
.addAnswer([

    '\n*1*- No tengo internet 🌐',
    '\n*2*- Mi PC no enciende 🔌',
    '\n*3*- No funciona el sistema "SIAL" 🌐',
    '\n*4*- No funciona el sistema "SAE" 🌐',
    '\n*5*- No funciona el sitio https://filestorage.mpftucuman.com.a',
    '\n*6*- No funciona el sitio https://digital.mpftucuman.com.ar',
    '\n*7*- Problema con programas varios 😟',
    '\n*8*- Me olvide mi contraseña 🤦',
    '\n*9*- Otro  🤷‍♂️'


],
[flowOp1_Tk1_PC1, flowOp2_Tk2_PC1, flowOp3_Tk3_PC1,flowOp4_Tk4_PC1, 
 flowOp5_Tk5_PC1, flowOp6_Tk6_PC1, flowOp7_Tk7_PC1,flowOp8_Tk8_PC1, flowOp9_Tk9_PC1]
)

/*/////////////////////////PROBLEMA CON IMPRESORA Y SCANNER////////////////////////////////////*/ 

const flowOp1MImp1 = addKeyword(['1']).addAnswer('Elije el número que más se acerque a tu problema 👇')
.addAnswer([

'\n*1*- Problema de impresión 😓🖨️',
'\n*2*- Problema de conexión🖨️❗🔌',
'\n*3*- Mensaje de error en pantalla 🚨🔴',

],
null,
null,
[flowOp1_SubM1_Imp1, flowOp2_SubM2_Imp2, flowOp3_SubM3_Imp3]
)




/* Flujos de submenus nivel 2 */ 
const flowGenerarMenu1= addKeyword(['1']).addAnswer('📄 ¿Que problemas tienes?, por favor elige una de estas opciones 👇')
    .addAnswer(
        [
            '\n*1* Problema con impresora o escaner 🖨️.',
            '\n*2* Problema con el PC 🖥️',
            '\n*3* Problema con teléfono IP ☎️',
            '\n*4*- Problema con cámara de seguridad 📹',
            '\n*5*- Problema  con TV de informes 📺',
            '\n*6*- Problemas con audiencia 🎧🎙️🖥️'
        ],
        null,
        null,
        [flowOp1MImp1, flowOp1MPC1 ]
            /* flowOp2SubMenuN3, flowOp3SubMenuN3,flowOp4SubMenuN3,flowOp5SubMenu3, flowOp6SubMenu3]*/
);



 /*
El bot responde a cualquier caracter

Flujo principal de munú- nivel 1
*/
 pattern = "^.+";
 result = pattern.match(pattern).forEach(element => console.log(element));
 
 const flowMenuPrincipal = addKeyword(['hola', 'ole', 'alo', result])
    .addAnswer(['👋 Hola, gracias por comunicarte con el soporte técnico del MPF✨. Soy el Sr. T-BOT🤖',
    'tu asistente virtual. Por favor indícame en que puedo ayudarte, elije el número de la opción que deseas consultar (1, 2, o 3) y te ayudaré.😁'])
    .addAnswer(
        ANSWER_FLOW_PRINCIPAL.map(answer => answer.descripcion),
        null,
        null,
        [flowGenerarMenu1]
            /*flowCnsultar, flowopCancelar, flowOtros]*/
    );

    const subject = ANSWER_FLOW_PRINCIPAL.map(answer => {
      if (answer.id === flowMenuPrincipal) 
      return answer.descripcion
    });

    const ANSWER_FLOW_PRINCIPAL = [
      {
        id: '1',
        descripcion: '👉 *1*-Generar un ticket de soporte técnico'
      },
      {
        id: '2',
        descripcion: '👉 *2*-Consultar mi ticket'
      }
    ];

    jsonPostIssue.subject = subject;
     
const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowMenuPrincipal])
    const adapterProvider = createProvider(BaileysProvider)
  

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
