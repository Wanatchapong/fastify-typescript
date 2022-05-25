import {
  Model,
  Table,
  DataType,
  Column,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript'

import Category from './category.model'

@Table({
  tableName: 'products',
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
})
export default class Product extends Model {
  @Column({
    field: 'id',
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number

  @Column({
    field: 'sku',
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  sku!: string

  @Column({
    field: 'name',
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string

  @Column({
    field: 'price',
    type: DataType.DECIMAL(15, 2),
    allowNull: false,
  })
  price!: number // 1,000,000,000,000.00

  @ForeignKey(() => Category)
  @Column({
    field: 'category_id',
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryId!: number

  @BelongsTo(() => Category, 'category_id')
  category!: Category

  @CreatedAt
  createdDate!: Date

  @UpdatedAt
  updatedDate!: Date
}
