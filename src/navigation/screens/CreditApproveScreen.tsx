import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SvgBack from '../../assets/svgs/BackIcon';
import SvgTick from '../../assets/svgs/Tick';

const CreditApproveScreen = ({navigation}: any) => {
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
            marginLeft: '35%',
            fontSize: 16,
            fontWeight: '500',
          }}>
          Təsdiq
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 40,
        }}>
        <Text style={{fontSize: 24, fontWeight: '500'}}>Təsdiq</Text>
        <View style={{justifyContent: 'space-between', height: '100%'}}>
          <View style={{marginTop: 30}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                columnGap: 10,
                marginBottom: 20,
              }}>
              <SvgTick />
              <Text style={styles.testiqShertler}>
                İş yeri haqqında məlumatları ASAN Finance xidmətindən alınması
                üçün razılıq verirəm.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 10,
                marginBottom: 20,
                alignItems: 'flex-start',
              }}>
              <SvgTick />
              <Text style={styles.testiqShertler}>
                Akb-dən kredit tarixçəsinin əldə olunmasına razılıq verirəm.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 10,
                marginBottom: 20,
                alignItems: 'flex-start',
              }}>
              <SvgTick />
              <Text style={styles.testiqShertler}>
                Akb-dən kredit skor məlumatları əldə olunmasına razılıq verirəm.
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.davamBtn}
            onPress={() => navigation.navigate('OrderNumber')}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              Təsdiq et
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreditApproveScreen;

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
    marginBottom: '30%',
  },
  testiqShertler: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    top: -2,
  },
});
