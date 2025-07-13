import React, { useState, useRef, useEffect } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Send, Mic, MicOff, Brain, User, Copy, ThumbsUp, ThumbsDown } from "lucide-react";

const suggestedQuestions = [
  "Explain machine learning in simple terms",
  "Help me understand React hooks",
  "What's the difference between SQL and NoSQL?",
  "Best practices for API design",
  "How does blockchain technology work?",
  "Explain async/await in JavaScript"
];

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI learning assistant. I can help you understand complex topics, answer questions, create study materials, and guide your learning journey. What would you like to learn about today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Great question about "${input}". Let me help you understand this topic better. This is a mock response - in a real implementation, this would connect to your AI service of choice (OpenAI, Claude, etc.) to provide intelligent, contextual responses based on your learning materials and progress.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSuggestedQuestion = (question) => {
    setInput(question);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real implementation, this would handle voice recording
  };

  return (
    <div className="flex flex-col h-screen">
      <Header 
        title="AI Chat Assistant" 
        subtitle="Get instant answers and personalized learning guidance"
      />
      
      <div className="flex-1 flex flex-col p-6 gap-6 overflow-hidden">
        {/* Suggested Questions */}
        {messages.length === 1 && (
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-4">
              <h3 className="text-sm font-medium mb-3 text-foreground">Suggested questions to get started:</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 glow-primary">
                      <Brain className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] ${message.role === "user" ? "order-1" : ""}`}>
                    <div className={`chat-bubble ${message.role === "user" ? "chat-bubble-user" : "chat-bubble-ai"}`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    
                    <div className={`flex items-center gap-2 mt-1 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                      
                      {message.role === "assistant" && (
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <ThumbsUp className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <ThumbsDown className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 glow-primary">
                    <Brain className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="chat-bubble chat-bubble-ai">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Input Area */}
        <Card className="bg-gradient-secondary border-border/50">
          <CardContent className="p-4">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about your learning materials..."
                  className="pr-12 bg-background"
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className={`absolute right-1 top-1 h-8 w-8 p-0 ${isRecording ? "text-red-500" : ""}`}
                  onClick={toggleRecording}
                >
                  {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
              </div>
              
              <Button 
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="bg-gradient-primary hover:opacity-90 glow-primary"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                AI Assistant Online
              </div>
              
              <div className="text-xs text-muted-foreground">
                Press Enter to send • {isRecording ? "Recording..." : "Click mic for voice input"}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIChat;