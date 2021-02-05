'use strict';

function startMonth() {
  var months = [
                'Enero', 'Febrero', 'Marzo',
                'Abril', 'Mayo', 'Junio', 'Julio',
                'Agosto', 'Septiembre', 'Octubre',
                'Noviembre', 'Diciembre'
               ];

   /* Carga una imagen, con un valor entre 0 y 11, vamos, ingresa valores entre 0 y 11 y cuéntame :) */
  var monthValue = new Date().getMonth();

  /* Escribe el nombre del mes dentro del h1 que carga del array months */
  document.querySelector('.title-month').innerHTML = months[monthValue];

  /* Modifica la variable css llamada --ruta */
  document.documentElement.style.setProperty('--ruta', 'url(../img/' + monthValue + '.jpg)');
}

addEventListener('DOMContentLoaded', startMonth, false);