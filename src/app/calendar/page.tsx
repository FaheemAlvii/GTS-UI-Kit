'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar,
  Plus,
  Filter,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users
} from 'lucide-react'

const events = [
  {
    id: 'EVT-001',
    title: 'Team Meeting',
    date: '2025-09-10',
    time: '10:00 AM',
    duration: '1h',
    location: 'Conference Room A',
    attendees: 8,
    type: 'Meeting',
    status: 'Confirmed'
  },
  {
    id: 'EVT-002',
    title: 'Client Presentation',
    date: '2025-09-12',
    time: '2:00 PM',
    duration: '2h',
    location: 'Virtual',
    attendees: 12,
    type: 'Presentation',
    status: 'Confirmed'
  },
  {
    id: 'EVT-003',
    title: 'Project Review',
    date: '2025-09-15',
    time: '3:30 PM',
    duration: '1.5h',
    location: 'Office',
    attendees: 5,
    type: 'Review',
    status: 'Pending'
  },
  {
    id: 'EVT-004',
    title: 'Training Session',
    date: '2025-09-18',
    time: '9:00 AM',
    duration: '4h',
    location: 'Training Room',
    attendees: 20,
    type: 'Training',
    status: 'Confirmed'
  }
]

const getTypeVariant = (type: string) => {
  switch (type) {
    case 'Meeting':
      return 'default'
    case 'Presentation':
      return 'secondary'
    case 'Review':
      return 'outline'
    case 'Training':
      return 'destructive'
    default:
      return 'outline'
  }
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'Confirmed':
      return 'default'
    case 'Pending':
      return 'secondary'
    case 'Cancelled':
      return 'destructive'
    default:
      return 'outline'
  }
}

export default function CalendarPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            Manage your schedule and upcoming events.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Event
          </Button>
        </div>
      </div>

      {/* Calendar Navigation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-xl font-semibold">January 2024</h2>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Today</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Simple Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <motion.div
                key={day}
                whileHover={{ scale: 1.05 }}
                className={`p-2 text-center text-sm border rounded cursor-pointer hover:bg-muted ${
                  day === 20 ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                {day}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>
            Your scheduled events and meetings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time} ({event.duration})
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.attendees} attendees
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getTypeVariant(event.type) as "default" | "secondary" | "destructive" | "outline"}>
                    {event.type}
                  </Badge>
                  <Badge variant={getStatusVariant(event.status) as "default" | "secondary" | "destructive" | "outline"}>
                    {event.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              events scheduled
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              total events
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              awaiting confirmation
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
