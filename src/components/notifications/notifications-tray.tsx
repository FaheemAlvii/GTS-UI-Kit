'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  Bell, 
  Check, 
  X,
  AlertCircle,
  Info,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const notifications = [
  {
    id: '1',
    title: 'New Order Received',
    message: 'Order #ORD-001 has been placed by John Smith',
    type: 'success',
    time: '2 minutes ago',
    read: false
  },
  {
    id: '2',
    title: 'Low Stock Alert',
    message: 'Wireless Headphones are running low (5 items left)',
    type: 'warning',
    time: '15 minutes ago',
    read: false
  },
  {
    id: '3',
    title: 'Payment Failed',
    message: 'Payment for Invoice #INV-003 could not be processed',
    type: 'error',
    time: '1 hour ago',
    read: true
  },
  {
    id: '4',
    title: 'System Update',
    message: 'New features have been added to the dashboard',
    type: 'info',
    time: '2 hours ago',
    read: true
  },
  {
    id: '5',
    title: 'Meeting Reminder',
    message: 'Team meeting starts in 30 minutes',
    type: 'info',
    time: '3 hours ago',
    read: false
  }
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case 'warning':
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    case 'error':
      return <AlertCircle className="h-4 w-4 text-red-500" />
    case 'info':
      return <Info className="h-4 w-4 text-blue-500" />
    default:
      return <Info className="h-4 w-4 text-gray-500" />
  }
}

const getNotificationVariant = (type: string) => {
  switch (type) {
    case 'success':
      return 'default'
    case 'warning':
      return 'secondary'
    case 'error':
      return 'destructive'
    case 'info':
      return 'outline'
    default:
      return 'outline'
  }
}

export function NotificationsTray() {
  const [notificationsList, setNotificationsList] = useState(notifications)
  const [isOpen, setIsOpen] = useState(false)
  const { showSuccess, showError, showWarning, showInfo } = useToast()

  const unreadCount = notificationsList.filter(n => !n.read).length

  const markAsRead = (id: string) => {
    setNotificationsList(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  const markAllAsRead = () => {
    setNotificationsList(prev => 
      prev.map(n => ({ ...n, read: true }))
    )
    showSuccess('All notifications marked as read')
  }

  const clearAll = () => {
    setNotificationsList([])
    showInfo('All notifications cleared')
  }

  const handleNotificationClick = (notification: typeof notifications[0]) => {
    markAsRead(notification.id)
    
    // Show appropriate toast based on notification type
    switch (notification.type) {
      case 'success':
        showSuccess(notification.title, notification.message)
        break
      case 'warning':
        showWarning(notification.title, notification.message)
        break
      case 'error':
        showError(notification.title, notification.message)
        break
      case 'info':
        showInfo(notification.title, notification.message)
        break
    }
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                markAllAsRead()
              }}
              className="h-6 px-2 text-xs"
            >
              Mark all read
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                clearAll()
              }}
              className="h-6 px-2 text-xs"
            >
              Clear all
            </Button>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <div className="max-h-96 overflow-y-auto">
          <AnimatePresence>
            {notificationsList.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground">
                No notifications
              </div>
            ) : (
              notificationsList.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <DropdownMenuItem
                    onClick={() => handleNotificationClick(notification)}
                    className="flex items-start gap-3 p-3 cursor-pointer hover:bg-muted/50"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </DropdownMenuItem>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
