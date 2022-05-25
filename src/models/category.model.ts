import {
  Model,
  Table,
  DataType,
  Column,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript'

@Table({
  tableName: 'categories',
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
})
export default class Category extends Model<Category> {
  @Column({
    field: 'id',
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number

  @Column({
    field: 'name',
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string

  @CreatedAt
  createdDate!: Date

  @UpdatedAt
  updatedDate!: Date
}
