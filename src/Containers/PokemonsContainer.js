import Pokemon from "../Components/Pokemon";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../Graphql/GetPokemons";

export default function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
}
