import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationObserverResult, Task, UpdateTaskParams } from "@app/types";
import axios from "axios";

const useUpdateTaskMutation = (
  id: string
): MutationObserverResult<Task, UpdateTaskParams> => {
  const queryClient = useQueryClient();

  return useMutation(
    async (updateTask: UpdateTaskParams) =>
      await axios
        .patch(`/api/crm/tasks/${id}`, updateTask)
        .then((res) => res.data),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: [id] });
      }
    }
  );
};

export default useUpdateTaskMutation;
