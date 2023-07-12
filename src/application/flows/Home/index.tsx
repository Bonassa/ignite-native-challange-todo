import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import { PlusCircle } from 'phosphor-react-native';
import Animated, {
  Layout,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated';

import {
  Container,
  Content,
  ListEmptyContainer,
  ListSeparator,
  NewTaskContainer,
  TaskBadge,
  TaskListHeader,
} from './styles';

import { ButtonIcon } from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { TaskCard } from '@components/TaskCard';
import { TaskCount } from '@components/TaskCount';
import { Typography } from '@components/Typography';

import { TaskScheme } from '@infrastructure/storage/tasks/tasks.types';
import { tasksToggleCompleteById } from '@infrastructure/storage/tasks/tasksComplete';
import { tasksCreate } from '@infrastructure/storage/tasks/tasksCreate';
import { tasksGetAll } from '@infrastructure/storage/tasks/tasksGetAll';
import { tasksRemoveById } from '@infrastructure/storage/tasks/tasksRemove';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<TaskScheme>);

export const Home: React.FC = () => {
  const [taskHistory, setTaskHistory] = useState<TaskScheme[]>([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [completedAmount, setCompletedAmount] = useState(0);
  const [openAmount, setOpenAmount] = useState(0);
  const inputRef = useRef<TextInput>(null);

  const source = require('@assets/Clipboard.png');

  const handleRegisterTask = async () => {
    try {
      if (taskDescription === '') {
        return inputRef.current?.focus();
      }

      setTaskDescription('');

      const tasks = await tasksCreate(taskDescription);
      setTaskHistory(tasks);
      setOpenAmount(prev => prev + 1);

      inputRef.current?.blur();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar');
      console.log(error);
    }
  };

  const handleRemoveTask = async (id: string) => {
    try {
      const { completedAmount, openAmount, tasks } = await tasksRemoveById(id);

      setTaskHistory(tasks);
      setCompletedAmount(completedAmount);
      setOpenAmount(openAmount);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir essa tarefa');
      console.log(error);
    }
  };

  const handleCompleteTask = async (id: string) => {
    try {
      const { completedAmount, openAmount, tasks } =
        await tasksToggleCompleteById(id);

      setTaskHistory(tasks);
      setCompletedAmount(completedAmount);
      setOpenAmount(openAmount);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível concluir essa tarefa');
      console.log(error);
    }
  };

  const renderCell = useCallback(
    (props: any) => (
      <Animated.View
        {...props}
        entering={SlideInRight}
        exiting={SlideOutRight}
        layout={Layout.springify()}
      />
    ),
    []
  );

  useEffect(() => {
    tasksGetAll().then(({ completed, open }) => {
      setTaskHistory([...open, ...completed]);
      setCompletedAmount(completed.length);
      setOpenAmount(open.length);
    });
  }, []);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <Header />

          <Content>
            <NewTaskContainer>
              <Input
                ref={inputRef}
                placeholder="Adicione uma nova tarefa"
                onChangeText={setTaskDescription}
                value={taskDescription}
              />
              <ButtonIcon icon={PlusCircle} onPress={handleRegisterTask} />
            </NewTaskContainer>
          </Content>

          <AnimatedFlatList
            data={taskHistory}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => (
              <TaskListHeader>
                <TaskBadge>
                  <Typography color="BLUE" fontSize="MD" fontFamily="BOLD">
                    Criadas
                  </Typography>
                  <TaskCount qtd={openAmount} />
                </TaskBadge>
                <TaskBadge>
                  <Typography color="PURPLE" fontSize="MD" fontFamily="BOLD">
                    Concluídas
                  </Typography>
                  <TaskCount qtd={completedAmount} />
                </TaskBadge>
              </TaskListHeader>
            )}
            renderItem={({ item }) => (
              <TaskCard
                {...item}
                handleRemoveTask={handleRemoveTask}
                handleCompleteTask={handleCompleteTask}
              />
            )}
            CellRendererComponent={renderCell}
            ItemSeparatorComponent={ListSeparator}
            ListEmptyComponent={() => (
              <ListEmptyContainer>
                <Image source={source} />
                <Typography
                  fontSize="MD"
                  color="GRAY_300"
                  style={{ lineHeight: 20 }}
                >
                  <Typography color="GRAY_300" fontSize="MD" fontFamily="BOLD">
                    Você ainda não tem tarefas cadastradas{'\n'}
                  </Typography>
                  Crie tarefas e organize seus itens a fazer
                </Typography>
              </ListEmptyContainer>
            )}
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: 24 }}
            contentContainerStyle={{ paddingBottom: 64 }}
          />
        </>
      </TouchableWithoutFeedback>
    </Container>
  );
};
