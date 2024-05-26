import { Table as AntdTable } from "antd";

interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

interface DataSource {
  key: string;
  name: string;
  age: number;
  address: string;
}

export interface TableProps {
  dataSource: DataSource[];
  columns: Column[];
}

export const Table = ({ dataSource, columns }: TableProps) => {
  return <AntdTable dataSource={dataSource} columns={columns} />;
};

export const dataSourceMock: TableProps["dataSource"] = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

export const columnsMock: TableProps["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
