interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Agent' | 'Customer';
  status: 'Active' | 'Inactive' | 'Suspended';
  lastActive: string;
  properties: number;
  avatar?: string;
}

export const mockUsers: User[] = [
  {
    id: 'user-001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
    lastActive: 'Today at 2:15 PM',
    properties: 0,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    id: 'user-002',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Agent',
    status: 'Active',
    lastActive: 'Today at 10:30 AM',
    properties: 24,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: 'user-003',
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    role: 'Agent',
    status: 'Active',
    lastActive: 'Yesterday at 5:42 PM',
    properties: 18,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    id: 'user-004',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'Customer',
    status: 'Active',
    lastActive: 'Yesterday at 2:15 PM',
    properties: 0,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  },
  {
    id: 'user-005',
    name: 'Robert Wilson',
    email: 'robert.wilson@example.com',
    role: 'Agent',
    status: 'Inactive',
    lastActive: '3 days ago',
    properties: 7,
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
  },
  {
    id: 'user-006',
    name: 'Sarah Brown',
    email: 'sarah.brown@example.com',
    role: 'Customer',
    status: 'Active',
    lastActive: 'Today at 1:05 PM',
    properties: 0,
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg'
  },
  {
    id: 'user-007',
    name: 'David Miller',
    email: 'david.miller@example.com',
    role: 'Agent',
    status: 'Suspended',
    lastActive: '2 weeks ago',
    properties: 3,
    avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg'
  },
  {
    id: 'user-008',
    name: 'Lisa Taylor',
    email: 'lisa.taylor@example.com',
    role: 'Customer',
    status: 'Active',
    lastActive: 'Today at 9:30 AM',
    properties: 0,
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
  },
  {
    id: 'user-009',
    name: 'James Anderson',
    email: 'james.anderson@example.com',
    role: 'Agent',
    status: 'Active',
    lastActive: 'Yesterday at 11:20 AM',
    properties: 15,
    avatar: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg'
  },
  {
    id: 'user-010',
    name: 'Jennifer White',
    email: 'jennifer.white@example.com',
    role: 'Admin',
    status: 'Active',
    lastActive: 'Today at 3:45 PM',
    properties: 0,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
  }
];