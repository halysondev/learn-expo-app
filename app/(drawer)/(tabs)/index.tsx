import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { Info } from '~/lib/icons/Info';

const PROFILE_AVATAR = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face';

export default function Dashboard() {
  const [progress, setProgress] = React.useState(78);
  const [skillProgress, setSkillProgress] = React.useState(85);
  const [taskProgress, setTaskProgress] = React.useState(62);

  function updateProgressValues() {
    setProgress(Math.floor(Math.random() * 100));
    setSkillProgress(Math.floor(Math.random() * 100));
    setTaskProgress(Math.floor(Math.random() * 100));
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Dashboard' }} />
      <ScrollView className='flex-1 bg-secondary/30'>
        <View className='p-6 gap-6'>
          {/* Profile Card */}
          <Card className='w-full rounded-2xl'>
            <CardHeader className='items-center pb-4'>
              <Avatar alt="User Avatar" className='w-24 h-24'>
                <AvatarImage source={{ uri: PROFILE_AVATAR }} />
                <AvatarFallback>
                  <Text>JD</Text>
                </AvatarFallback>
              </Avatar>
              <View className='p-2' />
              <CardTitle className='text-center text-2xl'>John Doe</CardTitle>
              <View className='flex-row items-center gap-2'>
                <CardDescription className='text-base font-semibold'>Senior Developer</CardDescription>
                <Tooltip delayDuration={150}>
                  <TooltipTrigger className='px-2 pb-0.5 active:opacity-50'>
                    <Info size={14} strokeWidth={2.5} className='w-4 h-4 text-foreground/70' />
                  </TooltipTrigger>
                  <TooltipContent className='py-2 px-4 shadow'>
                    <Text className='native:text-lg'>5+ years experience</Text>
                  </TooltipContent>
                </Tooltip>
              </View>
              <View className='flex-row gap-2 mt-2'>
                <Badge variant='secondary'><Text>React Native</Text></Badge>
                <Badge variant='secondary'><Text>TypeScript</Text></Badge>
                <Badge variant='secondary'><Text>Node.js</Text></Badge>
              </View>
            </CardHeader>
            
            <CardContent className='gap-4'>
              <View className='flex-row justify-around'>
                <View className='items-center'>
                  <Text className='text-sm text-muted-foreground'>Projects</Text>
                  <Text className='text-2xl font-bold text-primary'>24</Text>
                </View>
                <Separator orientation='vertical' className='h-12' />
                <View className='items-center'>
                  <Text className='text-sm text-muted-foreground'>Commits</Text>
                  <Text className='text-2xl font-bold text-primary'>1.2k</Text>
                </View>
                <Separator orientation='vertical' className='h-12' />
                <View className='items-center'>
                  <Text className='text-sm text-muted-foreground'>Reviews</Text>
                  <Text className='text-2xl font-bold text-primary'>89</Text>
                </View>
              </View>
            </CardContent>
          </Card>

          {/* Progress Cards */}
          <View className='flex-row gap-4'>
            <Card className='flex-1 rounded-xl'>
              <CardHeader className='pb-2'>
                <CardTitle className='text-lg'>Productivity</CardTitle>
              </CardHeader>
              <CardContent className='gap-2'>
                <View className='flex-row items-center justify-between'>
                  <Text className='text-sm text-muted-foreground'>This week</Text>
                  <LayoutAnimationConfig skipEntering>
                    <Animated.View
                      key={progress}
                      entering={FadeInUp}
                      exiting={FadeOutDown}
                    >
                      <Text className='text-sm font-bold text-emerald-600'>{progress}%</Text>
                    </Animated.View>
                  </LayoutAnimationConfig>
                </View>
                <Progress value={progress} className='h-2' indicatorClassName='bg-emerald-600' />
              </CardContent>
            </Card>

            <Card className='flex-1 rounded-xl'>
              <CardHeader className='pb-2'>
                <CardTitle className='text-lg'>Skills</CardTitle>
              </CardHeader>
              <CardContent className='gap-2'>
                <View className='flex-row items-center justify-between'>
                  <Text className='text-sm text-muted-foreground'>Level</Text>
                  <LayoutAnimationConfig skipEntering>
                    <Animated.View
                      key={skillProgress}
                      entering={FadeInUp}
                      exiting={FadeOutDown}
                    >
                      <Text className='text-sm font-bold text-blue-600'>{skillProgress}%</Text>
                    </Animated.View>
                  </LayoutAnimationConfig>
                </View>
                <Progress value={skillProgress} className='h-2' indicatorClassName='bg-blue-600' />
              </CardContent>
            </Card>
          </View>

          {/* Task Overview */}
          <Card className='w-full rounded-xl'>
            <CardHeader>
              <CardTitle className='text-xl'>Task Overview</CardTitle>
              <CardDescription>Current sprint progress</CardDescription>
            </CardHeader>
            <CardContent className='gap-4'>
              <View className='flex-row items-center justify-between'>
                <Text className='text-sm text-muted-foreground'>Sprint Progress:</Text>
                <LayoutAnimationConfig skipEntering>
                  <Animated.View
                    key={taskProgress}
                    entering={FadeInUp}
                    exiting={FadeOutDown}
                  >
                    <Text className='text-sm font-bold text-purple-600'>{taskProgress}%</Text>
                  </Animated.View>
                </LayoutAnimationConfig>
              </View>
              <Progress value={taskProgress} className='h-3' indicatorClassName='bg-purple-600' />
              
              <View className='flex-row justify-between mt-4'>
                <View className='items-center'>
                  <Text className='text-xs text-muted-foreground'>TODO</Text>
                  <Text className='text-lg font-semibold'>8</Text>
                </View>
                <View className='items-center'>
                  <Text className='text-xs text-muted-foreground'>IN PROGRESS</Text>
                  <Text className='text-lg font-semibold'>3</Text>
                </View>
                <View className='items-center'>
                  <Text className='text-xs text-muted-foreground'>COMPLETED</Text>
                  <Text className='text-lg font-semibold'>12</Text>
                </View>
                <View className='items-center'>
                  <Text className='text-xs text-muted-foreground'>REVIEW</Text>
                  <Text className='text-lg font-semibold'>2</Text>
                </View>
              </View>
            </CardContent>
            <CardFooter>
              <Button
                variant='outline'
                className='w-full shadow shadow-foreground/5'
                onPress={updateProgressValues}
              >
                <Text>Refresh Data</Text>
              </Button>
            </CardFooter>
          </Card>

          {/* Quick Actions */}
          <Card className='w-full rounded-xl'>
            <CardHeader>
              <CardTitle className='text-xl'>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <View className='flex-row gap-3'>
                <Button variant='default' className='flex-1'>
                  <Text>New Task</Text>
                </Button>
                <Button variant='secondary' className='flex-1'>
                  <Text>Time Log</Text>
                </Button>
                <Button variant='outline' className='flex-1'>
                  <Text>Reports</Text>
                </Button>
              </View>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </>
  );
}
