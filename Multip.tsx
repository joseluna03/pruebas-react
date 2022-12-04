import * as React from 'react';

function Multip({multiplicador}){

  React.useEffect(()=>{
    console.log('renderizando hijo')

},[multiplicador]);

  return (
    <div>
      <h2>
{multiplicador()}
      </h2>
      <p>multiplicado x2</p>

      </div>
  )
}

export default Multip