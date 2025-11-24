import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
}

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
}

export const LeaderboardTable = ({ entries }: LeaderboardTableProps) => {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-warning" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-muted-foreground" />;
    if (rank === 3) return <Award className="h-5 w-5 text-warning/60" />;
    return null;
  };

  const getRankStyle = (rank: number) => {
    if (rank <= 3) return "bg-primary/5 font-semibold";
    return "";
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4 text-foreground">Top 30 Leaderboard</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-16 text-center font-semibold">Rank</TableHead>
              <TableHead className="font-semibold">Staff Name</TableHead>
              <TableHead className="text-right font-semibold">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.rank} className={getRankStyle(entry.rank)}>
                <TableCell className="text-center font-medium">
                  <div className="flex items-center justify-center gap-2">
                    {getRankIcon(entry.rank)}
                    <span>{entry.rank}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{entry.name}</TableCell>
                <TableCell className="text-right font-semibold text-primary">
                  {entry.points.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
