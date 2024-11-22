export interface Stage {
  id: string;
  title: string;
  type: 'registration' | 'qualification' | 'semifinal' | 'final' | 'other';
  description?: string;
  dates: {
    start: string;
    end: string;
  };
  location?: {
    city: string;
    venue: string;
    address: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  maxParticipants?: number;
  currentParticipants?: number;
  requirements?: string[];
  results?: {
    url?: string;
    summary?: string;
    winners?: {
      place: number;
      participantId: string;
      name: string;
      result: string;
    }[];
  };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  media: {
    banners: string[];
    thumbnails: string[];
    gallery: string[];
    videos: string[];
  };
  links: {
    website?: string;
    registration?: string;
    socialMedia: {
      telegram?: string;
      vk?: string;
      instagram?: string;
    };
  };
  stages: Stage[];
  location: {
    city: string;
    venue: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  sportType: string;
  discipline: string;
  eventType: 'regional' | 'national' | 'international';
  ageGroup: string;
  gender: 'male' | 'female' | 'mixed';
  participantsCount: number;
  status: 'draft' | 'published' | 'cancelled' | 'completed';
  price?: {
    amount: number;
    currency: string;
  };
  organizer: {
    id: string;
    name: string;
    logos: string[];
    contacts: {
      email?: string;
      phone?: string;
    };
  };
  tags: string[];
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export type EventStatus = Event['status'];
export type StageStatus = Stage['status'];
export type StageType = Stage['type'];
