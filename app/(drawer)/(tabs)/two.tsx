import * as React from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Stack } from 'expo-router';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Switch } from '~/components/ui/switch';
import { Separator } from '~/components/ui/separator';
import { Badge } from '~/components/ui/badge';
import { Textarea } from '~/components/ui/textarea';
import { Checkbox } from '~/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

export default function Settings() {
  const [name, setName] = React.useState('John Doe');
  const [email, setEmail] = React.useState('john.doe@example.com');
  const [bio, setBio] = React.useState('Senior Developer with 5+ years experience');
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [locationAccess, setLocationAccess] = React.useState(true);
  const [cameraAccess, setCameraAccess] = React.useState(false);
  const [language, setLanguage] = React.useState('en');
  const [theme, setTheme] = React.useState('system');
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [pushNotifications, setPushNotifications] = React.useState(false);
  const [smsNotifications, setSmsNotifications] = React.useState(true);

  const handleSave = () => {
    Alert.alert('Settings Saved', 'Your preferences have been updated successfully!');
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Settings' }} />
      <ScrollView className='flex-1 bg-secondary/30'>
        <View className='p-6 gap-6'>
          {/* Profile Section */}
          <Card className='w-full rounded-2xl'>
            <CardHeader className='items-center pb-4'>
              <Avatar alt="User Avatar" className='w-20 h-20'>
                <AvatarImage source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' }} />
                <AvatarFallback>
                  <Text>JD</Text>
                </AvatarFallback>
              </Avatar>
              <View className='p-2' />
              <CardTitle className='text-xl'>Profile Settings</CardTitle>
                              <Badge variant='secondary'><Text>Premium User</Text></Badge>
            </CardHeader>
            
            <CardContent className='gap-4'>
              <View className='gap-2'>
                <Label nativeID='name' className='text-base font-medium'>
                  <Text>Full Name</Text>
                </Label>
                <Input
                  value={name}
                  onChangeText={setName}
                  placeholder='Enter your full name'
                  className='h-12'
                />
              </View>
              
              <View className='gap-2'>
                <Label nativeID='email' className='text-base font-medium'>
                  <Text>Email Address</Text>
                </Label>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  placeholder='Enter your email'
                  keyboardType='email-address'
                  className='h-12'
                />
              </View>
              
              <View className='gap-2'>
                <Label nativeID='bio' className='text-base font-medium'>
                  <Text>Bio</Text>
                </Label>
                <Textarea
                  value={bio}
                  onChangeText={setBio}
                  placeholder='Tell us about yourself'
                  className='min-h-[100px]'
                />
              </View>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className='w-full rounded-xl'>
            <CardHeader>
              <CardTitle className='text-xl'>Preferences</CardTitle>
              <CardDescription>Customize your app experience</CardDescription>
            </CardHeader>
            <CardContent className='gap-6'>
              <View className='gap-4'>
                <Label className='text-base font-medium'><Text>Theme</Text></Label>
                <RadioGroup value={theme} onValueChange={setTheme} className='gap-4'>
                  <View className='flex-row items-center gap-2'>
                    <RadioGroupItem value='light' />
                    <Label className='text-base'><Text>Light</Text></Label>
                  </View>
                  <View className='flex-row items-center gap-2'>
                    <RadioGroupItem value='dark' />
                    <Label className='text-base'><Text>Dark</Text></Label>
                  </View>
                  <View className='flex-row items-center gap-2'>
                    <RadioGroupItem value='system' />
                    <Label className='text-base'><Text>System</Text></Label>
                  </View>
                </RadioGroup>
              </View>

              <Separator />

              <View className='gap-2'>
                <Label className='text-base font-medium'><Text>Language</Text></Label>
                <Select value={{ value: language, label: language }} onValueChange={(option) => setLanguage(option?.value || 'en')}>
                  <SelectTrigger className='h-12'>
                    <SelectValue placeholder='Select language' />
                  </SelectTrigger>
                                      <SelectContent>
                      <SelectItem value='en' label='English'><Text>English</Text></SelectItem>
                      <SelectItem value='es' label='Spanish'><Text>Spanish</Text></SelectItem>
                      <SelectItem value='fr' label='French'><Text>French</Text></SelectItem>
                      <SelectItem value='de' label='German'><Text>German</Text></SelectItem>
                      <SelectItem value='it' label='Italian'><Text>Italian</Text></SelectItem>
                    </SelectContent>
                </Select>
              </View>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className='w-full rounded-xl'>
            <CardHeader>
              <CardTitle className='text-xl'>Notifications</CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className='gap-4'>
              <View className='flex-row items-center justify-between'>
                <View className='flex-1 gap-1'>
                  <Label className='text-base font-medium'><Text>Push Notifications</Text></Label>
                  <Text className='text-sm text-muted-foreground'>
                    Get notified about important updates
                  </Text>
                </View>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </View>

              <Separator />

              <View className='gap-3'>
                <Label className='text-base font-medium'><Text>Notification Types</Text></Label>
                <View className='flex-row items-center gap-2'>
                  <Checkbox
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                  <Label className='text-sm'><Text>Email notifications</Text></Label>
                </View>
                <View className='flex-row items-center gap-2'>
                  <Checkbox
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                  <Label className='text-sm'><Text>Push notifications</Text></Label>
                </View>
                <View className='flex-row items-center gap-2'>
                  <Checkbox
                    checked={smsNotifications}
                    onCheckedChange={setSmsNotifications}
                  />
                  <Label className='text-sm'><Text>SMS notifications</Text></Label>
                </View>
              </View>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className='w-full rounded-xl'>
            <CardHeader>
              <CardTitle className='text-xl'>Privacy & Security</CardTitle>
              <CardDescription>Control your privacy settings</CardDescription>
            </CardHeader>
            <CardContent className='gap-4'>
              <View className='flex-row items-center justify-between'>
                <View className='flex-1 gap-1'>
                  <Label className='text-base font-medium'><Text>Location Access</Text></Label>
                  <Text className='text-sm text-muted-foreground'>
                    Allow app to access your location
                  </Text>
                </View>
                <Switch
                  checked={locationAccess}
                  onCheckedChange={setLocationAccess}
                />
              </View>

              <Separator />

              <View className='flex-row items-center justify-between'>
                <View className='flex-1 gap-1'>
                  <Label className='text-base font-medium'><Text>Camera Access</Text></Label>
                  <Text className='text-sm text-muted-foreground'>
                    Allow app to access your camera
                  </Text>
                </View>
                <Switch
                  checked={cameraAccess}
                  onCheckedChange={setCameraAccess}
                />
              </View>

              <Separator />

              <View className='flex-row items-center justify-between'>
                <View className='flex-1 gap-1'>
                  <Label className='text-base font-medium'><Text>Dark Mode</Text></Label>
                  <Text className='text-sm text-muted-foreground'>
                    Switch to dark theme
                  </Text>
                </View>
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </View>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <View className='gap-3'>
            <Button
              onPress={handleSave}
              className='w-full h-12'
            >
              <Text className='font-semibold'>Save Settings</Text>
            </Button>
            
            <View className='flex-row gap-3'>
              <Button
                variant='outline'
                className='flex-1 h-12'
                onPress={() => Alert.alert('Export', 'Settings exported successfully!')}
              >
                <Text>Export</Text>
              </Button>
              <Button
                variant='destructive'
                className='flex-1 h-12'
                onPress={() => Alert.alert('Reset', 'Are you sure you want to reset all settings?')}
              >
                <Text>Reset</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
