import { connect } from 'react-redux';
import React from 'react';
import { getStoreName } from '../../redux/actions/actions'
import './products.css';
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from '../Card/Card'

export function Products({ list, storeName, getStoreName }) {
   React.useEffect(() => {
      getStoreName()
   }, [])

   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>HENRY MARKET</h1>
            <h1>{storeName}</h1>

            <div className='productsList'>
               {list.map(prod => {
                  return (
                     <Card
                        key={prod.id}
                        name={prod.name}
                        price={prod.price}
                        id={prod.id}
                     />
                  )
               })}
            </div>
         </div>
      </>
   );
}

export function mapStateToProps(state) {
   return {
      list: state.list,
      storeName: state.StoreName
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      getStoreName: function () {
         dispatch(getStoreName())
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
