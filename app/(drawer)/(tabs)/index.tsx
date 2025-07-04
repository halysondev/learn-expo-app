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
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';
import { Info } from '~/lib/icons/Info';
import { API_CONFIG, api } from '~/utils/api';

const PROFILE_AVATAR = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face';

interface ApiResponse {
  hello: string;
  message: string;
  timestamp: string;
  method: string;
  success?: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface UsersResponse {
  users?: User[];
  user?: User;
  count?: number;
  totalUsers?: number;
  remainingUsers?: number;
  deletedUser?: User;
  message?: string;
  timestamp: string;
  error?: string;
}

export default function Dashboard() {
  const [progress, setProgress] = React.useState(78);
  const [skillProgress, setSkillProgress] = React.useState(85);
  const [taskProgress, setTaskProgress] = React.useState(62);
  
  // API Demo States
  const [apiResponse, setApiResponse] = React.useState<ApiResponse | null>(null);
  const [isLoadingApi, setIsLoadingApi] = React.useState(false);
  const [apiError, setApiError] = React.useState<string | null>(null);
  const [userName, setUserName] = React.useState('Developer');
  
  // Users API States
  const [usersResponse, setUsersResponse] = React.useState<UsersResponse | null>(null);
  const [isLoadingUsers, setIsLoadingUsers] = React.useState(false);
  const [usersError, setUsersError] = React.useState<string | null>(null);

  function updateProgressValues() {
    setProgress(Math.floor(Math.random() * 100));
    setSkillProgress(Math.floor(Math.random() * 100));
    setTaskProgress(Math.floor(Math.random() * 100));
  }

  async function callGetApi() {
    setIsLoadingApi(true);
    setApiError(null);
    
    try {
      const data = await api.get<ApiResponse>('/hello', { name: userName });
      setApiResponse(data);
    } catch (error) {
      setApiError(error instanceof Error ? error.message : 'Failed to fetch');
      setApiResponse(null);
    } finally {
      setIsLoadingApi(false);
    }
  }

  async function fetchUsers() {
    setIsLoadingUsers(true);
    setUsersError(null);
    
    try {
      const data = await api.get<UsersResponse>('/users');
      setUsersResponse(data);
    } catch (error) {
      setUsersError(error instanceof Error ? error.message : 'Failed to fetch users');
      setUsersResponse(null);
    } finally {
      setIsLoadingUsers(false);
    }
  }

  async function createUser() {
    setIsLoadingUsers(true);
    setUsersError(null);
    
    try {
      const data = await api.post<UsersResponse>('/users', { name: userName });
      setUsersResponse(data);
    } catch (error) {
      setUsersError(error instanceof Error ? error.message : 'Failed to create user');
      setUsersResponse(null);
    } finally {
      setIsLoadingUsers(false);
    }
  }

  async function deleteUser(userId: number) {
    setIsLoadingUsers(true);
    setUsersError(null);
    
    try {
      const data = await api.delete<UsersResponse>('/users', { id: userId });
      setUsersResponse(data);
    } catch (error) {
      setUsersError(error instanceof Error ? error.message : 'Failed to delete user');
      setUsersResponse(null);
    } finally {
      setIsLoadingUsers(false);
    }
  }

  async function callPostApi() {
    setIsLoadingApi(true);
    setApiError(null);
    
    try {
      const data = await api.post<ApiResponse>('/hello', { name: userName });
      setApiResponse(data);
    } catch (error) {
      setApiError(error instanceof Error ? error.message : 'Failed to fetch');
      setApiResponse(null);
    } finally {
      setIsLoadingApi(false);
    }
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

          {/* API Demo */}
          <Card className='w-full rounded-xl'>
            <CardHeader>
              <CardTitle className='text-xl'>🚀 API Demo</CardTitle>
              <CardDescription>Test the hello API endpoint with different HTTP methods</CardDescription>
            </CardHeader>
            <CardContent className='gap-4'>
              {/* Input for name parameter */}
              <View className='gap-2'>
                <Label><Text>Your Name</Text></Label>
                <Input
                  value={userName}
                  onChangeText={setUserName}
                  placeholder="Enter your name"
                  className='h-12'
                />
              </View>

              {/* API Buttons */}
              <View className='flex-row gap-3'>
                <Button 
                  variant='default' 
                  className='flex-1'
                  onPress={callGetApi}
                  disabled={isLoadingApi}
                >
                  <Text>{isLoadingApi ? 'Loading...' : 'GET /api/hello'}</Text>
                </Button>
                
                <Button 
                  variant='secondary' 
                  className='flex-1'
                  onPress={callPostApi}
                  disabled={isLoadingApi}
                >
                  <Text>{isLoadingApi ? 'Loading...' : 'POST /api/hello'}</Text>
                </Button>
              </View>

              {/* Loading Indicator */}
              {isLoadingApi && (
                <View className='items-center py-4'>
                  <Progress value={50} className='h-2 w-full animate-pulse' />
                  <Text className='text-sm text-muted-foreground mt-2'>Calling API...</Text>
                </View>
              )}

              {/* Error Display */}
              {apiError && (
                <Alert icon={Info} className='border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950'>
                  <AlertTitle className='text-red-800'><Text>API Error</Text></AlertTitle>
                  <AlertDescription className='text-red-700'>
                    <Text>{apiError}</Text>
                  </AlertDescription>
                </Alert>
              )}

              {/* Success Response */}
              {apiResponse && !apiError && (
                <Alert icon={Info} className='border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950'>
                  <AlertTitle className='text-green-800'><Text>API Response</Text></AlertTitle>
                  <AlertDescription className='text-green-700'>
                    <View className='gap-2 mt-2'>
                      <Text className='font-semibold'>Message: {apiResponse.message}</Text>
                      <Text>Method: {apiResponse.method}</Text>
                      <Text>Hello: {apiResponse.hello}</Text>
                      <Text className='text-xs'>Time: {new Date(apiResponse.timestamp).toLocaleTimeString()}</Text>
                      {apiResponse.success && (
                        <Badge variant='outline' className='w-20'>
                          <Text>Success</Text>
                        </Badge>
                      )}
                    </View>
                  </AlertDescription>
                </Alert>
              )}

              {/* API Documentation */}
              <View className='p-4 bg-muted/50 rounded-lg border border-border'>
                <Text className='font-semibold mb-2'>📖 API Endpoints</Text>
                                  <Text className='text-xs text-muted-foreground mb-2'>
                    Base URL: {API_CONFIG.fullUrl} ({API_CONFIG.environment})
                  </Text>
                <View className='gap-2'>
                  <Text className='text-sm text-muted-foreground'>
                                         <Text className='font-mono'>GET {API_CONFIG.path}/hello?name=yourname</Text> - Get personalized greeting
                  </Text>
                  <Text className='text-sm text-muted-foreground'>
                                         <Text className='font-mono'>POST {API_CONFIG.path}/hello</Text> - Send POST request with JSON body
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>

          {/* Users API Demo */}
          <Card className='w-full rounded-xl'>
            <CardHeader>
              <CardTitle className='text-xl'>👥 Users API Demo</CardTitle>
              <CardDescription>Advanced API with CRUD operations (Create, Read, Delete)</CardDescription>
            </CardHeader>
            <CardContent className='gap-4'>
              {/* API Buttons */}
              <View className='flex-row gap-2'>
                <Button 
                  variant='default' 
                  className='flex-1'
                  onPress={fetchUsers}
                  disabled={isLoadingUsers}
                >
                  <Text>{isLoadingUsers ? 'Loading...' : 'GET Users'}</Text>
                </Button>
                
                <Button 
                  variant='secondary' 
                  className='flex-1'
                  onPress={createUser}
                  disabled={isLoadingUsers}
                >
                  <Text>{isLoadingUsers ? 'Loading...' : 'POST User'}</Text>
                </Button>
              </View>

              {/* Loading Indicator */}
              {isLoadingUsers && (
                <View className='items-center py-4'>
                  <Progress value={50} className='h-2 w-full animate-pulse' />
                  <Text className='text-sm text-muted-foreground mt-2'>Processing users API...</Text>
                </View>
              )}

              {/* Error Display */}
              {usersError && (
                <Alert icon={Info} className='border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950'>
                  <AlertTitle className='text-red-800'><Text>Users API Error</Text></AlertTitle>
                  <AlertDescription className='text-red-700'>
                    <Text>{usersError}</Text>
                  </AlertDescription>
                </Alert>
              )}

              {/* Success Response */}
              {usersResponse && !usersError && (
                <Alert icon={Info} className='border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950'>
                  <AlertTitle className='text-blue-800'><Text>Users API Response</Text></AlertTitle>
                  <AlertDescription className='text-blue-700'>
                                         <View className='gap-3 mt-2'>
                       {usersResponse.message && (
                         <Text className='font-semibold'>{usersResponse.message}</Text>
                       )}
                       
                       {/* Debug Info */}
                       <View className='p-2 bg-muted/30 rounded border border-muted'>
                         <Text className='text-xs font-mono mb-2'>
                           API URL: {API_CONFIG.fullUrl} ({API_CONFIG.environment.toUpperCase()})
                         </Text>
                         <Text className='text-xs font-mono'>
                           Raw Response: {JSON.stringify(usersResponse, null, 2)}
                         </Text>
                       </View>
                       
                       {usersResponse.users && (
                         <View className='gap-3'>
                           <Text className='font-medium'>Users ({usersResponse.count}):</Text>
                           {usersResponse.users.map((user, index) => (
                             <View key={user.id || index} className='p-3 bg-background/50 rounded border border-border'>
                               <View className='flex-row items-start justify-between'>
                                 <View className='flex-1 mr-3'>
                                   <Text className='font-medium text-foreground text-base'>
                                     {user.name || 'Unknown User'}
                                   </Text>
                                   <Text className='text-sm text-muted-foreground mt-1'>
                                     {user.email || 'No email'}
                                   </Text>
                                   <Text className='text-sm text-muted-foreground'>
                                     Role: {user.role || 'No role'}
                                   </Text>
                                   <Text className='text-xs text-muted-foreground mt-1'>
                                     ID: {user.id || 'No ID'}
                                   </Text>
                                 </View>
                                 <Button 
                                   variant='destructive' 
                                   size='sm'
                                   onPress={() => deleteUser(user.id)}
                                   disabled={isLoadingUsers}
                                 >
                                   <Text>Delete</Text>
                                 </Button>
                               </View>
                             </View>
                           ))}
                         </View>
                       )}
                      
                      {usersResponse.user && (
                        <View className='gap-2'>
                          <Text className='font-medium'>Created User:</Text>
                          <View className='p-2 bg-background/50 rounded border border-border'>
                            <Text className='font-medium'>{usersResponse.user.name}</Text>
                            <Text className='text-xs text-muted-foreground'>{usersResponse.user.email} • {usersResponse.user.role}</Text>
                          </View>
                          <Text className='text-xs'>Total Users: {usersResponse.totalUsers}</Text>
                        </View>
                      )}
                      
                      {usersResponse.deletedUser && (
                        <View className='gap-2'>
                          <Text className='font-medium'>Deleted User:</Text>
                          <View className='p-2 bg-red-50 dark:bg-red-950 rounded border border-red-200 dark:border-red-900'>
                            <Text className='font-medium'>{usersResponse.deletedUser.name}</Text>
                            <Text className='text-xs text-muted-foreground'>{usersResponse.deletedUser.email}</Text>
                          </View>
                          <Text className='text-xs'>Remaining Users: {usersResponse.remainingUsers}</Text>
                        </View>
                      )}
                      
                      <Text className='text-xs'>Time: {new Date(usersResponse.timestamp).toLocaleTimeString()}</Text>
                    </View>
                  </AlertDescription>
                </Alert>
              )}

                             {/* API Documentation */}
               <View className='p-4 bg-muted/50 rounded-lg border border-border'>
                 <Text className='font-semibold mb-2'>📖 Users API Endpoints</Text>
                 <Text className='text-xs text-muted-foreground mb-2'>
                   Base URL: {API_CONFIG.fullUrl} ({API_CONFIG.environment})
                 </Text>
                 <View className='gap-2'>
                   <Text className='text-sm text-muted-foreground'>
                                           <Text className='font-mono'>GET {API_CONFIG.path}/users</Text> - Get all users
                   </Text>
                   <Text className='text-sm text-muted-foreground'>
                                           <Text className='font-mono'>GET {API_CONFIG.path}/users?id=1</Text> - Get specific user
                   </Text>
                   <Text className='text-sm text-muted-foreground'>
                                           <Text className='font-mono'>POST {API_CONFIG.path}/users</Text> - Create new user
                   </Text>
                   <Text className='text-sm text-muted-foreground'>
                                           <Text className='font-mono'>DELETE {API_CONFIG.path}/users?id=1</Text> - Delete user
                   </Text>
                 </View>
               </View>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </>
  );
}
