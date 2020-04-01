import React from 'react'
import { Tabs, Container } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

class MenuDiv extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid bg='' className='bg-dark text-light'>
      <div className='text-center pt-5'>
        <h1>Menu</h1>
      </div>
        <Container>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Appetizers" bg='dark'>
            </Tab>
            <Tab eventKey="entrees" title="Entrees">
              {
                this.props.menuItems.map((item, i) => (
                  <React.Fragment>
                    {
                      i % 2 === 1 && !item.mounted ?
                        <div className='row'>
                          <div className='col-6'>
                            <h3>{this.props.menuTitles[i - 1]}</h3>
                            <p>
                              {this.props.menuItems[i - 1].description}
                            </p>
                          </div>
                          <div className='col-6'>
                            <h3>{this.props.menuTitles[i - 1]}</h3>
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </div> :
                        (i % 2 === 0 && this.props.menuItems.length - 1 === i) ?
                          <Row>
                            <div className='col-12 '>
                              <h3>{this.props.menuTitles[i - 1]}</h3>
                              <Row>
                                <p className='pl-3'>
                                  {item.description}
                                </p>
                              </Row>
                            </div>
                          </Row> :
                          null
                    }
                  </React.Fragment>
                ))
              }
            </Tab>
            <Tab eventKey="sides" title="Sides">
            </Tab>
          </Tabs>
        </Container>
      </Container>
    )
  }
}
export default MenuDiv;