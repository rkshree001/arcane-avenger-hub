import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  User, 
  Edit3, 
  Save, 
  X, 
  Wand2, 
  Shield, 
  Star, 
  Crown,
  Heart,
  Trophy,
  Camera,
  MapPin,
  Calendar,
  Zap
} from 'lucide-react';

const ProfileModule = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    wizardName: 'Hermione Stark',
    superheroAlias: 'The Brilliant Avenger',
    favoriteSpell: 'Expelliarmus',
    favoriteHero: 'Iron Man',
    house: 'Gryffindor',
    team: 'Avengers',
    level: 87,
    totalPoints: 15420,
    bio: 'A brilliant witch who combines magical knowledge with cutting-edge technology to protect both the wizarding and muggle worlds.',
    location: 'Hogwarts & Avengers Tower',
    joinDate: 'March 15, 2023',
    achievements: 142,
    spellsMastered: 89,
    missionsCompleted: 156
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const achievements = [
    { name: 'Master Wizard', description: 'Mastered 50+ spells', icon: '🧙‍♀️', earned: true },
    { name: 'Super Hero', description: 'Completed 100+ missions', icon: '🦸‍♀️', earned: true },
    { name: 'Dragon Slayer', description: 'Defeated a dragon', icon: '🐉', earned: true },
    { name: 'Team Leader', description: 'Led 20+ team missions', icon: '👑', earned: true },
    { name: 'Spell Inventor', description: 'Created a new spell', icon: '✨', earned: false },
    { name: 'Time Turner', description: 'Used time magic successfully', icon: '⏰', earned: false }
  ];

  const favoriteSpells = [
    { name: 'Expelliarmus', type: 'Defense', power: 85 },
    { name: 'Protego', type: 'Shield', power: 90 },
    { name: 'Lumos', type: 'Utility', power: 30 },
    { name: 'Wingardium Leviosa', type: 'Charm', power: 60 }
  ];

  const favoriteHeroes = [
    { name: 'Iron Man', team: 'Avengers', power: 95 },
    { name: 'Captain America', team: 'Avengers', power: 85 },
    { name: 'Thor', team: 'Avengers', power: 98 },
    { name: 'Black Widow', team: 'Avengers', power: 80 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="magic-card">
        <div className="flex items-center gap-3 mb-4">
          <User className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-hero-blue bg-clip-text text-transparent">
            Profile
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Manage your wizard and superhero identity
        </p>
      </div>

      {/* Main Profile Card */}
      <Card className="magic-card">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-primary magical-glow">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
                  {profileData.wizardName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button 
                size="sm" 
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                variant="secondary"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{profileData.wizardName}</h2>
              <p className="text-lg text-hero-blue italic">"{profileData.superheroAlias}"</p>
              <div className="flex items-center gap-4 mt-2">
                <Badge className="bg-primary/20 text-primary border-primary">
                  Level {profileData.level}
                </Badge>
                <Badge className="bg-hero-blue/20 text-hero-blue border-hero-blue">
                  {profileData.house}
                </Badge>
                <Badge className="bg-accent/20 text-accent border-accent">
                  {profileData.team}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {!isEditing ? (
              <Button onClick={handleEdit} variant="outline">
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <>
                <Button onClick={handleSave} className="btn-magical">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <div className="text-2xl font-bold text-primary">{profileData.totalPoints.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Points</div>
          </div>
          <div className="text-center p-4 bg-hero-blue/10 rounded-lg">
            <div className="text-2xl font-bold text-hero-blue">{profileData.spellsMastered}</div>
            <div className="text-sm text-muted-foreground">Spells Mastered</div>
          </div>
          <div className="text-center p-4 bg-accent/10 rounded-lg">
            <div className="text-2xl font-bold text-accent">{profileData.missionsCompleted}</div>
            <div className="text-sm text-muted-foreground">Missions Complete</div>
          </div>
          <div className="text-center p-4 bg-magic-green/10 rounded-lg">
            <div className="text-2xl font-bold text-magic-green">{profileData.achievements}</div>
            <div className="text-sm text-muted-foreground">Achievements</div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="space-y-6">
          {isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Wizard Name</label>
                  <Input
                    value={editData.wizardName}
                    onChange={(e) => setEditData({...editData, wizardName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Superhero Alias</label>
                  <Input
                    value={editData.superheroAlias}
                    onChange={(e) => setEditData({...editData, superheroAlias: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Favorite Spell</label>
                  <Input
                    value={editData.favoriteSpell}
                    onChange={(e) => setEditData({...editData, favoriteSpell: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Favorite Hero</label>
                  <Input
                    value={editData.favoriteHero}
                    onChange={(e) => setEditData({...editData, favoriteHero: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">House</label>
                  <Input
                    value={editData.house}
                    onChange={(e) => setEditData({...editData, house: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Team</label>
                  <Input
                    value={editData.team}
                    onChange={(e) => setEditData({...editData, team: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input
                    value={editData.location}
                    onChange={(e) => setEditData({...editData, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Bio</label>
                  <Textarea
                    value={editData.bio}
                    onChange={(e) => setEditData({...editData, bio: e.target.value})}
                    rows={3}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Wand2 className="h-5 w-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">Favorite Spell:</span>
                    <p className="font-medium">{profileData.favoriteSpell}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-hero-blue" />
                  <div>
                    <span className="text-sm text-muted-foreground">Favorite Hero:</span>
                    <p className="font-medium">{profileData.favoriteHero}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <span className="text-sm text-muted-foreground">Location:</span>
                    <p className="font-medium">{profileData.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-magic-green" />
                  <div>
                    <span className="text-sm text-muted-foreground">Joined:</span>
                    <p className="font-medium">{profileData.joinDate}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">About Me</h4>
                <p className="text-muted-foreground leading-relaxed">{profileData.bio}</p>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Favorite Spells & Heroes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="magic-card">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            Favorite Spells
          </h3>
          <div className="space-y-3">
            {favoriteSpells.map((spell, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                <div>
                  <div className="font-medium">{spell.name}</div>
                  <div className="text-sm text-muted-foreground">{spell.type}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm font-medium">{spell.power}</div>
                  <Star className="h-4 w-4 text-primary fill-current" />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="magic-card">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-hero-blue" />
            Favorite Heroes
          </h3>
          <div className="space-y-3">
            {favoriteHeroes.map((hero, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                <div>
                  <div className="font-medium">{hero.name}</div>
                  <div className="text-sm text-muted-foreground">{hero.team}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm font-medium">{hero.power}</div>
                  <Zap className="h-4 w-4 text-hero-blue fill-current" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Achievements */}
      <Card className="magic-card">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`p-4 transition-all duration-200 ${
                achievement.earned 
                  ? 'bg-primary/10 border-primary/30 magical-glow' 
                  : 'bg-muted/20 border-muted opacity-60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{achievement.icon}</div>
                <div>
                  <h4 className={`font-semibold ${achievement.earned ? 'text-primary' : 'text-muted-foreground'}`}>
                    {achievement.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  {achievement.earned && (
                    <Badge className="mt-2 bg-primary/20 text-primary border-primary">
                      Earned
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProfileModule;