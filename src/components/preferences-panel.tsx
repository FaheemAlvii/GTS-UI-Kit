'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { 
  Download, 
  Upload, 
  Settings, 
  Palette, 
  Type, 
  Layout, 
  Eye,
  X,
} from 'lucide-react'
import { usePreferenceContext } from './preference-provider'
import { ColorPicker } from './color-picker'

export function PreferencesPanel() {
  const { preferences, updatePreference, exportPreferences, importPreferences } = usePreferenceContext()
  const [isOpen, setIsOpen] = useState(false)

  const handleExport = () => {
    const data = exportPreferences()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'gts-ui-preferences.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        importPreferences(content)
      }
      reader.readAsText(file)
    }
  }

  return (
    <>
      <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
        <Settings className="h-4 w-4" />
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-[400px] bg-background border-l shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Preferences</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Customize your UI experience with these settings
              </p>
        
        <Tabs defaultValue="appearance" className="mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Appearance</span>
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              <span className="hidden sm:inline">Typography</span>
            </TabsTrigger>
            <TabsTrigger value="layout" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              <span className="hidden sm:inline">Layout</span>
            </TabsTrigger>
            <TabsTrigger value="accessibility" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">A11y</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appearance" className="space-y-4">
            <ColorPicker />
            
            <Card>
              <CardHeader>
                <CardTitle>Border Radius</CardTitle>
                <CardDescription>Control the roundness of UI elements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label>Border Radius</Label>
                  <Select
                    value={preferences.appearance.borderRadius}
                    onValueChange={(value: 'none' | 'sm' | 'md' | 'lg' | 'xl') => updatePreference('appearance', 'borderRadius', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="sm">Small</SelectItem>
                      <SelectItem value="md">Medium</SelectItem>
                      <SelectItem value="lg">Large</SelectItem>
                      <SelectItem value="xl">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="typography" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Font Settings</CardTitle>
                <CardDescription>Customize typography preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Font Family</Label>
                  <Select
                    value={preferences.typography.fontFamily}
                    onValueChange={(value: 'system' | 'serif' | 'mono' | 'custom') => updatePreference('typography', 'fontFamily', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="serif">Serif</SelectItem>
                      <SelectItem value="mono">Monospace</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Font Size Scale</Label>
                  <Select
                    value={preferences.typography.fontSizeScale}
                    onValueChange={(value: 'xs' | 'sm' | 'base' | 'lg' | 'xl') => updatePreference('typography', 'fontSizeScale', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">Extra Small</SelectItem>
                      <SelectItem value="sm">Small</SelectItem>
                      <SelectItem value="base">Base</SelectItem>
                      <SelectItem value="lg">Large</SelectItem>
                      <SelectItem value="xl">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="layout" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Layout Settings</CardTitle>
                <CardDescription>Control spacing and density</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Density</Label>
                  <Select
                    value={preferences.layout.density}
                    onValueChange={(value: 'compact' | 'comfortable' | 'spacious') => updatePreference('layout', 'density', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compact">Compact</SelectItem>
                      <SelectItem value="comfortable">Comfortable</SelectItem>
                      <SelectItem value="spacious">Spacious</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Container Width</Label>
                  <Select
                    value={preferences.layout.containerWidth}
                    onValueChange={(value: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => updatePreference('layout', 'containerWidth', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sm">Small</SelectItem>
                      <SelectItem value="md">Medium</SelectItem>
                      <SelectItem value="lg">Large</SelectItem>
                      <SelectItem value="xl">Extra Large</SelectItem>
                      <SelectItem value="2xl">2X Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Settings</CardTitle>
                <CardDescription>Improve accessibility and usability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>High Contrast</Label>
                    <p className="text-sm text-muted-foreground">
                      Increase contrast for better visibility
                    </p>
                  </div>
                  <Switch
                    checked={preferences.accessibility.highContrast}
                    onCheckedChange={(checked) => updatePreference('accessibility', 'highContrast', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Reduced Motion</Label>
                    <p className="text-sm text-muted-foreground">
                      Minimize animations and transitions
                    </p>
                  </div>
                  <Switch
                    checked={preferences.accessibility.reducedMotion}
                    onCheckedChange={(checked) => updatePreference('accessibility', 'reducedMotion', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Screen Reader Optimizations</Label>
                    <p className="text-sm text-muted-foreground">
                      Enhance screen reader experience
                    </p>
                  </div>
                  <Switch
                    checked={preferences.accessibility.screenReaderOptimizations}
                    onCheckedChange={(checked) => updatePreference('accessibility', 'screenReaderOptimizations', checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t">
          <div className="flex gap-2">
            <Button onClick={handleExport} variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm" asChild>
              <label>
                <Upload className="mr-2 h-4 w-4" />
                Import
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
              </label>
            </Button>
          </div>
        </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
