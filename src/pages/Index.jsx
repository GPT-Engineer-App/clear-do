import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Checkbox, Box } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <HStack w="100%">
          <Input
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button colorScheme="teal" onClick={addTask} leftIcon={<FaPlus />}>
            Add Task
          </Button>
        </HStack>
        <VStack w="100%" spacing={3}>
          {tasks.map((t, index) => (
            <HStack key={index} w="100%" p={2} borderWidth={1} borderRadius="md">
              <Checkbox
                isChecked={t.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <Text flex="1" textDecoration={t.completed ? "line-through" : "none"}>
                {t.text}
              </Text>
              <Button colorScheme="red" onClick={() => deleteTask(index)} leftIcon={<FaTrash />}>
                Delete
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;