import {User} from "./user";
import {Category} from "./category";

export interface Post {
  id: number,
  title: string,
  body: string,
  featured_image_url?: string,
  featured_image_thumb_url?: string,
  published_at?: string,
  created_at: string,
  updated_at: string,
  user?: User,
  categories?: Category[]
}
