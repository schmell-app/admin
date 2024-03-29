import { nav } from "@app/constants";
import { Button, Stack, Navbar as MantineNavbar } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { RefObject, useEffect, useState } from "react";
import { useTheme } from "@app/hooks";

interface NavbarProps {
  opened: boolean;
  wrapperRef: RefObject<HTMLDivElement>;
}

const Navbar = ({ opened, wrapperRef }: NavbarProps): JSX.Element => {
  const { pathname } = useRouter();
  const { isDark } = useTheme();

  const isActive = (href: string): boolean => {
    if (href === pathname) {
      return true;
    }
    return pathname.split("/")[1] === href.split("/")[1];
  };

  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (wrapperRef.current != null) {
      setHeight(
        wrapperRef.current?.children[1].querySelector("main")?.offsetHeight ?? 0
      );
    }
  }, [wrapperRef.current?.children[1].querySelector("main")?.offsetHeight]);

  return (
    <MantineNavbar
      width={{ base: 300 }}
      height={height}
      hiddenBreakpoint="sm"
      hidden={!opened}
    >
      <MantineNavbar.Section mt="xl" grow>
        <Stack>
          {nav.map((item) => (
            <Link href={item.href} key={item.href} passHref>
              <Button
                leftIcon={item.icon}
                variant={isActive(item.href) ? "light" : "subtle"}
                size="lg"
                radius="xs"
                sx={(theme) => ({
                  ".mantine-Button-inner": {
                    justifyContent: "flex-start"
                  },
                  ".mantine-Button-label": {
                    marginLeft: theme.spacing.md
                  }
                })}
                fullWidth
                color={isDark ? "yellow" : "dark"}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Stack>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;
