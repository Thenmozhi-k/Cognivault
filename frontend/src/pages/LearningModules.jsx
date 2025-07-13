import React from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, FileText, Video, Globe, Calendar, Clock, Star } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Advanced React Patterns",
    description: "Learn about compound components, render props, and custom hooks",
    source: "YouTube Video",
    type: "video",
    progress: 75,
    difficulty: "Advanced",
    estimatedTime: "2h 30m",
    rating: 4.8,
    dateAdded: "2 days ago",
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    description: "Introduction to supervised and unsupervised learning algorithms",
    source: "Research Paper (PDF)",
    type: "pdf",
    progress: 45,
    difficulty: "Intermediate",
    estimatedTime: "1h 45m",
    rating: 4.6,
    dateAdded: "1 week ago",
    tags: ["AI", "Python", "Data Science"]
  },
  {
    id: 3,
    title: "Web Accessibility Best Practices",
    description: "Creating inclusive web experiences for all users",
    source: "MDN Web Docs",
    type: "article",
    progress: 100,
    difficulty: "Beginner",
    estimatedTime: "45m",
    rating: 4.9,
    dateAdded: "3 days ago",
    tags: ["Accessibility", "HTML", "CSS"]
  },
  {
    id: 4,
    title: "GraphQL vs REST APIs",
    description: "Comparing modern API design approaches and their trade-offs",
    source: "Blog Post",
    type: "article",
    progress: 0,
    difficulty: "Intermediate",
    estimatedTime: "1h 15m",
    rating: 4.7,
    dateAdded: "5 hours ago",
    tags: ["API", "GraphQL", "Backend"]
  }
];

const getTypeIcon = (type) => {
  switch (type) {
    case "video": return <Video className="h-4 w-4" />;
    case "pdf": return <FileText className="h-4 w-4" />;
    case "article": return <Globe className="h-4 w-4" />;
    default: return <BookOpen className="h-4 w-4" />;
  }
};

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case "Beginner": return "bg-green-500/20 text-green-500";
    case "Intermediate": return "bg-yellow-500/20 text-yellow-500";
    case "Advanced": return "bg-red-500/20 text-red-500";
    default: return "bg-gray-500/20 text-gray-500";
  }
};

const LearningModules = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title="Learning Modules" 
        subtitle="Manage and review your saved learning content"
        actions={
          <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
            <FileText className="h-4 w-4 mr-2" />
            Import Content
          </Button>
        }
      />
      
      <main className="flex-1 p-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{modules.length}</div>
              <div className="text-sm text-muted-foreground">Total Modules</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-500">
                {modules.filter(m => m.progress === 100).length}
              </div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-500">
                {modules.filter(m => m.progress > 0 && m.progress < 100).length}
              </div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-500">
                {Math.round(modules.reduce((acc, m) => acc + m.rating, 0) / modules.length * 10) / 10}
              </div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modules.map((module) => (
            <Card key={module.id} className="card-hover bg-gradient-secondary border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(module.type)}
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </div>
                  <Badge className={getDifficultyColor(module.difficulty)}>
                    {module.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {module.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300 glow-primary"
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {module.estimatedTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500" />
                    {module.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {module.dateAdded}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {module.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Source */}
                <div className="text-sm text-muted-foreground">
                  Source: {module.source}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    className="flex-1 bg-gradient-primary hover:opacity-90 glow-primary"
                    size="sm"
                  >
                    {module.progress === 100 ? "Review" : module.progress > 0 ? "Continue" : "Start"}
                  </Button>
                  <Button variant="outline" size="sm">
                    Generate Quiz
                  </Button>
                  <Button variant="outline" size="sm">
                    Create Cards
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LearningModules;