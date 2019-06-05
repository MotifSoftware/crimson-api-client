"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = __importDefault(require("./Client"));
var Content_1 = __importDefault(require("./Content"));
var ContentSource_1 = __importDefault(require("./ContentSource"));
var Team_1 = __importDefault(require("./Team"));
var Auth_1 = __importDefault(require("./Auth"));
var API = /** @class */ (function () {
    function API(_a) {
        var endpoint = _a.endpoint, auth = _a.auth;
        this.client = new Client_1.default(endpoint || 'https://api.crimsonhexagon.com/api', auth);
        this.auth = new Auth_1.default(this.client);
        this.content = new Content_1.default(this.client);
        this.team = new Team_1.default(this.client);
        this.contentSource = new ContentSource_1.default(this.client);
    }
    return API;
}());
exports.default = API;
