export interface Template {
  id: string;
  name: string;
  description?: string;
  content: string;
  category?: string;
  variables?: string[];
  createdAt: string;
  updatedAt: string;
}
