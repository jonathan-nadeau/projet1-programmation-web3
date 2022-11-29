import { IPackage } from './ipackage';

export interface IPrices {
  price: IPackage['price'];
  newPrice: IPackage['newPrice'];
}
