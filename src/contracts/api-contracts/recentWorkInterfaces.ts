export interface GalleryImage {
  path: string;
}

export interface Work {
  slug: string;
  type: "residential" | "commercial"; // Assuming only these two types are allowed
  title: string;
  sub_title: string;
  description: string;
  completed_by: string;
  client: string;
  status: boolean;
  from_date: string; // If using a date object, you can use Date
  to_date?: string; // Optional field
  image: string;
  gallery_images: GalleryImage[];
}

interface WorkResponseData {
  data: Work[];
}

// Define the interface for the API response
export interface WorkResponse {
  data: WorkResponseData;
  message: string;
  status: boolean;
}
