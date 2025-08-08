import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Briefcase, MapPin, Phone, FileText, Edit, Save, X } from 'lucide-react';

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Carrie Sanders',
    email: 'carrie_sanders@email.com',
    title: 'Principal Product Designer',
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
    bio: 'Product designer with 8+ years of experience creating user-centered digital experiences.'
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const inputClasses = "w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900";
  const textareaClasses = "w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 resize-none";

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      {/* Profile Header */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-white-500 to-black">
          <img
            src="https://c.SpacesWalacdn.com/demand/s/client/common/assets/tenant-avatar.cedc2f44.png"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.h1
          className="text-2xl font-bold text-gray-900 mb-1"
          layout
        >
          {isEditing ? editData.name : profileData.name}
        </motion.h1>
        <motion.p
          className="text-gray-600"
          layout
        >
          {isEditing ? editData.title : profileData.title}
        </motion.p>
      </div>

      {/* Profile Fields */}
      <div className="space-y-6">
        {/* Name Field */}
        <motion.div layout className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <User size={16} />
            <span className="text-sm font-medium">Name</span>
          </div>
          <AnimatePresence mode="wait">
            {isEditing ? (
              <motion.input
                key="name-edit"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                type="text"
                value={editData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={inputClasses}
              />
            ) : (
              <motion.div
                key="name-view"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="px-3 py-2 bg-gray-50 rounded-lg text-gray-900"
              >
                {profileData.name}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email Field */}
        <motion.div layout className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={16} />
            <span className="text-sm font-medium">Email</span>
          </div>
          <AnimatePresence mode="wait">
            {isEditing ? (
              <motion.input
                key="email-edit"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                type="email"
                value={editData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={inputClasses}
              />
            ) : (
              <motion.div
                key="email-view"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="px-3 py-2 bg-gray-50 rounded-lg text-gray-900"
              >
                {profileData.email}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title Field */}
          <motion.div layout className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase size={16} />
              <span className="text-sm font-medium">Title</span>
            </div>
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.input
                  key="title-edit"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  value={editData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className={inputClasses}
                />
              ) : (
                <motion.div
                  key="title-view"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-2 bg-gray-50 rounded-lg text-gray-900"
                >
                  {profileData.title}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Location Field */}
          <motion.div layout className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span className="text-sm font-medium">Location</span>
            </div>
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.input
                  key="location-edit"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  value={editData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className={inputClasses}
                />
              ) : (
                <motion.div
                  key="location-view"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-2 bg-gray-50 rounded-lg text-gray-900"
                >
                  {profileData.location}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Phone Field */}
        <motion.div layout className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={16} />
            <span className="text-sm font-medium">Phone</span>
          </div>
          <AnimatePresence mode="wait">
            {isEditing ? (
              <motion.input
                key="phone-edit"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                type="tel"
                value={editData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={inputClasses}
              />
            ) : (
              <motion.div
                key="phone-view"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="px-3 py-2 bg-gray-50 rounded-lg text-gray-900"
              >
                {profileData.phone}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bio Field */}
        <motion.div layout className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <FileText size={16} />
            <span className="text-sm font-medium">Bio</span>
          </div>
          <AnimatePresence mode="wait">
            {isEditing ? (
              <motion.textarea
                key="bio-edit"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                value={editData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows="3"
                className={textareaClasses}
              />
            ) : (
              <motion.div
                key="bio-view"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="px-3 py-2 bg-gray-50 rounded-lg text-gray-900"
              >
                {profileData.bio}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div layout className="mt-8">
        <AnimatePresence mode="wait">
          {isEditing ? (
            <motion.div
              key="edit-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCancel}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <X size={18} />
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Save size={18} />
                Save Changes
              </motion.button>
            </motion.div>
          ) : (
            <motion.button
              key="edit-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEdit}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Edit size={18} />
              Edit Profile
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
