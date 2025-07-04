import * as React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Stack } from 'expo-router';
import Animated, { FadeInUp, FadeInLeft, FadeInRight } from 'react-native-reanimated';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/components/ui/hover-card';
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group';
import { Toggle } from '~/components/ui/toggle';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import { Info } from '~/lib/icons/Info';
import { ChevronDown } from '~/lib/icons/ChevronDown';

const { width } = Dimensions.get('window');

// Sample data for table
const sampleData = [
  { id: 1, name: 'John Doe', role: 'Developer', status: 'Active', projects: 5 },
  { id: 2, name: 'Jane Smith', role: 'Designer', status: 'Active', projects: 3 },
  { id: 3, name: 'Bob Johnson', role: 'Manager', status: 'Away', projects: 8 },
  { id: 4, name: 'Alice Brown', role: 'Developer', status: 'Active', projects: 2 },
];

export default function ComponentsShowcase() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [selectedView, setSelectedView] = React.useState('grid');

  return (
    <>
      <Stack.Screen options={{ title: 'Components Showcase' }} />
      <ScrollView className='flex-1 bg-secondary/30'>
        <View className='p-6 gap-6'>
          {/* Header */}
          <Animated.View entering={FadeInUp.delay(100)}>
            <Card className='w-full rounded-2xl'>
              <CardHeader className='items-center'>
                <View className='p-3 rounded-full bg-primary/10 mb-2'>
                  <Info size={24} className='text-primary' />
                </View>
                <CardTitle className='text-2xl text-center'>Components Gallery</CardTitle>
                <CardDescription className='text-center'>
                  Explore advanced UI components and layouts
                </CardDescription>
                <View className='flex-row gap-2 mt-3'>
                  <Badge variant='secondary'><Text>Advanced</Text></Badge>
                  <Badge variant='outline'><Text>Interactive</Text></Badge>
                  <Badge variant='secondary'><Text>Responsive</Text></Badge>
                </View>
              </CardHeader>
            </Card>
          </Animated.View>

          {/* Toggle Controls */}
          <Animated.View entering={FadeInLeft.delay(200)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Toggle Controls</CardTitle>
                <CardDescription>Interactive toggle buttons and groups</CardDescription>
              </CardHeader>
              <CardContent className='gap-4'>
                <View className='gap-3'>
                  <Text className='text-sm font-medium'>View Mode</Text>
                  <ToggleGroup 
                    value={selectedView} 
                    onValueChange={(value) => setSelectedView(value || 'grid')}
                    type='single'
                  >
                    <ToggleGroupItem value='grid' className='flex-1'>
                      <Text>Grid</Text>
                    </ToggleGroupItem>
                    <ToggleGroupItem value='list' className='flex-1'>
                      <Text>List</Text>
                    </ToggleGroupItem>
                    <ToggleGroupItem value='card' className='flex-1'>
                      <Text>Card</Text>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </View>

                <Separator />

                <View className='flex-row gap-3'>
                  <Toggle pressed={false} onPressedChange={() => {}}>
                    <Text>Bold</Text>
                  </Toggle>
                  <Toggle pressed={false} onPressedChange={() => {}}>
                    <Text>Italic</Text>
                  </Toggle>
                  <Toggle pressed={false} onPressedChange={() => {}}>
                    <Text>Underline</Text>
                  </Toggle>
                </View>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Popovers */}
          <Animated.View entering={FadeInRight.delay(300)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Popovers & Hover Cards</CardTitle>
                <CardDescription>Floating content and hover interactions</CardDescription>
              </CardHeader>
              <CardContent className='gap-4'>
                <View className='flex-row gap-3 justify-center'>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant='outline'>
                        <Text>Open Popover</Text>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-80'>
                      <View className='gap-3'>
                        <Text className='font-semibold'>Popover Content</Text>
                        <Text className='text-sm text-muted-foreground'>
                          This is a popover with custom content. You can place any components here.
                        </Text>
                        <Button size='sm'>
                          <Text>Action</Text>
                        </Button>
                      </View>
                    </PopoverContent>
                  </Popover>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant='secondary'>
                        <Text>Hover Card</Text>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className='w-80'>
                      <View className='flex-row gap-3'>
                        <Avatar alt="John Doe" className='w-12 h-12'>
                          <AvatarImage source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' }} />
                          <AvatarFallback>
                            <Text>JD</Text>
                          </AvatarFallback>
                        </Avatar>
                        <View className='flex-1 gap-1'>
                          <Text className='font-semibold'>John Doe</Text>
                          <Text className='text-sm text-muted-foreground'>
                            Senior Developer at Tech Corp
                          </Text>
                          <Text className='text-xs text-muted-foreground'>
                            Joined March 2023
                          </Text>
                        </View>
                      </View>
                    </HoverCardContent>
                  </HoverCard>
                </View>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Collapsible */}
          <Animated.View entering={FadeInUp.delay(400)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Collapsible Content</CardTitle>
                <CardDescription>Expandable sections with smooth animations</CardDescription>
              </CardHeader>
              <CardContent>
                <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed}>
                  <CollapsibleTrigger asChild>
                    <Button variant='ghost' className='w-full justify-between'>
                      <Text>Advanced Settings</Text>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className='mt-4 gap-4'>
                    <View className='gap-3 p-4 bg-secondary/50 rounded-lg'>
                      <Text className='font-medium'>Debug Options</Text>
                      <View className='gap-2'>
                        <Text className='text-sm text-muted-foreground'>• Enable verbose logging</Text>
                        <Text className='text-sm text-muted-foreground'>• Show performance metrics</Text>
                        <Text className='text-sm text-muted-foreground'>• Enable developer mode</Text>
                        <Text className='text-sm text-muted-foreground'>• Show component boundaries</Text>
                      </View>
                      <Button variant='outline' size='sm' className='w-32'>
                        <Text>Apply</Text>
                      </Button>
                    </View>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Data Table */}
          <Animated.View entering={FadeInLeft.delay(500)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Data Table</CardTitle>
                <CardDescription>Structured data with styling</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead><Text>Name</Text></TableHead>
                      <TableHead><Text>Role</Text></TableHead>
                      <TableHead><Text>Status</Text></TableHead>
                      <TableHead><Text>Projects</Text></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className='font-medium'><Text>{row.name}</Text></TableCell>
                        <TableCell><Text>{row.role}</Text></TableCell>
                        <TableCell>
                          <Badge variant={row.status === 'Active' ? 'default' : 'secondary'}>
                            <Text>{row.status}</Text>
                          </Badge>
                        </TableCell>
                        <TableCell><Text>{row.projects}</Text></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Aspect Ratio Examples */}
          <Animated.View entering={FadeInRight.delay(600)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Aspect Ratio</CardTitle>
                <CardDescription>Responsive media containers</CardDescription>
              </CardHeader>
              <CardContent className='gap-4'>
                <View className='gap-3'>
                  <Text className='text-sm font-medium'>16:9 Video</Text>
                  <AspectRatio ratio={16/9} className='bg-muted rounded-md'>
                    <View className='flex-1 items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400 rounded-md'>
                      <Text className='text-white font-semibold text-lg'>16:9 Content</Text>
                      <Text className='text-white/80 text-sm'>Perfect for videos</Text>
                    </View>
                  </AspectRatio>
                </View>

                <View className='gap-3'>
                  <Text className='text-sm font-medium'>1:1 Square</Text>
                  <View className='w-32'>
                    <AspectRatio ratio={1} className='bg-muted rounded-md'>
                      <View className='flex-1 items-center justify-center bg-gradient-to-br from-blue-400 to-green-400 rounded-md'>
                        <Text className='text-white font-semibold'>1:1</Text>
                        <Text className='text-white/80 text-xs'>Square</Text>
                      </View>
                    </AspectRatio>
                  </View>
                </View>
              </CardContent>
            </Card>
          </Animated.View>

          {/* Performance Stats */}
          <Animated.View entering={FadeInUp.delay(700)}>
            <Card className='w-full rounded-xl'>
              <CardHeader>
                <CardTitle className='text-xl'>Performance Metrics</CardTitle>
                <CardDescription>Real-time app statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <View className='grid grid-cols-2 gap-4'>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium'>Components Loaded</Text>
                    <Text className='text-3xl font-bold text-primary'>24</Text>
                  </View>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium'>Render Time</Text>
                    <Text className='text-3xl font-bold text-green-600'>12ms</Text>
                  </View>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium'>Memory Usage</Text>
                    <Text className='text-3xl font-bold text-blue-600'>45MB</Text>
                  </View>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium'>Bundle Size</Text>
                    <Text className='text-3xl font-bold text-purple-600'>2.1MB</Text>
                  </View>
                </View>
              </CardContent>
            </Card>
          </Animated.View>
        </View>
      </ScrollView>
    </>
  );
}
