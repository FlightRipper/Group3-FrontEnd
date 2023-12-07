import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function NotificationIcon() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = io.connect();

    socket.on('notifications', (notification) => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        notification,
      ]);
    });
console.log(notifications);
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="notification-icon">
      <button
        className="notification-button bg-transparent border-0 nav-link"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <i className="bi bi-bell-fill h5"></i>
        {notifications.length > 0 && (
          <span className='nav-link'>{notifications.length}</span>
        )}
      </button>
      {showNotifications && (
        <div className="dropdown-menu dropdown-menu-right show">
          {notifications.map((notification, index) => (
            <a key={index} className="dropdown-item" href="#">
              {notification}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default NotificationIcon;
