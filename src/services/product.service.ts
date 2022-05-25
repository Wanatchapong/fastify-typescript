import Product from '../models/product.model'

export const createProduct = async (data: any): Promise<void> => {
  console.log('create product:', data)
  const product = new Product({
    sku: data.sku,
    name: data.name,
    price: data.price,
    categoryId: data.categoryId,
  })
  await product.save()
  console.log('product id:', product.id)
}

export const getAllProducts = async (): Promise<Product[]> => {
  return Product.findAll()
}
