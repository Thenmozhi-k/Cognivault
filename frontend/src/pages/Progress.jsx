import React from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Progress as ProgressBar } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { TrendingUp, Target, Calendar, Award, Clock, Brain, BookOpen, Zap } from "lucide-react";

const progressData = {
  weeklyGoal: {
    target: 20,
    completed: 14,
    activities: [
      { name: "Study Sessions", completed: 5, target: 7 },
      { name: "Flashcard Reviews", completed: 8, target: 10 },
      { name: "AI Conversations", completed: 1, target: 3 }
    ]
  },
  monthlyStats: {
    contentConsumed: 45,
    flashcardsCreated: 156,
    quizzesTaken: 12,
    aiChats: 23,
    studyStreak: 7,
    totalStudyTime: "18.5 hours"
  },
  skillProgress: [
    { skill: "React Development", level: 85, trend: "+15%" },
    { skill: "Machine Learning", level: 65, trend: "+25%" },
    { skill: "CSS/Design", level: 78, trend: "+8%" },
    { skill: "API Development", level: 72, trend: "+12%" },
    { skill: "Database Design", level: 56, trend: "+18%" }
  ],
  recentAchievements: [
    {
      title: "Week Warrior",
      description: "Completed 7 consecutive days of study",
      earnedAt: "2 hours ago",
      icon: Award,
      color: "text-yellow-500"
    },
    {
      title: "Quiz Master",
      description: "Scored 90%+ on 5 consecutive quizzes",
      earnedAt: "1 day ago",
      icon: Target,
      color: "text-green-500"
    },
    {
      title: "AI Conversationalist",
      description: "Had 20+ meaningful AI conversations",
      earnedAt: "3 days ago",
      icon: Brain,
      color: "text-purple-500"
    }
  ]
};

const studyHeatmap = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 1.8 },
  { day: "Wed", hours: 3.2 },
  { day: "Thu", hours: 2.1 },
  { day: "Fri", hours: 2.8 },
  { day: "Sat", hours: 1.5 },
  { day: "Sun", hours: 4.6 }
];

const Progress = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title="Learning Progress" 
        subtitle="Track your learning journey and achievements"
      />
      
      <main className="flex-1 p-6 space-y-6">
        {/* Weekly Goal Progress */}
        <Card className="bg-gradient-secondary border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Weekly Learning Goal
            </CardTitle>
            <CardDescription>
              Track your weekly study targets and stay consistent
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Overall Progress</span>
                <span className="text-muted-foreground">
                  {progressData.weeklyGoal.completed}/{progressData.weeklyGoal.target} activities
                </span>
              </div>
              <ProgressBar 
                value={(progressData.weeklyGoal.completed / progressData.weeklyGoal.target) * 100} 
                className="h-3"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {progressData.weeklyGoal.activities.map((activity, index) => (
                <div key={index} className="p-3 bg-card/50 rounded-lg border border-border/30">
                  <div className="text-sm font-medium mb-1">{activity.name}</div>
                  <div className="text-xs text-muted-foreground mb-2">
                    {activity.completed}/{activity.target}
                  </div>
                  <ProgressBar 
                    value={(activity.completed / activity.target) * 100} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Study Time Heatmap */}
          <Card className="bg-gradient-secondary border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                This Week's Study Time
              </CardTitle>
              <CardDescription>
                Daily study hours breakdown
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {studyHeatmap.map((day, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 text-sm text-muted-foreground">{day.day}</div>
                    <div className="flex-1 bg-muted rounded-full h-6 relative overflow-hidden">
                      <div 
                        className="bg-gradient-primary h-full rounded-full transition-all duration-500 glow-primary"
                        style={{ width: `${(day.hours / 5) * 100}%` }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                        {day.hours}h
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="bg-gradient-secondary border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Recent Achievements
              </CardTitle>
              <CardDescription>
                Your latest learning milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {progressData.recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-card/50 rounded-lg border border-border/30">
                    <div className={`p-2 rounded-full bg-card ${achievement.color}`}>
                      <achievement.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                      <div className="text-xs text-muted-foreground mt-1">{achievement.earnedAt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Statistics */}
        <Card className="bg-gradient-secondary border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Monthly Statistics
            </CardTitle>
            <CardDescription>
              Your learning activity summary for this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/30">
                <BookOpen className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{progressData.monthlyStats.contentConsumed}</div>
                <div className="text-xs text-muted-foreground">Content Pieces</div>
              </div>
              
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/30">
                <Zap className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{progressData.monthlyStats.flashcardsCreated}</div>
                <div className="text-xs text-muted-foreground">Flashcards</div>
              </div>
              
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/30">
                <Target className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{progressData.monthlyStats.quizzesTaken}</div>
                <div className="text-xs text-muted-foreground">Quizzes</div>
              </div>
              
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/30">
                <Brain className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{progressData.monthlyStats.aiChats}</div>
                <div className="text-xs text-muted-foreground">AI Chats</div>
              </div>
              
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/30">
                <Calendar className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{progressData.monthlyStats.studyStreak}</div>
                <div className="text-xs text-muted-foreground">Day Streak</div>
              </div>
              
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/30">
                <Clock className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{progressData.monthlyStats.totalStudyTime}</div>
                <div className="text-xs text-muted-foreground">Study Time</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skill Progress */}
        <Card className="bg-gradient-secondary border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Skill Development
            </CardTitle>
            <CardDescription>
              Track your progress across different learning areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {progressData.skillProgress.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{skill.skill}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-green-500">
                        {skill.trend}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                  </div>
                  <ProgressBar value={skill.level} className="h-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Progress;