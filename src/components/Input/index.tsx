import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}


const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {

  const [isFocused, setisFocused] = useState(false);
  const [isFilled, setisFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField} = useField(name);

  const handleInputFocus = useCallback(() => {
    setisFocused(true);
  },[]);

  const handleInputBlur = useCallback(() => {
    setisFocused(false);

    setisFilled(!! inputRef.current?.value);

  },[]);

  useEffect(() => {
    registerField({
       name: fieldName,
       ref: inputRef.current,
       path: 'value',
    });
  },[fieldName,registerField]);


  return (
      <Container 
          data-testid="input-container"
          isErrored={!!error} 
          isFocused={isFocused} 
          isFilled={isFilled}>
        {Icon && <Icon size={20}/>}
        <input 

        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue} 
        ref={inputRef} 
        {...rest} 
        />
        
        {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
      </Container>
  );
}

export default Input