import { useRouter } from "next/router";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface MenuContextProviderProps {
  children: ReactNode;
}

interface MenuContextProps {
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

interface TaskEditType {
  guid: string;
  title: string;
  situation: string;
  description: string;
}

export const MenuContext = createContext({} as MenuContextProps);

const MenuContextProvider: React.FC<MenuContextProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isModalTaskOpen, setIsModalTaskOpen] = useState<boolean>(false);
  const [idSelectedTaskEdit, setIdSelectedTaskEdit] = useState<string>("");
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
    setIsModalEditTaskOpen(true);
    setIdSelectedTaskEdit(guid);
  }

  function closeEditModalTask() {
    setIsModalEditTaskOpen(false);
    setIdSelectedTaskEdit("");
  }

  return (
    <MenuContext.Provider
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
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
