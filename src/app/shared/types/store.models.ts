import { ItemModel } from './services.types';

/**
 * State
 */
export interface ActionModel<T> {
  type?: T;
  payload?: any;
}

export interface ItemsStateModel {
  readonly data: ItemModel[];
  readonly loading: boolean;
}

export interface CartItemModel extends ItemModel {
  count: number;
}

export interface CartState {
  readonly data: CartItemModel[];
  readonly loading: boolean;
}
