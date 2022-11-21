import React from 'react'

export default class Animals extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (<div>
      {this.props.animals.map((e, i) => {
        return (
          <div key={i}>
            <h5>{e.name}</h5>
            <img src={e.image} alt={e.name} width="300px" />
            <span>{e.specie}</span>
          </div>)
      })}
    </div>)
  }
}
