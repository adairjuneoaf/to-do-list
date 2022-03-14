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
  openSideBarMenu: () => void;
  closeSideBarMenu: () => void;
}

export const MenuContext = createContext({} as MenuContextProps);

const MenuContextProvider: React.FC<MenuContextProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isModalTaskOpen, setIsModalTaskOpen] = useState<boolean>(false);

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

  return (
    <MenuContext.Provider value={{ isOpenMenu, isModalTaskOpen, openSideBarMenu, closeSideBarMenu, openModalTask, closeModalTask }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
