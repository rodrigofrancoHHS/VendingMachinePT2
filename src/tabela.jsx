'use strict';

import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const ChartExample = () => {












    var data = {
        coca: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        sprite: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        icetea: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        pepsi: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        bongo: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        monster: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        guaraná: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        sumol: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        chá: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        água: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        up: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: JSON.parse(localStorage.getItem('updatedItemsMay')) },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
        cafe: [
            { time: ('Janeiro'), sold: localStorage.getItem('updatedItemsJanuary') },
            { time: ('Fevereiro'), sold: localStorage.getItem('updatedItemsFebruary') },
            { time: ('Março'), sold: localStorage.getItem('updatedItemsMarch') },
            { time: ('Abril'),sold: localStorage.getItem('updatedItemsApril') },
            { time: ('Maio'), sold: localStorage.getItem('updatedItemsMay') },
            { time: ('Junho'), sold: localStorage.getItem('updatedItemsJune') },
            { time: ('Julho'), sold: localStorage.getItem('updatedItemsJuly') },
            { time: ('Agosto'), sold: localStorage.getItem('updatedItemsAugust') },
            { time: ('Setembro'), sold: localStorage.getItem('updatedItemsSeptember') },
            { time: ('Outubro'), sold: localStorage.getItem('updatedItemsOctober') },
            { time: ('Novembro'), sold: localStorage.getItem('updatedItemsNovember') },
            { time: ('Dezembro'), sold: localStorage.getItem('updatedItemsDecember') },
        ],
      };






  const [options] = useState({
    theme: {
      palette: {
        fills: [
          '#5BC0EB',
          '#FDE74C',
          '#9BC53D',
          '#E55934',
          '#FA7921',
          '#fa3081',
        ],
        strokes: [
          '#5BC0EB',
          '#FDE74C',
          '#9BC53D',
          '#E55934',
          '#FA7921',
          '#fa3081',
        ],
      },
      overrides: {
        line: { series: { strokeWidth: 3, marker: { enabled: false } } },
      },
    },
    autoSize: true,
    title: {
      text: 'Registo de Vendas',
      fontSize: 18,
      spacing: 25,
    },

    padding: {
      left: 40,
      right: 40,
    },
    series: [
      {
        data: data.coca,
        type: 'line',
        title: 'Coca-Cola',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.sprite,
        type: 'line',
        title: 'Sprite',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.icetea,
        type: 'line',
        title: 'Ice Tea',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.pepsi,
        type: 'line',
        title: 'Pepsi',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.bongo,
        type: 'line',
        title: 'Bongo',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.monster,
        type: 'line',
        title: 'Monster',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.guaraná,
        type: 'line',
        title: 'Guaraná',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.sumol,
        type: 'line',
        title: 'Sumol',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.chá,
        type: 'line',
        title: 'Chá',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.água,
        type: 'line',
        title: 'Água',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.up,
        type: 'line',
        title: '7UP',
        xKey: 'time',
        yKey: 'sold',
      },
      {
        data: data.cafe,
        type: 'line',
        title: 'Café',
        xKey: 'time',
        yKey: 'sold',
      },
    ],
    axes: [
      {
        position: 'bottom',
        type: 'text',
        title: {
          text: 'Meses',
        },
      },
      {
        position: 'left',
        type: 'number',
        title: {
          text: 'Vendas',
        },
      },
    ],
    legend: {
      position: 'bottom',
      item: {
        marker: {
          strokeWidth: 0,
        },
      },
    },
  });

  return <AgChartsReact options={options} />;
};




  export default ChartExample;