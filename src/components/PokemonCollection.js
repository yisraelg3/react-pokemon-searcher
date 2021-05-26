import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemon = () => {
    //console.log(this.props.pokemonArr)
    let filteredPokemon 
      if (this.props.search !== '') {
        filteredPokemon = this.props.pokemonArr.filter(pokemon => (
          pokemon.name.toLowerCase().includes(this.props.search.toLowerCase()) 
        ))
      } else {
        filteredPokemon = this.props.pokemonArr
      }
      
    return filteredPokemon.map(pokemonObj => <PokemonCard key={pokemonObj.id} pokemonObj={pokemonObj}/>)
  }
  
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
