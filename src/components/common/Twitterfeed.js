import React from 'react'
import { Timeline } from 'react-twitter-widgets'

const Twitterfeed = () => {
  return (
    <>

    <div className="twtrFeed">
    <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'TwitterDev'
  }}
  options={{
    height: '300'
  }}
/>
    </div>

    </>
  )
}

export default Twitterfeed