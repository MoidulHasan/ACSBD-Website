export interface Brand {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  visibility_status: string;
  meta_title: string;
  meta_description: string;
  created_at: string;
  updated_at: string;
}

export interface Brands {
  data: Brand[];
}
