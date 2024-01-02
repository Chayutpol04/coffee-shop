import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function AboutUs() {
  return (
    <div className='mt-10 '>
    <VerticalTimeline lineColor='black'>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2025-2026"
    iconStyle={{ background: '#38220f', color: '#fff' }}
    contentStyle={{ background:'#dbc1ac' }}
  >
    <p>
          "It all began when the owner, too lazy to go to Starbucks, 
          decided to start making coffee himself. 
          He dedicated a year to practicing the art of coffee brewing."
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2027 - 2028"
    iconStyle={{ background: '#38220f', color: '#fff' }}
    contentStyle={{ background:'#dbc1ac' }}
  >
    <p>
    "After that, I enrolled in university and moved into the dormitory, 
    where I shared a living space with my roommates. I started preparing meals for my friends,
     and they complimented the dishes, expressing that they found them delicious."
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2028 - 2029"
    iconStyle={{ background: '#38220f', color: '#fff' }}
    contentStyle={{ background:'#dbc1ac' }}
  >
    <p>
    "He subsequently rented space on campus to sell coffee with his friends, 
    and the venture proved to be highly successful."
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2029 - Now"
    iconStyle={{ background: '#38220f', color: '#fff' }}
    contentStyle={{ background:'#dbc1ac' }}
  >
    <p>
    "Due to the success of his coffee sales in university, 
    he decided to leave and established a store named Starbug. 
    The store has been competing with Starbucks ever since."
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
  )
}

export default AboutUs