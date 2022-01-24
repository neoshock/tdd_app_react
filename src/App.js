import { Component } from "react/cjs/react.production.min";
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {

  //Elementos u objetos usados para los productos
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' }
    ],
    carro: [
      //{ name: 'Tomate', price: 1500, img: '/productos/tomate.jpg', cantidad: 0 },
    ],
    esCarroVisible: false
  }

  //Agrega un producto al carro de compras
  agregarAlCarro = (producto) => {
    const {carro} = this.state
    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name ? 
        ({...x, cantidad: x.cantidad + 1}): x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({...producto, cantidad: 1})
    })
  }

  //Muestra el detalle del carro de compra
  mostrarCarro = () => {
    if(this.state.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  //Renderiza una vista HTML
  render() {
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro}></Navbar>
        <Layout>
          <Title></Title>
          <div>
            <Productos agregarAlCarro={this.agregarAlCarro} productos={this.state.productos}>
            </Productos>
          </div>
        </Layout>
      </div>

    )
  }
}

export default App;
