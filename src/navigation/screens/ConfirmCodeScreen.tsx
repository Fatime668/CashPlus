import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import SvgBack from '../../assets/svgs/BackIcon';

const ConfirmCodeScreen = ({navigation}: any) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleOtpChange = (index: number, value: string) => {
    setOtp(prevOtp => {
      const otpArray = [...prevOtp];
      otpArray[index] = value;
      return otpArray;
    });

    if (index < 3 && value !== '') {
      const nextIndex = index + 1;
      inputRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgBack />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: '30%',
            fontSize: 16,
            fontWeight: '500',
          }}>
          Verification
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <View>
          <Text style={{fontSize: 24, fontWeight: '500', marginTop: 35}}>
            OTP
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: '300',
              lineHeight: 35,
            }}>
            Please type the verification code sent to
          </Text>
          <Text style={{fontWeight: '600'}}>+994 55 456 78 90</Text>

          <View style={styles.container}>
            <TextInput
              ref={ref => (inputRefs.current[0] = ref)}
              style={styles.input}
              maxLength={1}
              value={otp[0]}
              onChangeText={value => handleOtpChange(0, value)}
              keyboardType="numeric"
            />
            <TextInput
              ref={ref => (inputRefs.current[1] = ref)}
              style={styles.input}
              maxLength={1}
              value={otp[1]}
              onChangeText={value => handleOtpChange(1, value)}
              keyboardType="numeric"
            />
            <TextInput
              ref={ref => (inputRefs.current[2] = ref)}
              style={styles.input}
              maxLength={1}
              value={otp[2]}
              onChangeText={value => handleOtpChange(2, value)}
              keyboardType="numeric"
            />
            <TextInput
              ref={ref => (inputRefs.current[3] = ref)}
              style={styles.input}
              maxLength={1}
              value={otp[3]}
              onChangeText={value => handleOtpChange(3, value)}
              keyboardType="numeric"
            />
          </View>

          <View style={{alignItems: 'center', rowGap: 5}}>
            <Text>Don't receive the OTP? Resend OTP</Text>
            <Text style={{fontWeight: '600'}}>01 : 20</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.davamBtn}
          onPress={() => navigation.navigate('CreditOrder')}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
            Davam et
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmCodeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20,
    columnGap: 8,
    paddingBottom: 10,
  },
  input: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: '#F2F4F7',
    backgroundColor: '#F2F4F7',
    borderRadius: 8,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 20,
  },
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
});
