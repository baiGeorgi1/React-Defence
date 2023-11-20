import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddInfo.Module.css";
import { useForm } from "../../hooks/useForm";

const AddInfo = ({ createItem }) => {
  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      name: "",
      imageUrl: "",
      description: "",
    },
    createItem,
  );
  return (
    <Form className="add-form" onSubmit={onSubmit}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Име на продукта</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="...име"
          value={formValues.name}
          onChange={onChangeHandler}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Добави снимка</Form.Label>
        <Form.Control
          type="text"
          name="imageUrl"
          value={formValues.imageUrl}
          onChange={onChangeHandler}
          placeholder="http://..."
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Информация за продукта</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          placeholder="...добави"
          rows={10}
          value={formValues.description}
          onChange={onChangeHandler}
        />
      </Form.Group>
      <Button className="add-button" type="submit">
        Добави
      </Button>
    </Form>
  );
  // <Button variant="primary" type="submit">
  //   Submit
  // </Button>
};
export default AddInfo;
