import { atom } from 'jotai'
import { Category } from '../models/category';
import { getCategories, getTables } from './data';
import { MenuItem } from '../models/menuItem';



export const categoryAtom = atom<string | undefined>('')

export const categoriesAtom = atom<Category[]>(getCategories().categories);

export const filteredCategoryAtomByName = atom<Category | undefined>(get => get(categoriesAtom).find((c) => c.title === get(categoryAtom)));

export const filteredItemAtom = atom(get => get(categoriesAtom).find((c) => c.id === get(filteredCategoryAtomByName)?.id)?.items);

export const tablesAtom = atom(getTables().tables);

export const tableAtom = atom(get => get(tablesAtom).find(table => table.id == get(tableIdAtom)));

export const itemsAtom = atom<MenuItem[]>([])

export const tableIdAtom = atom<number>(0)