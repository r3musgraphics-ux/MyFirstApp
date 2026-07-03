import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'react-native';
import { ThemedView } from '@/components/themed-view';


export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.screen}>

        <Image
          source={require('@/assets/images/Krismarie.jpg')}
          style={styles.photo}
        />

       <Text style={styles.name}>
          Krismarie V. Castillo
        </Text>

        <Text style={styles.course}>
          MMA Student - CS126-1
        </Text>

        <Text style={styles.school}>
          Mapúa Malayan Colleges Mindanao
        </Text>

        <Text style={styles.bio}>
          "Creating, Always"
        </Text>

      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
  },

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
// i change the margin top of the course to -10 to make it look better and more aligned with the name text. 03/07/2026
  course: {
    fontSize: 15,
    marginTop: -10,
  },
// i change the margin top of the school to -10 to make it look better and more aligned with the course text. 03/07/2026
  school: {
    fontSize: 14,
    marginTop: -10,
    textAlign: 'center',
  },
// i change the font size of the bio text 03/07/2026
  bio: {
    fontSize: 20,
    marginTop: 12,
    color: '#666',
    fontStyle: 'italic',
  },

});
