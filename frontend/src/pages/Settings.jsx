import React from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Switch } from "@/components/ui/Switch";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Brain, 
  Save,
  Trash2,
  Key
} from "lucide-react";

const Settings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title="Settings" 
        subtitle="Customize your LearnForge experience"
      />
      
      <main className="flex-1 p-6 space-y-6">
        {/* Profile Settings */}
        <Card className="bg-gradient-secondary border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Profile Settings
            </CardTitle>
            <CardDescription>
              Manage your personal information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Enter your full name" defaultValue="Alex Johnson" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" defaultValue="alex@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" placeholder="Tell us about yourself" defaultValue="Passionate learner exploring AI and web development" />
            </div>
            
            <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
              <Save className="h-4 w-4 mr-2" />
              Save Profile
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Preferences */}
          <Card className="bg-gradient-secondary border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Assistant Settings
              </CardTitle>
              <CardDescription>
                Configure your AI learning assistant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Smart Suggestions</div>
                  <div className="text-sm text-muted-foreground">Get AI-powered learning recommendations</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Auto-generate Flashcards</div>
                  <div className="text-sm text-muted-foreground">Automatically create flashcards from content</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Voice Responses</div>
                  <div className="text-sm text-muted-foreground">Enable text-to-speech for AI responses</div>
                </div>
                <Switch />
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label>AI Response Style</Label>
                <div className="flex gap-2">
                  <Badge variant="default" className="cursor-pointer">Detailed</Badge>
                  <Badge variant="outline" className="cursor-pointer">Concise</Badge>
                  <Badge variant="outline" className="cursor-pointer">Creative</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-gradient-secondary border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notifications
              </CardTitle>
              <CardDescription>
                Control when and how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Study Reminders</div>
                  <div className="text-sm text-muted-foreground">Daily study session reminders</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Achievement Alerts</div>
                  <div className="text-sm text-muted-foreground">Celebrate your learning milestones</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Content Updates</div>
                  <div className="text-sm text-muted-foreground">New features and content notifications</div>
                </div>
                <Switch />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Email Digest</div>
                  <div className="text-sm text-muted-foreground">Weekly learning progress summary</div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Preferences */}
        <Card className="bg-gradient-secondary border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-primary" />
              Learning Preferences
            </CardTitle>
            <CardDescription>
              Customize your learning experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Daily Study Goal (minutes)</Label>
                  <Input type="number" defaultValue="30" min="5" max="480" />
                </div>
                
                <div className="space-y-2">
                  <Label>Difficulty Preference</Label>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="cursor-pointer">Beginner</Badge>
                    <Badge variant="default" className="cursor-pointer">Intermediate</Badge>
                    <Badge variant="outline" className="cursor-pointer">Advanced</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Flashcard Review Frequency</Label>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="cursor-pointer">Daily</Badge>
                    <Badge variant="default" className="cursor-pointer">3x/week</Badge>
                    <Badge variant="outline" className="cursor-pointer">Weekly</Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Quiz Difficulty</Label>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="cursor-pointer">Easy</Badge>
                    <Badge variant="default" className="cursor-pointer">Mixed</Badge>
                    <Badge variant="outline" className="cursor-pointer">Hard</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Keys & Integrations */}
        <Card className="bg-gradient-secondary border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              API Keys & Integrations
            </CardTitle>
            <CardDescription>
              Configure external service connections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 bg-card/50 rounded-lg border border-border/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">OpenAI API</div>
                  <Badge variant="outline" className="text-green-500">Connected</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  Used for AI chat, summarization, and content generation
                </div>
                <Button variant="outline" size="sm">
                  Update Key
                </Button>
              </div>
              
              <div className="p-4 bg-card/50 rounded-lg border border-border/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Supabase</div>
                  <Badge variant="outline" className="text-green-500">Connected</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  Database and authentication services
                </div>
                <Button variant="outline" size="sm">
                  Manage Connection
                </Button>
              </div>
              
              <div className="p-4 bg-card/50 rounded-lg border border-border/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">YouTube API</div>
                  <Badge variant="outline" className="text-yellow-500">Not Connected</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  Extract and summarize YouTube video content
                </div>
                <Button variant="outline" size="sm">
                  Connect Service
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="bg-gradient-secondary border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Privacy & Security
            </CardTitle>
            <CardDescription>
              Manage your data and security preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Data Analytics</div>
                <div className="text-sm text-muted-foreground">Help improve LearnForge with usage data</div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Content Sharing</div>
                <div className="text-sm text-muted-foreground">Allow sharing of anonymized learning content</div>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div className="flex gap-2 pt-4">
              <Button variant="outline">
                Download My Data
              </Button>
              <Button variant="outline" className="text-red-500 hover:text-red-400">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Settings;