import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const renderItem = ({item, handleDelete}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const memoizedContent = useMemo(() => item.content, [item]); // Re-run only when item changes

  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1, fontSize: 16}}>{memoizedContent}</Text>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default renderItem;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.3, // iOS shadow
    shadowRadius: 2, // iOS shadow
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  deleteIcon: {
    width: 24,
    height: 24,
    tintColor: 'red',
  },
});
