import { IEstablishment } from './iestablishment';
import { IReview } from './ireview';

export interface IPackage {
  id?: number;
  name: string;
  description: string;
  code?: string;
  categories: string[];
  establishment: IEstablishment;
  startDate: string;
  endDate: string;
  price: number;
  newPrice: number;
  premium: boolean;
  review?: IReview[];
}
