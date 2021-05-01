/* eslint-disable react/no-children-prop */
import React, { useState } from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('home')
  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps) => {
    setActiveItem(data.name ? data.name : 'home')
  }
  return (
    <Menu fixed='top' inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          children={<Link to="/">Home</Link>}
        />
        <Menu.Item
          name='applications'
          active={activeItem === 'applications'}
          onClick={handleItemClick}
          children={<Link to="/applications">Applications</Link>}
        />
    </Menu>
  )
}

export default PMenu