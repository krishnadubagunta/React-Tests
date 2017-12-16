import React, { Component } from 'react';
import { Container, Form, Input } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../actions';

class FormLogin extends Component {
  state = {
    email: '',
    password: ''
  };
  handlePass = e => this.setState({ password: e.target.value });
  handleUser = e => this.setState({ email: e.target.value });

  handleSubmit(event) {
    event.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  }

  componentWillReceiveProps(props) {
    if (props.loginRed) {
      console.log(props.loginRed);
      alert(
        `you've logged in! check the console : ${
          props.subscribeRed.user_username
        }`
      );
    }
  }

  render() {
    const { Field, Button } = Form;
    return (
      <Container className="padding all small card">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Field>
            <Input
              icon=""
              value={this.state.value}
              onChange={this.handleUser.bind(this)}
              type="email"
              iconPosition="left"
              className="icon email"
            />
          </Field>

          <Field>
            <Input
              value={this.state.value}
              onChange={this.handlePass.bind(this)}
              icon=""
              type="password"
              iconPosition="left"
              className="icon password"
            />
          </Field>
          <Button negative>Login</Button>
        </Form>
      </Container>
    );
  }
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

function mapStateToProps({ loginRed }) {
  return { loginRed };
}

export default connect(mapStateToProps, mapStateToDispatch)(FormLogin);
