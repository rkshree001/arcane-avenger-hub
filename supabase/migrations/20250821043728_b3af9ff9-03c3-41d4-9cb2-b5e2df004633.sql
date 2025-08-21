-- Create profiles table for user authentication and data
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  level INTEGER DEFAULT 1,
  house TEXT DEFAULT 'unassigned',
  team TEXT DEFAULT 'unassigned',
  total_points INTEGER DEFAULT 0,
  spells_mastered INTEGER DEFAULT 0,
  missions_completed INTEGER DEFAULT 0,
  guild_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create spells table
CREATE TABLE public.spells (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('spell', 'power')),
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  power INTEGER NOT NULL CHECK (power >= 1 AND power <= 100),
  rarity TEXT NOT NULL CHECK (rarity IN ('Common', 'Uncommon', 'Rare', 'Epic', 'Legendary')),
  image_url TEXT,
  details TEXT,
  incantation TEXT,
  wand_movement TEXT,
  source TEXT,
  energy_type TEXT,
  range_info TEXT,
  speed_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create quests table
CREATE TABLE public.quests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Main Quest', 'Daily Quest', 'Side Quest', 'Tutorial', 'Social Quest')),
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Common', 'Uncommon', 'Rare', 'Epic', 'Legendary')),
  duration_hours INTEGER NOT NULL DEFAULT 24,
  rewards JSONB NOT NULL DEFAULT '[]',
  requirements JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_quests table for tracking quest progress
CREATE TABLE public.user_quests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  quest_id UUID NOT NULL REFERENCES public.quests(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'active', 'completed', 'failed')),
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, quest_id)
);

-- Create guilds table
CREATE TABLE public.guilds (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  level INTEGER DEFAULT 1,
  max_members INTEGER DEFAULT 200,
  leader_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create guild_members table
CREATE TABLE public.guild_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  guild_id UUID NOT NULL REFERENCES public.guilds(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('member', 'officer', 'leader')),
  contribution_points INTEGER DEFAULT 0,
  joined_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(guild_id, user_id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.spells ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_quests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guilds ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guild_members ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view all profiles" 
ON public.profiles FOR SELECT 
USING (true);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create policies for spells (public read-only)
CREATE POLICY "Anyone can view spells" 
ON public.spells FOR SELECT 
USING (true);

-- Create policies for quests (public read-only)
CREATE POLICY "Anyone can view active quests" 
ON public.quests FOR SELECT 
USING (is_active = true);

-- Create policies for user_quests
CREATE POLICY "Users can view their own quest progress" 
ON public.user_quests FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own quest progress" 
ON public.user_quests FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own quest progress" 
ON public.user_quests FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create policies for guilds
CREATE POLICY "Anyone can view guilds" 
ON public.guilds FOR SELECT 
USING (true);

CREATE POLICY "Guild leaders can update their guild" 
ON public.guilds FOR UPDATE 
USING (auth.uid() = leader_id);

-- Create policies for guild_members
CREATE POLICY "Anyone can view guild members" 
ON public.guild_members FOR SELECT 
USING (true);

CREATE POLICY "Users can join guilds" 
ON public.guild_members FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can leave guilds" 
ON public.guild_members FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_guilds_updated_at
    BEFORE UPDATE ON public.guilds
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample spells data
INSERT INTO public.spells (name, type, category, description, power, rarity, details, incantation, wand_movement) VALUES
('Expelliarmus', 'spell', 'Defense', 'The Disarming Charm - forces an opponent to release whatever they are holding', 85, 'Common', 'A fundamental defensive spell taught at Hogwarts. Perfect for dueling and self-defense.', 'ex-PEL-ee-ARE-mus', 'Sharp flick'),
('Lumos', 'spell', 'Utility', 'The Wand-Lighting Charm - creates light from the tip of the wand', 25, 'Common', 'One of the first spells learned by Hogwarts students. Extremely useful in dark situations.', 'LOO-mos', 'Gentle tap'),
('Protego', 'spell', 'Defense', 'The Shield Charm - creates an invisible magical barrier', 70, 'Uncommon', 'Creates a protective barrier that deflects jinxes, hexes, and curses.', 'pro-TAY-go', 'Upward sweep');

-- Insert sample powers data
INSERT INTO public.spells (name, type, category, description, power, rarity, details, source, energy_type) VALUES
('Arc Reactor Power', 'power', 'Technology', 'Advanced arc reactor technology providing unlimited clean energy', 95, 'Legendary', 'Tony Stark''s revolutionary arc reactor powers the Iron Man suit with incredible efficiency.', 'Stark Industries', 'Clean Fusion'),
('Web-Slinging', 'power', 'Movement', 'Ability to swing through the city using bio-mechanical web shooters', 78, 'Rare', 'Spider-Man''s signature ability allows for rapid traversal through urban environments.', 'Spider Powers', NULL),
('Flight', 'power', 'Movement', 'Ability to fly through the air using advanced technology or mutation', 88, 'Rare', 'Various heroes possess flight capabilities through different means.', 'Multiple Origins', NULL);

-- Insert sample quests data
INSERT INTO public.quests (title, description, type, difficulty, duration_hours, rewards) VALUES
('Defeat the Dark Lord', 'Face Voldemort in the final battle for the wizarding world', 'Main Quest', 'Legendary', 48, '["1000 XP", "Elder Wand Fragment", "Hero Badge"]'),
('Stop Loki''s Invasion', 'Prevent Loki from conquering Midgard with the Chitauri army', 'Main Quest', 'Epic', 4, '["800 XP", "Tesseract Shard", "Avenger Status"]'),
('Potions Master Challenge', 'Brew 10 perfect potions without any mistakes', 'Daily Quest', 'Rare', 18, '["200 XP", "Rare Ingredients", "Potions Badge"]'),
('Hunt for Ancient Artifacts', 'Discover 5 magical artifacts hidden across the realm', 'Side Quest', 'Uncommon', 168, '["400 XP", "Magical Artifacts", "Explorer Badge"]'),
('Assemble Your Team', 'Form a team of 5 heroes for multiplayer missions', 'Social Quest', 'Rare', 72, '["300 XP", "Team Leader Badge", "Special Emotes"]');