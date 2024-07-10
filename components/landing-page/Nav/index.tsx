"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { AcmeLogo } from "../../icons/AcmeLogo";
import { ThemeSwitcher } from "../ThemeSwitcher/index";
import { useSession } from "next-auth/react";
import NextLink from "next/link";

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
            <AcmeLogo />
            <NextLink href="/" className="font-bold text-inherit">ACADEMY</NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link color="foreground" href="#">
            Cursos
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Tutores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      {status === "authenticated" ? (
        <NavbarContent as="div" justify="center">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session.user.email}</p>
              </DropdownItem>
              <DropdownItem key="settings">Perfil</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="logout" color="danger">
              <NextLink href="/api/auth/signout">
                  Cerrar sesión
              </NextLink>
                </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="center">
          <NavbarItem className="hidden lg:flex">
            <NextLink href="/auth/signin">Iniciar sesión</NextLink>
          </NavbarItem>

          <NavbarItem>
            <NextLink href="/auth/signup">
              <Button color="primary" variant="flat">
                Crear cuenta
              </Button>
            </NextLink>
          </NavbarItem>

          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
