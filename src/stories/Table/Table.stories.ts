import { Table, dataSourceMock, columnsMock } from "./Table";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: columnsMock,
    dataSource: dataSourceMock,
  },
};

export const Empty: Story = {
  args: {
    columns: [],
    dataSource: [],
  },
};
