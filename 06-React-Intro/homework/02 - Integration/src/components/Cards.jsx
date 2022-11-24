import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   const valores = characters.map((char) => {
      return (<div>
         <button onClick={() => window.alert('Emulamos que se cierra la card')}></button>
         <h2>{char.name}</h2>
         <h2>{char.species}</h2>
         <h2>{char.gener}</h2>
         <img src={char.image} alt="" />
      </div>)
   })
   return valores
}
