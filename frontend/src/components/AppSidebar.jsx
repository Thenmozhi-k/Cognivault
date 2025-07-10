import React from "react";
import { 
  Brain, 
  BookOpen, 
  MessageSquare, 
  BarChart3, 
  FileText, 
  Zap,
  Home,
  Settings,
  CreditCard
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: Home,
    description: "Overview and stats"
  },
  { 
    title: "Learning Modules", 
    url: "/modules", 
    icon: BookOpen,
    description: "Your saved content"
  },
  { 
    title: "AI Chat", 
    url: "/chat", 
    icon: MessageSquare,
    description: "Ask AI anything"
  },
  { 
    title: "Flashcards", 
    url: "/flashcards", 
    icon: Zap,
    description: "Review with cards"
  },
  { 
    title: "Summaries", 
    url: "/summaries", 
    icon: FileText,
    description: "Quick overviews"
  },
  { 
    title: "Progress", 
    url: "/progress", 
    icon: BarChart3,
    description: "Track your learning"
  },
];

const secondaryNav = [
  { 
    title: "Settings", 
    url: "/settings", 
    icon: Settings,
    description: "Configure app"
  },
  { 
    title: "Upgrade", 
    url: "/upgrade", 
    icon: CreditCard,
    description: "Get premium features"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isCollapsed = state === "collapsed";
  const isActive = (path) => currentPath === path;

  const getNavClasses = (path) => {
    const baseClasses = "w-full justify-start transition-all duration-200";
    if (isActive(path)) {
      return `${baseClasses} bg-gradient-primary text-primary-foreground glow-primary`;
    }
    return `${baseClasses} hover:bg-secondary/80 hover:text-foreground`;
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarHeader className="border-b border-border/50 p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-primary glow-primary">
            <Brain className="h-6 w-6 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                LearnForge
              </h1>
              <p className="text-xs text-muted-foreground">AI Learning Assistant</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold">
            {isCollapsed ? "•••" : "Learning"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                < SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink to={item.url} className={getNavClasses(item.url)}>
                      <item.icon className={`h-5 w-5 ${isActive(item.url) ? 'text-primary-foreground' : ''}`} />
                      {!isCollapsed && (
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-xs opacity-70">{item.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="text-primary font-semibold">
            {isCollapsed ? "•••" : "Account"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink to={item.url} className={getNavClasses(item.url)}>
                      <item.icon className={`h-5 w-5 ${isActive(item.url) ? 'text-primary-foreground' : ''}`} />
                      {!isCollapsed && (
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-xs opacity-70">{item.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 p-4">
        {!isCollapsed && (
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Status</div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-500 font-medium">AI Online</span>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}