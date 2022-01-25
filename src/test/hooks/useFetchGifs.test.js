import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGif';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
        const {data, loading} = result.current;

        console.log(data, loading);
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
});