const result = {
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

const result1 = {
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

module.exports = {

    df_text_query1(text) {
        let says = {
            speaks: 'user',
            msg: {
                text: {
                    text: text
                }
            }
        };
        
        //this.setState({messages1: [...this.state.messages2]});
        //this.setState({messages2: [...this.state.messages2, says]});
        //this.setState({messages: [says]});
        //try{
            
            const res = result;

            for (let msg of res.fulfillmentMessages) {
                
                if (text==='¿Realmente quieres trabajar ahí? Sí' || text==='¿Qué preferirías? Trabajar' || text==='¿Realmente quieres trabajar ahí? No' || text==='¿Planeas estudiar la universidad? No' || text==='¿Ya sabes lo que quieres estudiar? No' || text==='¿Qué estudiarás? Ciencias sociales o Humanidades/Artes' || text==='¿Qué estudiarás? Ciencias exactas o Ingeniería' || text==='¿Qué estudiarás? Ciencias Económico Administrativas' || text==='¿Qué estudiarás? Ciencias de la salud' || text==='¿Qué estudiarás? No sé' || text==='¿Qué preferirías? Estudiar' || text==='¿Qué te gustaría saber sobre sexo? Faje' || text==='¿De qué te gustaría hablar en temas de sexo? Métodos anticonceptivos' || text==='¿De qué te gustaría hablar en temas de sexo? Enfermedades de transmisión sexual' || text==='¿Qué te gustaría saber sobre sexo? Indecision' || text==='¿Qué te gustaría saber sobre sexo? Sexo no consentido' || text==='¿Cuál es tu duda sobre el embarazo? ¿Cómo se puede quedar embarazada?' || text==='¿Cuál es tu duda sobre el embarazo? Síntomas' || text==='¿Cuál es tu duda sobre el embarazo? ¿Qué hacer si sospecho que lo estoy?' || text==='¿Cuál es tu duda sobre el embarazo? ¿A quién puedo acudir?' || text==='¿Cuál es tu duda sobre el embarazo? Opciones si estoy embarazada' || text==='¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?' || text==='¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?' || text==='¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación' || text==='¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué son y cuáles son?' || text==='¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué hacer si tengo alguno?' || text==='¿Qué te gustaría saber sobre conflictos con la ley? Información de donde acudir') {
                //await this.resolveAfterXSeconds(1);

                let says = {
                    speaks: 'bot',
                    msg: msg
                }
                //this.setState({type: 'none'});
                //this.setState({afocus: true});
                //this.setState({messages1: [...this.state.messages2]});
                //this.setState({messages2: [...this.state.messages2, says]});
                //this.setState({messages: [says]});
                }
                else if (text==='¿Quieres comenzar? Sí' || text==='1.1.4 ¿Ya me proporcionaste tus datos? Sí' || text==='¿Hablar de otro tema? Sí' || text==='1.2.4 ¿Ya me proporcionaste tus datos? Sí' || text==='3.2.6 ¿Te sirvió la información? Sí' || text==='3.2.7 ¿Te sirvió la información? Sí' || text==='3.3.9 ¿Te sirvió la información? Sí' || text==='9.2.2 ¿Te sirvió la información? Sí' || text==='9.2.4 ¿Te sirvió la información? Sí' || text==='9.2.5 ¿Te sirvió la información? Sí' || text==='9.2.6 ¿Te sirvió la información? Sí' || text==='9.2.7 ¿Te sirvió la información? Sí' || text==='9.3.2 ¿Te sirvió la información? Sí' || text==='9.3.3 ¿Te sirvió la información? Sí' || text==='9.3.4 ¿Te sirvió la información? Sí' || text==='9.3.5 ¿Te sirvió la información? Sí' || text==='9.3.6 ¿Te sirvió la información? Sí' || text==='9.4.2 ¿Te sirvió la información? Sí' || text==='9.4.3 ¿Te sirvió la información? Sí' || text==='9.4.4 ¿Te sirvió la información? Sí' || text==='11.2.1 ¿Te sirvió la información? Sí' || text==='11.3.1 ¿Te sirvió la información? Sí' || text==='11.4.1 ¿Te sirvió la información? Sí' || text==='Otra vez' || text==='No acepto los términos y condiciones' || text==='¿Qué tema quieres hablar? Futuro' || text==='¿Cómo te ves en 2 años? Trabajando' || text==='¿En qué trabajarás? Mecánico' || text==='¿En qué trabajarás? Vendedor ambulante' || text==='¿En qué trabajarás? Repartidor' || text==='¿En qué trabajarás? Chofer' || text==='¿En qué trabajarás? Albañil' || text==='¿En qué trabajarás? Maestro' || text==='¿En qué trabajarás? Administrativo' || text==='¿En qué trabajarás? Técnico' || text==='¿En qué trabajarás? No sé' || text==='¿En qué trabajarás? Otro' || text==='¿Por qué vas a trabajar? Necesito dinero' || text==='¿Por qué vas a trabajar? No quiero seguir estudiando' || text==='¿Por qué vas a trabajar? Tradición familiar' || text==='¿Por qué vas a trabajar? Me quiero independizar' || text==='¿Por qué vas a trabajar? No sé' || text==='¿Por qué vas a trabajar? Otro' || text==='¿Realmente quieres trabajar en ahí? Sí' || text==='¿Qué preferirías? Trabajar' || text==='¿Realmente quieres trabajar en ahí? No' || text==='¿Cómo te ves en 2 años? Estudiando' || text==='¿Qué estudias actualmente? Preparatoria' || text==='¿Qué estudias actualmente? Secundaria' || text==='¿En qué prepa estudias? UdeG' || text==='¿En qué prepa estudias? Conalep' || text==='¿En qué prepa estudias? Cecytej' || text==='¿En qué prepa estudias? Cobaej' || text==='¿En qué prepa estudias? Otro' || text==='¿En qué prepa estudias? No sé' || text==='¿En qué prepa estudiarás? UdeG' || text==='¿En qué prepa estudiarás? Conalep' || text==='¿En qué prepa estudiarás? Cecytej' || text==='¿En qué prepa estudiarás? Cobaej' || text==='¿En qué prepa estudiarás? Otro' || text==='¿En qué prepa estudiarás? No sé' || text==='¿En qué prepa estudiarás? No estudiaré la prepra' || text==='¿Planeas estudiar la universidad? Sí' || text==='¿Ya sabes lo que quieres estudiar? Sí' || text==='¿Planeas estudiar la universidad? No' || text==='¿Ya sabes lo que quieres estudiar? No' || text==='¿Qué estudiarás? Ciencias sociales o Humanidades/Artes' || text==='¿Qué estudiarás? Ciencias exactas o Ingeniería' || text==='¿Qué estudiarás? Ciencias Económico Administrativas' || text==='¿Qué estudiarás? Ciencias de la salud' || text==='¿Qué estudiarás? No sé' || text==='¿Qué preferirías? Estudiar' || text==='¿Cómo te ves en 2 años? Otro' || text==='¿Qué es lo que planeas hacer? No quiero hacer nada' || text==='¿Qué es lo que planeas hacer? Ser youtuber' || text==='¿Qué es lo que planeas hacer? Ser músico' || text==='¿Qué es lo que planeas hacer? Ser deportista' || text==='¿Qué es lo que planeas hacer? Ser famoso' || text==='¿Qué es lo que planeas hacer? Inventar algo' || text==='¿Qué es lo que planeas hacer? Tener mucho dinero' || text==='¿Qué es lo que planeas hacer? Tener una familia' || text==='¿Qué es lo que planeas hacer? Viajar' || text==='¿Qué es lo que planeas hacer? No sé' || text==='¿Qué es lo que planeas hacer? Otra cosa' || text==='¿Quién te ha influenciado a planear eso? Familia' || text==='¿Quién te ha influenciado a planear eso? Amigos' || text==='¿Quién te ha influenciado a planear eso? Famosos o Youtubers' || text==='¿Quién te ha influenciado a planear eso? Internet' || text==='¿Quién te ha influenciado a planear eso? Otro' || text==='¿Cómo te ves en 2 años? Estudiando y Trabajando' || text==='¿Crees que vayas a progresar ahí? Sí' || text==='¿Crees que vayas a progresar ahí? No' || text==='¿Crees poder alcanzar ese sueño? Sí' || text==='¿Crees poder alcanzar ese sueño? No' || text==='¿Cómo te ves en 2 años? No sé' || text==='¿Tienes algún sueño? Ser youtuber' || text==='¿Tienes algún sueño? Ser músico' || text==='¿Tienes algún sueño? Ser deportista' || text==='¿Tienes algún sueño? Ser famoso' || text==='¿Tienes algún sueño? Inventar algo' || text==='¿Tienes algún sueño? Tener mucho dinero' || text==='¿Tienes algún sueño? Tener una familia' || text==='¿Tienes algún sueño? Viajar' || text==='¿Tienes algún sueño? No sé' || text==='¿Tienes algún sueño? Otra cosa' || text==='¿Tienes algún sueño? No' || text==='¿Qué tema quieres hablar? Sexualidad' || text==='¿Sobre qué tema te gustaría saber? Sexo' || text==='¿Qué te gustaría saber sobre sexo? Faje' || text==='¿Qué te gustaría saber sobre sexo? Sexo' || text==='¿De qué te gustaría hablar en temas de sexo? Métodos anticonceptivos' || text==='¿De qué te gustaría hablar en temas de sexo? Enfermedades de transmisión sexual' || text==='¿Qué te gustaría saber sobre sexo? Indecision' || text==='¿Qué te gustaría saber sobre sexo? Sexo no consentido' || text==='¿Sobre qué tema te gustaría saber? Embarazos' || text==='¿Cuál es tu duda sobre el embarazo? ¿Cómo se puede quedar embarazada?' || text==='¿Cuál es tu duda sobre el embarazo? Síntomas' || text==='¿Cuál es tu duda sobre el embarazo? ¿Qué hacer si sospecho que lo estoy?' || text==='¿Cuál es tu duda sobre el embarazo? ¿A quién puedo acudir?' || text==='¿Cuál es tu duda sobre el embarazo? Opciones si estoy embarazada' || text==='¿Sobre qué tema te gustaría saber? Orientación sexual' || text==='¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?' || text==='¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?' || text==='¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación' || text==='¿Qué tema quieres hablar? Conflictos_ley' || text==='¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué son y cuáles son?' || text==='¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué hacer si tengo alguno?' || text==='¿Qué te gustaría saber sobre conflictos con la ley? Información de donde acudir') {
                let says = {
                    speaks: 'bot',
                    msg: msg
                }
                //this.setState({type: 'none'});
                //this.setState({afocus: true});
                //this.setState({messages1: [...this.state.messages2]});
                //this.setState({messages2: [...this.state.messages2, says]});
                //this.setState({messages: [says]});
                }
                else{
                    let says = {
                        speaks: 'bot',
                        msg: msg
                    }
                    //this.setState({type: 'auto'});
                    //this.setState({afocus: false});
                    //this.setState({messages1: [...this.state.messages2]});
                    //this.setState({messages2: [...this.state.messages2, says]});
                    //this.setState({messages: [says]});
                        }
                
            }

            return res;
        /*} catch (e) {
            says = {
                speaks: 'bot',
                msg: {
                    text: {
                        text: "Estoy teniendo problemas. Espera unos instantes, enseguida vuelvo :)"
                    }
                }
            }
            this.setState({type: 'none'});
            this.setState({afocus: true});
            this.setState({messages1: [...this.state.messages2]});
            this.setState({messages2: [...this.state.messages2, says]});
            this.setState({messages: [says]});
        }*/

        
    },

    df_text_query2(text) {
        let says = {
            speaks: 'user',
            msg: {
                text: {
                    text: text
                }
            }
        };
        
        //this.setState({messages1: [...this.state.messages2]});
        //this.setState({messages2: [...this.state.messages2, says]});
        //this.setState({messages: [says]});
        //try{
            
            const res = result1;

            for (let msg of res.fulfillmentMessages) {
                
                if (text==='¿Realmente quieres trabajar ahí? Sí' || text==='¿Qué preferirías? Trabajar' || text==='¿Realmente quieres trabajar ahí? No' || text==='¿Planeas estudiar la universidad? No' || text==='¿Ya sabes lo que quieres estudiar? No' || text==='¿Qué estudiarás? Ciencias sociales o Humanidades/Artes' || text==='¿Qué estudiarás? Ciencias exactas o Ingeniería' || text==='¿Qué estudiarás? Ciencias Económico Administrativas' || text==='¿Qué estudiarás? Ciencias de la salud' || text==='¿Qué estudiarás? No sé' || text==='¿Qué preferirías? Estudiar' || text==='¿Qué te gustaría saber sobre sexo? Faje' || text==='¿De qué te gustaría hablar en temas de sexo? Métodos anticonceptivos' || text==='¿De qué te gustaría hablar en temas de sexo? Enfermedades de transmisión sexual' || text==='¿Qué te gustaría saber sobre sexo? Indecision' || text==='¿Qué te gustaría saber sobre sexo? Sexo no consentido' || text==='¿Cuál es tu duda sobre el embarazo? ¿Cómo se puede quedar embarazada?' || text==='¿Cuál es tu duda sobre el embarazo? Síntomas' || text==='¿Cuál es tu duda sobre el embarazo? ¿Qué hacer si sospecho que lo estoy?' || text==='¿Cuál es tu duda sobre el embarazo? ¿A quién puedo acudir?' || text==='¿Cuál es tu duda sobre el embarazo? Opciones si estoy embarazada' || text==='¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?' || text==='¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?' || text==='¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación' || text==='¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué son y cuáles son?' || text==='¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué hacer si tengo alguno?' || text==='¿Qué te gustaría saber sobre conflictos con la ley? Información de donde acudir') {
                //await this.resolveAfterXSeconds(1);

                let says = {
                    speaks: 'bot',
                    msg: msg
                }
                //this.setState({type: 'none'});
                //this.setState({afocus: true});
                //this.setState({messages1: [...this.state.messages2]});
                //this.setState({messages2: [...this.state.messages2, says]});
                //this.setState({messages: [says]});
                }
                else if (text==='¿Quieres comenzar? Sí' || text==='1.1.4 ¿Ya me proporcionaste tus datos? Sí' || text==='¿Hablar de otro tema? Sí' || text==='1.2.4 ¿Ya me proporcionaste tus datos? Sí' || text==='3.2.6 ¿Te sirvió la información? Sí' || text==='3.2.7 ¿Te sirvió la información? Sí' || text==='3.3.9 ¿Te sirvió la información? Sí' || text==='9.2.2 ¿Te sirvió la información? Sí' || text==='9.2.4 ¿Te sirvió la información? Sí' || text==='9.2.5 ¿Te sirvió la información? Sí' || text==='9.2.6 ¿Te sirvió la información? Sí' || text==='9.2.7 ¿Te sirvió la información? Sí' || text==='9.3.2 ¿Te sirvió la información? Sí' || text==='9.3.3 ¿Te sirvió la información? Sí' || text==='9.3.4 ¿Te sirvió la información? Sí' || text==='9.3.5 ¿Te sirvió la información? Sí' || text==='9.3.6 ¿Te sirvió la información? Sí' || text==='9.4.2 ¿Te sirvió la información? Sí' || text==='9.4.3 ¿Te sirvió la información? Sí' || text==='9.4.4 ¿Te sirvió la información? Sí' || text==='11.2.1 ¿Te sirvió la información? Sí' || text==='11.3.1 ¿Te sirvió la información? Sí' || text==='11.4.1 ¿Te sirvió la información? Sí' || text==='Otra vez' || text==='No acepto los términos y condiciones' || text==='¿Qué tema quieres hablar? Futuro' || text==='¿Cómo te ves en 2 años? Trabajando' || text==='¿En qué trabajarás? Mecánico' || text==='¿En qué trabajarás? Vendedor ambulante' || text==='¿En qué trabajarás? Repartidor' || text==='¿En qué trabajarás? Chofer' || text==='¿En qué trabajarás? Albañil' || text==='¿En qué trabajarás? Maestro' || text==='¿En qué trabajarás? Administrativo' || text==='¿En qué trabajarás? Técnico' || text==='¿En qué trabajarás? No sé' || text==='¿En qué trabajarás? Otro' || text==='¿Por qué vas a trabajar? Necesito dinero' || text==='¿Por qué vas a trabajar? No quiero seguir estudiando' || text==='¿Por qué vas a trabajar? Tradición familiar' || text==='¿Por qué vas a trabajar? Me quiero independizar' || text==='¿Por qué vas a trabajar? No sé' || text==='¿Por qué vas a trabajar? Otro' || text==='¿Realmente quieres trabajar en ahí? Sí' || text==='¿Qué preferirías? Trabajar' || text==='¿Realmente quieres trabajar en ahí? No' || text==='¿Cómo te ves en 2 años? Estudiando' || text==='¿Qué estudias actualmente? Preparatoria' || text==='¿Qué estudias actualmente? Secundaria' || text==='¿En qué prepa estudias? UdeG' || text==='¿En qué prepa estudias? Conalep' || text==='¿En qué prepa estudias? Cecytej' || text==='¿En qué prepa estudias? Cobaej' || text==='¿En qué prepa estudias? Otro' || text==='¿En qué prepa estudias? No sé' || text==='¿En qué prepa estudiarás? UdeG' || text==='¿En qué prepa estudiarás? Conalep' || text==='¿En qué prepa estudiarás? Cecytej' || text==='¿En qué prepa estudiarás? Cobaej' || text==='¿En qué prepa estudiarás? Otro' || text==='¿En qué prepa estudiarás? No sé' || text==='¿En qué prepa estudiarás? No estudiaré la prepra' || text==='¿Planeas estudiar la universidad? Sí' || text==='¿Ya sabes lo que quieres estudiar? Sí' || text==='¿Planeas estudiar la universidad? No' || text==='¿Ya sabes lo que quieres estudiar? No' || text==='¿Qué estudiarás? Ciencias sociales o Humanidades/Artes' || text==='¿Qué estudiarás? Ciencias exactas o Ingeniería' || text==='¿Qué estudiarás? Ciencias Económico Administrativas' || text==='¿Qué estudiarás? Ciencias de la salud' || text==='¿Qué estudiarás? No sé' || text==='¿Qué preferirías? Estudiar' || text==='¿Cómo te ves en 2 años? Otro' || text==='¿Qué es lo que planeas hacer? No quiero hacer nada' || text==='¿Qué es lo que planeas hacer? Ser youtuber' || text==='¿Qué es lo que planeas hacer? Ser músico' || text==='¿Qué es lo que planeas hacer? Ser deportista' || text==='¿Qué es lo que planeas hacer? Ser famoso' || text==='¿Qué es lo que planeas hacer? Inventar algo' || text==='¿Qué es lo que planeas hacer? Tener mucho dinero' || text==='¿Qué es lo que planeas hacer? Tener una familia' || text==='¿Qué es lo que planeas hacer? Viajar' || text==='¿Qué es lo que planeas hacer? No sé' || text==='¿Qué es lo que planeas hacer? Otra cosa' || text==='¿Quién te ha influenciado a planear eso? Familia' || text==='¿Quién te ha influenciado a planear eso? Amigos' || text==='¿Quién te ha influenciado a planear eso? Famosos o Youtubers' || text==='¿Quién te ha influenciado a planear eso? Internet' || text==='¿Quién te ha influenciado a planear eso? Otro' || text==='¿Cómo te ves en 2 años? Estudiando y Trabajando' || text==='¿Crees que vayas a progresar ahí? Sí' || text==='¿Crees que vayas a progresar ahí? No' || text==='¿Crees poder alcanzar ese sueño? Sí' || text==='¿Crees poder alcanzar ese sueño? No' || text==='¿Cómo te ves en 2 años? No sé' || text==='¿Tienes algún sueño? Ser youtuber' || text==='¿Tienes algún sueño? Ser músico' || text==='¿Tienes algún sueño? Ser deportista' || text==='¿Tienes algún sueño? Ser famoso' || text==='¿Tienes algún sueño? Inventar algo' || text==='¿Tienes algún sueño? Tener mucho dinero' || text==='¿Tienes algún sueño? Tener una familia' || text==='¿Tienes algún sueño? Viajar' || text==='¿Tienes algún sueño? No sé' || text==='¿Tienes algún sueño? Otra cosa' || text==='¿Tienes algún sueño? No' || text==='¿Qué tema quieres hablar? Sexualidad' || text==='¿Sobre qué tema te gustaría saber? Sexo' || text==='¿Qué te gustaría saber sobre sexo? Faje' || text==='¿Qué te gustaría saber sobre sexo? Sexo' || text==='¿De qué te gustaría hablar en temas de sexo? Métodos anticonceptivos' || text==='¿De qué te gustaría hablar en temas de sexo? Enfermedades de transmisión sexual' || text==='¿Qué te gustaría saber sobre sexo? Indecision' || text==='¿Qué te gustaría saber sobre sexo? Sexo no consentido' || text==='¿Sobre qué tema te gustaría saber? Embarazos' || text==='¿Cuál es tu duda sobre el embarazo? ¿Cómo se puede quedar embarazada?' || text==='¿Cuál es tu duda sobre el embarazo? Síntomas' || text==='¿Cuál es tu duda sobre el embarazo? ¿Qué hacer si sospecho que lo estoy?' || text==='¿Cuál es tu duda sobre el embarazo? ¿A quién puedo acudir?' || text==='¿Cuál es tu duda sobre el embarazo? Opciones si estoy embarazada' || text==='¿Sobre qué tema te gustaría saber? Orientación sexual' || text==='¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?' || text==='¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?' || text==='¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación' || text==='¿Qué tema quieres hablar? Conflictos_ley' || text==='¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué son y cuáles son?' || text==='¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué hacer si tengo alguno?' || text==='¿Qué te gustaría saber sobre conflictos con la ley? Información de donde acudir') {
                let says = {
                    speaks: 'bot',
                    msg: msg
                }
                //this.setState({type: 'none'});
                //this.setState({afocus: true});
                //this.setState({messages1: [...this.state.messages2]});
                //this.setState({messages2: [...this.state.messages2, says]});
                //this.setState({messages: [says]});
                }
                else{
                    let says = {
                        speaks: 'bot',
                        msg: msg
                    }
                    //this.setState({type: 'auto'});
                    //this.setState({afocus: false});
                    //this.setState({messages1: [...this.state.messages2]});
                    //this.setState({messages2: [...this.state.messages2, says]});
                    //this.setState({messages: [says]});
                        }
                
            }

            return res;
        /*} catch (e) {
            says = {
                speaks: 'bot',
                msg: {
                    text: {
                        text: "Estoy teniendo problemas. Espera unos instantes, enseguida vuelvo :)"
                    }
                }
            }
            this.setState({type: 'none'});
            this.setState({afocus: true});
            this.setState({messages1: [...this.state.messages2]});
            this.setState({messages2: [...this.state.messages2, says]});
            this.setState({messages: [says]});
        }*/

        
    },

    _handleQuickReplyPayload(event, payload, text) {
        //event.preventDefault();
        //event.stopPropagation();

        //When a quick reply is selected, it could start an event. Events are set here.
        switch(payload) {
            case 'Aceptar_terminos_si':                
                return this.df_text_query2(text);
                //break;
            case 'Aceptar_terminos_no':
                return this.df_text_query2(text);
                //break;
            case 'Hablar_si':
                return this.df_text_query2(text);
                //break;
            case 'Event123':
                return this.df_text_query2(text);
                //break;
            case 'Futuro':
                return this.df_text_query2(text);
                //break;
            case 'Sexualidad':
                return this.df_text_query2(text);
                //break;
            case 'Conflicto_ley':
                return this.df_text_query2(text);
                //break;
            case 'Fallback_si':
                return this.df_text_query2(text);
                //break;
            case 'Proporcionar_datos_no':
                return this.df_text_query2(text);
                //break;
            case 'Trabajando':
                return this.df_text_query2(text);
                //break;
            case 'Estudiando':
                return this.df_text_query2(text);
                //break;
            case 'Otro_futuro':
                return this.df_text_query2(text);
                //break;
            case 'No_se_futuro':
                return this.df_text_query2(text);
                //break;
            case 'Event345':
                return this.df_text_query2(text);
                //break;
            case 'Trabajando_1':
                return this.df_text_query2(text);
                //break;
            case 'Trabajando_2':
                return this.df_text_query2(text);
                //break;
            case 'Event326':
                return this.df_text_query2(text);
                //break;
            case 'Realmente_no':
                return this.df_text_query2(text);
                //break;
            case 'Sirvio_si':
                return this.df_text_query2(text);
                //break;
            case 'Sirvio_no':
                return this.df_text_query2(text);
                //break;
            case 'Estudiando_secundaria':
                return this.df_text_query2(text);
                //break;
            case 'Estudiando_preparatoria':
                return this.df_text_query2(text);
                //break;
            case 'Event336':
                return this.df_text_query2(text);
                //break;
            case 'Universidad_si':
                return this.df_text_query2(text);
                //break;
            case 'Event339':
                return this.df_text_query2(text);
                //break;
            case 'Estudiar_si':
                return this.df_text_query2(text);
                //break;
            case 'Otro_futuro05':
                return this.df_text_query2(text);
                //break;
            case 'Otro_futuro1':
                return this.df_text_query2(text);
                //break;
            case 'No_se_futuro1':
                return this.df_text_query2(text);
                //break;
            case 'Sexo':
                return this.df_text_query2(text);
                //break;
            case 'Embarazo':
                return this.df_text_query2(text);
                //break;
            case 'Orientacion_sexual':
                return this.df_text_query2(text);
                //break;
            case 'Sexo1':
                return this.df_text_query2(text);
                //break;
            case 'Sexo2':
                return this.df_text_query2(text);
                //break;
            case 'Sexo3':
                return this.df_text_query2(text);
                //break;
            case 'Sexo4':
                return this.df_text_query2(text);
                //break;
            case 'Coito1':
                return this.df_text_query2(text);
                //break;
            case 'Coito2':
                return this.df_text_query2(text);
                //break;
            case 'Embarazo1':
                return this.df_text_query2(text);
                //break;
            case 'Embarazo2':
                return this.df_text_query2(text);
                //break;
            case 'Embarazo3':
                return this.df_text_query2(text);
                //break;
            case 'Embarazo4':
                return this.df_text_query2(text);
                //break;
            case 'Embarazo5':
                return this.df_text_query2(text);
                //break;
            case 'Orientacion1':
                return this.df_text_query2(text);
                //break;
            case 'Orientacion2':
                return this.df_text_query2(text);
                //break;
            case 'Orientacion3':
                return this.df_text_query2(text);
                //break;
            case 'Definicion':
                return this.df_text_query2(text);
                //break;
            case 'Que_hacer':
                return this.df_text_query2(text);
                //break;
            case 'Informacion':
                return this.df_text_query2(text);
                //break;
            default:
                this.df_text_query2(text);
        }
    }
}