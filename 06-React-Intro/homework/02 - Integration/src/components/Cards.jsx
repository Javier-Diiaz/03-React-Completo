import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   var prueba = characters.map((ele) =>
      <div key={key}>
         <button onClick={onclose}>X</button>
         <h2>{ele.name}</h2>
         <h2>{ele.species}</h2>
         <h2>{ele.gender}</h2>
         <img src={ele.image} alt="" />
      </div>)
   return (
      <div>
         {prueba}
      </div>
   );
}
