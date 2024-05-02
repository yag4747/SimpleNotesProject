/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteNote} from '../redux/noteSlice';
import RenderItem from './renderItem';

const NoteList = props => {
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleDelete = noteId => {
    dispatch(deleteNote(noteId));
  };

  return (
    <View style={{flex: 1}}>
      {notes?.notes?.length > 0 ? (
        <FlatList
          data={notes?.notes}
          renderItem={({item}) => (
            <RenderItem item={item} handleDelete={handleDelete} />
          )}
          keyExtractor={item => item.id.toString()} // Ensure unique key for each item
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center',fontSize:16 }}>{'No record found'}</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.button_add}
        onPress={() => {
          props.navigation.navigate('AddNotes');
        }}>
        <Image
          source={require('../assets/add.png')}
          style={{width: 60, height: 60}}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  button_add: {
    position: 'absolute',
    bottom: 100,
    right: 20,
  },
});
