const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')


const flowop1 = addKeyword(['1', 'siguiente']).addAnswer(['Elije el número que más se acerque a tu problema 👇 '])

const flowSecundario = addKeyword(['1', 'siguiente']).addAnswer(['Elije el número que más se acerque a tu problema 👇 ',

        '\n*1* Problema de impresión 😓🖨️',
        '\n*2* No imprime nada. 🤦',
        '\n*3* Mensaje de error en pantalla 🚨🔴',
],
null,
[flowop1]
)

const flowDocs = addKeyword(['1', 'documentación', 'documentación']).addAnswer(
    [
        '📄 ¿Que problemas tienes?, por favor elige una de estas opciones 👇',
        '\n*1* Problema con impresora o escaner 🖨️.',
        '\n*2* Problema con el PC 🖥️',
        '\n*3* Problema con teléfono IP ☎️',
    ],
    null,
    null,
    [flowSecundario]
)

const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://bot-whatsapp.netlify.app/docs/example/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '[*opencollective*] https://opencollective.com/bot-whatsapp',
        '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
        '[*patreon*] https://www.patreon.com/leifermendez',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowDiscord = addKeyword(['discord']).addAnswer(
    ['🤪 Únete al discord', 'https://link.codigoencasa.com/DISCORD', '\n*2* Para siguiente paso.'],
    null,
    null,
    [flowSecundario]
)

const flowPrincipal = addKeyword(['hola', 'ole', 'alo', '/*a*'])
    .addAnswer('👋 Hola gracias por comunicarte con el soporte técnico del MPF✨. Soy el Sr. T-BOT🤖, tu asistente virtual. Por favor indícame en que puedo ayudarte, elije el número de la opción que deseas consultar (1, 2, o 3) y te ayudaré.😁')
    .addAnswer(
        [
            '👉 *1* Generar un ticket de soporte técnico',
            '👉 *2* Consultar mi ticket',
            '👉 *3* Cancelar mi ticket',
        ],
        null,
        null,
        [flowDocs, flowGracias, flowTuto, flowDiscord]
    )

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
