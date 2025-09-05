'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { 
  Search, 
  Filter, 
  Download, 
  Plus,
  Eye,
  Edit,
  MoreHorizontal,
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react'

const orders = [
  {
    id: 'ORD-001',
    customer: 'John Smith',
    email: 'john@example.com',
    amount: 1234.50,
    status: 'Completed',
    date: '2025-09-04',
    items: 3,
    priority: 'High'
  },
  {
    id: 'ORD-002',
    customer: 'Jane Doe',
    email: 'jane@example.com',
    amount: 856.75,
    status: 'Processing',
    date: '2025-09-03',
    items: 2,
    priority: 'Medium'
  },
  {
    id: 'ORD-003',
    customer: 'Bob Johnson',
    email: 'bob@example.com',
    amount: 2100.00,
    status: 'Shipped',
    date: '2025-09-02',
    items: 5,
    priority: 'High'
  },
  {
    id: 'ORD-004',
    customer: 'Alice Brown',
    email: 'alice@example.com',
    amount: 645.25,
    status: 'Pending',
    date: '2025-09-01',
    items: 1,
    priority: 'Low'
  },
  {
    id: 'ORD-005',
    customer: 'Charlie Wilson',
    email: 'charlie@example.com',
    amount: 1890.00,
    status: 'Completed',
    date: '2025-08-31',
    items: 4,
    priority: 'Medium'
  },
  {
    id: 'ORD-006',
    customer: 'Diana Prince',
    email: 'diana@example.com',
    amount: 3200.50,
    status: 'Shipped',
    date: '2025-08-30',
    items: 6,
    priority: 'High'
  },
  {
    id: 'ORD-007',
    customer: 'Eve Adams',
    email: 'eve@example.com',
    amount: 750.00,
    status: 'Cancelled',
    date: '2025-08-29',
    items: 2,
    priority: 'Low'
  },
  {
    id: 'ORD-008',
    customer: 'Frank Miller',
    email: 'frank@example.com',
    amount: 1450.75,
    status: 'Processing',
    date: '2025-08-28',
    items: 3,
    priority: 'Medium'
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Completed':
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case 'Processing':
      return <Clock className="h-4 w-4 text-yellow-500" />
    case 'Shipped':
      return <Truck className="h-4 w-4 text-blue-500" />
    case 'Pending':
      return <Package className="h-4 w-4 text-gray-500" />
    case 'Cancelled':
      return <XCircle className="h-4 w-4 text-red-500" />
    default:
      return <Clock className="h-4 w-4 text-gray-500" />
  }
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'default'
    case 'Processing':
      return 'secondary'
    case 'Shipped':
      return 'outline'
    case 'Pending':
      return 'destructive'
    case 'Cancelled':
      return 'destructive'
    default:
      return 'outline'
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'text-red-500'
    case 'Medium':
      return 'text-yellow-500'
    case 'Low':
      return 'text-green-500'
    default:
      return 'text-gray-500'
  }
}

export default function OrdersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">
            Manage customer orders and track fulfillment status.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            New Order
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              -5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,166</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Order Management</CardTitle>
              <CardDescription>
                View and manage all customer orders
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search orders..." className="pl-8 w-64" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-muted/50"
                >
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customer}</div>
                      <div className="text-sm text-muted-foreground">{order.email}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">${order.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(order.status)}
                      <Badge variant={getStatusVariant(order.status) as "default" | "secondary" | "destructive" | "outline"}>
                        {order.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${getPriorityColor(order.priority)}`}>
                      {order.priority}
                    </span>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )
}
