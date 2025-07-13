import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { RotateCcw, Eye, EyeOff, Star, Clock, Brain } from "lucide-react";

const flashcardSets = [
  {
    id: 1,
    title: "React Hooks",
    description: "Essential React hooks and their use cases",
    cardCount: 24,
    studiedToday: 8,
    difficulty: "Intermediate",
    lastStudied: "2 hours ago",
    mastery: 75,
    tags: ["React", "JavaScript"]
  },
  {
    id: 2,
    title: "Machine Learning Terms",
    description: "Key terminology in ML and data science",
    cardCount: 45,
    studiedToday: 0,
    difficulty: "Advanced",
    lastStudied: "3 days ago",
    mastery: 60,
    tags: ["ML", "Data Science"]
  },
  {
    id: 3,
    title: "CSS Grid & Flexbox",
    description: "Layout properties and their applications",
    cardCount: 18,
    studiedToday: 18,
    difficulty: "Beginner",
    lastStudied: "1 hour ago",
    mastery: 90,
    tags: ["CSS", "Layout"]
  }
];

const sampleCards = [
  {
    id: 1,
    front: "What is the useEffect hook used for?",
    back: "useEffect is used for side effects in functional components, such as data fetching, subscriptions, or DOM manipulation. It runs after render and can optionally clean up."
  },
  {
    id: 2,
    front: "What is the difference between useState and useReducer?",
    back: "useState is for simple state management, while useReducer is better for complex state logic with multiple sub-values or when the next state depends on the previous one."
  },
  {
    id: 3,
    front: "When should you use useCallback?",
    back: "useCallback should be used to memoize functions to prevent unnecessary re-renders of child components, especially when passing functions as props."
  }
];

const Flashcards = () => {
  const [selectedSet, setSelectedSet] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studyMode, setStudyMode] = useState(false);

  const startStudySession = (setId) => {
    setSelectedSet(setId);
    setStudyMode(true);
    setCurrentCardIndex(0);
    setShowAnswer(false);
  };

  const nextCard = () => {
    if (currentCardIndex < sampleCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
    }
  };

  const exitStudyMode = () => {
    setStudyMode(false);
    setSelectedSet(null);
    setCurrentCardIndex(0);
    setShowAnswer(false);
  };

  if (studyMode && selectedSet) {
    const currentCard = sampleCards[currentCardIndex];
    
    return (
      <div className="flex flex-col min-h-screen">
        <Header 
          title="Study Mode" 
          subtitle={`React Hooks - Card ${currentCardIndex + 1} of ${sampleCards.length}`}
          actions={
            <Button variant="outline" onClick={exitStudyMode}>
              Exit Study Mode
            </Button>
          }
        />
        
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="w-full max-w-2xl space-y-6">
            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Study Progress</span>
                <span>{currentCardIndex + 1}/{sampleCards.length}</span>
              </div>
              <Progress value={((currentCardIndex + 1) / sampleCards.length) * 100} className="h-2" />
            </div>

            {/* Flashcard */}
            <Card 
              className="h-96 cursor-pointer card-hover bg-gradient-secondary border-border/50 relative overflow-hidden"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
              <CardContent className="h-full flex flex-col items-center justify-center p-8 text-center relative z-10">
                <div className="mb-4">
                  <Badge variant="outline" className="mb-2">
                    {showAnswer ? "Answer" : "Question"}
                  </Badge>
                </div>
                
                <div className="text-lg leading-relaxed">
                  {showAnswer ? currentCard.back : currentCard.front}
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  {showAnswer ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  Click to {showAnswer ? "hide" : "reveal"} answer
                </div>
              </CardContent>
            </Card>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <Button 
                variant="outline" 
                onClick={prevCard}
                disabled={currentCardIndex === 0}
              >
                Previous
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowAnswer(!showAnswer)}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Flip Card
                </Button>
              </div>
              
              <Button 
                className="bg-gradient-primary hover:opacity-90 glow-primary"
                onClick={nextCard}
                disabled={currentCardIndex === sampleCards.length - 1}
              >
                Next
              </Button>
            </div>

            {/* Difficulty Rating */}
            {showAnswer && (
              <Card className="bg-gradient-secondary border-border/50">
                <CardContent className="p-4">
                  <div className="text-center mb-3">
                    <p className="text-sm text-muted-foreground">How well did you know this?</p>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" size="sm" className="text-red-500">
                      Hard
                    </Button>
                    <Button variant="outline" size="sm" className="text-yellow-500">
                      Medium
                    </Button>
                    <Button variant="outline" size="sm" className="text-green-500">
                      Easy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title="Flashcards" 
        subtitle="Review and practice with AI-generated flashcards"
        actions={
          <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
            <Brain className="h-4 w-4 mr-2" />
            Generate New Set
          </Button>
        }
      />
      
      <main className="flex-1 p-6 space-y-6">
        {/* Study Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {flashcardSets.reduce((acc, set) => acc + set.cardCount, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Cards</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-500">
                {flashcardSets.reduce((acc, set) => acc + set.studiedToday, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Studied Today</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-500">
                {flashcardSets.length}
              </div>
              <div className="text-sm text-muted-foreground">Active Sets</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-500">
                {Math.round(flashcardSets.reduce((acc, set) => acc + set.mastery, 0) / flashcardSets.length)}%
              </div>
              <div className="text-sm text-muted-foreground">Avg Mastery</div>
            </CardContent>
          </Card>
        </div>

        {/* Flashcard Sets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {flashcardSets.map((set) => (
            <Card key={set.id} className="card-hover bg-gradient-secondary border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{set.title}</CardTitle>
                  <Badge variant="outline">
                    {set.cardCount} cards
                  </Badge>
                </div>
                <CardDescription>
                  {set.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Mastery Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Mastery</span>
                    <span>{set.mastery}%</span>
                  </div>
                  <Progress value={set.mastery} className="h-2" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-2 bg-card/50 rounded">
                    <div className="font-medium text-green-500">{set.studiedToday}</div>
                    <div className="text-muted-foreground">Today</div>
                  </div>
                  <div className="text-center p-2 bg-card/50 rounded">
                    <div className="font-medium">{set.difficulty}</div>
                    <div className="text-muted-foreground">Level</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>Last studied {set.lastStudied}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {set.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    className="flex-1 bg-gradient-primary hover:opacity-90 glow-primary"
                    size="sm"
                    onClick={() => startStudySession(set.id)}
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Study
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit
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

export default Flashcards;