import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

import SideBarMenu from './sideBarMenu'
import Panel from './Panel'


const AdminPanel = ({ category, handleSideBarItems, mobile, view, handleView }) => {
    return (
        <React.Fragment>
            <Segment>
                <Grid container columns={mobile ? 1 : 2} style={{height: '100%'}}>
                    <Grid.Column  width={mobile ? 16 : 4} style={mobile ? {width: '100%', marginLeft: '3em'} : {width: '100%'}}><SideBarMenu category={category} handleSideBarItems={handleSideBarItems} handleView={handleView} /></Grid.Column>
                    <Grid.Column width={mobile ? 14 :12} style={mobile? {width: '100%', marginTop: '3em'} : {width: '100%'}}>{<Panel category={category} view={view} handleView={handleView} mobile={mobile} />}</Grid.Column>
                </Grid>
            </Segment>
        </React.Fragment>
    )
}

export default AdminPanel