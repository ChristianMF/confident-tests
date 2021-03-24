'use strict';
const chatbot = require('./Chatbot');
const chatbotServer = require('./ChatbotServer');

//Variables para prueba 1
var text1 = "¿Qué estudias actualmente? Preparatoria";
var results1 = {
    "queryText": "¿Qué estudias actualmente? Preparatoria",
    "action": "",
    "parameters": {},
    "allRequiredParamsPresent": true,
    "fulfillmentText": "¿En qué prepa estudias?",
    "fulfillmentMessages": [
        {
            "payload": {
                "quick_replies": [
                    {
                        "option": "UdeG",
                        "payload": "Event336",
                        "text": "¿En qué prepa estudias? UdeG"
                    },
                    {
                        "option": "Conalep",
                        "payload": "Event336",
                        "text": "¿En qué prepa estudias? Conalep"
                    },
                    {
                        "option": "Cecytej",
                        "payload": "Event336",
                        "text": "¿En qué prepa estudias? Cecytej"
                    },
                    {
                        "option": "Cobaej",
                        "payload": "Event336",
                        "text": "¿En qué prepa estudias? Cobaej"
                    },
                    {
                        "option": "Otro",
                        "payload": "Event336",
                        "text": "¿En qué prepa estudias? Otro"
                    },
                    {
                        "option": "No sé",
                        "payload": "Event336",
                        "text": "¿En qué prepa estudias? No sé"
                    }
                ],
                "text": "¿En qué prepa estudias?"
            }
        }
    ],
};
//Variables para prueba 2
var text2 = "¿Sobre qué tema te gustaría saber? Sexo";
var payload = "Sexo";
var results2 = {
    "queryText": "¿Sobre qué tema te gustaría saber? Sexo",
    "action": "",
    "parameters": {},
    "allRequiredParamsPresent": true,
    "fulfillmentText": "¿Qué te gustaría saber sobre sexo?",
    "fulfillmentMessages": [
        {
            "payload": {
                "quick_replies": [
                    {
                        "option": "Faje",
                        "payload": "¿Qué te gustaría saber sobre sexo? Faje",
                        "text": "Sexo1"
                    },
                    {
                        "option": "Sexo",
                        "payload": "¿Qué te gustaría saber sobre sexo? Sexo",
                        "text": "Sexo2"
                    },
                    {
                        "option": "Indecision",
                        "payload": "¿Qué te gustaría saber sobre sexo? Indecision",
                        "text": "Sexo3"
                    },
                    {
                        "option": "Sexo no consentido",
                        "payload": "¿Qué te gustaría saber sobre sexo? Sexo no consentido",
                        "text": "Sexo4"
                    }
                ],
                "text": "¿Qué te gustaría saber sobre sexo?"
            }
        }
    ],
};

//Variables para prueba 3
var text3 = "¿Sobre qué tema te gustaría saber? Orientación sexual";
var results3 = {
    "queryText": "¿Sobre qué tema te gustaría saber? Orientación sexual",
    "action": "",
    "parameters": {},
    "allRequiredParamsPresent": true,
    "fulfillmentText": "¿Qué te gustaría conocer sobre este tema de orientación?",
    "fulfillmentMessages": [
        {
            "payload": {
                "quick_replies": [
                    {
                        "option": "¿Qué es?",
                        "payload": "¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?",
                        "text": "Orientacion1"
                    },
                    {
                        "option": "¿Cuantos y cuáles tipos hay?",
                        "payload": "¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?",
                        "text": "Orientacion2"
                    },
                    {
                        "option": "He sufrido discriminación",
                        "payload": "¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación",
                        "text": "Orientacion3"
                    }
                ],
                "text": "¿Qué te gustaría conocer sobre este tema de orientación?"
            }
        }
    ],
};

//Variables para prueba 4
var results4 = {
    "queryText": "¿En qué trabajarás? Otro",
    "action": "",
    "parameters": {},
    "allRequiredParamsPresent": true,
    "fulfillmentText": "¿Por qué vas a trabajar?",
    "fulfillmentMessages": [
        {
            "payload": {
                "quick_replies": [
                    {
                        "option": "Necesito dinero",
                        "payload": "Trabajando_2",
                        "text": "¿Por qué vas a trabajar? Necesito dinero"
                    },
                    {
                        "option": "No quiero seguir estudiando",
                        "payload": "Trabajando_2",
                        "text": "¿Por qué vas a trabajar? No quiero seguir estudiando"
                    },
                    {
                        "option": "Tradición familiar",
                        "payload": "Trabajando_2",
                        "text": "¿Por qué vas a trabajar? Tradición familiar"
                    },
                    {
                        "option": "Me quiero independizar",
                        "payload": "Trabajando_2",
                        "text": "¿Por qué vas a trabajar? Me quiero independizar"
                    },
                    {
                        "option": "No sé",
                        "payload": "Trabajando_2",
                        "text": "¿Por qué vas a trabajar? No sé"
                    },
                    {
                        "option": "Otro",
                        "payload": "Trabajando_2",
                        "text": "¿Por qué vas a trabajar? Otro"
                    }
                ],
                "text": "¿Por qué vas a trabajar?"
            }
        }
    ],
};

//Prueba 1
test("Simulación de un mensaje escrito", () => {
    const message = chatbot.df_text_query1(text1);
    expect(message).toStrictEqual(results1);
});

//Prueba 2
test("Simulación de un botón precionado", () => {
    const message = chatbot._handleQuickReplyPayload(text2, payload);
    expect(message).toStrictEqual(results2);
});

//Prueba 3
test("Simulación del procesamiento de un mensaje de usuario (escrito o precionado)", () => {
    const message = chatbotServer.textQuery1(text3);
    expect(message).toStrictEqual(results3);
});

//Prueba 4
test("Simulación del procesamiento de un mensaje de usuario (escrito o precionado)", () => {
    const message = chatbotServer.handleAction(results4);
    expect(message).toStrictEqual(results4);
});