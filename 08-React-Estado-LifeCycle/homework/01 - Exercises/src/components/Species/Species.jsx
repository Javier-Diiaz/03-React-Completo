import React from 'react'

export default function Species(props) {
  return (
    <div>
      <h2>Species</h2>
      {props.species.map((e, i) => {
        return (
          <button children={e} key={i} onClick={props.handleSpecies} value={e} > {e} </button>
        )
      })}
      <button onClick={props.handleAllSpecies} children="All Animals" ></button>
    </div>
  )
}
