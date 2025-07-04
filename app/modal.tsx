import * as React from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, BounceIn, SlideInLeft } from 'react-native-reanimated';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';
import { Progress } from '~/components/ui/progress';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '~/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Checkbox } from '~/components/ui/checkbox';
import { Switch } from '~/components/ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Alert as AlertComponent, AlertDescription, AlertTitle } from '~/components/ui/alert';
import { Skeleton } from '~/components/ui/skeleton';
import { Info } from '~/lib/icons/Info';

export default function Modal() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [isChecked, setIsChecked] = React.useState(false);
  const [isEnabled, setIsEnabled] = React.useState(true);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  React.useEffect(() => {
    // Reset progress when modal opens
    setProgress(0);
  }, []);

  return (
    <>
      <ScrollView className='flex-1 bg-secondary/30'>
        <View className='p-6 gap-6'>
          {/* Header */}
          <Animated.View entering={FadeInUp.delay(100)}>
            <Card className='w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600'>
              <CardHeader className='items-center'>
                <View className='p-4 rounded-full bg-white/20 mb-4'>
                  <Info size={32} className='text-white' />
                </View>
                <CardTitle className='text-2xl text-white text-center'>
                  UI Components Showcase
                </CardTitle>
                <CardDescription className='text-white/80 text-center'>
                  Explore beautiful interactive components with full dark mode support
                </CardDescription>
              </CardHeader>
            </Card>
          </Animated.View>

          {/* Interactive Demo */}
          <Animated.View entering={FadeInUp.delay(200)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Interactive Demo</CardTitle>
                <CardDescription>Test various interactive components with theme support</CardDescription>
              </CardHeader>
              <CardContent className='gap-4'>
                {/* Theme Demo Section */}
                <View className='p-4 rounded-lg bg-muted/50 dark:bg-muted border border-border'>
                  <Text className='font-semibold mb-2'>🎨 Dark Mode Demo</Text>
                  <Text className='text-sm text-muted-foreground mb-3'>
                    This section demonstrates theme-aware components. Toggle the theme using the button in the header!
                  </Text>
                  <View className='flex-row gap-2'>
                    <View className='flex-1 p-3 rounded bg-background border border-border'>
                      <Text className='text-xs text-muted-foreground'>Background</Text>
                      <Text className='font-medium'>Content adapts to theme</Text>
                    </View>
                    <View className='flex-1 p-3 rounded bg-primary'>
                      <Text className='text-xs text-primary-foreground/70'>Primary</Text>
                      <Text className='font-medium text-primary-foreground'>Always readable</Text>
                    </View>
                  </View>
                </View>
                
                <View className='flex-row items-center justify-between'>
                  <Text className='text-base font-medium'>Enable Notifications</Text>
                  <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
                </View>
                
                <View className='flex-row items-center gap-3'>
                  <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
                  <Text className='text-sm'>I agree to the terms and conditions</Text>
                </View>

                <View className='gap-3'>
                  <Button 
                    onPress={handleLoadingDemo}
                    disabled={isLoading}
                    className='w-full'
                  >
                    <Text>{isLoading ? 'Loading...' : 'Start Loading Demo'}</Text>
                  </Button>
                  
                  {isLoading && (
                    <View className='gap-2'>
                      <Progress value={progress} className='h-2' />
                      <Text className='text-sm text-center text-muted-foreground'>
                        {progress}% Complete
                      </Text>
                    </View>
                  )}
                </View>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Dialog Examples */}
          <Animated.View entering={FadeInUp.delay(300)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Dialog Examples</CardTitle>
                <CardDescription>Various dialog and alert components</CardDescription>
              </CardHeader>
              <CardContent className='gap-3'>
                <View className='flex-row gap-3'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant='outline' className='flex-1'>
                        <Text>Info Dialog</Text>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Information</DialogTitle>
                        <DialogDescription>
                          This is a beautiful dialog component with smooth animations and modern styling.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant='destructive' className='flex-1'>
                        <Text>Alert Dialog</Text>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your data.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>
                          <Text>Cancel</Text>
                        </AlertDialogCancel>
                        <AlertDialogAction>
                          <Text>Delete</Text>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </View>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Accordion */}
          <Animated.View entering={FadeInUp.delay(400)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Accordion</CardTitle>
                <CardDescription>Expandable content sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type='single' collapsible>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger>
                      <Text>What is React Native?</Text>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Text className='text-muted-foreground'>
                        React Native is a framework for building mobile applications using React and JavaScript.
                      </Text>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-2'>
                    <AccordionTrigger>
                      <Text>What are rn-primitives?</Text>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Text className='text-muted-foreground'>
                        RN-primitives are unstyled, accessible components for React Native that you can customize.
                      </Text>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-3'>
                    <AccordionTrigger>
                      <Text>How to style components?</Text>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Text className='text-muted-foreground'>
                        You can style components using NativeWind (Tailwind CSS) or regular React Native styles.
                      </Text>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Tabs */}
          <Animated.View entering={FadeInUp.delay(500)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Tabs</CardTitle>
                <CardDescription>Organize content with tabs</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value='overview' onValueChange={() => {}} className='w-full'>
                  <TabsList className='grid w-full grid-cols-3'>
                    <TabsTrigger value='overview'><Text>Overview</Text></TabsTrigger>
                    <TabsTrigger value='features'><Text>Features</Text></TabsTrigger>
                    <TabsTrigger value='settings'><Text>Settings</Text></TabsTrigger>
                  </TabsList>
                  <TabsContent value='overview' className='mt-4'>
                    <View className='gap-3'>
                      <Text className='text-lg font-semibold'>Welcome to the overview</Text>
                      <Text className='text-muted-foreground'>
                        This tab contains an overview of all the available components and features.
                      </Text>
                      <View className='flex-row gap-2'>
                        <Badge variant='secondary'><Text>React Native</Text></Badge>
                        <Badge variant='outline'><Text>Components</Text></Badge>
                        <Badge variant='secondary'><Text>UI/UX</Text></Badge>
                      </View>
                    </View>
                  </TabsContent>
                  <TabsContent value='features' className='mt-4'>
                    <View className='gap-3'>
                      <Text className='text-lg font-semibold'>Amazing Features</Text>
                      <View className='gap-2'>
                        <Text className='text-muted-foreground'>• Fully customizable components</Text>
                        <Text className='text-muted-foreground'>• Smooth animations with Reanimated</Text>
                        <Text className='text-muted-foreground'>• Accessibility support</Text>
                        <Text className='text-muted-foreground'>• TypeScript support</Text>
                      </View>
                    </View>
                  </TabsContent>
                  <TabsContent value='settings' className='mt-4'>
                    <View className='gap-3'>
                      <Text className='text-lg font-semibold'>Settings Panel</Text>
                      <View className='gap-3'>
                        <View className='flex-row items-center justify-between'>
                          <Text>Auto-save</Text>
                          <Switch checked={true} onCheckedChange={() => {}} />
                        </View>
                        <View className='flex-row items-center justify-between'>
                          <Text>Dark Mode</Text>
                          <Switch checked={false} onCheckedChange={() => {}} />
                        </View>
                      </View>
                    </View>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Alerts */}
          <Animated.View entering={FadeInUp.delay(600)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Alerts</CardTitle>
                <CardDescription>Different types of alert messages</CardDescription>
              </CardHeader>
              <CardContent className='gap-4'>
                <AlertComponent icon={Info} className='border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950'>
                  <AlertTitle className='text-green-800'>Success!</AlertTitle>
                  <AlertDescription className='text-green-700'>
                    Your changes have been saved successfully.
                  </AlertDescription>
                </AlertComponent>

                <AlertComponent icon={Info} className='border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950'>
                  <AlertTitle className='text-yellow-800'>Warning</AlertTitle>
                  <AlertDescription className='text-yellow-700'>
                    Please review your settings before proceeding.
                  </AlertDescription>
                </AlertComponent>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Skeleton Loading */}
          <Animated.View entering={FadeInUp.delay(700)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Skeleton Loading</CardTitle>
                <CardDescription>Loading placeholders</CardDescription>
              </CardHeader>
              <CardContent className='gap-4'>
                <View className='flex-row items-center gap-4'>
                  <Skeleton className='w-12 h-12 rounded-full' />
                  <View className='flex-1 gap-2'>
                    <Skeleton className='h-4 w-3/4' />
                    <Skeleton className='h-4 w-1/2' />
                  </View>
                </View>
                <View className='gap-2'>
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-5/6' />
                  <Skeleton className='h-4 w-4/6' />
                </View>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Tooltips */}
          <Animated.View entering={FadeInUp.delay(800)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Tooltips</CardTitle>
                <CardDescription>Hover or press for more information</CardDescription>
              </CardHeader>
              <CardContent>
                <View className='flex-row gap-4 justify-center'>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button variant='outline'>
                        <Text>Hover me</Text>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Text>This is a tooltip</Text>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button variant='secondary'>
                        <Text>Info</Text>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Text>More detailed information here</Text>
                    </TooltipContent>
                  </Tooltip>
                </View>
              </CardContent>
            </Card>
          </Animated.View>
        </View>
      </ScrollView>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
