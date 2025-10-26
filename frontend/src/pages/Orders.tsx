import DataTablePagination from "@/components/DataTablePagination"

// implementation of this data table is in the shadcn documentation

type OrderItem = {
  id: number
  menuId: number
  orderId: number
  quantity:number
  price: string
  menu: {
    id: number
    name: string
    price: number
    typeId: number
    type: {
      id: number
      name: string
    }
  }
}

type Order = {
  id:number
  date:string
  total:string
  OrderItem: OrderItem[]
}


const Orders = () => {
  return (
    <>
      <DataTablePagination columns={columns} data={orders}/>
    </>
  )
}

export default Orders