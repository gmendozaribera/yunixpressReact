/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Accion from "components/Accion/Accion.js";

class Categoria extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Categoria", "Descripción", "Acciones"]}
              tableData={[
                ["HOla", "Niger", "Oud-Turnhout", <Accion />],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", <Accion />],
                ["Sage Rodriguez", "Netherlands", "Baileux", <Accion />],
                ["Philip Chaney", "Korea, South", "Overland Park", <Accion />],
                [
                  "Doris Greene",
                  "Malawi",
                  "Feldkirchen in Kärnten",
                  <Accion />
                ],
                ["Mason Porter", "Chile", "Gloucester", <Accion />]
              ]}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Categoria;
