import { cartsModel } from '../db/models/carts.model.js';
import BaseManager from './baseManager.js';

class CartsManager extends BaseManager {
    constructor() {
        super(cartsModel);
    }
}

export const cartsManager = new CartsManager();