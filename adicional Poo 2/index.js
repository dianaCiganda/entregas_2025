"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var murcielago_1 = require("./murcielago");
var mamifero_1 = require("./mamifero");
var reptil_1 = require("./reptil");
var murcielago = new murcielago_1.Murcielago("Murcielago", 5, "black", "north", "fly");
var mamifero = new mamifero_1.Mamifero("Mamifero", 3, "brown");
var reptil = new reptil_1.Reptil("Reptil", 2, "green", 25);
murcielago.eat();
murcielago.sleep();
murcielago.useEcholocation();
murcielago.toSuckleTheYoung();
reptil.toRegulateBodyTemperature(25);
murcielago.setName("New Murcielago");
