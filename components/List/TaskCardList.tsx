import { Task } from "@app/types";
import React, { FC } from "react";
import {
  Avatar,
  Card,
  Divider,
  Group,
  Pagination,
  Text,
  Badge
} from "@mantine/core";
import Link from "next/link";
import { getDifferenceInDays, toDateString, getColor } from "@app/utils";
import { useTheme } from "@app/hooks";

interface TaskCardListProps {
  tableData: Task[];
}

const TaskCardList: FC<TaskCardListProps> = ({ tableData }): JSX.Element => {
  const { isDark } = useTheme();

  return (
    <div>
      {tableData.map((task) => (
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          component={Link}
          href={`/tasks/${task.id}`}
          my="md"
          key={task.id}
        >
          <Group position="left">
            <Avatar src={task.responsibleUser.profilePictureUrl} />
            <div style={{ marginLeft: "xl" }}>
              <Text>{task.title}</Text>
              <Text size="xs" color="dimmed">
                {getDifferenceInDays(new Date(task.lastUpdated))}
              </Text>
            </div>
          </Group>
          <Divider mt="sm" mb="sm" />
          <Group position="left">
            <Text weight="bolder">Kategori:</Text>
            <Text>{task.category}</Text>
          </Group>
          <Group position="left" my="xs">
            <Text weight="bolder">Frist:</Text>
            <Text>{toDateString(new Date(task.deadline))}</Text>
          </Group>
          <Group position="left" my="xs">
            <Text weight="bolder">Prioritet:</Text>
            <Badge color={getColor(task.priority)} size="lg" fullWidth>
              {task.priority}
            </Badge>
          </Group>
        </Card>
      ))}
      <Pagination total={100} color={isDark ? "yellow" : "dark"} mt="md" grow />
    </div>
  );
};

export default TaskCardList;
