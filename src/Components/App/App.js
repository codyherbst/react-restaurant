import React from 'react';
import './App.css';
import MenuDiv from '../MenuDiv'
import NavbarDiv from '../NavbarDiv'
import CarouselDiv from '../Carousel/CarouselDiv'
import AboutDiv from '../AboutDiv'
import 'bootstrap/dist/css/bootstrap.min.css'
let axios = require('axios')

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
      menuTitles: ['Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title']
    }
    // this.axiosTest = this.axiosTest.bind(this);
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <NavbarDiv />
        <CarouselDiv />
        <AboutDiv />
        <MenuDiv menuItems={this.state.menuItems} menuTitles={this.state.menuTitles} />
      </div>
    );
  }

  async componentDidMount() {
    let menuItems = []

    localStorage.getItem('menuItems') ?
      menuItems = JSON.parse(localStorage.getItem('menuItems')) :
      await axios.get('https://entree-f18.herokuapp.com/v1/menu/15')

        .then(function (response) {
          menuItems = response.data.menu_items;
          console.log(response.data.menu_items)
        })

        .catch(function (error) {
          console.log(error);
        })

        .finally(function () {
        });

    menuItems.map(item => (
      item.mounted = false
    ))

    await this.setState({ menuItems: menuItems })
    localStorage.setItem('menuItems', JSON.stringify(this.state.menuItems))
    console.log(this.state.menuItems)
  }

  // axiosTest() {
  //   axios.get('https://entree-f18.herokuapp.com/v1/menu')
  //       .then(function (response) {
  //       console.log(response.data.menu_items);
  //       this.setState({ menuItems: response.datta.menu_items })
  //       console.log(this.state.menuItems)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {

  //     });
  // }
}



export default App;
