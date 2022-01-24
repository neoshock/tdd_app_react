import { Component } from "react/cjs/react.production.min";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro: {
        backgroundColor: '#359a2c',
        color: '#fff',
        border: 'none',
        borderRadius: '15px',
        padding: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad != 0 ?
                        <BubbleAlert value={cantidad}></BubbleAlert> : null}

                </span>
                <button onClick={mostrarCarro} style={styles.carro}>Carro</button>
                {esCarroVisible ? <DetallesCarro carro={carro}></DetallesCarro>: null}

            </div>
        )
    }
}

export default Carro