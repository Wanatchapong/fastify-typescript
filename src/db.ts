import { Sequelize } from 'sequelize-typescript'

import config from './config'
import Category from './models/category.model'
import Product from './models/product.model'

export const sequelize = new Sequelize(config.db.url || '', {
  // models: [__dirname + '/models'],
  models: [Category, Product],
})
