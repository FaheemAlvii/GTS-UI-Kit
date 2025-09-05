'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Mail, 
  CheckCircle,
  Building2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

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

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setIsLoading(true)
    setError('')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 flex items-center justify-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-md">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
                      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            GTS Shad/Cn Kit
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            We&apos;ve sent you a password reset link
          </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-2xl">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Reset link sent!</h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      We&apos;ve sent a password reset link to{' '}
                      <span className="font-medium text-slate-900 dark:text-slate-100">
                        {email}
                      </span>
                    </p>
                  </div>
                  
                  <Alert>
                    <Mail className="h-4 w-4" />
                    <AlertDescription>
                      Check your email and click the link to reset your password. 
                      The link will expire in 1 hour.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Didn&apos;t receive the email? Check your spam folder or try again.
                    </p>
                    
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setEmail('')
                        }}
                        variant="outline"
                        className="w-full"
                      >
                        Send another email
                      </Button>
                      
                      <Link href="/login">
                        <Button variant="ghost" className="w-full">
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Back to sign in
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 flex items-center justify-center p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-md">
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Forgot password?
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            No worries, we&apos;ll send you reset instructions
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-2xl">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl text-center">Reset password</CardTitle>
              <CardDescription className="text-center">
                Enter your email address and we&apos;ll send you a link to reset your password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={error ? 'border-red-500' : ''}
                    />
                  </div>
                  {error && (
                    <Alert variant="destructive" className="py-2">
                      <AlertDescription className="text-sm">
                        {error}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending reset link...
                    </div>
                  ) : (
                    'Send reset link'
                  )}
                </Button>
              </form>

              <div className="text-center">
                <Link
                  href="/login"
                  className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Remember your password?{' '}
            <Link href="/login" className="underline hover:text-primary">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
