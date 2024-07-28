import React from 'react'
import React, { useState } from 'react'

const Popup = () => {
    const [popup,setpopup]=useState(false)
  return (
    <div>
        {popup &&
        <div>
            <h2>Talk to us</h2>
            <form action="">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="phone">Ph.No:</label>
                <input type="text" id="phone" name="phone" required />

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" required />
                <button onClick={()=>{setpopup(false)}}></button>
            </form>
        </div>}
    </div>
  )
}

export default Popup