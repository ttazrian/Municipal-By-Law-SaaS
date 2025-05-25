import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const iconName = {
            Home: 'home',
            'New Report': 'file-alt',
            'My Reports': 'list-alt',
            Profile: 'user',
          }[route.name];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              onPress={onPress}
              style={styles.tabItem}
              activeOpacity={0.8}
            >
              <View style={[styles.iconWrapper, isFocused && styles.activeIconWrapper]}>
                <FontAwesome5
                  name={iconName}
                  size={20}
                  color={isFocused ? '#5A6E5B' : '#808580'}
                />
              </View>
              {!isFocused && (
                <Text style={styles.tabText}>{route.name}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'transparent',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#eff1ef',
    borderRadius: 35,
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 25,
  },
  activeIconWrapper: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 30,
    top: -20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  tabText: {
    fontSize: 12,
    color: '#808580',
    marginTop: 4,
  },
});

export default CustomTabBar;