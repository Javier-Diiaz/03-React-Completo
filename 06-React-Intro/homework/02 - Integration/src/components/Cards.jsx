import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   var listas = characters.map(ele => {
      return (
         <Card key={ele.toString()}>
            <button onClick={props.onclose}>X</button>
            <h2>{ele.name}</h2>
            <h2>{ele.species}</h2>
            <h2>{ele.gender}</h2>
            <img src={ele.image} alt="" />
         </Card>
      )
   })
   return (
      <div>{listas}</div>
   );
}
