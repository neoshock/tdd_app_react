import { render, screen } from '@testing-library/react';
import {shallow, configure} from 'enzyme';
import Producto from './components/Producto';
import BubbleAlert from './components/BubbleAlert'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
import Title from './components/Title';
import Logo from './components/Logo';
import Button from './components/Button';

configure({adapter: new Adapter()})
var producto = { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' };

//test para evaluar que el componente de producto renderiza correctamente
test('Componente de producto', () => {
  const button = render(<Producto producto = {producto}></Producto>);
  const buttonResult = button.getByText('Tomate');
  expect(buttonResult).toBeInTheDocument();
});

//test para evaluar que el componente de titulo renderiza correctamente
test('Componente de titulo', ()=> {
  const title = render(<Title></Title>);
  expect(title.getByText('Listado de Productos')).toBeInTheDocument();
})

//test para evaluar que el componente de alerta renderiza correctamente
test('Componenente de bubble alert debe retornar 9+ al haber un valor mayor a 9', ()=>{
  const bubble = shallow(<BubbleAlert value={10}></BubbleAlert>)
  expect(bubble.instance().getNumber(10)).toEqual('9+');
})

//test para evaluar que el componente de logo renderiza correctamente
test('Componente de Logo', ()=>{
  const bubble = render(<Logo></Logo>)
  expect(bubble.getByText('Shop')).toBeInTheDocument();
})

//test para evaluar que el componente de button renderiza correctamente
test('Componente de Button', ()=>{
  const bubble = render(<Button></Button>);
})

//test para evaluar que los metodos usados en el componente de productos
//funcionan correctamente
describe('Evaluar los metodos de Productos', ()=> {
  const result = shallow(<App></App>)

  it('Deberia exisir 3 productos', ()=> {
    expect(result.instance().state.productos).toHaveLength(3);
  });

  it('deberia mostrar el carro de compras', ()=> {
    expect(result.instance().mostrarCarro());
  })
});
