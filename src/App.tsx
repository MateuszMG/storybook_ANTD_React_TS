import { Space } from "antd";
import { Button } from "./stories/Button/Button";
import { columnsMock, dataSourceMock, Table } from "./stories/Table/Table";

export const App = () => {
  return (
    <div>
      <p>app</p>
      <Button size="large"> My btn</Button>
      <Button size="middle"> My btn</Button>
      <Button size="small"> My btn</Button>

      <Space />

      <Table columns={columnsMock} dataSource={dataSourceMock} />
    </div>
  );
};
