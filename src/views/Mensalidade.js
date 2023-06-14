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
                <Card.Title as="h4">Mensalidade</Card.Title>
                <p className="card-category">Listagem de Mensalidade</p>
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
                      <th className="border-0">Planos</th>
                      <th className="border-0">Preço</th>
                      <th className="border-0">Observação</th>
                      <th className="border-0">Acção</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>-5 vezes na semana</td>
                      <td>1.000,00Kz</td>
                      <td>Individual</td>
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
                      <td>-5 vezes na semana</td>
                      <td>1.000,00Kz</td>
                      <td>Individual</td>
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
                      <td>-5 vezes na semana</td>
                      <td>1.000,00Kz</td>
                      <td>Individual</td>
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
                      <td>-5 vezes na semana</td>
                      <td>1.000,00Kz</td>
                      <td>Individual</td>
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
                      <td>-5 vezes na semana</td>
                      <td>1.000,00Kz</td>
                      <td>Individual</td>
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
                      <td>-5 vezes na semana</td>
                      <td>1.000,00Kz</td>
                      <td>Individual</td>
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
