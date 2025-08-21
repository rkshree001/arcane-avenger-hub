import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Users, 
  Crown, 
  MessageSquare, 
  Calendar, 
  Trophy, 
  Star,
  Shield,
  Sword,
  Plus,
  Search,
  Settings
} from 'lucide-react';

const GuildModule = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const currentGuild = {
    name: 'Order of the Magical Avengers',
    level: 42,
    members: 156,
    maxMembers: 200,
    description: 'Elite guild combining magical prowess with superhero abilities',
    founded: '2023-03-15',
    rating: 4.8,
    achievements: 23,
    leader: 'Hermione Stark',
    officers: ['Tony Granger', 'Steve Strange', 'Natasha Potter']
  };

  const guildMembers = [
    {
      name: 'Hermione Stark',
      role: 'Guild Leader',
      level: 87,
      house: 'Gryffindor',
      team: 'Avengers',
      avatar: 'HS',
      lastActive: '2 hours ago',
      contribution: 1240
    },
    {
      name: 'Tony Granger',
      role: 'Officer',
      level: 85,
      house: 'Ravenclaw',
      team: 'Avengers',
      avatar: 'TG',
      lastActive: '1 hour ago',
      contribution: 1180
    },
    {
      name: 'Steve Strange',
      role: 'Officer',
      level: 82,
      house: 'Gryffindor',
      team: 'Avengers',
      avatar: 'SS',
      lastActive: '30 minutes ago',
      contribution: 1095
    },
    {
      name: 'Natasha Potter',
      role: 'Officer',
      level: 80,
      house: 'Slytherin',
      team: 'Avengers',
      avatar: 'NP',
      lastActive: '4 hours ago',
      contribution: 1032
    },
    {
      name: 'Peter Weasley',
      role: 'Elite Member',
      level: 78,
      house: 'Hufflepuff',
      team: 'Guardians',
      avatar: 'PW',
      lastActive: '1 day ago',
      contribution: 945
    },
    {
      name: 'Luna Banner',
      role: 'Member',
      level: 75,
      house: 'Ravenclaw',
      team: 'X-Men',
      avatar: 'LB',
      lastActive: '6 hours ago',
      contribution: 867
    }
  ];

  const guildEvents = [
    {
      id: 1,
      title: 'Guild War: Mystic Battles',
      type: 'Competition',
      date: '2024-01-25',
      time: '20:00 UTC',
      participants: 45,
      rewards: ['Guild Badge', '500 XP', 'Rare Artifacts']
    },
    {
      id: 2,
      title: 'Spell Training Session',
      type: 'Training',
      date: '2024-01-23',
      time: '18:00 UTC',
      participants: 28,
      rewards: ['Skill Points', 'Training Certificate']
    },
    {
      id: 3,
      title: 'Team Building Quest',
      type: 'Social',
      date: '2024-01-27',
      time: '19:00 UTC',
      participants: 67,
      rewards: ['Team Bonuses', 'Special Emotes']
    }
  ];

  const guildAchievements = [
    { name: 'Dragon Slayers', description: 'Defeated 100 dragons as a guild', icon: '🐉' },
    { name: 'Master Collaborators', description: 'Completed 500 team quests', icon: '🤝' },
    { name: 'Elite Warriors', description: 'Guild average level above 70', icon: '⚔️' },
    { name: 'Spell Masters', description: 'Mastered 1000+ spells collectively', icon: '✨' },
    { name: 'Hero Alliance', description: 'Allied with 10+ superhero teams', icon: '🦸' }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Guild Leader': return 'bg-primary/20 text-primary border-primary';
      case 'Officer': return 'bg-hero-blue/20 text-hero-blue border-hero-blue';
      case 'Elite Member': return 'bg-accent/20 text-accent border-accent';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Competition': return 'bg-destructive/20 text-destructive';
      case 'Training': return 'bg-hero-blue/20 text-hero-blue';
      case 'Social': return 'bg-magic-green/20 text-magic-green';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="magic-card">
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-8 w-8 text-magic-green" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-magic-green to-hero-blue bg-clip-text text-transparent">
            Guild Hall
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Connect with fellow heroes and wizards in your guild
        </p>
      </div>

      {/* Guild Overview */}
      <Card className="magic-card">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{currentGuild.name}</h2>
              <p className="text-muted-foreground">{currentGuild.description}</p>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <span>Level {currentGuild.level}</span>
                <span>{currentGuild.members}/{currentGuild.maxMembers} members</span>
                <span>⭐ {currentGuild.rating}/5.0</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Invite
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <div className="text-2xl font-bold text-primary">{currentGuild.achievements}</div>
            <div className="text-sm text-muted-foreground">Achievements</div>
          </div>
          <div className="text-center p-4 bg-hero-blue/10 rounded-lg">
            <div className="text-2xl font-bold text-hero-blue">1,247</div>
            <div className="text-sm text-muted-foreground">Total Quests</div>
          </div>
          <div className="text-center p-4 bg-accent/10 rounded-lg">
            <div className="text-2xl font-bold text-accent">156</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center p-4 bg-magic-green/10 rounded-lg">
            <div className="text-2xl font-bold text-magic-green">42</div>
            <div className="text-sm text-muted-foreground">Guild Level</div>
          </div>
        </div>
      </Card>

      {/* Navigation Tabs */}
      <div className="flex gap-2">
        {['overview', 'members', 'events', 'achievements'].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'default' : 'outline'}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'magical-glow' : ''}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'members' && (
        <Card className="magic-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Guild Members</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Invite
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            {guildMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50">
                <Avatar className="h-12 w-12 border border-primary">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{member.name}</h4>
                    <Badge className={getRoleColor(member.role)}>
                      {member.role}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Level {member.level}</span>
                    <span>{member.house}</span>
                    <span>{member.team}</span>
                    <span>Last active: {member.lastActive}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-primary">{member.contribution}</div>
                  <div className="text-xs text-muted-foreground">contribution</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'events' && (
        <Card className="magic-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Upcoming Events</h3>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </Button>
          </div>
          <div className="space-y-4">
            {guildEvents.map((event) => (
              <Card key={event.id} className="p-4 hover:bg-muted/50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold">{event.title}</h4>
                      <Badge className={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>📅 {event.date}</span>
                      <span>🕐 {event.time}</span>
                      <span>👥 {event.participants} participants</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-sm text-muted-foreground">Rewards: </span>
                      {event.rewards.map((reward, index) => (
                        <Badge key={index} variant="outline" className="ml-1 text-xs">
                          {reward}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button size="sm" className="btn-magical">
                    Join Event
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'achievements' && (
        <Card className="magic-card">
          <h3 className="text-xl font-bold mb-6">Guild Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guildAchievements.map((achievement, index) => (
              <Card key={index} className="p-4 hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <h4 className="font-semibold">{achievement.name}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="magic-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-hero-blue" />
              Guild Chat
            </h3>
            <div className="space-y-3 h-48 overflow-y-auto">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">TG</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium">Tony Granger</div>
                  <div className="text-sm text-muted-foreground">Ready for tonight's guild war?</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">SS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium">Steve Strange</div>
                  <div className="text-sm text-muted-foreground">Let's dominate! I've prepared some new spells</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">NP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium">Natasha Potter</div>
                  <div className="text-sm text-muted-foreground">Strategy meeting in 30 minutes!</div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button className="w-full btn-magical">
                <MessageSquare className="h-4 w-4 mr-2" />
                Open Chat
              </Button>
            </div>
          </Card>

          <Card className="magic-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Recent Achievements
            </h3>
            <div className="space-y-3">
              {guildAchievements.slice(0, 3).map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                  <div className="text-xl">{achievement.icon}</div>
                  <div>
                    <div className="font-medium">{achievement.name}</div>
                    <div className="text-sm text-muted-foreground">Unlocked 2 days ago</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full">
                View All Achievements
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default GuildModule;