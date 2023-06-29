import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SvgBack from '../../assets/svgs/BackIcon';
import SvgNotification from '../../assets/svgs/Notification';
import Slider from '@react-native-community/slider';
import {DefaultTheme, PaperProvider, TextInput} from 'react-native-paper';
import SvgManat from '../../assets/svgs/Manat';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const CreditOrderScreen = ({navigation}: any) => {
  const [value, setValue] = useState(0);

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  const handleTextInputChange = (text: any) => {
    setValue(parseInt(text) || 0);
  };
  const data = value.toFixed().toString();

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgBack />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
            }}>
            İpteka krediti
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgNotification />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 40, marginBottom: 20}}>
          <Text style={{fontSize: 24, fontWeight: '500'}}>Müraciət</Text>
          <View style={{marginTop: 25}}>
            {/* <Text>Məbləğ: {value.toFixed()}</Text> */}
            <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 8}}>
              Məbləğ
            </Text>
            <Slider
              value={value}
              minimumValue={500}
              maximumValue={5000}
              onValueChange={handleValueChange}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text>500</Text>
              <Text>2000</Text>
              <Text>5000</Text>
            </View>
            <View>
              <TextInput
                mode="outlined"
                selectionColor="#000"
                outlineColor="#98A2B3"
                activeOutlineColor="#155EEF"
                label="Məbləğ"
                keyboardType="numeric"
                value={data}
                onChangeText={handleTextInputChange}
              />
              <View style={{position: 'absolute', right: 20, top: '45%'}}>
                <SvgManat />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default CreditOrderScreen;

const styles = StyleSheet.create({});
