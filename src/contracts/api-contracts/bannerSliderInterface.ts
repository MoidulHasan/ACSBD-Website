// Define the interface for a single item in the slider or banner
export interface MediaItem {
  id: number;
  type: string;
  path: string;
}

// Define the interface for the API response
export interface ImageResponse {
  slider: MediaItem[];
  banner: MediaItem[];
}
