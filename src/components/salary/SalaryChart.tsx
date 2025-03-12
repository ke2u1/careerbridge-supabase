
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SalaryChartProps {
  salary: number;
}

const SalaryChart = ({ salary }: SalaryChartProps) => {
  // Generate salary comparison data
  const generateComparisonData = (baseSalary: number) => {
    return [
      {
        name: 'Entry Level',
        salary: Math.floor(baseSalary * 0.7),
        fill: '#94a3b8',
      },
      {
        name: 'Mid Level',
        salary: Math.floor(baseSalary * 0.85),
        fill: '#64748b',
      },
      {
        name: 'Your Estimate',
        salary: baseSalary,
        fill: '#0EA5E9',
      },
      {
        name: 'Senior Level',
        salary: Math.floor(baseSalary * 1.2),
        fill: '#64748b',
      },
      {
        name: 'Lead',
        salary: Math.floor(baseSalary * 1.4),
        fill: '#94a3b8',
      },
    ];
  };

  const data = generateComparisonData(salary);

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            formatter={(value) => [`$${value.toLocaleString()}`, 'Salary']}
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
          />
          <Bar dataKey="salary" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryChart;
