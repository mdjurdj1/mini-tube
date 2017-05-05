import React, {Component} from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button, Glyphicon } from 'react-bootstrap'

class VideoSearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleClick() {
    alert('You clicked me, teehee!')
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="VideoSearchForm">
        <Form inline>
          <FormGroup controlId="formInlineSearch">
            <ControlLabel>Search</ControlLabel> {'   '}
            <FormControl value={this.state.input} onChange={(e)=>this.handleChange(e)} type="text" placeholder="Hydraulic Press..."/>
            <Button onClick={(e)=>this.handleClick(e)}><Glyphicon glyph="search"/></Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default VideoSearchForm
