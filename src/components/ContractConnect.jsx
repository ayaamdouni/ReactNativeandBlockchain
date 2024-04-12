import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import {ContractABI} from '../../contractABI.json';
const contractAddress = '0xf04B27c2Bb42e9c4Ed4c01bB3157c0E3cA949906';
const ContractConnect = () => {
  const {
    data: tasksCount,
    isError,
    isLoading,
    isSuccess,
  } = useContractRead({
    address: contractAddress,
    abi: ContractABI,
    functionName: 'tasks',
    args: [2],
  });
  const {config} = usePrepareContractWrite({
    address: contractAddress,
    abi: ContractABI,
    functionName: 'createTask',
    args: ['from react native'],
  });
  const {
    data,
    isLoading: isLoadingAdding,
    isSuccess: isSuccessAdding,
    write: addTask,
  } = useContractWrite(config);
  const connectSmartContract = async () => {
    console.log('button pressed !', tasksCount);
  };
  return (
    <View>
      <Button title="reading function" onPress={connectSmartContract} />
      <Button title="smart contract function" onPress={addTask} />
    </View>
  );
};

export default ContractConnect;
