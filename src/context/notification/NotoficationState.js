import React , { useReducer} from 'react'
import NotificationsReducer from './NotificationsReducer';
import NotificationsContext from './NotificationsContext';

function NotificationsState(props) {
    const initialState = [];

    const [notificationState , dispatch ] = useReducer(NotificationsReducer, initialState);
    
    const addNotification = (msg, time)=>{ 
        const id = Date.now();
        dispatch({  type:'add-notification' , payload : { msg , id}});
        setTimeout(()=>{
            dispatch({  type:'remove-notification' , payload : id });
        }, time)
    }

    return (
        <NotificationsContext.Provider value={{notifications: notificationState , addNotification}}>
            {props.children}
        </NotificationsContext.Provider>
    )
}

export default  NotificationsState