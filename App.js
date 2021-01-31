/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PureChart from 'react-native-pure-chart';

const App: () => React$Node = () => {

  let sampleData = [30, 200, 170, 250, 10]
  let sampleDataMulti= [
        {seriesName: 'test', data: [30, 200, 170, 250, 99], color: '#ff4b00'},
        {seriesName: 'test2', data: [60, 400, 570, 250, 78], color: '#0e95de'},
        {seriesName: 'test3', data: [90, 600, 770, 250, 65], color: '#00c19b'}
     ]

  let sampleDataPi = [
    {
      value: 20,
      label: 'University',
      color: 'red',
    }, {
      value: 50,
      label: 'California',
      color: 'blue'
    }, {
      value: 30,
      label: 'Davis',
      color: 'green'
    }

  ]

  let sampleDataBar = [{ seriesName: 'test2', data: [140, 160,135,185], color: "#0e95de", },]
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style = {{flex: 2, backgroundColor: "red"}}>
            <Text style = {{fontSize: 24, textAlign: 'center'}}>Demo App</Text>
          </View>

          <View style={{ flex : 1, borderWidth:2, borderColor:"black", padding: 20, }}> 
            <Text style = {{textAlign: "center", paddingBottom: 20}}>This is a Clickable line Chart: </Text>
            <PureChart type={'line'}
              data={sampleData}
              width={'100%'}
              height={100}

              />
          </View>
          <View style={{ flex : 1, borderWidth:2, borderColor:"black", padding: 20, }}> 
            <Text style = {{textAlign: "center", paddingBottom: 20}}>This is a Clickable Multi-line Chart: </Text>
            <PureChart type={'line'}
              data={sampleDataMulti}
              width={'100%'}
              height={100}
              />
          </View>
          <View style={{ flex : 1, borderWidth:2, borderColor:"black", padding: 20, justifyContent: "center"}}> 
            <Text style = {{textAlign: "center", paddingBottom: 20}}>This is a Clickable Pie Chart: </Text>
            <PureChart type={'pie'}
              data={sampleDataPi}
              width={'100%'}
              height={100}
              showEvenNumberXaxisLabel={true}
              />
          </View>
          <View style={{ flex : 1, borderWidth:2, borderColor:"black", padding: 20, justifyContent: "center"}}> 
            <Text style = {{textAlign: "center", paddingBottom: 20}}>This is a Clickable Bar Chart: </Text>
            <PureChart type={'bar'}
              data={sampleDataBar}
              width={'100%'}
              height={100}

              />
          </View>

          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
