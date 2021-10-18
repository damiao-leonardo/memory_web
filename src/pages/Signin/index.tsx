import React,{ useRef, useCallback} from 'react';
import { FiUser,FiLock} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import logo from '../../assets/github.png';
import { Container, Content} from './styles';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { useHistory } from 'react-router-dom';


interface SignInFormData {
    login: string;
    password: string;
  }

const Signin: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const {signIn } = useAuth();

    const history = useHistory();

    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: SignInFormData) => {
        try{
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                login: Yup.string().required('Nome obrigatório'),
                password: Yup.string().required('Senha obrigatoria')
            });
            await schema.validate(data,{
                abortEarly: false
            });

            await signIn({
                login: data.login,
                password: data.password,
              });

            history.push('/dashboard');

        } catch(err){
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
            }   

            addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
              });
        }
    },[signIn,addToast]);

    return (
        <Container>
            <Content>
                <img src={logo} alt="GitHub" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="login" icon={FiUser} type="text" placeholder="login"  />
                    <Input name="password" icon={FiLock} type="password"  placeholder="password" /> 
                    <button type="submit">Login</button>
                </Form>
            </Content>
    </Container>
    );
}

export default Signin;