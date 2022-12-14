import React from "react";
import { User } from "@app/types";
import { SegmentedControlItem, Avatar } from "@mantine/core";

export const getFullName = (user: User): string =>
  `${user.firstName} ${user.lastName}`;

export const toUserControls = (users: User[]): SegmentedControlItem[] =>
  users.map((user) => ({
    value: String(user.id),
    label: <Avatar src={user.profilePictureUrl} alt={user.firstName} />
  }));
