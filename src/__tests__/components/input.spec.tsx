import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

import Input from '../../components/Input';

jest.mock('@unform/core',() => {
    return {
        useField(){
            return {
                fiedlName: 'login',
                defaultValue: '',
                error: '',
                registerField: jest.fn()
            }
        }
    }
});

describe('Input Component',() =>{

 it('should be able to render Input',() =>{

    const { getByPlaceholderText} = render(
       <Input name="login" placeholder="login"/>
    );

    expect(getByPlaceholderText('login')).toBeTruthy();

 });

 it('should render focus',async () =>{

    const { getByPlaceholderText,getByTestId} = render(
       <Input name="login" placeholder="login"/>
    );

    const input = getByPlaceholderText('login');
    const containerElement = getByTestId('input-container')

    fireEvent.focus(input);

    await waitFor(() => {
        expect(containerElement).toHaveStyle('border-color: #A6ACFA');
        expect(containerElement).toHaveStyle('color: #A6ACFA');
    });

    fireEvent.blur(input);

    await waitFor(() => {
        expect(containerElement).not.toHaveStyle('border-color: #A6ACFA');
        expect(containerElement).not.toHaveStyle('color: #A6ACFA');
    });

 });

});