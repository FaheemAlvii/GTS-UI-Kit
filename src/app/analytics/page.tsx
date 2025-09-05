'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Scatter,
  ScatterChart,
  ZAxis
} from 'recharts'
import { 
  TrendingDown, 
  Users, 
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target,
  Filter,
  Download
} from 'lucide-react'

// Sample data
const conversionData = [
  { name: 'Jan', visitors: 4000, conversions: 240, rate: 6.0 },
  { name: 'Feb', visitors: 3000, conversions: 139, rate: 4.6 },
  { name: 'Mar', visitors: 2000, conversions: 980, rate: 49.0 },
  { name: 'Apr', visitors: 2780, conversions: 390, rate: 14.0 },
  { name: 'May', visitors: 1890, conversions: 480, rate: 25.4 },
  { name: 'Jun', visitors: 2390, conversions: 380, rate: 15.9 },
  { name: 'Jul', visitors: 3490, conversions: 430, rate: 12.3 },
]

const funnelData = [
  { stage: 'Visitors', count: 10000, percentage: 100 },
  { stage: 'Leads', count: 2500, percentage: 25 },
  { stage: 'Opportunities', count: 750, percentage: 7.5 },
  { stage: 'Customers', count: 300, percentage: 3 },
]

const geographicData = [
  { country: 'United States', sales: 4000, users: 2400 },
  { country: 'Canada', sales: 3000, users: 1398 },
  { country: 'United Kingdom', sales: 2000, users: 980 },
  { country: 'Germany', sales: 2780, users: 390 },
  { country: 'France', sales: 1890, users: 480 },
  { country: 'Australia', sales: 2390, users: 380 },
]

const deviceData = [
  { name: 'Desktop', value: 45, color: '#8884d8' },
  { name: 'Mobile', value: 35, color: '#82ca9d' },
  { name: 'Tablet', value: 20, color: '#ffc658' },
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

export default function AnalyticsPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Deep insights into your business performance and user behavior.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <Activity className="mr-2 h-4 w-4" />
            Real-time
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
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5%</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +2.1% from last month
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
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2M</div>
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
              <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34.2%</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                -5.2% from last month
              </p>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -translate-y-16 translate-x-16" />
          </motion.div>
        </Card>

        <Card className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4m 32s</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +12s from last month
              </p>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-16 translate-x-16" />
          </motion.div>
        </Card>
      </motion.div>

      {/* Main Charts */}
      <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
            <CardDescription>
              User journey from visitors to customers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={funnelData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="stage" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>
              Distribution of traffic by device type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Geographic Performance</CardTitle>
            <CardDescription>
              Sales and user distribution by country
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={geographicData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="users" name="Users" />
                <YAxis dataKey="sales" name="Sales" />
                <ZAxis dataKey="country" name="Country" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter dataKey="sales" fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Conversion Analysis */}
      <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Conversion Trends</CardTitle>
            <CardDescription>
              Monthly conversion rate and visitor trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="visitors" stroke="#8884d8" />
                <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Pages</CardTitle>
            <CardDescription>
              Pages with highest engagement and conversion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { page: '/dashboard', views: '45,231', conversion: '12.5%', trend: 'up' },
                { page: '/products', views: '32,156', conversion: '8.9%', trend: 'up' },
                { page: '/pricing', views: '28,943', conversion: '15.2%', trend: 'down' },
                { page: '/about', views: '21,876', conversion: '3.4%', trend: 'up' },
                { page: '/contact', views: '18,432', conversion: '22.1%', trend: 'up' },
              ].map((item, index) => (
                <motion.div
                  key={item.page}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{item.page}</p>
                    <p className="text-xs text-muted-foreground">{item.views} views</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-medium">{item.conversion}</p>
                    <div className="flex items-center gap-1">
                      {item.trend === 'up' ? (
                        <ArrowUpRight className="h-3 w-3 text-green-500" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-500" />
                      )}
                      <span className="text-xs text-muted-foreground">conversion</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Real-time Activity */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Real-time Activity</CardTitle>
            <CardDescription>
              Live user activity and system events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { user: 'john.doe@company.com', action: 'Viewed dashboard', time: '2 minutes ago', status: 'online' },
                { user: 'jane.smith@company.com', action: 'Created new order', time: '5 minutes ago', status: 'online' },
                { user: 'bob.johnson@company.com', action: 'Updated profile', time: '8 minutes ago', status: 'away' },
                { user: 'alice.brown@company.com', action: 'Downloaded report', time: '12 minutes ago', status: 'offline' },
                { user: 'charlie.wilson@company.com', action: 'Completed purchase', time: '15 minutes ago', status: 'online' },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'online' ? 'bg-green-500' :
                      activity.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`} />
                    <div>
                      <p className="text-sm font-medium">{activity.user}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                    <Badge variant="outline" className="text-xs">
                      {activity.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
