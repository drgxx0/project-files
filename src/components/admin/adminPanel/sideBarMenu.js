import React from 'react'
import { Menu } from 'semantic-ui-react'

const SideBarMenu = ({ category, handleSideBarItems, handleView }) => {
    return (
        <Menu inverted vertical>
          <Menu.Item
            active={category === 'persona'}
            onClick={() => {
                handleSideBarItems('persona')
                handleView(false)
            }}
            name='Persona Natural'
          />
          <Menu.Item
            active={category === 'empresa'}
            onClick={() => {
                handleSideBarItems('empresa')
                handleView(false)
            }}
            name='Empresa'
          />
        </Menu>
    )
} 

export default SideBarMenu