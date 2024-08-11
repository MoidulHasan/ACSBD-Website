export interface Category {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  parent_id: number | null;
  visibility_status: "public" | "private";
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
  childrens: Category[];
}

export interface CategoryDataResponse {
  data: Category[];
}
