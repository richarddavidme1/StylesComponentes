import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { IconoTema ,Icono } from "./Components/UI";
import React from "react";

export default (type) => {
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />,
        Salud: <IconoTema src={salud} alt="Salud" />,
        Transporte: <IconoTema src={transporte} alt="Transporte" />, 
        Utilidades: <IconoTema src={utilidades} alt="Utilidades" />,
        default: <IconoTema src={otros} alt="Otros" />,
    };
    return Images[type] || Images["default"];
};