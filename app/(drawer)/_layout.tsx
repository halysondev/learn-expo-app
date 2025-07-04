import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native';

import { HeaderButton } from '../../components/HeaderButton';
import { ThemeToggle } from '../../components/ThemeToggle';

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: 'Components Showcase',
          drawerLabel: 'Components Showcase',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerRight: () => <ThemeToggle />,
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerTitle: 'Dashboard & Settings',
          drawerLabel: 'Dashboard & Settings',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Link href="/modal" asChild>
                <HeaderButton />
              </Link>
              <ThemeToggle />
            </View>
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
