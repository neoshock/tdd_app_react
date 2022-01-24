import { Component } from "react/cjs/react.production.min";
import Button from './Button'

const styles = {
    producto: {
        border: '1px solid #eee',
        boxShadow: '0px 5px 5px rgba(0,0,0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '6px'
    }, 
    img: {
        width: '100%'
    }
}

class Producto extends Component {
    render() {
        const {producto,agregarAlCarro} = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img}></img>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={()=> agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto