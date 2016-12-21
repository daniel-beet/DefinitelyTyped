// Type definitions for Alexa SDK for Node.js 1.0
// Project: https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs
// Definitions by: Pete Beegle <https://github.com/petebeegle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Note: for patch release 1.0.6

import { I18n, TranslationOptions } from 'i18next';

export function handler(event: RequestBody, context: Context, callback?: () => void): AlexaObject;
export function CreateStateHandler(state: string, obj: any): any;
export var StateString: string;

interface AlexaObject {
    readonly _event: any;
    readonly _context: any;
    readonly _callback: any;
    state: any;
    appId: any;
    response: any;
    dynamoDBTableName: any;
    saveBeforeResponse: boolean;
    i18n: I18n;
    locale: string;
    resources: TranslationBundles;
    registerHandlers: (...handlers: Handlers[]) => any;
    execute: () => void;
}

interface Handlers {
    [intent: string]: (this: Handler) => void;
}

interface Handler {
    on: any;
    emit(event: string, ...args: any[]): boolean;
    emitWithState: any;
    state: any;
    handler: any;
    i18n: I18n;
    locale: string;
    t(key: string, options?: TranslationOptions): string | any | any[];
    t(key: string, ...args: any[]): string | any | any[];
    event: RequestBody;
    attributes: any;
    context: any;
    name: any;
    isOverriden: any;
}

interface Context {
    callbackWaitsForEmptyEventLoop: boolean;
    logGroupName: string;
    logStreamName: string;
    functionName: string;
    memoryLimitInMB: string;
    functionVersion: string;
    invokeid: string;
    awsRequestId: string;
}

interface RequestBody {
    version: string;
    session: Session;
    request: LaunchRequest | IntentRequest | SessionEndedRequest;
    context: any;
}

interface Session {
    new: boolean;
    sessionId: string;
    attributes: any;
    application: SessionApplication;
    user: SessionUser;
}

interface SessionApplication {
    applicationId: string;
}

interface SessionUser {
    userId: string;
    accessToken: string;
}

interface LaunchRequest extends Request {
    type: "LaunchRequest";
 }

interface IntentRequest extends Request {
    type: "IntentRequest";
    intent: Intent;
}

interface Intent {
    name: string;
    slots: any;
}

interface SessionEndedRequest extends Request {
    type: "SessionEndedRequest";
    reason: string;
}

interface Request {
    type: "LaunchRequest" | "IntentRequest" | "SessionEndedRequest";
    requestId: string;
    timeStamp: string;
    locale: string;
}

interface ResponseBody {
    version: string;
    sessionAttributes?: any;
    response: Response;
}

interface Response {
    outputSpeech?: OutputSpeech;
    card?: Card;
    reprompt?: Reprompt;
    shouldEndSession: boolean;
}

interface OutputSpeech {
    type: "PlainText" | "SSML";
    text?: string;
    ssml?: string;
}

interface Card {
    type: "Simple" | "Standard" | "LinkAccount";
    title?: string;
    content?: string;
    text?: string;
    image?: Image;
}

interface Image {
    smallImageUrl: string;
    largeImageUrl: string;
}

interface Reprompt {
    outputSpeech: OutputSpeech;
}

type Translation = string | string[] | any | any[];

interface TranslationBundle {
  translation: Translations;
}

interface Translations {
  [key: string]: Translation;
}

interface TranslationBundles {
  [language: string]: TranslationBundle;
}
