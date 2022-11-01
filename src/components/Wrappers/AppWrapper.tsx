import React, { FC, ReactNode, useState } from "react";
import { AppShell } from "@mantine/core";
import { Navbar } from "../Navbar";
import { Header } from "../Header";

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = (): void => setOpened((o) => !o);

  return (
    <AppShell
      padding="md"
      fixed={false}
      navbar={<Navbar opened={opened} />}
      header={<Header opened={opened} handleNavbarToggle={handleOpen} />}
      navbarOffsetBreakpoint={"sm"}
    >
      {children}
    </AppShell>
  );
};

export default AppWrapper;
