export type ViewType = 'list' | 'grid' | 'calendar' | 'map';

export interface Stage {
  id: string;
  title: string;
  type: string;
  description?: string;
  dates: {
    start: string;
    end: string;
  };
  location?: {
    city: string;
    venue?: string;
    address?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  status: 'draft' | 'published' | 'archived';
  maxParticipants?: number;
  currentParticipants?: number;
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  status: 'published' | 'draft' | 'archived';
  imageUrl?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
}

export type EventStatus = Event['status'];
export type StageStatus = Stage['status'];
export type StageType = Stage['type'];
