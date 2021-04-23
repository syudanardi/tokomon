import React from "react";
import { Heading } from "./Heading";
import { EmployeeList } from "./EmployeeList";
import { useQuery, gql } from '@apollo/client';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
      }
    }
  }`
  

export const Home = () => {
  const {loading, error, data} = useQuery(GET_POKEMONS, {variables: {limit: 20, offset:0}})
  function getPokemon() {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return(
      <div class="mt-10 flex items-center justify-center"> 
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12">
          {data.pokemons.results.map((pokemon)=>{
            return <img
              src={pokemon.image}
              className="card-img"
              alt={pokemon.name}
            />
          })}
        </div>
      </div>
    )
  }

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          CRUD with React Context API and Hooks
        </h3>
        <Heading />
        <EmployeeList />
      </div>
      <div>
        {getPokemon()}
      </div>
    </React.Fragment>
  );
};