import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Planos de Treino</Card.Title>
                <p className="card-category">Listagem de Plano</p>
              </Card.Header>
              <Col md="3">
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                >
                  ADICIONAR
                </Button>
              </Col>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Dias de Semana</th>
                      <th className="border-0">Planos</th>

                      <th className="border-0">Acção</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Segunda-Feira</td>
                      <td>Plano</td>

                      <td>
                        {" "}
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                        >
                          Editar
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Terça-Feira</td>
                      <td>Plano</td>

                      <td>
                        {" "}
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                        >
                          Editar
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Quarta-Feira</td>
                      <td>Plano</td>

                      <td>
                        {" "}
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                        >
                          Editar
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
