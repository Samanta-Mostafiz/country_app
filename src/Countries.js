import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';

const Countries = (props) => {
  return (
    <section class="grid max-sm:grid-cols-1 mr-2,grid max-md:grid-cols-2 ,grid max-xl:grid-cols-3 ">
      {props.countries.map((country)=>
      {
        const countryNew={country,id:uuidv4()}
        return(
            <div>
            <Country {...countryNew} key={countryNew.id} onRemove={props.onRemove}/>
            </div>
        )
      })}
    </section>
  )
}

export default Countries
