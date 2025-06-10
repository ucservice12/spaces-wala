interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyInterest: string;
  budget: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Converted' | 'Lost';
  priority: 'high' | 'medium' | 'low';
  createdAt: string;
  assignedTo: {
    name: string;
    avatar?: string;
  };
}

export const mockLeads: Lead[] = [
  {
    id: 'lead-001',
    name: 'Emma Thompson',
    email: 'emma.thompson@example.com',
    phone: '(555) 123-4567',
    propertyInterest: 'Luxury Apartment',
    budget: '$500,000 - $700,000',
    status: 'New',
    priority: 'high',
    createdAt: 'Jun 10, 2023',
    assignedTo: {
      name: 'Jane Smith',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    }
  },
  {
    id: 'lead-002',
    name: 'Daniel Wilson',
    email: 'daniel.wilson@example.com',
    phone: '(555) 234-5678',
    propertyInterest: 'Family Home',
    budget: '$350,000 - $450,000',
    status: 'Contacted',
    priority: 'medium',
    createdAt: 'Jun 8, 2023',
    assignedTo: {
      name: 'Michael Johnson',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    }
  },
  {
    id: 'lead-003',
    name: 'Sophie Martinez',
    email: 'sophie.martinez@example.com',
    phone: '(555) 345-6789',
    propertyInterest: 'Beach House',
    budget: '$800,000 - $1,000,000',
    status: 'Qualified',
    priority: 'high',
    createdAt: 'Jun 5, 2023',
    assignedTo: {
      name: 'Jane Smith',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    }
  },
  {
    id: 'lead-004',
    name: 'Thomas Brown',
    email: 'thomas.brown@example.com',
    phone: '(555) 456-7890',
    propertyInterest: 'Studio Apartment',
    budget: '$150,000 - $200,000',
    status: 'Converted',
    priority: 'low',
    createdAt: 'Jun 3, 2023',
    assignedTo: {
      name: 'James Anderson',
      avatar: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg'
    }
  },
  {
    id: 'lead-005',
    name: 'Olivia Davis',
    email: 'olivia.davis@example.com',
    phone: '(555) 567-8901',
    propertyInterest: 'Commercial Space',
    budget: '$1,200,000 - $1,500,000',
    status: 'Contacted',
    priority: 'high',
    createdAt: 'May 29, 2023',
    assignedTo: {
      name: 'Robert Wilson',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    }
  },
  {
    id: 'lead-006',
    name: 'William Taylor',
    email: 'william.taylor@example.com',
    phone: '(555) 678-9012',
    propertyInterest: 'Mountain Cabin',
    budget: '$300,000 - $400,000',
    status: 'Lost',
    priority: 'low',
    createdAt: 'May 25, 2023',
    assignedTo: {
      name: 'Jane Smith',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    }
  },
  {
    id: 'lead-007',
    name: 'Isabella Anderson',
    email: 'isabella.anderson@example.com',
    phone: '(555) 789-0123',
    propertyInterest: 'Penthouse',
    budget: '$900,000 - $1,200,000',
    status: 'Qualified',
    priority: 'high',
    createdAt: 'May 22, 2023',
    assignedTo: {
      name: 'Michael Johnson',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    }
  },
  {
    id: 'lead-008',
    name: 'James Miller',
    email: 'james.miller@example.com',
    phone: '(555) 890-1234',
    propertyInterest: 'Townhouse',
    budget: '$400,000 - $550,000',
    status: 'Contacted',
    priority: 'medium',
    createdAt: 'May 18, 2023',
    assignedTo: {
      name: 'Robert Wilson',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    }
  },
  {
    id: 'lead-009',
    name: 'Charlotte Wilson',
    email: 'charlotte.wilson@example.com',
    phone: '(555) 901-2345',
    propertyInterest: 'Lakefront Property',
    budget: '$600,000 - $800,000',
    status: 'New',
    priority: 'medium',
    createdAt: 'May 15, 2023',
    assignedTo: {
      name: 'James Anderson',
      avatar: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg'
    }
  },
  {
    id: 'lead-010',
    name: 'Benjamin White',
    email: 'benjamin.white@example.com',
    phone: '(555) 012-3456',
    propertyInterest: 'Investment Property',
    budget: '$250,000 - $350,000',
    status: 'Converted',
    priority: 'high',
    createdAt: 'May 10, 2023',
    assignedTo: {
      name: 'Jane Smith',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    }
  }
];