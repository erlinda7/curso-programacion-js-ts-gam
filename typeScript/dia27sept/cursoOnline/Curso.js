"use strict";
exports.__esModule = true;
var Curso = /** @class */ (function () {
    function Curso(n, p, des, doc) {
        this.nombre = n;
        this.precio = p;
        this.descripcion = des;
        this.docente = doc;
    }
    Curso.prototype.getPrecio = function () {
        return this.precio;
    };
    return Curso;
}());
exports.Curso = Curso;
