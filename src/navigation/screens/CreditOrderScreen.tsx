import {
  SafeAreaView,
  ScrollView,
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
import Dropdown from '../../util/dropdown';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const CreditOrderScreen = ({navigation}: any) => {
  const [amountValue, setAmountValue] = useState(0);
  const [durationValue, setDurationValue] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState(
    'Kredit götürmə məqsədi',
  );
  const [selectedOption2, setSelectedOption2] = useState(
    'Daşınmaz əmlak məlumatınız',
  );
  const handleOptionSelect1 = (option: any) => {
    setSelectedOption1(option);
    console.log('Selected option 1:', option);
  };

  const handleOptionSelect2 = (option: any) => {
    setSelectedOption2(option);
    console.log('Selected option 2:', option);
  };

  const dropdownOptions1 = ['Option 1.1', 'Option 1.2', 'Option 1.3'];
  const dropdownOptions2 = ['Option 2.1', 'Option 2.2', 'Option 2.3'];

  const handleAmountValueChange = (newValue: any) => {
    setAmountValue(newValue);
  };

  const handleDurationValueChange = (newValue: any) => {
    setDurationValue(newValue);
  };

  const handleAmountTextInputChange = (text: any) => {
    setAmountValue(parseInt(text) || 0);
  };

  const handleDurationTextInputChange = (text: any) => {
    setDurationValue(parseInt(text) || 0);
  };
  const amountData = amountValue.toFixed().toString();
  const durationData = durationValue.toFixed().toString();

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView>
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
                value={amountValue}
                minimumValue={500}
                maximumValue={5000}
                onValueChange={handleAmountValueChange}
                thumbTintColor="#155EEF"
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
              <View style={{marginBottom: 40}}>
                <TextInput
                  mode="outlined"
                  selectionColor="#000"
                  outlineColor="#D0D5DD"
                  activeOutlineColor="#155EEF"
                  label="Məbləğ"
                  keyboardType="numeric"
                  value={amountData}
                  onChangeText={handleAmountTextInputChange}
                />
                <View style={{position: 'absolute', right: 20, top: '45%'}}>
                  <SvgManat />
                </View>
              </View>
              <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 8}}>
                Müddət
              </Text>
              <Slider
                value={durationValue}
                minimumValue={6}
                maximumValue={36}
                onValueChange={handleDurationValueChange}
                thumbTintColor="#155EEF"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <Text style={{color: '#155EEF'}}>6</Text>
                <Text style={{color: '#155EEF'}}>12</Text>
                <Text style={{color: '#155EEF'}}>18</Text>
                <Text style={{color: '#155EEF'}}>24</Text>
                <Text style={{color: '#155EEF'}}>30</Text>
                <Text style={{color: '#155EEF'}}>36</Text>
              </View>
              <View style={{marginBottom: 8}}>
                <TextInput
                  mode="outlined"
                  selectionColor="#000"
                  outlineColor="#D0D5DD"
                  activeOutlineColor="#155EEF"
                  label="Müddət"
                  keyboardType="numeric"
                  value={durationData}
                  onChangeText={handleDurationTextInputChange}
                />
                <View style={{position: 'absolute', right: 20, top: '42%'}}>
                  <Text style={{fontSize: 16, fontWeight: '500'}}>AY</Text>
                </View>
              </View>
              <View style={styles.container}>
                <Dropdown
                  options={dropdownOptions1}
                  defaultOption={selectedOption1}
                  onSelect={handleOptionSelect1}
                />
                <Dropdown
                  options={dropdownOptions2}
                  defaultOption={selectedOption2}
                  onSelect={handleOptionSelect2}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.davamBtn}
              onPress={() => navigation.navigate('CreditApprove')}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
                Davam et
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default CreditOrderScreen;

const styles = StyleSheet.create({
  davamBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#155EEF',
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#155EEF',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
