import React, {useCallback, useLayoutEffect, useState} from 'react';
import {View, Pressable, Alert, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Icon, TextInput} from 'components';
import {translate} from 'i18n';
import {useAppDispatch, useAppSelector} from 'utils/hooks';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Props, RouteProps} from './ListDetails.props';
import {addTodo, deleteTodo, todoType, updateTodo} from 'store/List/ListSlice';

import styles from './ListDetails.styles';
import {colors} from 'utils/colors';

const ListDetails = ({navigation}: Props) => {
  const [todoDesc, setTodoDesc] = useState('');
  const {params} = useRoute<RouteProps>();
  const dispatch = useAppDispatch();
  const lists = useAppSelector(state => state.lists.lists);
  const listIndex = lists.findIndex(val => val.id === params.list.id);

  useLayoutEffect(() => {
    const list = params?.list;
    navigation.setOptions({
      title: list.title,
    });
  }, [navigation, params]);

  const renderHeader = () => {
    return (
      <View style={styles.row}>
        <TextInput
          value={todoDesc}
          onChangeText={text => setTodoDesc(text)}
          inputStyle={styles.input}
          placeholder={translate('listDetails.placeholder')}
        />
        <Pressable
          onPress={() => {
            if (todoDesc) {
              dispatch(
                addTodo({
                  todo: {
                    id: '',
                    description: todoDesc,
                    completed: false,
                  },
                  list: params.list,
                }),
              );
              setTodoDesc('');
            } else {
              Alert.alert(
                translate('common.warning'),
                translate('listDetails.nameRequired'),
              );
            }
          }}>
          <Icon icon="add" style={styles.icon} size={45} />
        </Pressable>
      </View>
    );
  };

  const updateTodoCall = useCallback(
    (todo: todoType) => {
      dispatch(
        updateTodo({
          list: params.list,
          todo,
        }),
      );
    },
    [dispatch, params],
  );

  const deleteTodoCall = useCallback(
    (todo: todoType) => {
      dispatch(
        deleteTodo({
          list: params.list,
          todo,
        }),
      );
    },
    [dispatch, params],
  );

  return (
    <FlatList
      data={lists[listIndex].todoList}
      renderItem={({item}) => (
        <View style={styles.item}>
          <BouncyCheckbox
            size={25}
            fillColor={colors.blue}
            unfillColor={colors.white}
            text={item.description}
            iconStyle={styles.check}
            isChecked={item.completed}
            onPress={(isChecked: boolean) =>
              updateTodoCall({
                ...item,
                completed: isChecked,
              })
            }
          />
          <Pressable onPress={() => deleteTodoCall(item)}>
            <Icon icon="delete" size={20} style={styles.delete} />
          </Pressable>
        </View>
      )}
      ListHeaderComponentStyle={styles.header}
      ListHeaderComponent={renderHeader()}
    />
  );
};

export {ListDetails};
