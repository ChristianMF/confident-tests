var textSave = "";

var state = {
    messages: []
};

exports.onSend = (messages) => {

    let text = messages[0].text;

    let messages1 = [
        {
            _id: sessionId,
            text: textSave + ' ' + text,
            createdAt: newDate,
            user: sessionId
        }
    ];

    return messages1;
};

exports.onSendQuickReplies = (quickReplies = []) => {
    let user = {
        _id: sessionId
    };

    let messages = [
        {
            _id: state.messages.length + 1,
            text: quickReplies[0].title,
            createdAt: newDate,
            user: user
        }
    ];

    let messages1 = [
        {
            _id: sessionId,
            text: quickReplies[0].value,
            createdAt: newDate,
            user: sessionId
        }
    ];

    return (messages + messages1);
};

exports.eliminateQuickReplies = (myArray = []) => {
    for (var n = 0; n < myArray.length; n++) {
        let newArray = {
            _id: myArray[n]._id,
            text: myArray[n].text,
            createdAt: myArray[n].createdAt,
            user: myArray[n].user
        };

        myArray[n] = newArray;
        break;
    };

    return myArray;
};

exports.handleGoogleResponse = (result) => {
    let textDF = result.queryResult.fulfillmentMessages[0].text.text[0];
    textSave = result.queryResult.fulfillmentMessages[0].text.text[0];
    let actionDF = result.queryResult.action;

    return (textDF + actionDF);
};

