import React, { Component } from 'react';
import {
  Container,
  Header,
  Grid,
  Image,
  Divider,
  Input,
  Button
} from 'semantic-ui-react';
import {
  banner,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
} from './images';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { subscribe } from '../actions';

class Home extends Component {
  state = {
    value: ''
  };
  handleClick = () => {
    this.props.history.push('/login');
  };

  componentWillReceiveProps(props) {
    if (props.subscribeRed) {
      alert(`You've subscribed to the newsletter `);
    }
  }
  handleChange = e => this.setState({ value: e.target.value });

  render() {
    const { Column, Row } = Grid;
    return (
      <Container fluid>
        <Grid centered columns={2}>
          <Column width={12} className="fixed atop">
            <Container fluid>
              <Header as="h3" className="white float left">
                Reactor
              </Header>
              <a
                onClick={this.handleClick.bind(this)}
                className="float right white"
              >
                Log In
              </a>
            </Container>
          </Column>
        </Grid>
        <Container
          fluid
          className="fullscreen table top cover"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <Container className="v-align ">
            <Header as="h1" className="center white">
              Hello, Welcome to Reactor
            </Header>
          </Container>
        </Container>
        <Container>
          <Container className="padding all medium">
            <Grid centered verticalAlign="middle" doubling>
              <Row>
                <Column width={6}>
                  <Header as="h2" className="uppercase">
                    what we do
                  </Header>
                </Column>
                <Column width={6}>
                  <Container fluid className="line-2">
                    <Header as="h4" className="capitalize">
                      we do
                    </Header>
                    <p>
                      The quick brown fox jumps over a lazy dog.<br />
                      DJs flock by when MTV ax quiz prog.<br />
                      Junk MTV quiz graced by fox whelps.<br />
                      Bawds jog, flick quartz, vex nymphs.<br />
                    </p>
                  </Container>
                </Column>
              </Row>
            </Grid>
          </Container>
        </Container>
        <Container fluid className="light-sage">
          <Container fluid className="padding all medium">
            <Grid columns={2} centered>
              <Column width={7}>
                <Container>
                  <Image
                    src={image1}
                    size="small"
                    className="dropshadow float left  margin all small"
                  />
                  <Container>
                    <Header as="h4" className="capitalize">
                      regional cuisine down home southern cooking
                    </Header>
                    <p>
                      The quick brown fox jumps over a lazy dog. DJs flock by
                      when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                      Bawds jog, flick quartz, vex nymphs.
                    </p>
                  </Container>
                </Container>
              </Column>
              <Column width={7}>
                <Container>
                  <Image
                    src={image2}
                    size="small"
                    className="dropshadow float left  margin all small"
                  />
                  <Container>
                    <Header as="h4" className="capitalize">
                      pos hardware more options in less space
                    </Header>
                    <p>
                      The quick brown fox jumps over a lazy dog. DJs flock by
                      when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                      Bawds jog, flick quartz, vex nymphs.
                    </p>
                  </Container>
                </Container>
              </Column>
            </Grid>
          </Container>
        </Container>
        <Container>
          <Header
            as="h5"
            className="capitalize padding all small"
            textAlign="center"
          >
            maui by air the best way around the island
          </Header>
          <Container>
            <Grid columns={4} className="padding all small">
              <Column>
                <Image
                  src={image3}
                  size="small"
                  className="dropshadow"
                  centered
                />
                <Header as="h5" className="capitalize">
                  east josianefurt
                  <Header.Subheader>085 Daron Via</Header.Subheader>
                </Header>
              </Column>
              <Column>
                <Image
                  src={image4}
                  size="small"
                  className="dropshadow"
                  centered
                />
                <Header as="h5" className="capitalize">
                  south christopherport
                  <Header.Subheader>162 chandler ville</Header.Subheader>
                </Header>
              </Column>
              <Column>
                <Image
                  src={image5}
                  size="small"
                  className="dropshadow"
                  centered
                />
                <Header as="h5" className="capitalize">
                  concepsionbury
                  <Header.Subheader>7643 kylie burgs</Header.Subheader>
                </Header>
              </Column>
              <Column>
                <Image
                  src={image6}
                  size="small"
                  className="dropshadow"
                  centered
                />
                <Header as="h5" className="capitalize">
                  reychester
                  <Header.Subheader>5590 gabe views Apt. 044</Header.Subheader>
                </Header>
              </Column>
            </Grid>
          </Container>
        </Container>
        <Divider inverted />
        <Container fluid>
          <Container className="padding all medium">
            <Header
              as="h2"
              textAlign="center"
              className="uppercase padding all small"
            >
              subscribe to news letter
            </Header>
            <Grid centered columns={2}>
              <Column>
                <Container className="subscribe-button">
                  <Input
                    placeholder="Your Email"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                  />
                  <Button
                    onClick={e => {
                      this.props.subscribe({ email: this.state.value });
                    }}
                  >
                    Subscribe
                  </Button>
                </Container>
              </Column>
            </Grid>
          </Container>
        </Container>
        <footer className="padding all medium">Footer</footer>
      </Container>
    );
  }
}
function mapStateToDispatch(dispatch) {
  return bindActionCreators({ subscribe }, dispatch);
}
function mapStateToProps({ subscribeRed }) {
  return { subscribeRed };
}

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Home));
