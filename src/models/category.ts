import { MenuItem } from './menuItem';

export interface Category {
  id: number,
  title: string,
  items: MenuItem[]
}