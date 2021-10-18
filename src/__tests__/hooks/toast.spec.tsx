
import { renderHook, act } from '@testing-library/react-hooks';
import { useToast, ToastProvider } from '../../hooks/toast';
import { v4 as uuid } from 'uuid';


describe('Toast Component',() => {

   it('shoul be able to add Toast',() => {

        const { result } = renderHook(() => useToast(), {
            wrapper: ToastProvider,
        });

        act(() => {   
          result.current.addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description: 'Ocorreu um erro',
          });
        });
        expect(result.current).toBeTruthy();
   });


   it('shoul be able to remove Toast',() => {

      const id = uuid();
      const { result } = renderHook(() => useToast(), {
          wrapper: ToastProvider,
      });

      act(() => {   
        result.current.removeToast(id);
      });
      expect(result.current).not.toBe(true);
    });



});