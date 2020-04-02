import React from 'react'
import { Tabs, Container } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import './MenuDiv.css'

class MenuDiv extends React.Component {
  constructor(props) {
    super(props);
    this.menuPrice = 0;
  }
  render() {
    return (
      <Container fluid bg='' className='bg-dark text-light pb-5' id='menu'>
        <div className='text-center pt-5'>
          <h1>Menu</h1>
        </div>
        <Container>
          <Tabs defaultActiveKey="appetizers" id="uncontrolled-tab-example">
            <Tab eventKey="appetizers" title="Appetizers">
              {
                this.props.appItems.map((item, i) => (
                  <React.Fragment>
                    {
                      i % 2 === 1 && !item.mounted ?
                        <div className='row'>
                          <div className='col-6'>
                            <h3 >{this.props.appTitles[i - 1]}</h3>
                            <h4 className='float-right'>{this.props.appItems[i - 1].price}</h4>
                            <p>
                              {this.props.appItems[i - 1].description}
                            </p>
                          </div>
                          <div className='col-6'>
                            <h3>
                              {this.props.appTitles[i - 1]}
                            </h3>
                            <h4 className='float-right'>
                              {item.price}
                            </h4>
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </div> :
                        (i % 2 === 0 && this.props.appItems.length - 1 === i) ?
                          <Row>
                            {this.menuPrice = this.getPrice()}
                            <div className='col-12 '>
                              <h3>
                                {this.props.appTitles[i - 1]}
                              </h3>
                              <h4 className='float-right'>
                                {item.price}
                              </h4>
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
            <Tab eventKey="entrees" title="Entrees">
              {
                this.props.mainItems.map((item, i) => (
                  <React.Fragment>
                    {
                      i % 2 === 1 && !item.mounted ?
                        <div className='row'>
                          <div className='col-6'>
                            <h3>
                              {this.props.mainTitles[i - 1]}
                            </h3>
                            <h4 className='float-right'>
                              {this.props.mainItems[i - 1].price}
                            </h4>
                            <p>
                              {this.props.mainItems[i - 1].description}
                            </p>
                          </div>
                          <div className='col-6'>
                            <h3>
                              {this.props.mainTitles[i - 1]}
                            </h3>
                            <h4 className='float-right'>
                              {item.price}
                            </h4>
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </div> :
                        (i % 2 === 0 && this.props.mainItems.length - 1 === i) ?
                          <Row>
                            <div className='col-12 '>
                              <h3>
                                {this.props.mainTitles[i - 1]}
                              </h3>
                              <h4 className='float-right'>
                                {item.price}
                              </h4>
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
      </Container >
    )
  }

  getPrice() {
    return '$' + Math.floor(Math.random() * Math.floor(19) + 10) + '.99';
  }
}
export default MenuDiv;