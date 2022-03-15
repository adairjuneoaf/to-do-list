import { useRouter } from "next/router";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface GenericContextProviderProps {
  children: ReactNode;
}

interface GenericContextProps {
  isOpenMenu: boolean;
  isModalTaskOpen: boolean;
  openModalTask: () => void;
  closeModalTask: () => void;
  idSelectedTaskEdit: string;
  openSideBarMenu: () => void;
  isModalEditTaskOpen: boolean;
  closeSideBarMenu: () => void;
  closeEditModalTask: () => void;
  openEditModalTask: (guid: string) => void;
}

export const GenericContext = createContext({} as GenericContextProps);

const GenericContextProvider: React.FC<GenericContextProviderProps> = ({ children }) => {
  // Estado para verificar abertura do MENU lateral.
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  // Estado para verificar abertura da MODAL de Nova Tarefa.
  const [isModalTaskOpen, setIsModalTaskOpen] = useState<boolean>(false);
  // Estado para compartilhar a terefa selecionada com intuito de Editar ou Excluir.
  const [idSelectedTaskEdit, setIdSelectedTaskEdit] = useState<string>("");
  // Estado para verificar abertura da MODAL de Editar Tarefa.
  const [isModalEditTaskOpen, setIsModalEditTaskOpen] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [router.route]);

  function openSideBarMenu() {
    setIsOpenMenu(true);
  }

  function closeSideBarMenu() {
    setIsOpenMenu(false);
  }

  function openModalTask() {
    setIsModalTaskOpen(true);
  }

  function closeModalTask() {
    setIsModalTaskOpen(false);
  }

  function openEditModalTask(guid: string) {
    setIdSelectedTaskEdit(guid);
    setIsModalEditTaskOpen(true);
  }

  function closeEditModalTask() {
    setIsModalEditTaskOpen(false);
    setIdSelectedTaskEdit("");
  }

  return (
    <GenericContext.Provider
      value={{
        isOpenMenu,
        openModalTask,
        closeModalTask,
        isModalTaskOpen,
        openSideBarMenu,
        closeSideBarMenu,
        openEditModalTask,
        closeEditModalTask,
        idSelectedTaskEdit,
        isModalEditTaskOpen,
      }}
    >
      {children}
    </GenericContext.Provider>
  );
};

export default GenericContextProvider;
