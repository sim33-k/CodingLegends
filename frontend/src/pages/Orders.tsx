import DataTablePagination from "@/components/DataTablePagination"
import { type ColumnDef } from "@tanstack/react-table"
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


// COLUMN defintion
// we have the order id, the date, total amount, (we can add the number of items, ill add it later)
// column definition just like in the documentation with the generics
const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      return <div>{date.toLocaleDateString()}</div>
    },
  },
  {
    accessorKey: "total",
    header: () => <div className="text-right">Total</div>,
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("total"))
      return <div className="text-right font-medium">Rs. {total}</div>
    },
  }
]

const Orders = () => {
  return (
    <>
      <DataTablePagination columns={columns} data={orders}/>
    </>
  )
}

export default Orders