exports.sendBotResponse = (text, action) => {

    var message = {};

    if (action === '1.1.2') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
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
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === 'input.unknown') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '1.1.3 Default Fallback Intent Sí',
                        },
                        {
                            title: 'No',
                            value: '1.1.3 Default Fallback Intent No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '1.1.4') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '¿Ya me proporcionaste tus datos? Sí',
                        },
                        {
                            title: 'No',
                            value: '¿Ya me proporcionaste tus datos? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '1.2.2') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '¿Hablar de otro tema? Sí',
                        },
                        {
                            title: 'No',
                            value: '¿Hablar de otro tema? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '1.2.4') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '1.2.4 ¿Ya me proporcionaste tus datos? Sí',
                        },
                        {
                            title: 'No',
                            value: '1.2.4 ¿Ya me proporcionaste tus datos? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '1.2.5') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '1.2.5 ¿Aún así quieres platicar conmigo? Sí',
                        },
                        {
                            title: 'No',
                            value: '1.2.5 ¿Aún así quieres platicar conmigo? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.1.1') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
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
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.2.1') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Mecánico',
                            value: '¿En qué trabajarás? Mecánico',
                        },
                        {
                            title: 'Vendedor ambulante',
                            value: '¿En qué trabajarás? Vendedor ambulante',
                        },
                        {
                            title: 'Repartidor',
                            value: '¿En qué trabajarás? Repartidor',
                        },
                        {
                            title: 'Chofer',
                            value: '¿En qué trabajarás? Chofer',
                        },
                        {
                            title: 'Albañil',
                            value: '¿En qué trabajarás? Albañil',
                        },
                        {
                            title: 'Maestro',
                            value: '¿En qué trabajarás? Maestro',
                        },

                        {
                            title: 'Administrativo',
                            value: '¿En qué trabajarás? Administrativo',
                        },

                        {
                            title: 'Técnico',
                            value: '¿En qué trabajarás? Técnico',
                        },

                        {
                            title: 'No sé',
                            value: '¿En qué trabajarás? No sé',
                        },

                        {
                            title: 'Otro',
                            value: '¿En qué trabajarás? Otro',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.2.3') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Necesito dinero',
                            value: '¿Por qué vas a trabajar? Necesito dinero',
                        },
                        {
                            title: 'No quiero seguir estudiando',
                            value: '¿Por qué vas a trabajar? No quiero seguir estudiando',
                        },
                        {
                            title: 'Tradición familiar',
                            value: '¿Por qué vas a trabajar? Tradición familiar',
                        },
                        {
                            title: 'Me quiero independizar',
                            value: '¿Por qué vas a trabajar? Me quiero independizar',
                        },
                        {
                            title: 'No sé',
                            value: '¿Por qué vas a trabajar? No sé',
                        },
                        {
                            title: 'Otro',
                            value: '¿Por qué vas a trabajar? Otro',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.2.5') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '¿Realmente quieres trabajar ahí? Sí',
                        },
                        {
                            title: 'No',
                            value: '¿Realmente quieres trabajar ahí? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.2.6') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Si planeas trabajar puedes darte una idea de los trabajos que se están ofertando en línea, internet es una herramienta útil para encontrar trabajo y observar empleos que puedan interesarte en un futuro.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'https://www.indeed.com.mx/Empleos-en-Jalisco',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1528482408018-6d6ce68171d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            },
            msg: {
                _id: state.messages.length + 3,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '3.2.6 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '3.2.6 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.2.7') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Aún tienes tiempo de decidir y explorar más cosas que te pueden gustar, incluso puedes encontrar algo en lo que no pensabas que eras tan bueno.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Con los siguientes test puedes darte una idea de que puede adaptarse a tus gustos y a tus conocimientos actuales, recuerda que siempre puedes mejorar, aprender y cambiar el mundo que te rodea.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'http://guiadecarreras.udg.mx/app_guiacarrera/lstTest.php',
                createdAt: newDate,
                user: BOT_USER,
                image: 'http://guiadecarreras.udg.mx/wp-content/themes/carreras_2014R/img/logo.png'
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'Otro test de aptitudes',
                createdAt: newDate,
                user: BOT_USER,
            },
            msg5: {
                _id: state.messages.length + 5,
                text: 'https://www.foxize.com/test/test-de-habilidades-profesionales-107',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            },
            msg: {
                _id: state.messages.length + 6,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '3.2.7 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '3.2.7 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.3.1') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Secundaria',
                            value: '¿Qué estudias actualmente? Secundaria',
                        },
                        {
                            title: 'Preparatoria',
                            value: '¿Qué estudias actualmente? Preparatoria',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.3.2') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'UdeG',
                            value: '¿En que prepa estudias? UdeG',
                        },
                        {
                            title: 'Conalep',
                            value: '¿En que prepa estudias? Conalep',
                        },
                        {
                            title: 'Cecytej',
                            value: '¿En que prepa estudias? Cecytej',
                        },
                        {
                            title: 'Cobaej',
                            value: '¿En que prepa estudias? Cobaej',
                        },
                        {
                            title: 'Otro',
                            value: '¿En que prepa estudias? Otro',
                        },
                        {
                            title: 'No sé',
                            value: '¿En que prepa estudias? No sé',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.3.4') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'UdeG',
                            value: '¿En que prepa estudiarás? UdeG',
                        },
                        {
                            title: 'Conalep',
                            value: '¿En que prepa estudiarás? Conalep',
                        },
                        {
                            title: 'Cecytej',
                            value: '¿En que prepa estudiarás? Cecytej',
                        },
                        {
                            title: 'Cobaej',
                            value: '¿En que prepa estudiarás? Cobaej',
                        },
                        {
                            title: 'Otro',
                            value: '¿En que prepa estudiarás? Otro',
                        },
                        {
                            title: 'No sé',
                            value: '¿En que prepa estudiarás? No sé',
                        },
                        {
                            title: 'No estudiaré la prepra',
                            value: '¿En que prepa estudiarás? No estudiaré la prepra',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.3.6') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '¿Planeas estudiar la universidad? Sí',
                        },
                        {
                            title: 'No',
                            value: '¿Planeas estudiar la universidad? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.3.7') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '¿Ya sabes lo que quieres estudiar? Sí',
                        },
                        {
                            title: 'No',
                            value: '¿Ya sabes lo que quieres estudiar? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.3.8') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Ciencias sociales o Humanidades/Artes',
                            value: '¿Qué estudiarás? Ciencias sociales o Humanidades/Artes',
                        },
                        {
                            title: 'Ciencias exactas o Ingeniería',
                            value: '¿Qué estudiarás? Ciencias exactas o Ingeniería',
                        },
                        {
                            title: 'Ciencias Económico Administrativas',
                            value: '¿Qué estudiarás? Ciencias Económico Administrativas',
                        },
                        {
                            title: 'Ciencias de la salud',
                            value: '¿Qué estudiarás? Ciencias de la salud',
                        },

                        {
                            title: 'No sé',
                            value: '¿Qué estudiarás? No sé',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.3.9') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'La siguiente información puede darte un mejor panorama de los trabajos que tienen más demanda en tiempos de COVID, el termómetro laboral podrá ayudarte a ver de manera general qué empleos son los más solicitados y en qué zonas.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'https://www.occ.com.mx/blog/termometro-laboral/',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://s3-us-west-2.amazonaws.com/occ-mkt/blog/wp-content/uploads/2020/04/termometro-2.png',
            },
            msg: {
                _id: state.messages.length + 3,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '3.3.9 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '3.3.9 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.4.1') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'No quiero hacer nada',
                            value: '¿Qué es lo que planeas hacer? No quiero hacer nada',
                        },
                        {
                            title: 'Ser Youtuber',
                            value: '¿Qué es lo que planeas hacer? Ser Youtuber',
                        },
                        {
                            title: 'Ser Músico',
                            value: '¿Qué es lo que planeas hacer? Ser Músico',
                        },
                        {
                            title: 'Ser Deportista',
                            value: '¿Qué es lo que planeas hacer? Ser Deportista',
                        },
                        {
                            title: 'Ser Famoso',
                            value: '¿Qué es lo que planeas hacer? Ser Famoso',
                        },
                        {
                            title: 'Inventar algo',
                            value: '¿Qué es lo que planeas hacer? Inventar algo',
                        },
                        {
                            title: 'Tener mucho dinero',
                            value: '¿Qué es lo que planeas hacer? Tener mucho dinero',
                        },
                        {
                            title: 'Tener una familia',
                            value: '¿Qué es lo que planeas hacer? Tener una familia',
                        },
                        {
                            title: 'Viajar',
                            value: '¿Qué es lo que planeas hacer? Viajar',
                        },
                        {
                            title: 'No sé',
                            value: '¿Qué es lo que planeas hacer? No sé',
                        },
                        {
                            title: 'Otra cosa',
                            value: '¿Qué es lo que planeas hacer? Otra cosa',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.4.2') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Familia',
                            value: '¿Quién te ha influenciado a planear eso? Familia',
                        },
                        {
                            title: 'Amigos',
                            value: '¿Quién te ha influenciado a planear eso? Amigos',
                        },
                        {
                            title: 'Youtubers',
                            value: '¿Quién te ha influenciado a planear eso? Youtubers',
                        },
                        {
                            title: 'Internet',
                            value: '¿Quién te ha influenciado a planear eso? Internet',
                        },
                        {
                            title: 'Otro',
                            value: '¿Quién te ha influenciado a planear eso? Otro',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.4.4') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '¿Crees que vayas a progresar ahí? Sí',
                        },
                        {
                            title: 'No',
                            value: '¿Crees que vayas a progresar ahí? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.4.5') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Trabajar',
                            value: '¿Qué preferirías? Trabajar',
                        },
                        {
                            title: 'Estudiar',
                            value: '¿Qué preferirías? Estudiar',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.5.1') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Ser Youtuber',
                            value: '¿Tienes algún sueño? Ser Youtuber',
                        },
                        {
                            title: 'Ser Músico',
                            value: '¿Tienes algún sueño? Ser Músico',
                        },
                        {
                            title: 'Ser Deportista',
                            value: '¿Tienes algún sueño? Ser Deportista',
                        },
                        {
                            title: 'Ser Famoso',
                            value: '¿Tienes algún sueño? Ser Famoso',
                        },
                        {
                            title: 'Inventar Algo',
                            value: '¿Tienes algún sueño? Inventar Algo',
                        },
                        {
                            title: 'Tener mucho dinero',
                            value: '¿Tienes algún sueño? Tener mucho dinero',
                        },
                        {
                            title: 'Tener una familia',
                            value: '¿Tienes algún sueño? Tener una familia',
                        },
                        {
                            title: 'Viajar',
                            value: '¿Tienes algún sueño? Viajar',
                        },
                        {
                            title: 'No sé',
                            value: '¿Tienes algún sueño? No sé',
                        },
                        {
                            title: 'Otra cosa',
                            value: '¿Tienes algún sueño? Otra cosa',
                        },
                        {
                            title: 'No',
                            value: '¿Tienes algún sueño? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '3.5.3') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '¿Crees poder alcanzar ese sueño? Sí',
                        },
                        {
                            title: 'No',
                            value: '¿Crees poder alcanzar ese sueño? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.1.1') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sexo',
                            value: '¿Sobre qué tema te gustaría saber? Sexo',
                        },
                        {
                            title: 'Embarazos',
                            value: '¿Sobre qué tema te gustaría saber? Embarazos',
                        },
                        {
                            title: 'Orientación sexual',
                            value: '¿Sobre qué tema te gustaría saber? Orientación sexual',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.2.1') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Faje',
                            value: '¿Qué te gustaría saber sobre sexo? Faje',
                        },
                        {
                            title: 'Sexo',
                            value: '¿Qué te gustaría saber sobre sexo? Sexo',
                        },
                        {
                            title: 'Indecision',
                            value: '¿Qué te gustaría saber sobre sexo? Indecision',
                        },
                        {
                            title: 'Sexo no consentido',
                            value: '¿Qué te gustaría saber sobre sexo? Sexo no consentido',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.2.2') { //Intent de Información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'El Faje',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'El faje o mejor conocido como “fax”, “llegue”, “agarron”, “Petting”, “Toqueteo”, “arrimon”, “manoseo”, “checar el aceite”, ”prender el boiler y no meterte a bañar”, es la manera de tocarse con la pareja sin que exista penetración, como besos, caricias, mordiditas, apretones y abrazos con la persona que les gusta o que aman y es algo placentero que también les enseña a demostrar su afecto y emociones.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Las manos y la pelvis son las principales protagonistas y aunque parece una práctica  segura, lo más indicado es tener ciertas precauciones para evitar futuros dolores de cabeza. Sí se excitan más de la cuenta y sienten que del ‘faje’ pueden pasar a la penetración, deben hacer un alto en el camino y pedir protección a la pareja. De esta manera se evitan embarazos no deseados y enfermedades de trasmisión sexual.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'Información recuperada del libro Historias del Ir y Venir: Sexualidad y Salud Reproductiva para Adolescentes y Jóvenes Manual para Promotores/as de Salud. Informacion recuperada de García Montes,A. para El Heraldo,(2015)',
                createdAt: newDate,
                user: BOT_USER
            },
            msg: {
                _id: state.messages.length + 5,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.2.2 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.2.2 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.2.3') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Métodos anticonceptivos',
                            value: '¿De qué te gustaría hablar en temas de sexo? Métodos anticonceptivos',
                        },
                        {
                            title: 'Enfermedades de transmisión sexual',
                            value: '¿De qué te gustaría hablar en temas de sexo? Enfermedades de transmisión sexual',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.2.4') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Información de métodos anticonceptivos',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Cuando se quiere ser responsable y evitar embarazos no deseados, existen muchos métodos anticonceptivos a nuestro alcance, algunos de ellos nos protegen en contra de las enfermedades de transmisión sexual también.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Métodos de barrera',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'En este tipo de métodos se encuentran el  condón o preservativo para hombre y el condón o preservativo para mujer, estos  tienen como función principal evitar que los espermatozoides lleguen al óvulo. Se debe usar uno nuevo en cada relación, colocándolo desde el principio, antes de la penetración. Una función paralela del condón es que también es una barrera de protección contra diversas infecciones de transmisión sexual. El diafragma y los espermicidas también son considerados como métodos de barrera aunque no previenen ITS.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg5: {
                _id: state.messages.length + 5,
                text: 'Anticonceptivos hormonales',
                createdAt: newDate,
                user: BOT_USER
            },
            msg6: {
                _id: state.messages.length + 6,
                text: 'Existen varios tipos y se administran de manera diferente (pueden ser pastillas, inyecciones, parches o implantes). La función de este tipo de anticonceptivos es impedir la ovulación. Es importante considerar que son seguros para evitar un embarazo, pero que no protegen de las infecciones de transmisión sexual.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg7: {
                _id: state.messages.length + 7,
                text: 'Pastilla de Anticoncepción de Emergencia (PAE)',
                createdAt: newDate,
                user: BOT_USER
            },
            msg8: {
                _id: state.messages.length + 8,
                text: 'La PAE es un método hormonal que retrasa la ovulación y espesa el moco del cuello del útero para impedir que el espermatozoide se encuentre con el óvulo y así evitar el embarazo. Si el óvulo ya fue fecundado, la pastilla evita que se implante en el endometrio para dar inicio al embarazo.Su presentación es en una o dos pastillas y la mujer debe tomarla antes de 120 horas posteriores a la relación sexual.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg9: {
                _id: state.messages.length + 9,
                text: 'Dispositivo intrauterino (DIU)',
                createdAt: newDate,
                user: BOT_USER
            },
            msg10: {
                _id: state.messages.length + 10,
                text: 'Es un pequeño dispositivo que es colocado por el médico dentro del útero de la mujer. Dependiendo del modelo, dura entre 3 y 10 años, aunque un médico debe de revisar que esté bien colocado una vez por año.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg11: {
                _id: state.messages.length + 11,
                text: 'Para información más detallada te recomiendo consultar los siguientes links o El libro de donde se tomó esta información.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg12: {
                _id: state.messages.length + 12,
                text: 'https://www.healthychildren.org/Spanish/ages-stages/teen/dating-sex/Paginas/birth-control-for-sexually-active-teens.aspx',
                createdAt: newDate,
                user: BOT_USER
            },
            msg13: {
                _id: state.messages.length + 13,
                text: 'https://www.cigna.com/individuals-families/health-wellness/hw-en-espanol/temas-de-salud/metodos-anticonceptivos-hw237864',
                createdAt: newDate,
                user: BOT_USER
            },
            msg14: {
                _id: state.messages.length + 14,
                text: 'http://www.codajic.org/sites/www.codajic.org/files/100-Preguntas-Sobre-Sexualidad-Adolescente.pdf',
                createdAt: newDate,
                user: BOT_USER
            },
            msg15: {
                _id: state.messages.length + 15,
                text: 'Información recuperada de: Ciudad de México. CDMX Por mí, por ti, por tod@s: Información vital para la salud sexual. 3a ed. Ciudad de México. Secretaría de Salud del Distrito Federal, 2014.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg: {
                _id: state.messages.length + 16,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.2.4 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.2.4 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.2.5') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Información Enfermedades de transmisión sexual',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Las enfermedades de transmisión sexual son infecciones que se contagian de una persona a otra ususalmente durante el sexo vaginal, anal u oral.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Clamidia',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'En la mayoría de los casos la infección resulta asintomática, sin embargo ésta puede llegar a causar secreciones vaginales anormales y dolor en la parte baja del abdomen en mujeres, mientras que en el caso de los hombres puede causar secreciones del pene o dolor en los testículos; la clamidia también puede causar ardor al orinar tanto en hombres como mujeres.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg5: {
                _id: state.messages.length + 5,
                text: 'Gonorrea',
                createdAt: newDate,
                user: BOT_USER
            },
            msg6: {
                _id: state.messages.length + 6,
                text: 'En muchos casos la infección es asintomática, aunque en las mujeres puede llegar a causar secreciones vaginales aumentadas, de un color amarillento o verdoso y con un olor desagradable o con ligero sangrado, mientras que en los hombres se pueden llegar a presentar secreciones blancas, amarillentas o verdosas del pene, que suelen aparecer de 1 a 4 días después de la infección. Puede haber ardor y dolor al orinar.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg7: {
                _id: state.messages.length + 7,
                text: 'Sífilis',
                createdAt: newDate,
                user: BOT_USER
            },
            msg8: {
                _id: state.messages.length + 8,
                text: 'Si no se detecta y trata a tiempo puede tener complicaciones serias e incluso la muerte.Durante la primera fase de la infección, en el sitio donde ocurrió la transmisión se presentan una o varias llagas redondas de color rojo (chancro o úlcera sifilítica), las cuales pueden no causar dolor y pueden desaparecer de manera espontánea. El tiempo promedio entre la infección por sífilis y la aparición de este primer síntoma es de 21 días, pero puede variar de 10 a 90 días.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg9: {
                _id: state.messages.length + 9,
                text: 'Herpes genital',
                createdAt: newDate,
                user: BOT_USER
            },
            msg10: {
                _id: state.messages.length + 10,
                text: 'Es una ITS muy común en México causada por el virus del herpes simple tipo 1 (VHS-1) y tipo 2 (VHS-2).En diversos casos la infección no presenta síntomas, pero cuando los hay éstos adquieren forma de vesículas, ampollas o llagas alrededor de la boca, genitales o el ano. Antes de que las ampollas aparezcan la persona puede sentir hormigueo, ardor, picazón en la piel o tener dolor en el sitio donde las ampollas van a aparecer de manera periódica. Quienes adquieren esta infección pueden tener varios brotes de la enfermedad al año o a lo largo de su vida cuando el sistema inmunológico está débil.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg11: {
                _id: state.messages.length + 11,
                text: 'Virus de papiloma humano (VPH)',
                createdAt: newDate,
                user: BOT_USER
            },
            msg12: {
                _id: state.messages.length + 12,
                text: 'Es muy frecuente. Existen más de 40 tipos de este virus que pueden infectar principalmente las zonas genitales, pero también la boca y la garganta de hombres y mujeres.Ciertos tipos de este virus causan verrugas en el área genital o en la garganta. Otros, causan cáncer cérvico uterino en mujeres. En su mayoría las infecciones provocadas por esta ITS son asintomáticas, por lo cual es importante realizarse una colposcopia cada año en el caso de las mujeres.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg13: {
                _id: state.messages.length + 13,
                text: 'VIH y SIDA',
                createdAt: newDate,
                user: BOT_USER
            },
            msg14: {
                _id: state.messages.length + 14,
                text: 'El VIH es el Virus de Inmunodeficiencia Humana, agente infeccioso causante del Síndrome de Inmunodeficiencia Adquirida (Sida). Una vez que entra al cuerpo se aloja y se replica en el sistema inmuno- lógico, al que destruye debilitando la capacidad del organismo para resistir y combatir infecciones. Con frecuencia el VIH en los primeros años de la infección es asintomático por lo cual la persona puede transmitirlo sin saberlo. A una persona que porta el virus se le denomina persona que vive con VIH.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg15: {
                _id: state.messages.length + 15,
                text: 'El Sida es la etapa sintomática y más avanzada de la infección por VIH. Cuando una persona lleva muchos años infectada con VIH, el virus ya ha debilitado las defensas del cuerpo a tal grado que la persona puede contraer enfermedades llamadas “oportunistas”, que no harían daño en condiciones ordinarias.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg16: {
                _id: state.messages.length + 16,
                text: 'Para información más detallada te recomiendo consultar los siguientes links o El libro de donde se tomó esta información.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg17: {
                _id: state.messages.length + 17,
                text: 'https://www.plannedparenthood.org/es/temas-de-salud/enfermedades-de-transmision-sexual-ets',
                createdAt: newDate,
                user: BOT_USER
            },
            msg18: {
                _id: state.messages.length + 18,
                text: 'https://kidshealth.org/es/teens/std-esp.html',
                createdAt: newDate,
                user: BOT_USER
            },
            msg19: {
                _id: state.messages.length + 19,
                text: 'http://www.codajic.org/sites/www.codajic.org/files/100-Preguntas-Sobre-Sexualidad-Adolescente.pdf',
                createdAt: newDate,
                user: BOT_USER
            },
            msg20: {
                _id: state.messages.length + 20,
                text: 'Información recuperada de: Ciudad de México. CDMX Por mí, por ti, por tod@s: Información vital para la salud sexual. 3a ed. Ciudad de México. Secretaría de Salud del Distrito Federal, 2014.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg: {
                _id: state.messages.length + 21,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.2.5 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.2.5 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.2.6') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: '¿Aún no decides si tener sexo o no?',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Para tener una relación sexual plena primero pensemos, Quiero tener sexo porque realmente deseo hacerlo? O es acaso que alguien está influyendo en que lo haga? ¿Cuán importante es esto para ti?. Debes saber que la edad no es un factor completamente determinante, lo que sí es un tema importante a tener en cuenta es con quien?, esa persona te gusta?, ¿En donde lo van a hacer? Y como se van a proteger?.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Debes saber que para tener sexo, no importa si es tu primera vez o si ya lo haz hecho antes, nunca debes sentirte presionado, ni por tu pareja, ni por amigos, por absolutamente nadie.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'Debes saber identificar con que no te sientes cómodo, esto podrá ayudarte a saber cómo actuar ante la situación, nadie debe presionarnos, ni física ni emocionalmente, para hacer algo que no queremos, no estamos seguros o no nos gusta.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg5: {
                _id: state.messages.length + 5,
                text: 'También, es importante recordar que debemos obtener el consentimiento de nuestra pareja, sea hombre o mujer, cada vez que se quiera practicar una relación sexual. No porque acepte tener relaciones sexuales una ocasión quiere decir que entonces accederá auto- máticamente una segunda vez.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg6: {
                _id: state.messages.length + 6,
                text: 'Por otro lado, ¿Como el alcohol influye en tomar esta decisión?',
                createdAt: newDate,
                user: BOT_USER
            },
            msg7: {
                _id: state.messages.length + 7,
                text: 'El alcohol en bajas dosis y previo a un encuentro sexual puede desinhibir y soltarte, pero NO ayudar a tomar las mejores decisiones, bajo el efecto del alcohol podemos tomar decisiones o realizar acciones que no haríamos normalmente y que pueden hacernos daño o pasar a llevarnos si es que no nos sentimos preparados para ello.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg8: {
                _id: state.messages.length + 8,
                text: 'Es recomendable que no bebas alcohol en situaciones de un potencial encuentro sexual para responder de la mejor forma posible para ti y tu integridad.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg9: {
                _id: state.messages.length + 9,
                text: '¿Qué pasa si no quiero tener sexo para nada?',
                createdAt: newDate,
                user: BOT_USER
            },
            msg10: {
                _id: state.messages.length + 10,
                text: 'No pasa absolutamente nada, hay personas que no estan interesadas en tener sexo nunca. A esto se le llama asexualidad.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg11: {
                _id: state.messages.length + 11,
                text: 'La importancia que le des al sexo en tu vida puede cambiar conforme pase el tiempo, no te preocupes si no es algo que desees en este momento y mas adelante. Es normal que cada persona tenga diferentes niveles de deseo sexual.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg12: {
                _id: state.messages.length + 12,
                text: 'Información recuperada de: Municipalidad de Santiago. 100 Preguntas Sobre Sexualidad Adolescente. Municipalidad de Santiago, Santiago de Chile; 2016.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg13: {
                _id: state.messages.length + 13,
                text: 'Información recuperada de: Ciudad de México. CDMX Por mí, por ti, por tod@s: Información vital para la salud sexual. 3a ed. Ciudad de México. Secretaría de Salud del Distrito Federal, 2014.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg: {
                _id: state.messages.length + 14,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.2.6 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.2.6 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.2.7') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Informacion sobre sexo no consentido',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Consentimiento significa estar activamente y conscientemente de acuerdo con realizar actividades de índole sexual con una persona. El consentimiento le indica a la otra persona que deseamos tener relaciones sexuales. La actividad sexual sin consentimiento es una violación o agresión sexual.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Antes de mantener relaciones sexuales con otra persona, debes saber si esta persona está de acuerdo. Es importante ser honesto con tu pareja sobre lo que deseas hacer y lo que no.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'Existen 5 puntos importantes del consentimiento:',
                createdAt: newDate,
                user: BOT_USER
            },
            msg5: {
                _id: state.messages.length + 5,
                text: '°Se da libremente. Consentir es una opción que tomas sin presión, sin manipulación o sin la influencia de las drogas o el alcohol.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg6: {
                _id: state.messages.length + 6,
                text: '°Es entusiasta. Cuando se trata de sexo, debes hacer las cosas que DESEAS hacer, no lo que se espera que hagas.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg7: {
                _id: state.messages.length + 7,
                text: '°Es específico. Decir que sí a algo (como ir a besarse al dormitorio) no significa que aceptes hacer otras cosas (como tener relaciones sexuales).',
                createdAt: newDate,
                user: BOT_USER
            },
            msg8: {
                _id: state.messages.length + 8,
                text: '°Se brinda estando informado. Solo puedes consentir algo si tienes toda la información al respecto. Por ejemplo, si alguien dice que usara un condón y luego no lo hace, no hubo consentimiento total.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg9: {
                _id: state.messages.length + 9,
                text: '°Es reversible. Todos pueden cambiar de parecer sobre lo que desean hacer, en cualquier momento. Incluso si ya lo hicieron antes y ambos están desnudos en la cama.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg10: {
                _id: state.messages.length + 10,
                text: '¿Qué hacer en caso de ser victima de abuso sexual?',
                createdAt: newDate,
                user: BOT_USER
            },
            msg11: {
                _id: state.messages.length + 11,
                text: '-Busca un lugar seguro o llama a un amigo, familiar o persona de tu confianza que pueda ayudarte. Si corres peligro inmediato, llama al 911.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg12: {
                _id: state.messages.length + 12,
                text: '-Hablar con un adulto de tu confianza sobre lo que pasó.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg13: {
                _id: state.messages.length + 13,
                text: '-Hacer la denuncia pertinente inmediatamente.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg14: {
                _id: state.messages.length + 14,
                text: 'Información recuperada de:',
                createdAt: newDate,
                user: BOT_USER
            },
            msg15: {
                _id: state.messages.length + 15,
                text: 'https://www.plannedparenthood.org/es/temas-de-salud/relaciones/consentimiento-sexual',
                createdAt: newDate,
                user: BOT_USER
            },
            msg16: {
                _id: state.messages.length + 16,
                text: 'Ciudad de México. CDMX Por mí, por ti, por tod@s: Información vital para la salud sexual. 3a ed. Ciudad de México. Secretaría de Salud del Distrito Federal, 2014.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg: {
                _id: state.messages.length + 17,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.2.7 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.2.7 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.3.1') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
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
    } else if (action === '9.3.2') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Información de cómo se puede quedar embarazada',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'El embarazo técnicamente se produce con la fecundación de un óvulo por un espermatozoide, esto ocurre al haber penetración, sin embargo puede suceder con el líquido preseminal en días fértiles de la mujer. También han sucedido casos en los cuales se han presentado embarazos aunque las relaciones sucedieran en días no fértiles debido a que los espermatozoides pueden vivir alrededor de una semana dentro del útero hasta alcanzar al óvulo.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Para más información puedes revisar:',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'https://www.plannedparenthood.org/es/temas-de-salud/embarazo/como-ocurre-el-embarazo',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1525724359365-66b061e0e377?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
            },
            msg: {
                _id: state.messages.length + 5,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.3.2 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.3.2 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.3.3') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Información sobre síntomas de embarazo',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Es importante entender que cada cuerpo es diferente. Sin embargo dentro de los síntomas comunes se encuentra la ausencia de periodo, fatiga, sensibilidad en los senos, ganas de orinar en aumento y es posible presentar un sangrado antes de las fechas del periodo esperadas, señal de implantación.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Valera, J (2009) El Embarazo en la Adolescencia.  Disponible en: https://books.google.es/books?hl=es&lr=&id=3z-RqfLaRvUC&oi=fnd&pg=PA11&dq=sintomas+de+embarazo&ots=Hl0OomOyiq&sig=FR6I2nXeFWiC2DQrtdAIWtoS4UA#v=onepage&q=sintomas%20de%20embarazo&f=false',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            },
            msg: {
                _id: state.messages.length + 4,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.3.3 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.3.3 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.3.4') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Información sobre qué hacer si sospecho que estoy embarazada',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Si sospechas que estás embarazada lo más importante es confirmarlo. Esto se puede hacer a través de una prueba casera siempre y cuando ya se haya presentado el retraso del periodo. También se puede confirmar por una prueba en sangre y finalmente a través de un ultrasonido.  Además de esto, es importante tener en quién apoyarte durante este proceso.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Más información en:',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'https://espanol.womenshealth.gov/pregnancy/you-get-pregnant/knowing-if-you-are-pregnant',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1541956799312-3f9df99e0006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=702&q=80',
            },
            msg: {
                _id: state.messages.length + 5,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.3.4 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.3.4 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.3.5') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Información sobre a quién puedo acudir si lo estoy',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Para confirmar un embarazo además de las pruebas de sangre y orina  lo mejor es ir con un ginecólogo para verificar el desarrollo de la gestación así como tu salud. Existen diferentes asociaciones que proveen consulta gratuita o a muy bajo costo, Hospital de la Mujer  y organizaciones de la sociedad civil pueden apoyarte en este paso.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Puedes acudir al Hospital de la Mujer:',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'https://www.jalisco.gob.mx/es/noticias-referencias/hospital-de-la-mujer',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
            },
            msg: {
                _id: state.messages.length + 5,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.3.5 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.3.5 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.3.6') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Información sobre cuáles son tus opciones',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Cualquier decisión que tomes es totalmente respetable eres muy valiente por elegir, si necesitas saber más de las opciones con las que cuentas abajo están enlistadas:',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Interrupción Legal del Embarazo',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'Esta opción en Jalisco aún no es legal, sin embargo hay organizaciones que te apoyan en el proceso para poder interrumpir el proceso antes de las 12 semanas.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg5: {
                _id: state.messages.length + 5,
                text: 'https://www.promedicamujer.mx/servicios-medicos/interrupcion-legal-del-embarazo/ile-para-pacientes-de-provincia/ile-en-jalisco',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://www.promedicamujer.mx/img/Clinica-de-aborto-DF.png',
            },
            msg6: {
                _id: state.messages.length + 6,
                text: 'https://mariestopes.org.mx/',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://mariestopes.org.mx/wp-content/uploads/2016/12/Clinica-de-aborto.png',
            },
            msg7: {
                _id: state.messages.length + 7,
                text: 'Adopción',
                createdAt: newDate,
                user: BOT_USER
            },
            msg8: {
                _id: state.messages.length + 8,
                text: 'En México la organización encargada de los trámites de adopción es el DIF, sin embargo son los hospicios y orfanatos quienes los reciben.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg9: {
                _id: state.messages.length + 9,
                text: 'https://hogarcabanas.org.mx/',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://hogarcabanas.org.mx/wp-content/uploads/2018/10/caban%CC%83as_mb.jpg',
            },
            msg10: {
                _id: state.messages.length + 10,
                text: 'Ser madre joven',
                createdAt: newDate,
                user: BOT_USER
            },
            msg11: {
                _id: state.messages.length + 11,
                text: 'Si bien no es sencillo pero te has decidido por esta opción aquí te enlistamos opciones para continuar con tus estudios.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg12: {
                _id: state.messages.length + 12,
                text: 'Vifac Guadalajara es una organización que apoya a las mujeres que deciden continuar con su embarazo.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg13: {
                _id: state.messages.length + 13,
                text: 'https://www.vifac.org/',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://www.vifac.org/images/logo/vifac_logo-header.svg',
            },
            msg14: {
                _id: state.messages.length + 14,
                text: 'Educación básica',
                createdAt: newDate,
                user: BOT_USER
            },
            msg15: {
                _id: state.messages.length + 15,
                text: 'Beca de Apoyo a la Educación Básica de Madres Jóvenes y Jóvenes Embarazadas.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg16: {
                _id: state.messages.length + 16,
                text: 'http://www.promajoven.sep.gob.mx',
                createdAt: newDate,
                user: BOT_USER,
                image: 'http://www.promajoven.sep.gob.mx/images/portadas/background_promajoven_portada_001.jpg'
            },
            msg17: {
                _id: state.messages.length + 17,
                text: 'A nivel licenciatura',
                createdAt: newDate,
                user: BOT_USER
            },
            msg18: {
                _id: state.messages.length + 18,
                text: 'https://www.conacyt.gob.mx/index.php/el-conacyt/convocatorias-y-resultados-conacyt/convocatorias-apoyo-a-madres-jefas-de-familia',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://www.conacyt.gob.mx/images/header_logos_-03.jpg',
            },
            msg: {
                _id: state.messages.length + 19,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.3.6 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.3.6 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.4.1') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: '¿Qué es?',
                            value: '¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?',
                        },
                        {
                            title: '¿Cuantos y cuáles tipos hay?',
                            value: '¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?',
                        },
                        {
                            title: 'He sufrido discriminación',
                            value: '¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.4.2') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Información sobre qué es la orientación sexual',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'La orientación sexual es la capacidad de cada persona de sentir atracción emocional, afectiva y sexual por otra persona.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Cuando se habla de diversidad sexual se hace referencia a las diferentes formas de expresar el afecto, erotismo, deseo, las prácticas amorosas y sexuales entre las personas; éstas no se limitan a las relaciones de pareja entre un hombre y una mujer, por lo que incluye la heterosexualidad, homosexualidad y bisexualidad entre otras.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'Informacion recuperada de: https://www.gob.mx/segob/articulos/que-es-la-orientacion-sexual',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://www.gob.mx/cms/uploads/article/main_image/17419/200HMini.jpg',
            },
            msg: {
                _id: state.messages.length + 5,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.4.2 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.4.2 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.4.3') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Información sobre cuántos y cuales tipos de orientación sexual hay',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'La diversidad sexual es muy amplia y todos tenemos un lugar, si sientes que la heterosexualidad no te define, no te preocupes, existen distintas orientaciones y todas son aceptables.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: '1. Heterosexualidad. Es la orientación sexual definida por la atracción hacia personas del sexo contrario, exclusivamente.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: '2. Homosexualidad. Es la atracción sexual dirigida exclusivamente hacia personas del mismo sexo.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg5: {
                _id: state.messages.length + 5,
                text: '3. Bisexualidad. Atracción sexual hacia personas del mismo sexo y del sexo contrario sin importar que sea con la imsma frecuencia o intensidad.',
                createdAt: newDate,
                user: BOT_USER,
            },
            msg6: {
                _id: state.messages.length + 6,
                text: '4. Pansexualidad. Atracción sexual hacia algunas personas, independientemente de su sexo biológico o identidad de género. La diferencia entre la pansexualidad y la bisexualidad es que en el segundo caso la atracción sexual se sigue experimentando a través de las categorías de género, mientras que en la pansexualidad no ocurre esto.',
                createdAt: newDate,
                user: BOT_USER,
            },
            msg7: {
                _id: state.messages.length + 7,
                text: '5. Demisexualidad. La demisexualidad se describe como la aparición de atracción sexual solamente en algunos casos en los que previamente se ha establecido un fuerte vínculo emocional o íntimo.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg8: {
                _id: state.messages.length + 8,
                text: '6. Lithsexualidad. Las personas con este tipo de orientación sexual experimentan atracción hacia otras personas, pero no sienten la necesidad de ser correspondidas.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg9: {
                _id: state.messages.length + 9,
                text: '7. Autosexualidad. En la autosexualidad, la atracción se experimenta hacia uno mismo, sin que esto tenga que ser sinónimo de narcisismo. Puede entenderse como una forma de alimentar afecto o amor propio.',
                createdAt: newDate,
                user: BOT_USER,
            },
            msg10: {
                _id: state.messages.length + 10,
                text: '8. Antrosexualidad. Este concepto sirve para que puedan identificarse con él las personas que experimentan su sexualidad sin saber en qué categoría identificarse y/o sin sentir la necesidad de clasificarse en ninguna de ellas.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg11: {
                _id: state.messages.length + 11,
                text: '9. Polisexualidad. En este tipo de orientación sexual se siente atracción hacia varios grupos de personas con identidades de género concretas. Según el criterio utilizado para clasificar, puede entenderse que la polisexualidad se solapa con otras orientaciones sexuales como por ejemplo la pansexualidad.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg12: {
                _id: state.messages.length + 12,
                text: '10. Asexualidad. La asexualidad sirve para poner nombre a la falta de atracción sexual. Muchas veces se considera que no forma parte de la diversidad de orientaciones sexuales, al ser su negación.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg13: {
                _id: state.messages.length + 13,
                text: 'Más información en: https://psicologiaymente.com/sexologia/tipos-orientacion-sexual',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://pymstatic.com/1233/conversions/tipos-orientacion-sexual-wide.jpg',
            },
            msg14: {
                _id: state.messages.length + 14,
                text: 'Otro aspecto interesante además de tu preferencia sexual es tu identidad de género. Estas pueden diferir.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg15: {
                _id: state.messages.length + 15,
                text: 'Existen personas que no se identifican con el sexo que nacieron, estas personas son llamadas transgénero. Estas personas pueden o no transicionar a través de hormonas con la expresión de género con la cual se sienten mejor.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg16: {
                _id: state.messages.length + 16,
                text: 'Las personas que además de un proceso hormonal deciden optar por una cirugía de reasignación de sexo son conocidas como transexuales.',
                createdAt: newDate,
                user: BOT_USER,
            },
            msg17: {
                _id: state.messages.length + 17,
                text: 'Si una persona sólo gusta de vestir como el género contrario pero no desea cambiar su identidad de género se le denomina travesti.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg18: {
                _id: state.messages.length + 18,
                text: 'Las personas de género fluido, son aquellas que se sienten cómodas con cualquier expresión de género y pueden mezclar elementos de ambas. Debido a esta fluidez, su expresión de género puede cambiar con el tiempo o con cómo se sienta.',
                createdAt: newDate,
                user: BOT_USER,
            },
            msg19: {
                _id: state.messages.length + 19,
                text: 'Por otra parte, cuando hablamos de personas no binarias nos referimos a aquellos cuya identidad de género no es completamente masculina o femenina.',
                createdAt: newDate,
                user: BOT_USER,
            },
            msg20: {
                _id: state.messages.length + 20,
                text: 'https://www.plannedparenthood.org/es/temas-de-salud/orientacion-sexual-y-genero',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/119947642_3921401957875819_8498288170743785082_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=B5gvP_vlwqYAX-GAmrP&_nc_ht=scontent-qro1-1.xx&tp=6&oh=ad93e4a77fb90360791aa5266eeded47&oe=5F9134B9',
            },
            msg: {
                _id: state.messages.length + 21,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.4.3 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.4.3 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '9.4.4') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Informacion sobre que es la discriminacion y como actuar ante ella',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'La diversidad sexual es un aspecto que ha acompañado a los seres humanos a lo largo de su historia, sin embargo, hoy en día muchas personas son discriminadas por su orientación sexual o su identidad de género.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'La intolerancia es principalmente el rechazo a todo aquello que se considere diferente y con estas razones tan tontas muchas veces se busca justificar la discriminación.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'Una persona intolerante no acepta la pluralidad, estos prejuicios provienen de dar un valor positivo solo a la heterosexualidad, así como de creer que la identidad de género de una persona y el sexo que le fue asignado al nacer deben ser congruentes o iguales, o bien, que encajen con las características corporales que se consideran “normales”.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg5: {
                _id: state.messages.length + 5,
                text: 'La discriminación que se comete en contra de las personas por sus identidades sexuales es conocida como homofobia. En ocasiones, esto contribuye a casos de violencia que pueden terminar con la vida de las personas.',
                createdAt: newDate,
                user: BOT_USER,
            },
            msg6: {
                _id: state.messages.length + 6,
                text: 'Si tienes alguna otra duda o haz pasado por alguna situación de discriminacion puedes consultar: http://www.conapred.org.mx o http://www.jovenesporlosderechoshumanos.mx/',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://www.gob.mx/cms/uploads/article/main_image/17419/200HMini.jpg',
            },
            msg7: {
                _id: state.messages.length + 7,
                text: 'Informacion recuperada de: https://www.gob.mx/segob/articulos/que-es-la-orientacion-sexual',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://www.gob.mx/cms/uploads/article/main_image/17419/200HMini.jpg',
            },
            msg8: {
                _id: state.messages.length + 8,
                text: 'Información recuperada de https://www.gob.mx/censida/acciones-y-programas/la-diversidad-sexual-discriminacion-y-derechos',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://www.gob.mx/cms/uploads/action_program/main_image/2613/post_diversidadsex.jpg'
            },
            msg: {
                _id: state.messages.length + 9,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '9.4.4 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '9.4.4 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '11.1.1') {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: '¿Qué son y cuáles son?',
                            value: '¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué son y cuáles son?',
                        },
                        {
                            title: '¿Qué hacer si tengo alguno?',
                            value: '¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué hacer si tengo alguno?',
                        },
                        {
                            title: 'Información de donde acudir',
                            value: '¿Qué te gustaría saber sobre conflictos con la ley? Información de donde acudir',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '11.2.1') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Se designa adolescentes en conflicto con la ley a quienes se les atribuya o compruebe la realización de una o varias conductas tipificadas como delito, y que tengan entre los 12 años de edad cumplidos y menores de 18 años',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Guerrero, A (2017) Adolescentes en conflicto con la ley. recuperado de: http://www.cienciamx.com/index.php/reportajes-especiales/18701-adolescentes-conflicto-ley',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1501962973019-d980bc576111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'En la actualidad se escuchan cada vez más casos que involucran a menores de edad con situaciones violentas, sin muestra aparente de duda sobre los actos que están cometiendo, como lo son violaciones, asesinatos, secuestros, robos y uso de armas largas (Visión criminológica-criminalística, 2018) todas estas situaciones en conjunto con el consumo o venta de drogas ilícitas son considerados conflictos con la ley.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'Linton, L. (2018). El adolescente en conflicto con la ley penal: ¿cuáles son sus características y conflictos sociales?. Recuperado de: http://revista.cleu.edu.mx/new/descargas/1901/articulos/Articulo09_El_adolescente_en_conflicto_con_la_ley_penal.pdf',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1494201503071-da9e3caaf3d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=770&q=80',
            },
            msg5: {
                _id: state.messages.length + 5,
                text: 'Dentro de los conflictos con la ley realizados por los adolescentes se encuentra el homicidio, robos con violencia, de vehiculos o simples, secuestro, violación, portación de armar prohibidas, uso y trafico ilicito de drogas.',
                createdAt: newDate,
                user: BOT_USER,
            },
            msg6: {
                _id: state.messages.length + 6,
                text: 'Guerrero. A. (2019). Adolescentes en conflicto con la ley. recuperado de: https://saludprimero.mx/2019/06/26/adolescentes-en-conflicto-con-la-ley/',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1494201503071-da9e3caaf3d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=770&q=80',
            },
            msg: {
                _id: state.messages.length + 7,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '11.2.1 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '11.2.1 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '11.3.1') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Dentro de la Procuraduría General de la República (PGR) se cuenta con un programa llamado repensar de prevención de violencia y delincuencia para jóvenes en conflicto con la ley penal, este “tiene como objetivo prevenir conductas delictivas y violentas en adolescentes y jóvenes de entre 12 y 29 años en conflicto con la ley penal“.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'Este programa cuenta con tres estrategias:',
                createdAt: newDate,
                user: BOT_USER
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'Captación efectiva de adolescentes durante el proceso penal, impartición de talleres socio emocionales y la incorporación voluntaria de los beneficiarios a una plataforma de regularización académica o el mercado laboral.',
                createdAt: newDate,
                user: BOT_USER
            },
            msg4: {
                _id: state.messages.length + 4,
                text: 'Fiscalía General de la República. (2018). Recuperado de: https://www.gob.mx/fgr/es/articulos/repensar-un-programa-de-prevencion-de-violencia-y-delincuencia-para-jovenes-en-conflicto-con-la-ley-penal?idiom=es',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1532048304129-314d4c34fbc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            },
            msg: {
                _id: state.messages.length + 5,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '11.3.1 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '11.3.1 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else if (action === '11.4.1') { //Intent de información
        message = {
            msg1: {
                _id: state.messages.length + 1,
                text: 'Consulta el Sistema Nacional Para el Desarrollo Integral de la Familia (DIF) cuenta con diversos servicios :).',
                createdAt: newDate,
                user: BOT_USER
            },
            msg2: {
                _id: state.messages.length + 2,
                text: 'https://difgdl.gob.mx/transparencia/Art8/fraccion4/4-d/ATENCION%20A%20ADOLESCENTES%20EN%20CONFLICTO.pdf',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1594841403846-35ec251f07fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            },
            msg3: {
                _id: state.messages.length + 3,
                text: 'http://www.udg.mx/es/servicios/catalogo/bufetes-jur-dicos-servicio-social-la-universidad-guadalajara',
                createdAt: newDate,
                user: BOT_USER,
                image: 'https://images.unsplash.com/photo-1594841367173-8dcddd16c7c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            },
            msg: {
                _id: state.messages.length + 4,
                text,
                createdAt: newDate,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'Sí',
                            value: '11.4.1 ¿Te sirvió la información? Sí',
                        },
                        {
                            title: 'No',
                            value: '11.4.1 ¿Te sirvió la información? No',
                        },
                    ],
                },
                user: BOT_USER
            }
        };
    } else {
        message = {
            msg: {
                _id: state.messages.length + 1,
                text,
                createdAt: newDate,
                user: BOT_USER,
            }
        };
    }

    return message;
};

