import { Card } from "@/components/ui/card";

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
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-6 text-foreground">Category Performance</h2>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">{category.name}</span>
              <span className="text-muted-foreground">
                {category.percentage}% ({category.points.toLocaleString()})
              </span>
            </div>
            <div className="h-8 bg-muted rounded-lg overflow-hidden">
              <div
                className="h-full transition-all duration-500 flex items-center justify-end pr-3 text-xs font-semibold text-white"
                style={{
                  width: `${category.percentage}%`,
                  backgroundColor: category.color,
                }}
              >
                {category.percentage > 10 && `${category.percentage}%`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
