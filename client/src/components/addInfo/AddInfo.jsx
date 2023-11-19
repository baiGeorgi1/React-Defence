import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddInfo.Module.css";

const AddInfo = () => {
  return (
    <Form className="add-form">
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Име на продукта</Form.Label>
        <Form.Control type="text" placeholder="...име" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Информация за продукта</Form.Label>
        <Form.Control as="textarea" placeholder="...добави" rows={10} />
      </Form.Group>
      <Button className="add-button">Добави</Button>
    </Form>
  );
  // <Button variant="primary" type="submit">
  //   Submit
  // </Button>
};
export default AddInfo;
