import { ShippingAddress } from "@prisma/client"

export interface IOrderReceivedEmail {
  shippingAddress: ShippingAddress
  orderId: string
  orderDate: string
}