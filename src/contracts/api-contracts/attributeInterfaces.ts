export interface AttributeValue {
  id: number;
  attribute_id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Attribute {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  values: AttributeValue[];
}
