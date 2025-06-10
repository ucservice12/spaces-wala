import React, { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  actions?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  icon,
  actions 
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6">
      <div className="flex items-center">
        {icon && (
          <div className="mr-3 p-2 bg-primary-50 text-primary-600 rounded-lg">
            {icon}
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </div>
      {actions && <div className="mt-4 sm:mt-0">{actions}</div>}
    </div>
  );
};

export default PageHeader;