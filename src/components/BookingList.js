import React from 'react';
import Booking from './Booking';

const BookingList = (props) => {
  
  const notCheckedIn = props.bookings.filter((booking) => booking.checkedIn === false)
  const bookingsNode = notCheckedIn.map((booking, index) => {
    return (
      <li key = {index}>
        <div>
          <Booking booking={booking}/>
        </div>
      </li>
    )
  })

    return(
      <ul>
        <h4>Bookings List</h4>
        {bookingsNode}
      </ul>
    )
}

export default BookingList;
