import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function NotificationIcon() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = io.connect('http://localhost:5000');

    socket.on('donation', (notification) => {
      console.log('Donation notification received:', notification);
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });

    socket.on('newCampaign', (notification) => {
      console.log('New campaign notification received:', notification);
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });

    socket.on('unreadNotifications', (unreadNotifications) => {
      console.log('Received unread notifications:', unreadNotifications);
      // Update your UI with the unread notifications
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleNotificationClick = (index) => {
    // Mark the clicked notification as read
    const updatedNotifications = [...notifications];
    updatedNotifications[index] = { ...updatedNotifications[index], read: true };
    setNotifications(updatedNotifications);
   
    // Remove the clicked notification from the notifications state
    const newNotifications = updatedNotifications.filter((_, i) => i !== index);
    setNotifications(newNotifications);
   
    // Check if all notifications are read, then hide the notifications
    const allRead = newNotifications.every((notification) => notification.read);
    if (allRead) {
      setShowNotifications(false);
    }
   };

   return (
    <div className="notification-icon">
      <div className="position-relative">
        <button
          className="notification-button bg-transparent border-0 nav-link"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <i className="bi bi-bell-fill h5"></i>
        </button>
        {notifications.length > 0 && (
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {notifications.length}
          </span>
        )}
      </div>
      {showNotifications && (
        <div className="dropdown-menu dropdown-menu-right show">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <a
                key={index}
                className={`dropdown-item ${notification.read ? 'read' : 'unread'}`}
                onClick={() => handleNotificationClick(index)}
              >
                <strong>{notification.donorUsername}</strong> {notification.message}
              </a>
            ))
          ) : (
            <p className='p-1 text-info'>You don't have any notifications</p>
          )}
        </div>
      )}
    </div>
   );
}

export default NotificationIcon;
