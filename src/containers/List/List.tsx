import React, {useState} from 'react';
import {FlatList, Pressable, View, Text, Alert} from 'react-native';
import {translate} from 'i18n';
import {Icon, TextInput} from 'components';
import {useAppDispatch, useAppSelector} from 'utils/hooks';
import {addList, listType} from 'store/List/ListSlice';
import styles from './List.style';
import {Props} from './List.props';

function List({navigation}: Props) {
  const [listName, setListName] = useState('');
  const dispatch = useAppDispatch();
  const lists = useAppSelector(state => state.lists.lists);

  const navigateToTodo = (list: listType) =>
    navigation.navigate('ListDetails', {list});

  const renderHeader = () => {
    return (
      <View style={styles.row}>
        <TextInput
          value={listName}
          onChangeText={text => setListName(text)}
          inputStyle={styles.input}
          placeholder={translate('list.placeholder')}
        />
        <Pressable
          testID="add-list-btn"
          onPress={() => {
            if (listName) {
              dispatch(addList(listName));
              setListName('');
            } else {
              Alert.alert(
                translate('common.warning'),
                translate('list.nameRequired'),
              );
            }
          }}>
          <Icon icon="add" style={styles.icon} size={45} />
        </Pressable>
      </View>
    );
  };
  return (
    <FlatList
      data={lists}
      renderItem={({item}) => (
        <Pressable style={styles.item} onPress={() => navigateToTodo(item)}>
          <Text>{item.title}</Text>
          <Icon icon="arrowRight" size={40} style={styles.icon} />
        </Pressable>
      )}
      ListHeaderComponentStyle={styles.header}
      ListHeaderComponent={renderHeader()}
    />
  );
}

export {List};
