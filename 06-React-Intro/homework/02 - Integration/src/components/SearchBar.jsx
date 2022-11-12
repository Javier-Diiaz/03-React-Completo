export default function SearchBar(props) {
   return (
      <div id='search'>
         <input type='search' />
         <button onClick={props.onClose}>Agregar</button>
      </div>
   );
}
