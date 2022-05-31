import Product from '../models/product.model'

export const getAllProducts = async (): Promise<Product[]> => {
  return Product.findAll()
}

export const createProduct = async (data: any): Promise<void> => {
  console.log('create product:', data)
  const product = new Product({
    sku: data.sku,
    name: data.name,
    price: data.price,
    categoryId: data.categoryId,
  })
  await product.save()
}

export const updateProduct = async (id: number, data: any): Promise<void> => {
  console.log('update product by id:', id, ', data:', data)
  const product = await Product.findByPk(id)
  if (!product) {
    throw new Error(`product not found by ${id}`)
  }

  product.set({
    sku: data.sku,
    name: data.name,
    price: data.price,
    categoryId: data.categoryId,
  })

  await product.save()
}

export const deleteProduct = async (id: number): Promise<void> => {
  console.log('delete product by id:', id)
  const product = await Product.findByPk(id)
  if (!product) {
    throw new Error(`product not found by ${id}`)
  }

  await product.destroy()
}
