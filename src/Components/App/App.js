import React from 'react';
import './App.css';
import MenuDiv from '../MenuDiv'
import NavbarDiv from '../NavbarDiv'
import CarouselDiv from '../Carousel/CarouselDiv'
import AboutDiv from '../AboutDiv'
import SpecialDiv from '../SpecialDiv'
import 'bootstrap/dist/css/bootstrap.min.css'
let axios = require('axios')

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainItems: [],
      appItems: [],
      specialItem: [],
      mainTitles: ['Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title', 'Menu Title'],
      appTitles: ['App Title', 'App Title', 'App Title', 'App Title', 'App Title', 'App Title', 'App Title', 'App Title', 'App Title', 'App Title', ]
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
          crossOrigin="anonymous"
        />
        <NavbarDiv />
        <CarouselDiv />
        <AboutDiv />
        <SpecialDiv specialItem={this.state.specialItem}/>
        <MenuDiv
          appItems={this.state.appItems}
          appTitles={this.state.appTitles}
          mainItems={this.state.mainItems}
          mainTitles={this.state.mainTitles}
          specialItem={this.state.specialItem}
        />

      </div>
    );
  }

  async componentDidMount() {
    let mainItems = []
    let appItems = []
    let specialItem = []

    if (localStorage.getItem('mainItems') && localStorage.getItem('appItems') && localStorage.getItem('specialItem')) {
      mainItems = JSON.parse(localStorage.getItem('mainItems'))
      appItems = JSON.parse(localStorage.getItem('appItems'))
      specialItem = JSON.parse(localStorage.getItem('specialItem'))
      await this.setState({ mainItems: mainItems, appItems: appItems, specialItem: specialItem })
      console.log({mainItems, appItems, specialItem})
    } else {

      //getting entrees
      await axios.get('https://entree-f18.herokuapp.com/v1/menu/15')

        .then(function (response) {
          mainItems = response.data.menu_items;
          console.log(response.data.menu_items)
        })

        .catch(function (error) {
          console.log(error);
        })

        .finally(function () {
        })

      // getting appetizers
      await axios.get('https://entree-f18.herokuapp.com/v1/menu/8')

        .then(function (response) {
          appItems = response.data.menu_items;
          console.log(response.data.menu_items)
        })

        .catch(function (error) {
          console.log(error);
        })

        .finally(function () {
        })

      //getting the special
      await axios.get('https://entree-f18.herokuapp.com/v1/menu/1')

        .then(function (response) {
          specialItem = response.data.menu_items;
          console.log(response.data.menu_items)
        })

        .catch(function (error) {
          console.log(error);
        })

        .finally(function () {
        })

        console.log({mainItems, appItems, specialItem})
      await this.setState({ mainItems: mainItems, appItems: appItems, specialItem: specialItem })
      localStorage.setItem('mainItems', JSON.stringify(this.state.mainItems))
      localStorage.setItem('appItems', JSON.stringify(this.state.appItems))
      localStorage.setItem('specialItem', JSON.stringify(this.state.specialItem))
    }



    console.log(this.state.mainItems)
  }

  // axiosTest() {
  //   axios.get('https://entree-f18.herokuapp.com/v1/menu')
  //       .then(function (response) {
  //       console.log(response.data.menu_items);
  //       this.setState({ mainItems: response.datta.menu_items })
  //       console.log(this.state.mainItems)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {

  //     });
  // }
}



export default App;
