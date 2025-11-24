import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface CategoryData {
  name: string;
  points: number;
  percentage: number;
  color: string;
}

interface CategoryChartProps {
  categories: CategoryData[];
}

export const CategoryChart = ({ categories }: CategoryChartProps) => {
  const chartData = categories.map(cat => ({
    name: cat.name,
    value: cat.points,
    percentage: cat.percentage,
  }));

  const COLORS = categories.map(cat => cat.color);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg shadow-lg p-3">
          <p className="font-semibold text-foreground">{payload[0].name}</p>
          <p className="text-sm text-muted-foreground">
            Points: {payload[0].value.toLocaleString()}
          </p>
          <p className="text-sm text-primary font-semibold">
            {payload[0].payload.percentage}%
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="flex flex-col gap-2 mt-4">
        {payload.map((entry: any, index: number) => (
          <div key={`legend-${index}`} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="font-medium text-foreground">{entry.value}</span>
            </div>
            <span className="text-muted-foreground">
              {entry.payload.percentage}%
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className="p-6 w-fit mx-auto">
      <h2 className="text-xl font-bold mb-8 text-foreground">You & Your+1 Leaderboard</h2>
      <ResponsiveContainer width="100%" height={450}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="38%"
            labelLine={false}
            label={({ percentage }) => `${percentage}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};
