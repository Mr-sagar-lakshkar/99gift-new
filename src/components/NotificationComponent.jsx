import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllNotifications, fetchSlides } from '../actions';
import { getAllNotification } from '../api';
import './components-styles/NotificationComponent.css'

function NotificationComponent() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const products = useSelector((state) => state.notificationReducer);
    const notificationData = products?.products;

    useEffect(() => {
        getUserNotification();
      }, []);
    
      const getUserNotification = async () => {
        let notificationData = {"search":null,"filterBy":null,"date":{"from":null,"to":null},"pagination":{"sortBy":"id","descending":true,"page":1,"rowsPerPage":10,"rowsNumber":0}};
        let data = await getAllNotification(notificationData);

        if (data?.data) {
          dispatch(fetchAllNotifications(data?.data));
          setLoading(false)
        }
      };


    return (
        <>
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="btn-group pull-right top-head-dropdown">
                        <button className="btn btn-default dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-bell text-primary"></i> <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                            {notificationData && notificationData?.map((item, index) => (
                                <>
                                <li key={index} className='px-3 text-dark'>
                                    <div className="top-text-heading"><strong>{item.title}</strong></div>
                                    <div className="top-text-heading">{item.description}</div>
                                    <div className="top-text-light">{item.id}</div>
                            </li>
                            <hr />
                                </>
                            ))}

                            {!notificationData &&
                                <li>
                                    <div className="top-text-heading text-center"><i className="bi bi-exclamation-circle-fill"></i> Notifiction</div>
                                </li>}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NotificationComponent