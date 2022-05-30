import { Product } from '@prisma/client'
import prisma from '../db'

export const getAllProducts = async (): Promise<Product[]> => {
  const products: Product[] = await prisma.product.findMany()
  return products
}

export const createProduct = async (data: any): Promise<void> => {
  await prisma.product.create({
    data: {
      sku: data.sku,
      name: data.name,
      price: data.price,
      categoryId: data.categoryId,
    },
  })
}

export const updateProduct = async (id: number, data: any): Promise<void> => {
  await prisma.product.update({
    where: {
      id,
    },
    data: {
      sku: data.sku,
      name: data.name,
      price: data.price,
      categoryId: data.categoryId,
    },
  })
}

export const deleteProduct = async (id: number): Promise<void> => {
  await prisma.product.delete({
    where: {
      id,
    },
  })
}
