import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: '', 
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    fetch('http://localhost:3000/pokemon',
      {method : 'POST',
      headers: {"Content-Type" : "application/json"},
      body : JSON.stringify(
        {name: this.state.name,
        hp: parseInt(this.state.hp, 10),
        sprites: {front: this.state.frontUrl, back: this.state.backUrl}
        })
      })
      .then(res => res.json())
      .then(newPokemon => this.props.addPokemon(newPokemon))
  }
  
  render() {
    const {name, hp, frontUrl, backUrl} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl} onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
