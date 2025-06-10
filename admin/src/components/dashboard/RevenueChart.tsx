import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 55000 },
  { month: 'Jun', revenue: 67000 },
  { month: 'Jul', revenue: 72000 },
  { month: 'Aug', revenue: 85000 },
  { month: 'Sep', revenue: 91000 },
  { month: 'Oct', revenue: 99000 },
  { month: 'Nov', revenue: 111000 },
  { month: 'Dec', revenue: 126384 },
];

const RevenueChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0D47A1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0D47A1" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#E0E0E0' }}
          />
          <YAxis
            tickFormatter={(value) => `$${value / 1000}k`}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#E0E0E0' }}
          />
          <Tooltip
            formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              border: 'none'
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#0D47A1"
            fillOpacity={1}
            fill="url(#colorRevenue)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;