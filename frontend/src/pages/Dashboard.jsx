import React from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import { Brain, BookOpen, Zap, FileText, TrendingUp, Clock, Star, Target } from "lucide-react";

const stats = [
  {
    title: "Learning Modules",
    value: "24",
    change: "+3 this week",
    icon: BookOpen,
    color: "text-blue-500"
  },
  {
    title: "Flashcards Created",
    value: "156",
    change: "+12 today",
    icon: Zap,
    color: "text-yellow-500"
  },
  {
    title: "AI Summaries",
    value: "42",
    change: "+8 this week",
    icon: FileText,
    color: "text-green-500"
  },
  {
    title: "Study Streak",
    value: "7 days",
    change: "Personal best!",
    icon: TrendingUp,
    color: "text-purple-500"
  },
];

const recentActivity = [
  {
    title: "Completed React Hooks Quiz",
    time: "2 hours ago",
    score: "95%",
    type: "quiz"
  },
  {
    title: "Summarized 'Advanced TypeScript' article",
    time: "4 hours ago",
    score: null,
    type: "summary"
  },
  {
    title: "Reviewed JavaScript Flashcards",
    time: "1 day ago",
    score: "87%",
    type: "flashcards"
  },
  {
    title: "Chat with AI about Python decorators",
    time: "2 days ago",
    score: null,
    type: "chat"
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title="Dashboard" 
        subtitle="Welcome back! Ready to continue your learning journey?"
      />
      
      <main className="flex-1 p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="card-hover bg-gradient-secondary border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Learning Progress */}
          <Card className="lg:col-span-2 bg-gradient-secondary border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Today's Learning Goals
              </CardTitle>
              <CardDescription>
                Track your daily progress and maintain your streak
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Read 2 articles</span>
                  <span className="text-muted-foreground">1/2</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Complete 1 quiz</span>
                  <span className="text-muted-foreground">1/1</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Review flashcards (15 min)</span>
                  <span className="text-muted-foreground">0/15</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>AI chat session</span>
                  <span className="text-muted-foreground">0/1</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gradient-secondary border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Start learning with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-gradient-primary hover:opacity-90 glow-primary">
                <Brain className="h-4 w-4 mr-2" />
                Ask AI Anything
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Summarize Content
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Zap className="h-4 w-4 mr-2" />
                Generate Flashcards
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="h-4 w-4 mr-2" />
                Create Quiz
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-gradient-secondary border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Your latest learning activities and achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      activity.type === "quiz" ? "bg-purple-500/20 text-purple-500" :
                      activity.type === "summary" ? "bg-green-500/20 text-green-500" :
                      activity.type === "flashcards" ? "bg-yellow-500/20 text-yellow-500" :
                      "bg-blue-500/20 text-blue-500"
                    }`}>
                      {activity.type === "quiz" && <Target className="h-4 w-4" />}
                      {activity.type === "summary" && <FileText className="h-4 w-4" />}
                      {activity.type === "flashcards" && <Zap className="h-4 w-4" />}
                      {activity.type === "chat" && <Brain className="h-4 w-4" />}
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  
                  {activity.score && (
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium">{activity.score}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;