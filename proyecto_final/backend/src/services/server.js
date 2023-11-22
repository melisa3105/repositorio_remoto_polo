"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reunion_1 = require("../routes/reunion");
var puerto = process.env.PORT || 5555;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/reunion', reunion_1.default);
app.listen(puerto, function () { console.log('El servidor está escuchando en puerto: ' + puerto); });
