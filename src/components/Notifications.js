import React ,{ useContext } from 'react';
import NotificationsContext from '../context/notification/NotificationsContext';

function Notifications() {
    const { notifications } =   useContext(NotificationsContext); // the array of the notifications

    return (
        notifications.map(item=> { 
            return <div key={item.id} className='notification' >
                    {item.msg}
                   </div>
        })
    )
}

export default Notifications