exports.onTriggerEvent = (quickReplies) => {

    var param1 = "";

    //First
    if (quickReplies[0].value === 'Sí acepto los términos y condiciones') {
        { param1 = "Aceptar_terminos_si" }
    } else if (quickReplies[0].value === 'No acepto los términos y condiciones') {
        { param1 = "Aceptar_terminos_no" }
    }
    //Action: 1.1.2
    else if (quickReplies[0].value === '¿Qué tema quieres hablar? Futuro') {
        { param1 = "Futuro" }
    } else if (quickReplies[0].value === '¿Qué tema quieres hablar? Sexualidad') {
        { param1 = "Sexualidad" }
    } else if (quickReplies[0].value === '¿Qué tema quieres hablar? Conflictos_ley') {
        { param1 = "Conflicto_ley" }
    }
    //Action: 1.1.3
    else if (quickReplies[0].value === '1.1.3 Default Fallback Intent Sí') {
        { param1 = "Fallback_si" }
    } else if (quickReplies[0].value === '1.1.3 Default Fallback Intent No') {
        { param1 = "Event123" }
    }
    //Action: 1.1.4
    else if (quickReplies[0].value === '¿Ya me proporcionaste tus datos? Sí') {
        { param1 = "Hablar_si" }
    } else if (quickReplies[0].value === '¿Ya me proporcionaste tus datos? No') {
        { param1 = "Proporcionar_datos_no" }
    }
    //Action: 1.2.2
    else if (quickReplies[0].value === '¿Hablar de otro tema? Sí') {
        { param1 = "Hablar_si" }
    } else if (quickReplies[0].value === '¿Hablar de otro tema? No') {
        { param1 = "Event123" }
    }
    //Action: 1.2.4
    else if (quickReplies[0].value === '1.2.4 ¿Ya me proporcionaste tus datos? Sí') {
        { param1 = "Hablar_si" }
    } else if (quickReplies[0].value === '1.2.4 ¿Ya me proporcionaste tus datos? No') {
        { param1 = "Proporcionar_datos_no" }
    }
    //Action: 1.2.5
    else if (quickReplies[0].value === '1.2.5 ¿Aún así quieres platicar conmigo? Sí') {
        { param1 = "Proporcionar_datos_no" }
    } else if (quickReplies[0].value === '1.2.5 ¿Aún así quieres platicar conmigo? No') {
        { param1 = "Event123" }
    }
    //Action: 3.1.1
    else if (quickReplies[0].value === '¿Cómo te ves en 2 años? Trabajando') {
        { param1 = "Trabajando" }
    } else if (quickReplies[0].value === '¿Cómo te ves en 2 años? Estudiando') {
        { param1 = "Estudiando" }
    } else if (quickReplies[0].value === '¿Cómo te ves en 2 años? Otro') {
        { param1 = "Otro_futuro" }
    } else if (quickReplies[0].value === '¿Cómo te ves en 2 años? No sé') {
        { param1 = "No_se_futuro" }
    } else if (quickReplies[0].value === '¿Cómo te ves en 2 años? Estudiando y Trabajando') {
        { param1 = "Event345" }
    }
    //Action: 3.2.1
    else if (quickReplies[0].value === '¿En qué trabajarás? Mecánico' || quickReplies[0].value === '¿En qué trabajarás? Vendedor ambulante' || quickReplies[0].value === '¿En qué trabajarás? Repartidor' || quickReplies[0].value === '¿En qué trabajarás? Chofer' || quickReplies[0].value === '¿En qué trabajarás? Albañil' || quickReplies[0].value === '¿En qué trabajarás? Maestro' || quickReplies[0].value === '¿En qué trabajarás? Administrativo' || quickReplies[0].value === '¿En qué trabajarás? Técnico' || quickReplies[0].value === '¿En qué trabajarás? No sé' || quickReplies[0].value === '¿En qué trabajarás? Otro') {
        { param1 = "Trabajando_1" }
    }
    //Action: 3.2.3
    else if (quickReplies[0].value === '¿Por qué vas a trabajar? Necesito dinero' || quickReplies[0].value === '¿Por qué vas a trabajar? No quiero seguir estudiando' || quickReplies[0].value === '¿Por qué vas a trabajar? Tradición familiar' || quickReplies[0].value === '¿Por qué vas a trabajar? Me quiero independizar' || quickReplies[0].value === '¿Por qué vas a trabajar? No sé' || quickReplies[0].value === '¿Por qué vas a trabajar? Otro') {
        { param1 = "Trabajando_2" }
    }
    //Action: 3.2.5
    else if (quickReplies[0].value === '¿Realmente quieres trabajar ahí? Sí') {
        { param1 = "Event326" }
    } else if (quickReplies[0].value === '¿Realmente quieres trabajar ahí? No') {
        { param1 = "Realmente_no" }
    }
    //Action: 3.2.6
    else if (quickReplies[0].value === '3.2.6 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '3.2.6 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 3.2.7
    else if (quickReplies[0].value === '3.2.7 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '3.2.7 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 3.3.1
    else if (quickReplies[0].value === '¿Qué estudias actualmente? Secundaria') {
        { param1 = "Estudiando_secundaria" }
    } else if (quickReplies[0].value === '¿Qué estudias actualmente? Preparatoria') {
        { param1 = "Estudiando_preparatoria" }
    }
    //Action: 3.3.2
    else if (quickReplies[0].value === '¿En que prepa estudias? UdeG' || quickReplies[0].value === '¿En que prepa estudias? Conalep' || quickReplies[0].value === '¿En que prepa estudias? Cecytej' || quickReplies[0].value === '¿En que prepa estudias? Cobaej' || quickReplies[0].value === '¿En que prepa estudias? No sé' || quickReplies[0].value === '¿En que prepa estudias? Otro') {
        { param1 = "Event336" }
    }
    //Action: 3.3.4
    else if (quickReplies[0].value === '¿En que prepa estudiarás? UdeG' || quickReplies[0].value === '¿En que prepa estudiarás? Conalep' || quickReplies[0].value === '¿En que prepa estudiarás? Cecytej' || quickReplies[0].value === '¿En que prepa estudiarás? Cobaej' || quickReplies[0].value === '¿En que prepa estudiarás? No sé' || quickReplies[0].value === '¿En que prepa estudiarás? Otro' || quickReplies[0].value === '¿En que prepa estudiarás? No estudiaré la prepra') {
        { param1 = "Event336" }
    }
    //Action: 3.3.6
    else if (quickReplies[0].value === '¿Planeas estudiar la universidad? Sí') {
        { param1 = "Universidad_si" }
    } else if (quickReplies[0].value === '¿Planeas estudiar la universidad? No') {
        { param1 = "Event339" }
    }
    //Action: 3.3.7
    else if (quickReplies[0].value === '¿Ya sabes lo que quieres estudiar? Sí') {
        { param1 = "Estudiar_si" }
    } else if (quickReplies[0].value === '¿Ya sabes lo que quieres estudiar? No') {
        { param1 = "Event339" }
    }
    //Action: 3.3.8
    else if (quickReplies[0].value === '¿Qué estudiarás? Ciencias sociales o Humanidades/Artes' || quickReplies[0].value === '¿Qué estudiarás? Ciencias exactas o Ingeniería' || quickReplies[0].value === '¿Qué estudiarás? Ciencias Económico Administrativas' || quickReplies[0].value === '¿Qué estudiarás? Ciencias de la salud' || quickReplies[0].value === '¿Qué estudiarás? No sé') {
        { param1 = "Event339" }
    }
    //Action: 3.3.9
    else if (quickReplies[0].value === '3.3.9 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '3.3.9 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 3.4.1
    else if (quickReplies[0].value === '¿Qué es lo que planeas hacer? No quiero hacer nada' || quickReplies[0].value === '¿Qué es lo que planeas hacer? Ser Youtuber' || quickReplies[0].value === '¿Qué es lo que planeas hacer? Ser Músico' || quickReplies[0].value === '¿Qué es lo que planeas hacer? Ser Deportista' || quickReplies[0].value === '¿Qué es lo que planeas hacer? Ser Famoso' || quickReplies[0].value === '¿Qué es lo que planeas hacer? Inventar algo' || quickReplies[0].value === '¿Qué es lo que planeas hacer? Tener mucho dinero' || quickReplies[0].value === '¿Qué es lo que planeas hacer? Tener una familia' || quickReplies[0].value === '¿Qué es lo que planeas hacer? Viajar' || quickReplies[0].value === '¿Qué es lo que planeas hacer? No sé' || quickReplies[0].value === '¿Qué es lo que planeas hacer? Otra cosa') {
        { param1 = "Otro_futuro05" }
    }
    //Action: 3.4.2
    else if (quickReplies[0].value === '¿Quién te ha influenciado a planear eso? Familia' || quickReplies[0].value === '¿Quién te ha influenciado a planear eso? Amigos' || quickReplies[0].value === '¿Quién te ha influenciado a planear eso? Youtubers' || quickReplies[0].value === '¿Quién te ha influenciado a planear eso? Internet' || quickReplies[0].value === '¿Quién te ha influenciado a planear eso? Otro') {
        { param1 = "Otro_futuro1" }
    }
    //Action: 3.4.4
    else if (quickReplies[0].value === '¿Crees que vayas a progresar ahí? Sí' || quickReplies[0].value === '¿Crees que vayas a progresar ahí? No') {
        { param1 = "Event345" }
    }
    //Action: 3.4.5
    else if (quickReplies[0].value === '¿Qué preferirías? Trabajar') {
        { param1 = "Event326" }
    } else if (quickReplies[0].value === '¿Qué preferirías? Estudiar') {
        { param1 = "Event339" }
    }
    //Action: 3.5.1
    else if (quickReplies[0].value === '¿Tienes algún sueño? Ser Youtuber' || quickReplies[0].value === '¿Tienes algún sueño? Ser Músico' || quickReplies[0].value === '¿Tienes algún sueño? Ser Deportista' || quickReplies[0].value === '¿Tienes algún sueño? Ser Famoso' || quickReplies[0].value === '¿Tienes algún sueño? Inventar Algo' || quickReplies[0].value === '¿Tienes algún sueño? Tener mucho dinero' || quickReplies[0].value === '¿Tienes algún sueño? Tener una familia' || quickReplies[0].value === '¿Tienes algún sueño? Viajar' || quickReplies[0].value === '¿Tienes algún sueño? No sé' || quickReplies[0].value === '¿Tienes algún sueño? Otra cosa' || quickReplies[0].value === '¿Tienes algún sueño? No') {
        { param1 = "No_se_futuro1" }
    }
    //Action: 3.5.3
    else if (quickReplies[0].value === '¿Crees poder alcanzar ese sueño? Sí' || quickReplies[0].value === '¿Crees poder alcanzar ese sueño? No') {
        { param1 = "Event345" }
    }
    //Action: 9.1.1
    else if (quickReplies[0].value === '¿Sobre qué tema te gustaría saber? Sexo') {
        { param1 = "Sexo" }
    } else if (quickReplies[0].value === '¿Sobre qué tema te gustaría saber? Embarazos') {
        { param1 = "Embarazo" }
    } else if (quickReplies[0].value === '¿Sobre qué tema te gustaría saber? Orientación sexual') {
        { param1 = "Orientacion_sexual" }
    }
    //Action: 9.2.1
    else if (quickReplies[0].value === '¿Qué te gustaría saber sobre sexo? Faje') {
        { param1 = "Sexo1" }
    } else if (quickReplies[0].value === '¿Qué te gustaría saber sobre sexo? Sexo') {
        { param1 = "Sexo2" }
    } else if (quickReplies[0].value === '¿Qué te gustaría saber sobre sexo? Indecision') {
        { param1 = "Sexo3" }
    } else if (quickReplies[0].value === '¿Qué te gustaría saber sobre sexo? Sexo no consentido') {
        { param1 = "Sexo4" }
    }
    //Action: 9.2.2
    else if (quickReplies[0].value === '9.2.2 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.2.2 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.2.3
    else if (quickReplies[0].value === '¿De qué te gustaría hablar en temas de sexo? Métodos anticonceptivos') {
        { param1 = "Coito1" }
    } else if (quickReplies[0].value === '¿De qué te gustaría hablar en temas de sexo? Enfermedades de transmisión sexual') {
        { param1 = "Coito2" }
    }
    //Action: 9.2.4
    else if (quickReplies[0].value === '9.2.4 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.2.4 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.2.5
    else if (quickReplies[0].value === '9.2.5 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.2.5 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.2.6
    else if (quickReplies[0].value === '9.2.6 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.2.6 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.2.7
    else if (quickReplies[0].value === '9.2.7 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.2.7 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.3.1
    else if (quickReplies[0].value === '¿Cuál es tu duda sobre el embarazo? ¿Cómo se puede quedar embarazada?') {
        { param1 = "Embarazo1" }
    } else if (quickReplies[0].value === '¿Cuál es tu duda sobre el embarazo? Síntomas') {
        { param1 = "Embarazo2" }
    } else if (quickReplies[0].value === '¿Cuál es tu duda sobre el embarazo? ¿Qué hacer si sospecho que lo estoy?') {
        { param1 = "Embarazo3" }
    } else if (quickReplies[0].value === '¿Cuál es tu duda sobre el embarazo? ¿A quién puedo acudir?') {
        { param1 = "Embarazo4" }
    } else if (quickReplies[0].value === '¿Cuál es tu duda sobre el embarazo? Opciones si estoy embarazada') {
        { param1 = "Embarazo5" }
    }
    //Action: 9.3.2
    else if (quickReplies[0].value === '9.3.2 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.3.2 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.3.3
    else if (quickReplies[0].value === '9.3.3 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.3.3 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.3.4
    else if (quickReplies[0].value === '9.3.4 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.3.4 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.3.5
    else if (quickReplies[0].value === '9.3.5 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.3.5 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.3.6
    else if (quickReplies[0].value === '9.3.6 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.3.6 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.4.1
    else if (quickReplies[0].value === '¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?') {
        { param1 = "Orientacion1" }
    } else if (quickReplies[0].value === '¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?') {
        { param1 = "Orientacion2" }
    } else if (quickReplies[0].value === '¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación') {
        { param1 = "Orientacion3" }
    }
    //Action: 9.4.2
    else if (quickReplies[0].value === '9.4.2 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.4.2 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.4.3
    else if (quickReplies[0].value === '9.4.3 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.4.3 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 9.4.4
    else if (quickReplies[0].value === '9.4.4 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '9.4.4 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 11.1.1
    else if (quickReplies[0].value === '¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué son y cuáles son?') {
        { param1 = "Definicion" }
    } else if (quickReplies[0].value === '¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué hacer si tengo alguno?') {
        { param1 = "Que_hacer" }
    } else if (quickReplies[0].value === '¿Qué te gustaría saber sobre conflictos con la ley? Información de donde acudir') {
        { param1 = "Informacion" }
    }
    //Action: 11.2.1
    else if (quickReplies[0].value === '11.2.1 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '11.2.1 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 11.3.1
    else if (quickReplies[0].value === '11.3.1 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '11.3.1 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }
    //Action: 11.4.1
    else if (quickReplies[0].value === '11.4.1 ¿Te sirvió la información? Sí') {
        { param1 = "Sirvio_si" }
    } else if (quickReplies[0].value === '11.4.1 ¿Te sirvió la información? No') {
        { param1 = "Sirvio_no" }
    }

    return param1;

}