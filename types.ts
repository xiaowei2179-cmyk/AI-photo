export interface StyleConfig {
  id: string;
  name: string;
  description: string;
  prompt: string;
  icon: string;
}

export interface GeneratedImage {
  id: string;
  styleId: string;
  styleName: string;
  imageUrl: string | null;
  loading: boolean;
  error?: string;
}

export enum ProcessingStatus {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}