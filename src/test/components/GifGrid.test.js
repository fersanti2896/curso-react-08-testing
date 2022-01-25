import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGif';
jest.mock('../../hooks/useFetchGif');

describe('Haciendo pruebas en componente GifGrid', () => {
    const category = 'Dr. House';

    test('Debe mostrar <GifGrid /> correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {
      /* Usamos un mock  */
        const gifs = [{
            id: 'ABC',
            url: 'https:/localhost/algo/algo.png', 
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
});