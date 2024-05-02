/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addNote} from '../redux/noteSlice';

const AddNote = (props) => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSave = useCallback(() => {
    if (content.trim()) {
      dispatch(addNote(content));
      setContent('');
      props.navigation.goBack()
    } else {
      alert('please enter the content');
    }
  }, [content, dispatch]);

  return (
    <View style={{flex: 1, padding: 16}}>
      <TextInput
        style={{padding: 16, backgroundColor: '#FFF', marginBottom: 10}}
        placeholder="Enter a note"
        value={content}
        onChangeText={setContent}
      />

      <Button
        title="Save"
        onPress={handleSave}
        buttonStyle={{backgroundColor: '#1138f6'}}
      />
    </View>
  );
};

export default AddNote;
