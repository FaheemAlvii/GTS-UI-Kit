'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Package, 
  ShoppingCart, 
  Settings, 
  FileText, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  DollarSign,
  UserCheck,
  Building2,
  User,
  LogIn,
  UserPlus,
  KeyRound
} from 'lucide-react'

const navigationItems = [
  {
    title: 'Overview',
    items: [
      { name: 'Dashboard', href: '/', icon: LayoutDashboard },
      { name: 'Analytics', href: '/analytics', icon: BarChart3 },
      { name: 'Reports', href: '/reports', icon: FileText },
    ]
  },
  {
    title: 'Business',
    items: [
      { name: 'Orders', href: '/orders', icon: ShoppingCart, badge: '12' },
      { name: 'Products', href: '/products', icon: Package },
      { name: 'Customers', href: '/customers', icon: Users },
      { name: 'Suppliers', href: '/suppliers', icon: Building2 },
    ]
  },
  {
    title: 'Finance',
    items: [
      { name: 'Revenue', href: '/revenue', icon: DollarSign },
      { name: 'Expenses', href: '/expenses', icon: TrendingUp },
      { name: 'Invoices', href: '/invoices', icon: FileText },
    ]
  },
  {
    title: 'System',
    items: [
      { name: 'Users', href: '/users', icon: UserCheck },
      { name: 'Settings', href: '/settings', icon: Settings },
      { name: 'Calendar', href: '/calendar', icon: Calendar },
    ]
  },
  {
    title: 'Authentication',
    items: [
      { name: 'Login', href: '/login', icon: LogIn },
      { name: 'Signup', href: '/signup', icon: UserPlus },
      { name: 'Forgot Password', href: '/forgot-password', icon: KeyRound },
    ]
  }
]

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 60 : 280 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="flex flex-col h-screen bg-card border-r border-border"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">GTS Shad/Cn Kit</span>
            </motion.div>
          )}
        </AnimatePresence>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
        {navigationItems.map((section, sectionIndex) => (
          <div key={section.title}>
            <AnimatePresence>
              {!isCollapsed && (
                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: sectionIndex * 0.1 }}
                  className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3"
                >
                  {section.title}
                </motion.h3>
              )}
            </AnimatePresence>
            
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: (sectionIndex * 0.1) + (itemIndex * 0.05) 
                    }}
                  >
                    <Link href={item.href}>
                      <Button
                        variant={isActive ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start h-10 px-3",
                          isCollapsed && "px-2"
                        )}
                      >
                        <Icon className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
                        <AnimatePresence>
                          {!isCollapsed && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="flex items-center gap-2"
                            >
                              {item.name}
                              {item.badge && (
                                <Badge variant="secondary" className="ml-auto">
                                  {item.badge}
                                </Badge>
                              )}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </Button>
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border space-y-2">
        {/* Profile Link */}
        <Link href="/profile">
          <Button
            variant={pathname === '/profile' ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start h-10 px-3",
              isCollapsed && "px-2"
            )}
          >
            <User className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Profile
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </Link>

        {/* User Info */}
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 p-3 bg-muted rounded-lg"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Faheem Alvi</p>
                <p className="text-xs text-muted-foreground truncate">Lead Developer</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  )
}
