import { Category } from '../enums/category.enum';

export interface ITransaction {
    id: string;
    title: string;
    amount: number;
    category: Category;
    date: string;
    comment: string;
}