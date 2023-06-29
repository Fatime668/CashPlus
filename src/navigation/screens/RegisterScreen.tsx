import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import SvgViewEye from '../../assets/svgs/ViewEyeIcon';
import SvgHideEye from '../../assets/svgs/HideEyeIcon';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};
const RegisterScreen = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            flex: 1,
            marginTop: 50,
            marginHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 30, fontWeight: '600', marginBottom: 25}}>
              Qeydiyyat
            </Text>
            <View style={{marginBottom: 20, rowGap: 15}}>
              <TextInput
                label="Mobil nömrə"
                mode="outlined"
                selectionColor="#000"
                outlineColor="#98A2B3"
                activeOutlineColor="#155EEF"
                // value={text}
                // onChangeText={text => setText(text)}
              />
              <TextInput
                label="FIN Code"
                mode="outlined"
                selectionColor="#000"
                outlineColor="#98A2B3"
                activeOutlineColor="#155EEF"
                // value={text}
                // onChangeText={text => setText(text)}
              />
              <TextInput
                label="Seriya Nömrəsi"
                mode="outlined"
                selectionColor="#000"
                outlineColor="#98A2B3"
                activeOutlineColor="#155EEF"
                // value={text}
                // onChangeText={text => setText(text)}
              />
              <View style={{position: 'relative'}}>
                <TextInput
                  label="Parol"
                  mode="outlined"
                  selectionColor="#000"
                  outlineColor="#98A2B3"
                  activeOutlineColor="#155EEF"
                  secureTextEntry={!showPassword}
                  // value={text}
                  // onChangeText={text => setText(text)}
                />
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.togglePwdStyles}>
                  {showPassword ? <SvgViewEye /> : <SvgHideEye />}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.davamBtn}
            onPress={() => navigation.navigate('Confirm')}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              Davam et
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  togglePwdStyles: {
    position: 'absolute',
    top: 20,
    right: 20,
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
