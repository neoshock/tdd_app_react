import { Component } from "react/cjs/react.production.min";
import Producto from './Producto'

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Productos extends Component {
    render() {
        const {productos, agregarAlCarro} = this.props

        return (
           <div style={styles.productos}>
               {productos.map(producto => 
                <Producto agregarAlCarro={agregarAlCarro} key={producto.name}
                    producto={producto}>
                </Producto>)}
           </div>
        )
    }
}

export default Productos