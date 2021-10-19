// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createAppContainer } from '@react-navigation';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import LocStack from './locstack';
// import RootStack from './rootstack';

// const Drawer = createDrawerNavigator();

// export default function RootStackDrawer() {
//     return (
//       <NavigationContainer>
//         <Drawer.Navigator>
//           <Drawer.Screen name="Home" component={RootStack} />
//           <Drawer.Screen name="Location" component={LocStack} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     );
//   }

// const RootStackDrawer = createDrawerNavigator({
//     Home: {
//         screen: RootStack
//     },
//     Location: {
//         screen: LocStack
//     }
// });

// export default createAppContainer(RootStackDrawer);