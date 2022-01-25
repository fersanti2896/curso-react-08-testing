import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en el componente AddCategory', () => {
    let wrapper;
    const setCategories = () => {};

    beforeEach(() => {
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe mostrar <AddCategory /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto (input)', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { 
            target: {
                value: value
            } 
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });
});