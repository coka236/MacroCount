
import { StyleSheet, Image, Platform } from 'react-native';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (

    <ThemedView style={styles.titleContainer}>
       
        <ThemedText>
          
        </ThemedText>
      </ThemedView>

  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
   
    backgroundColor: '#FF5733',
    gap: 8,
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
