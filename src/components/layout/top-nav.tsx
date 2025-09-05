'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  Search, 
  Settings, 
  User, 
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { PreferencesPanel } from '@/components/preferences-panel'
import { NotificationsTray } from '@/components/notifications/notifications-tray'

interface TopNavProps {
  onMenuToggle: () => void
  isMobileMenuOpen: boolean
}

export function TopNav({ onMenuToggle, isMobileMenuOpen }: TopNavProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const searchResults = [
    { title: 'Dashboard', description: 'Main dashboard overview' },
    { title: 'Orders', description: 'Manage customer orders' },
    { title: 'Products', description: 'Product catalog management' },
    { title: 'Customers', description: 'Customer relationship management' },
    { title: 'Analytics', description: 'Business analytics and reports' },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="flex h-16 items-center justify-between px-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuToggle}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
          
          {/* Search */}
          <div className="relative hidden md:block">
            <Command className="w-72">
              <CommandInput
                placeholder="Search anything..."
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              />
              <CommandList className={isSearchOpen ? 'block' : 'hidden'}>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {searchResults.map((result) => (
                    <CommandItem key={result.title}>
                      <div>
                        <div className="font-medium">{result.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {result.description}
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Mobile search */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-4 w-4" />
          </Button>

          {/* Notifications */}
          <NotificationsTray />

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Preferences */}
          <PreferencesPanel />

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary-foreground" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@company.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  )
}
