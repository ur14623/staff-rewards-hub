import { SummaryCard } from "@/components/SummaryCard";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { CategoryChart } from "@/components/CategoryChart";
import { TrendingUp, Users, Target, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const leaderboardData = [
    { rank: 1, name: "Helen Mirren", points: 45200 },
    { rank: 2, name: "John Smith", points: 42150 },
    { rank: 3, name: "Maria Garcia", points: 38900 },
    { rank: 4, name: "David Brown", points: 36750 },
    { rank: 5, name: "Sarah Chen", points: 34200 },
    { rank: 6, name: "Mike Johnson", points: 31800 },
    { rank: 7, name: "Lisa Wang", points: 29450 },
    { rank: 8, name: "Tom Wilson", points: 27100 },
    { rank: 9, name: "Anna Davis", points: 24750 },
    { rank: 10, name: "James Miller", points: 22400 },
    { rank: 11, name: "Emma Thompson", points: 21950 },
    { rank: 12, name: "Robert Lee", points: 21500 },
    { rank: 13, name: "Sophie Martin", points: 21050 },
    { rank: 14, name: "Daniel White", points: 20600 },
    { rank: 15, name: "Jennifer Taylor", points: 20150 },
    { rank: 16, name: "Chris Anderson", points: 19700 },
    { rank: 17, name: "Laura Martinez", points: 19250 },
    { rank: 18, name: "Kevin Jackson", points: 18800 },
    { rank: 19, name: "Rachel Green", points: 18350 },
    { rank: 20, name: "Steven Harris", points: 17900 },
    { rank: 21, name: "Michelle Clark", points: 17450 },
    { rank: 22, name: "Brian Lewis", points: 17000 },
    { rank: 23, name: "Patricia Walker", points: 16550 },
    { rank: 24, name: "George Hall", points: 16100 },
    { rank: 25, name: "Nancy Allen", points: 15650 },
    { rank: 26, name: "Paul Young", points: 15200 },
    { rank: 27, name: "Karen King", points: 14750 },
    { rank: 28, name: "Mark Wright", points: 14300 },
    { rank: 29, name: "Linda Scott", points: 13850 },
    { rank: 30, name: "Michael Chen", points: 18400 },
  ];

  const categoryData = [
    { name: "Fuel", points: 399000, percentage: 32, color: "hsl(217, 91%, 60%)" },
    { name: "HORECA", points: 225000, percentage: 18, color: "hsl(142, 71%, 45%)" },
    { name: "Supermarket", points: 312000, percentage: 25, color: "hsl(32, 95%, 44%)" },
    { name: "Coffee", points: 100000, percentage: 8, color: "hsl(280, 60%, 55%)" },
    { name: "Daily Use", points: 187000, percentage: 15, color: "hsl(340, 82%, 52%)" },
    { name: "QR Code", points: 25000, percentage: 2, color: "hsl(215, 16%, 47%)" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Staff Rewards Leaderboard</h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="text-sm font-semibold text-foreground">
                {currentTime.toLocaleString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </p>
              <p className="text-xs text-success mt-1">● Auto-Refresh ON</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SummaryCard
            title="Total Points"
            value="1,248,500"
            subtitle="+12,450 today"
            icon={TrendingUp}
            trend="up"
          />
          <SummaryCard
            title="Participants"
            value="185 / 200"
            subtitle="92.5% active"
            icon={Users}
            trend="up"
          />
          <SummaryCard
            title="Avg Points"
            value="6,742"
            subtitle="Top: 45,200"
            icon={Target}
            trend="neutral"
          />
          <SummaryCard
            title="Campaign Days"
            value="52 / 90"
            subtitle="57.8% done"
            icon={Calendar}
            trend="neutral"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LeaderboardTable entries={leaderboardData} />
          </div>
          <div>
            <CategoryChart categories={categoryData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
