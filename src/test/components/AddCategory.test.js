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

});