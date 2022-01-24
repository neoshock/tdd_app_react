import { Component } from "react/cjs/react.production.min";

const styles = {
    detallesCarro: {
        backgroundColor: '#fff', 
        position: 'absolute',
        marginTop: '30',
        boxShadow: '1px 5px 5px rgba(0,0,0,0.3)',
        borderRadius: '6px',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listsTyleType: 'none',
        display:'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        padding: '20px 20px',
        borderBottom: '1px solid #aaa'
    }
}

class DetallesCarro extends Component {
    render(){
        const {carro} = this.props
        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x => <li style={styles.producto} key={x.name}>
                        <img alt={x.name} src={x.img} width='50' height='32'></img>
                        {x.name}
                        <span>{x.cantidad}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro