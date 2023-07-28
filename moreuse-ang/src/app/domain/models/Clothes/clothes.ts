export class Clothes {
  limit!: number
  products!: Product[]
  skip!: number
  total!: number
}

export class Product {
  //aqui va la informacion de los productos
  id!:string
  talla!: string
  gender!: string
  price!: string

  //etcetera

}
