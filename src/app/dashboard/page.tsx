'use client'

import { motion } from 'framer-motion'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts'
import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Package,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target
} from 'lucide-react'

// Sample data
const revenueData = [
  { month: 'Jan', revenue: 4000, orders: 240 },
  { month: 'Feb', revenue: 3000, orders: 139 },
  { month: 'Mar', revenue: 2000, orders: 980 },
  { month: 'Apr', revenue: 2780, orders: 390 },
  { month: 'May', revenue: 1890, orders: 480 },
  { month: 'Jun', revenue: 2390, orders: 380 },
  { month: 'Jul', revenue: 3490, orders: 430 },
]

const salesData = [
  { name: 'Q1', sales: 4000, target: 3500 },
  { name: 'Q2', sales: 3000, target: 4000 },
  { name: 'Q3', sales: 2000, target: 3000 },
  { name: 'Q4', sales: 2780, target: 2500 },
]

const pieData = [
  { name: 'Desktop', value: 400, color: '#8884d8' },
  { name: 'Mobile', value: 300, color: '#82ca9d' },
  { name: 'Tablet', value: 200, color: '#ffc658' },
  { name: 'Other', value: 100, color: '#ff7300' },
]

const recentOrders = [
  { id: 'ORD-001', customer: 'John Smith', amount: '$1,234', status: 'Completed', date: '2025-09-04' },
  { id: 'ORD-002', customer: 'Jane Doe', amount: '$856', status: 'Processing', date: '2025-09-03' },
  { id: 'ORD-003', customer: 'Bob Johnson', amount: '$2,100', status: 'Shipped', date: '2025-09-02' },
  { id: 'ORD-004', customer: 'Alice Brown', amount: '$645', status: 'Pending', date: '2025-09-01' },
  { id: 'ORD-005', customer: 'Charlie Wilson', amount: '$1,890', status: 'Completed', date: '2025-08-31' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function DashboardPage() {
  const { showSuccess, showInfo } = useToast()

  const handleExportReport = () => {
    showSuccess('Report Exported', 'Your dashboard report has been exported successfully.')
  }

  const handleSetGoals = () => {
    showInfo('Set Goals', 'Goal setting feature will be available soon.')
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">GTS Shad/Cn Kit Dashboard</h1>
                      <p className="text-muted-foreground">
              Welcome to Geek Tech Sol&apos;s UI component showcase. Explore modern design patterns and reusable components.
            </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleExportReport}>
            <Activity className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button variant="outline" onClick={handleSetGoals}>
            <Target className="mr-2 h-4 w-4" />
            Set Goals
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +20.1% from last month
              </p>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16" />
          </motion.div>
        </Card>

        <Card className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +15% from last month
              </p>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16" />
          </motion.div>
        </Card>

        <Card className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +8% from last month
              </p>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -translate-y-16 translate-x-16" />
          </motion.div>
        </Card>

        <Card className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                -2% from last month
              </p>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-16 translate-x-16" />
          </motion.div>
        </Card>
      </motion.div>

      {/* Charts Row */}
      <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>
              Monthly revenue and order trends for the past 7 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#8884d8" 
                  fill="#8884d8" 
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Sales by Channel</CardTitle>
            <CardDescription>
              Distribution of sales across different channels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sales Performance */}
      <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sales vs Target</CardTitle>
            <CardDescription>
              Quarterly performance against targets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" />
                <Bar dataKey="target" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest customer orders and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{order.id}</p>
                    <p className="text-xs text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-medium">{order.amount}</p>
                    <Badge 
                      variant={
                        order.status === 'Completed' ? 'default' :
                        order.status === 'Processing' ? 'secondary' :
                        order.status === 'Shipped' ? 'outline' : 'destructive'
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Progress Cards */}
      <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Goal</CardTitle>
            <CardDescription>Revenue target progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>78%</span>
              </div>
              <Progress value={78} className="h-2" />
              <p className="text-xs text-muted-foreground">
                $35,180 of $45,000 target
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Fulfillment</CardTitle>
            <CardDescription>Processing efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Efficiency</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-2" />
              <p className="text-xs text-muted-foreground">
                1,234 of 1,340 orders processed
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Satisfaction</CardTitle>
            <CardDescription>Average rating score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Rating</span>
                <span>4.8/5</span>
              </div>
              <Progress value={96} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Based on 1,234 reviews
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
