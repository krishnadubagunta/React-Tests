import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import { onboarding } from './images';
import FormSignUp from './form-signup';
import FormLogin from './form-login';

export default class Login extends Component {
  state = {
    screen: 'signup'
  };

  handleSignUp = () => this.setState({ screen: 'signup' });
  handleLogin = () => this.setState({ screen: 'login' });

  render() {
    const { screen } = this.state;
    const { Column } = Grid;
    return (
      <Container fluid>
        <Grid centered columns={2}>
          <Column width={12} className="fixed atop">
            <Container fluid>
              <Header as="h3" className="white float left">
                Reactor
              </Header>
            </Container>
          </Column>
        </Grid>
        <Container
          fluid
          className="fullscreen table top cover"
          style={{ backgroundImage: `url(${onboarding})` }}
        >
          <Container className="v-align">
            <Container className=" center uppercase">
              <a
                onClick={this.handleSignUp.bind(this)}
                className="large padding side small"
                style={{
                  textDecoration: screen === 'signup' ? 'underline' : 'none'
                }}
              >
                Sign Up
              </a>
              <a
                onClick={this.handleLogin.bind(this)}
                className="large padding side small"
                style={{
                  textDecoration: screen === 'login' ? 'underline' : 'none'
                }}
              >
                Login
              </a>
            </Container>
            {screen === 'signup' ? <FormSignUp /> : <FormLogin />}
          </Container>
        </Container>
      </Container>
    );
  }
}
