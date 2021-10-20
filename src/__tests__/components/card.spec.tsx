import { render } from '@testing-library/react';

import Card from '../../components/Card';

describe('Card Component',() => {

    it('shoul be able to render Card',()=>{
        
        const { getByTestId } =  render(
             <Card
              key='1'
              title="new card"
              description="description of card"
              tags={[{name: "Job",},{name: "Vacation"}]}
             />);

             const CardElement = getByTestId('card-component');
             expect(CardElement).toBeTruthy();

    });


});