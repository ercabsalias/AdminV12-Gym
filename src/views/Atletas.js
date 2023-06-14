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
                <Card.Title as="h4">Atletas</Card.Title>
                <p className="card-category">Listagem de Atletas</p>
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
                      <th className="border-0">Nome</th>
                      <th className="border-0">Sexo</th>
                      <th className="border-0">Tipo de Treino</th>
                      <th className="border-0">E-mail</th>
                      <th className="border-0">Contacto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ernesto Cabingano Salias</td>
                      <td>M</td>
                      <td>Corrida</td>
                      <td>ercabsalias@gmail.com</td>
                      <td>923858285</td>
                    </tr>
                    <tr>
                      <td>Ernesto Cabingano Salias</td>
                      <td>M</td>
                      <td>Corrida</td>
                      <td>ercabsalias@gmail.com</td>
                      <td>923858285</td>
                    </tr>
                    <tr>
                      <td>Ernesto Cabingano Salias</td>
                      <td>M</td>
                      <td>Corrida</td>
                      <td>ercabsalias@gmail.com</td>
                      <td>923858285</td>
                    </tr>
                    <tr>
                      <td>Ernesto Cabingano Salias</td>
                      <td>M</td>
                      <td>Corrida</td>
                      <td>ercabsalias@gmail.com</td>
                      <td>923858285</td>
                    </tr>
                    <tr>
                      <td>Ernesto Cabingano Salias</td>
                      <td>M</td>
                      <td>Corrida</td>
                      <td>ercabsalias@gmail.com</td>
                      <td>923858285</td>
                    </tr>
                    <tr>
                      <td>Ernesto Cabingano Salias</td>
                      <td>M</td>
                      <td>Corrida</td>
                      <td>ercabsalias@gmail.com</td>
                      <td>923858285</td>
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
