import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';

const Home = () => {
  const [address, setAddress] = useState('');
  const [fullName, setFullName] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [details, setDetails] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/search', {
        address,
        fullName,
        cellNumber
      });
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search by address"
          onChangeText={setAddress}
          value={address}
        />
        <TextInput
          style={styles.input}
          placeholder="Search by full name"
          onChangeText={setFullName}
          value={fullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Search by cell number"
          onChangeText={setCellNumber}
          value={cellNumber}
        />
      </View>
      <Text style={styles.detailsText}>Enter the details</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter the details here"
          onChangeText={setDetails}
          value={details}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={setAge}
          value={age}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          onChangeText={setState}
          value={state}
        />
        <TextInput
          style={styles.input}
          placeholder="Zip Code"
          onChangeText={setZipCode}
          value={zipCode}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultsContainer}>
        <Text>{results.length} results found</Text>
        {results.map((result, index) => (
          <Text key={index} style={styles.resultText}>{JSON.stringify(result)}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '90%',
    borderRadius: 4,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 9,
    fontWeight: '500',
    marginTop: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  detailsText: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    fontWeight: 'bold',
  },
  resultsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default Home;
