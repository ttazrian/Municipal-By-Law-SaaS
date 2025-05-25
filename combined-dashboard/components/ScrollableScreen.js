import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ScrollableScreen({ children, scrollRef }) {
  return (
    <ScrollView
      ref={scrollRef}
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#f6f9f6',
    alignItems: 'center',
    paddingBottom: 100,
  },
});
