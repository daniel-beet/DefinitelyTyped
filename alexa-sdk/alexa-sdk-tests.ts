/// <reference types="node"/>

import * as Alexa from "alexa-sdk";

const languageStrings: Alexa.TranslationBundles = {
    en: {
        translation: {
            SayHello: "Hello, %s!",
            OtherMessage: ["Hello", "World"],
            AnotherMessage: {
                speechOutput: "Hi!",
                reprompt: "Are you there?"
            },
            AnotherSetOfMessages: [
                {
                    speechOutput: "Hi!",
                    reprompt: "Are you there?"
                },
                {
                    speechOutput: "Hi again!",
                    reprompt: "Are you still there?"
                }
            ]
        }
    },
    de: {
        translation: {
            SayHello: "de:Hello, %s!",
            OtherMessage: ["de:Hello", "de:World"],
            AnotherMessage: {
                speechOutput: "de:Hi!",
                reprompt: "de:Are you there?"
            },
            AnotherSetOfMessages: [
                {
                    speechOutput: "de:Hi!",
                    reprompt: "de:Are you there?"
                },
                {
                    speechOutput: "de:Hi again!",
                    reprompt: "de:Are you still there?"
                }
            ]
        }
    },
};

exports.handler = function (event: Alexa.RequestBody, context: Alexa.Context, callback: Function) {
    let alexa = Alexa.handler(event, context, callback);
    alexa.appId = "123abc";
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

let handlers: Alexa.Handlers = {
    LaunchRequest() {
        this.emit(this.t("SayHello", "World"));
    },
    HelloWorldIntent() {
        this.emit("SayHello");
    },
    SayHello() {
        this.emit(":tell", this.t("SayHello", "World"));
    }
};
