'use strict';
const chatbot = require('./Chatbot');

//Variables prueba 1
var text = "¿Quieres comenzar? Sí";

var results1 = {
        "queryText": "¿Quieres comenzar? Sí",
        "action": "",
        "parameters": {},
        "allRequiredParamsPresent": true,
        "fulfillmentText": "A partir de ahora, solo presiona una de las opciones que se te presentarán abajo de cada pregunta. ¿Qué tema quieres hablar? 🤓",
        "fulfillmentMessages": [
            {
                "payload": {
                    "quick_replies": [
                        {
                            "option": "Futuro",
                            "payload": "Futuro",
                            "text": "¿Qué tema quieres hablar? Futuro"
                        },
                        {
                            "payload": "Sexualidad",
                            "option": "Sexualidad",
                            "text": "¿Qué tema quieres hablar? Sexualidad"
                        },
                        {
                            "option": "Conflictos con la ley",
                            "text": "¿Qué tema quieres hablar? Conflictos_ley",
                            "payload": "Conflicto_ley"
                        }
                    ],
                    "text": "A partir de ahora, solo presiona una de las opciones que se te presentarán abajo de cada pregunta. ¿Qué tema quieres hablar? 🤓"
                }
            }
        ],
};

//Variables prueba 2
var text1 = "¿Cómo te ves en 2 años? Trabajando";
var payload = "Trabajando"

var results2 = {
    "queryText": "¿Cómo te ves en 2 años? Trabajando",
    "action": "",
    "parameters": {},
    "allRequiredParamsPresent": true,
    "fulfillmentText": "¿En qué trabajarás?",
    "fulfillmentMessages": [
        {
            "payload": {
                "quick_replies": [
                    {
                        "option": "Mecánico",
                        "payload": "Trabajando_1",
                        "text": "¿En qué trabajarás? Mecánico"
                    },
                    {
                        "option": "Vendedor ambulante",
                        "payload": "Trabajando_1",
                        "text": "¿En qué trabajarás? Vendedor ambulante"
                    },
                    {
                        "option": "Repartidor",
                        "payload": "Trabajando_1",
                        "text": "¿En qué trabajarás? Repartidor"
                    },
                    {
                        "option": "Chofer",
                        "payload": "Trabajando_1",
                        "text": "¿En qué trabajarás? Chofer"
                    },
                    {
                        "option": "Albañil",
                        "payload": "Trabajando_1",
                        "text": "¿En qué trabajarás? Albañil"
                    },
                    {
                        "option": "Maestro",
                        "payload": "Trabajando_1",
                        "text": "¿En qué trabajarás? Maestro"
                    },
                    {
                        "option": "Administrativo",
                        "payload": "Trabajando_1",
                        "text": "¿En qué trabajarás? Administrativo"
                    },
                    {
                        "option": "Técnico",
                        "payload": "Trabajando_1",
                        "text": "¿En qué trabajarás? Técnico"
                    },
                    {
                        "option": "No sé",
                        "payload": "Trabajando_1",
                        "text": "¿En qué trabajarás? No sé"
                    },
                    {
                        "option": "Otro",
                        "payload": "Trabajando_1",
                        "text": "¿En qué trabajarás? Otro"
                    }
                ],
                "text": "¿En qué trabajarás?"
            }
        }
    ],
};

//Prueba 1
test("Simulación de un mensaje escrito", () => {
    const message = chatbot.df_text_query1(text);
    expect(message).toStrictEqual(results1);
});

//Prueba 2
test("Simulación de un botón precionado", () => {
    const message = chatbot.df_text_query2(text1);
    expect(message).toStrictEqual(results2);
});