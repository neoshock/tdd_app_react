import { Component } from "react/cjs/react.production.min";
import Logo from './Logo'
import Carro from './Carro'

const styles = {
    navbar: {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '70px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0px 50px',
        boxShadow: '0 2px 3px rgba(0,0,0,0.1)'
    }
}

class Navbar extends Component {

    render(){

        const {carro, esCarroVisible, mostrarCarro} = this.props
        return (
            <nav style={styles.navbar}>
                <Logo></Logo>
                <Carro esCarroVisible={esCarroVisible} 
                mostrarCarro={mostrarCarro} carro={carro}></Carro>
            </nav>
        )
    }
}

export default Navbar