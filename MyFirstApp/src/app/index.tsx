import { Image, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';


export default function HomeScreen() {

  const [userName, setUserName] = useState('');
  const [count, setCount] = useState(0);
  const increase = () => {
  setCount(count + 1);
};

const decrease = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};

const reset = () => {
  setCount(0);
};

  return (
    <ThemedView style={styles.container}>
<ScrollView contentContainerStyle={styles.screen}>

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


  <TextInput
    style={styles.input}
    placeholder="Test Input Here"
    value={userName}
    onChangeText={setUserName}
  />

  <Text style={styles.greeting}>
  {userName}
  </Text>

  <Text style={styles.counterTitle}>
    Counter
  </Text>

  <Text style={styles.counter}>
    {count}
  </Text>

  <View style={styles.buttonContainer}>

    <TouchableOpacity
      style={styles.button}
      onPress={increase}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={decrease}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={reset}>
      <Text style={styles.buttonText}>Reset</Text>
    </TouchableOpacity>

  </View>
</ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
    
},
buttonContainer: {
  flexDirection: 'row',
  marginTop: 10,
},

button: {
  backgroundColor: '#007AFF',
  padding: 10,
  marginHorizontal: 5,
  borderRadius: 5,
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
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
    marginTop: 5,
  },
// i change the margin top of the school to -10 to make it look better and more aligned with the course text. 03/07/2026
  school: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
// i change the font size of the bio text 03/07/2026
  bio: {
    fontSize: 20,
    marginTop: 12,
    color: '#666',
    fontStyle: 'italic',
  },


input: {
  width: '80%',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 10,
  marginTop: 20,
},


greeting: {
  fontSize: 18,
  marginTop: 15,
  fontWeight: 'bold',
},

counter: {
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 10,
},

counterTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 20,
},

});
