import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggle: true,
  }
  
  handleClick = () => {
    //console.log('hi')
    this.setState(
      prevState => {
        return {toggle: !prevState.toggle}
      }
    )
  }
  
  render() {
    //console.log(this.state.toggle)
    let cardSide = this.state.toggle === true ? this.props.pokemonObj.sprites.front : this.props.pokemonObj.sprites.back
    //console.log(this.props)
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={cardSide} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObj.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
