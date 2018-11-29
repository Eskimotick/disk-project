import React from'react';
import { Menu } from 'semantic-ui-react'

import './Navbar.css';

class Navbar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className='navbar' color='violet' inverted>
        <Menu.Item
          name='colecao'
          active={activeItem === 'colecao'}
          onClick={this.handleItemClick}
        >
          Coleção
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar;