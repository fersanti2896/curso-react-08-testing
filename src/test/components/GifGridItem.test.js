import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas al componente GifGridItem', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<GifGridItem />);
    });

    test('Debe mostrar <GifGridItem /> correctamente', () => {
      expect(wrapper).toMatchSnapshot();
    });
});