import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGif';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
    test('Debe de retornar una arreglo de imgs y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});