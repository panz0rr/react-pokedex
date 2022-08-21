import axios from 'axios';

export const getPokemonDetails = async (pokemon) => {
   try {
        const { data } = await axios.get(pokemon.url);
        return data;
   } catch (error) {
        console.error(error);
   }
}