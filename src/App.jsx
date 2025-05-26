'use client';
import React from 'react';
import HeadbandComponent from './HeadbandComponent';

function Headband({props}) {
/**
 * Arreglo de objetos de opciones de menú utilizados para la navegación.
 *
 * Cada opción de menú puede tener las siguientes propiedades:
 * @typedef {Object} MenuOption
 * @property {string} name - El título principal de la opción de menú.
 * @property {string} url - URL o acción opcional que se ejecuta al hacer clic en la opción.
 * @property {string} color - Código de color hexadecimal para el ícono del menú.
 * @property {string} group_name - Nombre del grupo o rol asociado a la opción de menú.
 *
 * @type {MenuOption[]}
 */
// const menuOptions = [
//   {
//     system: {
//       name: 'SOIV',
//       color: '#268c74',
//     },
//     url:{
//       url: 'https://google.com',
//     },
//     role:{
//       group_name: 'Analista Operativo',
//     }
//   },
//   {
//     system: {
//       name: 'SOIV ADMIN',
//       color: '#84dcdb',
//     },
//     url:{
//       url: 'https://google.com',
//     },
//     role:{
//       group_name: 'Analista Operativo',
//     }
//   },
//     {
//     system: {
//       name: 'SOIV ADMIN',
//       color: '#84dcdb',
//     },
//     url:{
//       url: 'https://google.com',
//     },
//     role:{
//       group_name: 'Analista Operativo',
//     }
//   },
// ];

  return (
    <div>
      <HeadbandComponent
        menuOptions={props}
      />
    </div>
  );
}

export default Headband;
