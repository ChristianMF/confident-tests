import 'react-native';
const { onSend } = require("./Home");
const { onSendQuickReplies } = require("./Home");
const { eliminateQuickReplies } = require("./Home");
const { handleGoogleResponse } = require("./Home");
const { sendBotResponse } = require("./Home");
const { onTriggerEvent } = require("./Home");

//1. VARIABLES
//Variables de acceso global y generales
global.sessionId = new Date() + ' ' + new Date().getMilliseconds();
global.newDate = new Date();
global.BOT_USER = {
    _id: 2,
    name: 'Confident Bot',
    avatar: require('../../../assets/images/13.jpeg')
};

//Prueba 1
var messages = [
    {
        _id: 1,
        text: 'Hola',
        createdAt: newDate,
        user: BOT_USER
    },
    {
        _id: 2,
        text: '¿Cómo estás?',
        createdAt: newDate,
        user: sessionId
    },
]

//Prueba 2
var quickReplies = [{
    title: 'Hola',
    value: ' Hola',
}];

//Prueba 3
var messagesQuickReplies = [
    {
        _id: 1,
        text: 'Lee el aviso de privacidad 👉 en 📣 ¿Aceptas los términos y condiciones del aviso de privacidad? (Aprieta el botón 🤫)',
        createdAt: newDate,
        quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
                {
                    title: 'Sí',
                    value: 'Sí acepto los términos y condiciones',
                },
                {
                    title: 'No',
                    value: 'No acepto los términos y condiciones',
                },
            ],
        },
        user: BOT_USER
    }];
//Prueba 1 y 2
var messages1 = [
    {
        _id: sessionId,
        text: ' Hola',
        createdAt: newDate,
        user: sessionId
    }];

//Preuba 2
var messages2 = [
    {
        _id: 1,
        text: 'Hola',
        createdAt: newDate,
        user: sessionId
    }
];

//Prueba 3
var messagesEliminateQuickReplies = [
    {
        _id: 1,
        text: 'Lee el aviso de privacidad 👉 en 📣 ¿Aceptas los términos y condiciones del aviso de privacidad? (Aprieta el botón 🤫)',
        createdAt: newDate,
        user: BOT_USER
    }];

//Prueba 4
var results = {
    "responseId": "8ad22784-092d-4ac8-a182-f883ed10d66b-9df18b51",
    "queryResult": {
        "queryText": "Hola",
        "action": "1.1.1",
        "parameters": {},
        "allRequiredParamsPresent": true,
        "fulfillmentText": "Hola",
        "fulfillmentMessages": [
            {
                "text": {
                    "text": [
                        "Hola"
                    ]
                }
            }
        ],
    }
};

//Preuba 4
var textDF = "Hola";
var actionDF = "1.1.1";

//Preuba 5
var messagesSendBot1 = {
    msg: {
        _id: 1,
        text: '¿Cuál es tu duda sobre el embarazo?',
        createdAt: newDate,
        quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
                {
                    title: '¿Cómo se puede quedar embarazada?',
                    value: '¿Cuál es tu duda sobre el embarazo? ¿Cómo se puede quedar embarazada?',
                },
                {
                    title: 'Síntomas',
                    value: '¿Cuál es tu duda sobre el embarazo? Síntomas',
                },
                {
                    title: '¿Qué hacer si sospecho que lo estoy?',
                    value: '¿Cuál es tu duda sobre el embarazo? ¿Qué hacer si sospecho que lo estoy?',
                },
                {
                    title: '¿A quién puedo acudir?',
                    value: '¿Cuál es tu duda sobre el embarazo? ¿A quién puedo acudir?',
                },
                {
                    title: 'Opciones si estoy embarazada',
                    value: '¿Cuál es tu duda sobre el embarazo? Opciones si estoy embarazada',
                },
            ],
        },
        user: BOT_USER
    }
};

//Preuba 5
var text1 = "¿Cuál es tu duda sobre el embarazo?";
var action1 = "9.3.1";

//Prueba 6
var quickRepliesOnTriggerEvent = [{
    title: 'Métodos anticonceptivos',
    value: '¿De qué te gustaría hablar en temas de sexo? Métodos anticonceptivos',
}];
var param1 = "Coito1";

//2. PRUEBAS
//Prueba 1
test("Retorna el mensaje escrito e introucido por el usuario", () => {
    const message = onSend(messages);
    expect(message).toStrictEqual(messages1);
});

//Prueba 2
test("Retorna la opción precionada por el usuario y la pregunta más la opción precionada por el usuario", () => {
    const quickReply = onSendQuickReplies(quickReplies);
    expect(quickReply).toStrictEqual(messages2 + messages1);
});

//Preuba 3
test("Retorna los arreglos de mensajes eliminando las respuestas rápidas", () => {
    const myArray = eliminateQuickReplies(messagesQuickReplies);
    expect(myArray).toStrictEqual(messagesEliminateQuickReplies);
});

//Preuba 4
test("Retorna el procesamiento hecho sobre la respuesta del servicio Dialogflow", () => {
    const result = handleGoogleResponse(results);
    expect(result).toStrictEqual(textDF + actionDF);
});

//Preuba 5 
test("Retorna la respuesta dada por el servicio Dialogflow", () => {
    const botResponse = sendBotResponse(text1, action1);
    expect(botResponse).toStrictEqual(messagesSendBot1);
});

//Preuba 6 
test("Retorna el evento para activar la próxima respuesta del asiste virtual", () => {
    const eventTrigger = onTriggerEvent(quickRepliesOnTriggerEvent);
    expect(eventTrigger).toStrictEqual(param1);
});