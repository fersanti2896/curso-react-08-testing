import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme'
import { getGifs } from '../../helpers/getGifs'

describe('Pruebas en el helpers de getGifs', () => {
    test('Debe traer 10 elementos', async() => {
      const gifs = await getGifs('Dr. House');

      expect(gifs.length).toBe(10);
    });
    
    test('Debe regresar una arreglo vacío si no se manda una categoría', async() => {
        const gifs = await getGifs('');
        console.log(gifs);
        expect(gifs.length).toBe(0);
      });
});