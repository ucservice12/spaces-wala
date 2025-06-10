import Notification from '../models/notificationModel.js';
import { emitNotification } from './socketHandler.js';

const createNotification = async ({
  userId,
  title,
  message,
  type,
  relatedProperty = null,
  relatedEnquiry = null,
  priority = 'medium',
}) => {
  try {
    const notification = new Notification({
      user: userId,
      title,
      message,
      type,
      relatedProperty,
      relatedEnquiry,
      priority,
    });

    const savedNotification = await notification.save();
    
    // Emit the notification through socket
    emitNotification(userId, savedNotification);

    return savedNotification;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

export default createNotification;