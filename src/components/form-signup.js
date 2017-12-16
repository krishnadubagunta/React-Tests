import React, { Component } from 'react';
import { Container, Form, Input } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup } from '../actions';

class FormSignUp extends Component {
  state = {
    email: '',
    user: '',
    password: ''
  };
  handleSignUp = e => {
    e.preventDefault();
    this.props.signup({
      username: this.state.user,
      email: this.state.email,
      password: this.state.password
    });
  };

  handlePass = e => this.setState({ password: e.target.value });
  handleUser = e => this.setState({ user: e.target.value });
  handleEmail = e => this.setState({ email: e.target.value });

  componentWillReceiveProps(props) {
    if (props.signupRed) {
      console.log(props.signupRed);
      alert(
        `you've signed up. Check the console : ${
          props.subscribeRed.user_username
        }`
      );
    }
  }

  render() {
    const { Field, Button } = Form;
    return (
      <Container className="padding all small card">
        <Form onSubmit={this.handleSignUp.bind(this)}>
          <Field>
            <Input
              icon=""
              type="text"
              value={this.state.user}
              onChange={this.handleUser.bind(this)}
              iconPosition="left"
              className="icon user"
            />
          </Field>
          <Field>
            <Input
              icon=""
              value={this.state.email}
              onChange={this.handleEmail.bind(this)}
              type="email"
              iconPosition="left"
              className="icon email"
            />
          </Field>
          <Field>
            <Input
              icon=""
              value={this.state.password}
              onChange={this.handlePass.bind(this)}
              type="password"
              iconPosition="left"
              className="icon password"
            />
          </Field>
          <Button negative>Sign Up</Button>
        </Form>
      </Container>
    );
  }
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ signup }, dispatch);
}

function mapStateToProps({ signupRed }) {
  return { signupRed };
}

export default connect(mapStateToProps, mapStateToDispatch)(FormSignUp);
