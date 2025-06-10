import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { city: 'New York', listings: 342, views: 45872, inquiries: 1289 },
  { city: 'Los Angeles', listings: 214, views: 32651, inquiries: 876 },
  { city: 'Chicago', listings: 187, views: 27430, inquiries: 734 },
  { city: 'Houston', listings: 156, views: 21895, inquiries: 612 },
  { city: 'Miami', listings: 132, views: 28754, inquiries: 983 },
  { city: 'Seattle', listings: 109, views: 19427, inquiries: 543 },
];

const PropertyMetrics = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barSize={12}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="city" 
            scale="point" 
            padding={{ left: 15, right: 15 }}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#E0E0E0' }}
          />
          <YAxis 
            yAxisId="left"
            orientation="left"
            tickFormatter={(value) => value}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#E0E0E0' }}
            label={{ value: 'Listings', angle: -90, position: 'insideLeft', offset: -5, fontSize: 12, fill: '#666' }}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#E0E0E0' }}
            label={{ value: 'Views', angle: -90, position: 'insideRight', offset: 5, fontSize: 12, fill: '#666' }}
          />
          <Tooltip 
            formatter={(value, name) => {
              if (name === 'views') return [`${value.toLocaleString()}`, 'Views'];
              if (name === 'inquiries') return [`${value.toLocaleString()}`, 'Inquiries'];
              return [`${value}`, 'Listings'];
            }}
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              border: 'none'
            }}
          />
          <Legend iconType="circle" />
          <Bar 
            yAxisId="left" 
            dataKey="listings" 
            fill="#0D47A1" 
            radius={[10, 10, 0, 0]} 
          />
          <Bar 
            yAxisId="right" 
            dataKey="views" 
            fill="#00796B" 
            radius={[10, 10, 0, 0]} 
          />
          <Bar 
            yAxisId="right" 
            dataKey="inquiries" 
            fill="#FF5722" 
            radius={[10, 10, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PropertyMetrics;