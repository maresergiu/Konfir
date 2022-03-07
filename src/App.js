import { useState, useEffect } from "react";
import { getClients } from "./services";
import { sanitizeList, userTableSchema } from "./utils";
import {
  verificationsEnum,
  userTableHeadingsEnum,
  userTableEnum
} from "./data";
import Table from "./components/Table";
import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      let { data } = await getClients();
      data = sanitizeList(
        userTableSchema,
        data,
        Object.values(verificationsEnum)
      );
      setData(data);
    })();
  }, []);

  return (
    <div className="App bg-gray">
      <div className="container">
        <div className="row">
          <Table
            cssClass="bg-white"
            tableData={data}
            headings={Object.values(userTableHeadingsEnum)}
            rows={Object.values(userTableEnum)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
