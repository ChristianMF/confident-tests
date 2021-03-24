import 'react-native';
import home from './Home';

//1. VARIABLES PARA PRUEBA
//Variables generales
const BOT_USER = {
    _id: 2,
    name: 'Confident Bot',
    avatar: require('../../../assets/images/13.jpeg')
};

//Variables para prueba 1
var messages1 = [
    {
        _id: sessionId,
        text: 'Sí',
        createdAt: newDate,
        user: sessionId
    }
]

var messagesSendBot1 = {
    msg: {
        _id: 5,
        text: 'A partir de ahora, solo presiona una de las opciones que se te presentarán abajo de cada pregunta. ¿Qué tema quieres hablar? 🤓',
        createdAt: newDate,
        quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
                {
                    title: 'Futuro',
                    value: '¿Qué tema quieres hablar? Futuro',
                },
                {
                    title: 'Sexualidad',
                    value: '¿Qué tema quieres hablar? Sexualidad',
                },
                {
                    title: 'Conflictos con la ley',
                    value: '¿Qué tema quieres hablar? Conflictos_ley',
                }
            ],
        },
        user: BOT_USER
    }
};

//Variables para prueba 2
var quickReplies = [{
    title: 'Futuro',
    value: '¿Qué tema quieres hablar? Futuro',
}];

var messagesSendBot2 = [{
        _id: sessionId,
        text: '¿Qué tema quieres hablar? Futuro',
        createdAt: newDate,
        user: sessionId
}];

var messagesSendBot3 = {
    msg: {
        _id: 5,
        text: '¿Cómo te ves en 2 años?',
        createdAt: newDate,
        quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
                {
                    title: 'Trabajando',
                    value: '¿Cómo te ves en 2 años? Trabajando',
                },
                {
                    title: 'Estudiando',
                    value: '¿Cómo te ves en 2 años? Estudiando',
                },
                {
                    title: 'Otro',
                    value: '¿Cómo te ves en 2 años? Otro',
                },
                {
                    title: 'No sé',
                    value: '¿Cómo te ves en 2 años? No sé',
                },
                {
                    title: 'Estudiando y Trabajando',
                    value: '¿Cómo te ves en 2 años? Estudiando y Trabajando',
                }
            ],
        },
        user: BOT_USER
    }
};

//2. PRUEBAS
//Prueba 1
test("", () => {
    const message1 = home.onSend(messages1);
    expect(message1).toStrictEqual(messagesSendBot1);
});

//Prueba 2
test("", () => {
    const message2 = home.onSendQuickReplies(quickReplies);
    expect(message2).toStrictEqual(messagesSendBot2);
});

test("", () => {
    const message3 = home.onTriggerEvent(quickReplies);
    expect(message3).toStrictEqual(messagesSendBot3);
});