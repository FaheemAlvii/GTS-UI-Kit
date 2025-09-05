'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { usePreferenceContext } from './preference-provider'

const colorPresets = [
  { name: 'Blue', value: 'hsl(221.2 83.2% 53.3%)' },
  { name: 'Purple', value: 'hsl(262.1 83.3% 57.8%)' },
  { name: 'Green', value: 'hsl(142.1 76.2% 36.3%)' },
  { name: 'Orange', value: 'hsl(24.6 95% 53.1%)' },
  { name: 'Red', value: 'hsl(0 84.2% 60.2%)' },
  { name: 'Pink', value: 'hsl(330.4 81.2% 60.4%)' },
]

export function ColorPicker() {
  const { preferences, updatePreference } = usePreferenceContext()

  const updateColor = (colorType: 'primaryColor' | 'secondaryColor' | 'accentColor', value: string) => {
    updatePreference('appearance', colorType, value)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Color Customization</CardTitle>
          <CardDescription>
            Customize your UI colors to match your brand or preference
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Primary Color */}
          <div className="space-y-2">
            <Label>Primary Color</Label>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-md border"
                style={{ backgroundColor: preferences.appearance.primaryColor }}
              />
              <div className="flex gap-1">
                {colorPresets.map((color) => (
                  <Button
                    key={color.name}
                    variant="outline"
                    size="sm"
                    onClick={() => updateColor('primaryColor', color.value)}
                    className="w-8 h-8 p-0"
                  >
                    <div
                      className="w-full h-full rounded"
                      style={{ backgroundColor: color.value }}
                    />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Color */}
          <div className="space-y-2">
            <Label>Secondary Color</Label>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-md border"
                style={{ backgroundColor: preferences.appearance.secondaryColor }}
              />
              <div className="flex gap-1">
                {colorPresets.map((color) => (
                  <Button
                    key={color.name}
                    variant="outline"
                    size="sm"
                    onClick={() => updateColor('secondaryColor', color.value)}
                    className="w-8 h-8 p-0"
                  >
                    <div
                      className="w-full h-full rounded"
                      style={{ backgroundColor: color.value }}
                    />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Accent Color */}
          <div className="space-y-2">
            <Label>Accent Color</Label>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-md border"
                style={{ backgroundColor: preferences.appearance.accentColor }}
              />
              <div className="flex gap-1">
                {colorPresets.map((color) => (
                  <Button
                    key={color.name}
                    variant="outline"
                    size="sm"
                    onClick={() => updateColor('accentColor', color.value)}
                    className="w-8 h-8 p-0"
                  >
                    <div
                      className="w-full h-full rounded"
                      style={{ backgroundColor: color.value }}
                    />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
