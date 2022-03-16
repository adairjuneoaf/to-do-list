import toast from "react-hot-toast";
import { api } from "./axios";

interface TaskEditType {
  guid: string;
  title: string;
  situation: string;
  description: string;
}

interface NewTaskType {
  title: string;
  description: string;
}

export const getAllTasks = async () => {
  const data: Array<TaskEditType> = await api
    .get("/tasks")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return new Error("fetch data all tasks in API.");
    });

  return data;
};

export const updateUniqueTask = async ({ guid, title, situation, description }: TaskEditType) => {
  await api
    .put("/tasks", {
      guid: guid,
      title: title,
      situation: situation,
      description: description,
    })
    .then(() => {
      toast.success("Tarefa atualizada com sucesso! 🥳");
    })
    .catch(() => {
      toast.error("Ops... Houve algum erro! 😥");
      return;
    });
};

export const getUniqueTask = async (guid: string) => {
  const data: TaskEditType = await api
    .get(`/tasks/${guid}`)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return new Error("fetch unique task in API.");
    });

  return data;
};

export const createNewTask = async ({ title, description }: NewTaskType) => {
  await api
    .post("/tasks", {
      title: title,
      description: description,
    })
    .then(() => {
      toast.success("Tarefa adicionada com sucesso! 🎉");
    })
    .catch(() => {
      return new Error("post task in API.");
    });
};

export const removeTaskOnTheList = async (guid: string) => {
  await api
    .delete(`/tasks/${guid}`)
    .then(() => {
      toast.success("Tarefa excluida com sucesso! ❌");
    })
    .catch(() => {
      return new Error("delete unique task in API.");
    });
};
