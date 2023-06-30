import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SvgBack from '../../assets/svgs/BackIcon';
import SvgNotification from '../../assets/svgs/Notification';

const OrderNumberScreen = ({navigation}: any) => {
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
          Sifariş nömrəsi
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgNotification />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 40,
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <View>
          <View style={{flexDirection: 'row', columnGap: 8}}>
            <Text style={{fontSize: 24, fontWeight: '500'}}>
              Sifariş nömrəsi:
            </Text>
            <Text style={{fontSize: 24, fontWeight: '500', color: '#155EEF'}}>
              #K950052
            </Text>
          </View>
          <View style={styles.frame}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 16, fontWeight: '400'}}>Məbləğ:</Text>
              <Text style={{fontSize: 16, fontWeight: '600'}}>2000 AZN</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 16, fontWeight: '400'}}>Müddət:</Text>
              <Text style={{fontSize: 16, fontWeight: '600'}}>24 ay</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 16, fontWeight: '400'}}>Faiz:</Text>
              <Text style={{fontSize: 16, fontWeight: '600'}}>22%</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', columnGap: 5}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                letterSpacing: 1,
              }}>
              Qeyd:
            </Text>
            <Text style={styles.qeydText}>
              Təklif edilən aralıqlarda seçimlərinizi dəyişə bilərsiniz.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            columnGap: 10,
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <TouchableOpacity
            style={styles.davamBtn}
            onPress={() => navigation.goBack()}>
            <Text style={{color: '#155EEF', fontSize: 16, fontWeight: '600'}}>
              İmtina
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.davamBtn, {backgroundColor: '#155EEF'}]}
            onPress={() => navigation.navigate('OrderNumber')}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              Təsdiq
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderNumberScreen;

const styles = StyleSheet.create({
  frame: {
    marginVertical: 20,
    rowGap: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C1C1C180',
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  davamBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: '30%',
    width: '48%',
    borderColor: '#155EEF',
  },
  qeydText: {
    width: '85%',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: '#344054',
  },
});
