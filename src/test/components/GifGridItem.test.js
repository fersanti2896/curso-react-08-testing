import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas al componente GifGridItem', () => {
    let wrapper;

    const title = 'Yugioh';
    const url = 'https://localhost/algo.png';
    
    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url}/>);
    });

    test('Debe mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el título', () => {
        /* Haciendo referencia al párrafo */
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener una imagen con la url y alt de las props (propiedades)', () => {
        const img = wrapper.find('img');
        //   console.log(img.props());

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('Debe tener animate__fadeInLeftBig en el className del div', () => {
      const div = wrapper.find('div');

      expect(div.prop('className').includes('animate__fadeInLeftBig')).toBe(true)
    });
    
});