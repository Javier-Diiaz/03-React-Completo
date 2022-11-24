import Card from './Card';

export default function Cards(char) {
   const { characters } = char;
   return (
      <div>
         {characters.map((char) => {
            <Card>
               <button onClick={char.onClose}>X</button>
               <h2>{char.name}</h2>
               <h2>{char.species}</h2>
               <h2>{char.gender}</h2>
               <img src={char.image} alt="" />
            </Card>
         })}
      </div>
   )
}
