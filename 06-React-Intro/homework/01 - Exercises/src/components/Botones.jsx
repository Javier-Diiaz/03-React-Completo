import React from 'react';

class Botones extends React.Component {
    render() {
        return (
            <div>
                <button onClick={(alerts) => this.alert('Aprovado')}>Módulo 1</button>
                <button onClick={(alerts) => this.alert('En curso')}>Módulo 2</button>
            </div>
        )
    }
}

export default Botones;
