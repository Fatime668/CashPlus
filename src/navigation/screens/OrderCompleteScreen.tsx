import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SvgBack from '../../assets/svgs/BackIcon';
import SvgNotification from '../../assets/svgs/Notification';
import SvgSuccess from '../../assets/svgs/Success';

const OrderCompleteScreen = ({navigation}: any) => {
  return (
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
          Müqavilə
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgNotification />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SvgSuccess />
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
            lineHeight: 24,
            marginTop: 20,
            marginBottom: 5,
          }}>
          Müqavilə hazırdır
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: '#344054',
            lineHeight: 24,
            width: '75%',
            textAlign: 'center',
          }}>
          Müqaviləni əldə etmək üçün üzərinə klikləyin.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.davamBtn}
        onPress={() => navigation.navigate('CreditApprove')}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
          Müqaviləni imzala
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderCompleteScreen;

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
    marginHorizontal: 20,
  },
});
