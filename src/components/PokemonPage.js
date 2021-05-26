import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemonArr: [],
    search: ''
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemonArr => {
      console.log(pokemonArr)
      this.setState({
        pokemonArr: pokemonArr
      })
    })  
  }

  updateSearch = (searchFilter) => {
    this.setState({
      search: searchFilter
    })
  }
  
  addPokemon = (newPokemonbj) => {
    this.setState({
      pokemonArr: [...this.state.pokemonArr, newPokemonbj]
    })
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search updateSearch={this.updateSearch}/>
        <br />
        <PokemonCollection pokemonArr={this.state.pokemonArr} search={this.state.search}/>
      </Container>
    )
  }
}

export default PokemonPage
