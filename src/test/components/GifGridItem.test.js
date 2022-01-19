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
});