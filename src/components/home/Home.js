import React from 'react'

import { Responsive } from "semantic-ui-react"

import HomeBody from './homeBody/HomeBody';

const Home = ({ history }) => {

    return (
    <React.Fragment>
      <Responsive maxWidth={767}>
        <HomeBody history={history} mobile />
      </Responsive>
      <Responsive minWidth={768}>
          <HomeBody history={history} />
      </Responsive>
    </React.Fragment>
)}

export default Home