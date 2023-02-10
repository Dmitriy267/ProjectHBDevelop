import {render, screen, fireEvent} from '@testing-library/react'
import {ButtonErrMessage} from '../components/common/ButtonErrMessage'
describe('ButtonErrMessage', ()=>{
    test('calls onClick prop when clicked', ()=>{
        const onClick = jest.fn()
        render(<ButtonErrMessage children={undefined} onClick={onClick}/>);
        fireEvent.click(screen.getByAltText(/Иконка ошибки на кнопке/i))
        expect( onClick).toHaveReturnedTimes(1);
    });
    test('calls onClick return value', ()=>{
        const onClick = jest.fn(()=>console.log('Ошибка ввода'))
        render(<ButtonErrMessage children={undefined} onClick={onClick}/>);
        fireEvent.click(screen.getByAltText(/Иконка ошибки на кнопке/i))
        expect( onClick).toHaveReturned();
    });
})
   

