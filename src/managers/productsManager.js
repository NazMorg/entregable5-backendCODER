import { productsModel } from '../db/models/products.model.js';
import BaseManager from './baseManager.js';

class ProductsManager extends BaseManager {
    constructor() {
        super(productsModel);
    }
}

export const productsManager = new ProductsManager();