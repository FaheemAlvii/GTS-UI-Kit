'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit3, 
  Save, 
  X, 
  Camera,
  Shield,
  Bell,
  Globe,
  Lock,
  Key,
  CreditCard,
  Download
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

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
  visible: { opacity: 1, y: 0 }
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('personal')

  const userData = {
    name: 'Faheem Alvi',
    email: 'faheem@geektechsol.com',
    phone: '+1 (555) 123-4567',
    position: 'Lead Developer',
    department: 'UI/UX Engineering',
    location: 'San Francisco, CA',
    joinDate: 'September 5, 2023',
    avatar: '/api/placeholder/150/150',
    bio: 'Lead developer at Geek Tech Sol, specializing in modern UI component libraries and design systems.',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS'],
    notifications: {
      email: true,
      push: false,
      sms: true,
      marketing: false
    },
    privacy: {
      profileVisible: true,
      showEmail: false,
      showPhone: true
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save the data
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <motion.div variants={itemVariants} className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">GTS Shad/Cn Kit Profile</h1>
            <p className="text-slate-600 dark:text-slate-400">Manage your Geek Tech Sol account settings and preferences</p>
          </div>
          <div className="flex gap-2">
            {!isEditing ? (
              <Button onClick={handleEdit} className="gap-2">
                <Edit3 className="h-4 w-4" />
                Edit Profile
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={handleCancel} className="gap-2">
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </>
            )}
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Personal Information Tab */}
          <TabsContent value="personal" className="space-y-6">
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Picture */}
                  <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={userData.avatar} alt={userData.name} />
                      <AvatarFallback className="text-lg">
                        {userData.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Camera className="h-4 w-4" />
                        Change Photo
                      </Button>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        JPG, PNG or GIF. Max size 2MB.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={userData.name}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-slate-50 dark:bg-slate-800" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userData.email}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-slate-50 dark:bg-slate-800" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={userData.phone}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-slate-50 dark:bg-slate-800" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Job Title</Label>
                      <Input
                        id="position"
                        value={userData.position}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-slate-50 dark:bg-slate-800" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input
                        id="department"
                        value={userData.department}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-slate-50 dark:bg-slate-800" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={userData.location}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-slate-50 dark:bg-slate-800" : ""}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={userData.bio}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-slate-50 dark:bg-slate-800" : ""}
                      rows={3}
                    />
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <Label>Skills</Label>
                    <div className="flex flex-wrap gap-2">
                      {userData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>
                    Manage your password and security preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" placeholder="Enter current password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" placeholder="Enter new password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                    </div>
                    <Button className="gap-2">
                      <Key className="h-4 w-4" />
                      Update Password
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Authenticator App</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Use an authenticator app to generate verification codes
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS Verification</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Receive verification codes via SMS
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>
                    Choose how you want to be notified about updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Receive notifications via email
                        </p>
                      </div>
                      <Switch defaultChecked={userData.notifications.email} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Receive push notifications in your browser
                        </p>
                      </div>
                      <Switch defaultChecked={userData.notifications.push} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Receive notifications via SMS
                        </p>
                      </div>
                      <Switch defaultChecked={userData.notifications.sms} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Emails</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Receive marketing and promotional emails
                        </p>
                      </div>
                      <Switch defaultChecked={userData.notifications.marketing} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Privacy & Preferences
                  </CardTitle>
                  <CardDescription>
                    Control your privacy settings and data preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Public Profile</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Make your profile visible to other users
                        </p>
                      </div>
                      <Switch defaultChecked={userData.privacy.profileVisible} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Show Email Address</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Display your email address on your profile
                        </p>
                      </div>
                      <Switch defaultChecked={userData.privacy.showEmail} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Show Phone Number</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Display your phone number on your profile
                        </p>
                      </div>
                      <Switch defaultChecked={userData.privacy.showPhone} />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium">Data & Privacy</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download My Data
                      </Button>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Download a copy of your personal data
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="destructive" className="gap-2">
                        <Lock className="h-4 w-4" />
                        Delete Account
                      </Button>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Permanently delete your account and all associated data
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  )
}
