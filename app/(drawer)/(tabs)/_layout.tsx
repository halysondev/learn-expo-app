import { Tabs } from 'expo-router';
import { TabBarIcon } from '~/components/TabBarIcon';
import { ThemeToggle } from '~/components/ThemeToggle';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: 'rgb(59 130 246)', // blue-500
        headerRight: () => <ThemeToggle />,
      }}>
              <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <TabBarIcon name="dashboard" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
