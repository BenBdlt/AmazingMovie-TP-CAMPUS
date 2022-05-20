import React from 'react';
import logo from '../../assets-src/LogoAmazingMovie.png'
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar>
      <img src={logo} className="lazy" />
      {/* <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft> */}
      {/* <NavTitle sliding>AmazingMovie</NavTitle> */}
      {/* <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight> */}
      {/* <NavTitleLarge></NavTitleLarge> */}
    </Navbar>

    {/* Page content */}
    <Block strong>
      <h2>Bienvenu sur My AmazingMovie</h2>

      <p>
        Vous retrouverez sur notre application, toutes les informations de vos films favoris.
      </p>
      <p>
        Date de sortie, résumé, acteur ...
      </p>
      <p>
        Il vous suffit de swipe vers le catalogue des films. Vous pouvez explorer la liste de nos films en scrollant ou en utilisant notre système de recherche
      </p>
    </Block>
    {/* <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link="/about/" title="About"/>
      <ListItem link="/form/" title="Form"/>
    </List> */}

    {/* <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#my-popup">Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
        </Col>
      </Row>
    </Block> */}

    {/* <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised panelOpen="left">Left Panel</Button>
        </Col>
        <Col width="50">
          <Button fill raised panelOpen="right">Right Panel</Button>
        </Col>
      </Row>
    </Block> */}

    {/* <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List> */}
  </Page>
);
export default HomePage;