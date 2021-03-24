'use strict'

const responses1 = {
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

const responses2 = {
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

module.exports = {
    textQuery1: function(text, userID, parameters = {}) {
        //let sessionPath = sessionClient.sessionPath(projectId,sessionId + userID);
        //let self = module.exports;
        const request = {
            //session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent
                    text: text,
                    // The language used by the client
                    languageCode: 'es-ES',
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };
        //self.saveText(userID, text);
        //let responses = await sessionClient.detectIntent(request);
        this.handleAction(responses1);
        return responses1;
    },

    textQuery2: function(text, userID, parameters = {}) {
        //let sessionPath = sessionClient.sessionPath(projectId,sessionId + userID);
        //let self = module.exports;
        const request = {
            //session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent
                    text: text,
                    // The language used by the client
                    languageCode: 'es-ES',
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };
        //self.saveText(userID, text);
        //let responses = await sessionClient.detectIntent(request);
        this.handleAction(responses2);
        return responses2;
    },

    handleAction: function(responses) {
        //let self = module.exports;
        let queryResult = responses.queryResult;

        //When a intent asks for data about the user, the action(Dialogflow) & schema(Mongo) is set here, in order to save to db.
        //If want to creat a new schema, please first register it in folder "models", then import it here.
        /*switch(queryResult.action) {
            case '1.1.1':
                if (queryResult.allRequiredParamsPresent) {
                    self.saveRegistration(queryResult.parameters.fields);
                }
            case '1.2.1':
                if (queryResult.allRequiredParamsPresent) {
                    self.saveFunctionality(queryResult.parameters.fields);
                }
                break;
        }*/
        
        return responses;
    },
}