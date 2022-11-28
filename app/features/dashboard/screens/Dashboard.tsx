import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useGetUsersQuery} from '../employeeSlice';

const Dashboard = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();
  if (isLoading) {
    return <ActivityIndicator size={'large'} />;
  }
  return (
    <View>
      <Text>DASHBOARD</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.username}</Text>}
        extraData={users}
      />
    </View>
  );
};

export {Dashboard};
