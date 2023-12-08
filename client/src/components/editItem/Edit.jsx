import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Authentication from "../../contexts/auth";

import { useForm } from "../../hooks/useForm";
import { useContext } from "react";

import "./Edit.Module.css";

const EditItem = () => {
  const { CreateItemHandler } = useContext(Authentication);

  const { formValues, onChange, onSubmit } = useForm(
    {
      name: "",
      imageUrl: "",
      description: "",
    },
    CreateItemHandler,
  );

  return (
    <Form className="add-form" onSubmit={onSubmit}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Име на продукта</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="име..."
          value={formValues.name}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Добави снимка</Form.Label>
        <Form.Control
          type="text"
          name="imageUrl"
          value={formValues.imageUrl}
          onChange={onChange}
          placeholder="http://..."
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Информация за продукта</Form.Label>
        <Form.Control
          className="form-textarea"
          as="textarea"
          name="description"
          placeholder="добави..."
          value={formValues.description}
          onChange={onChange}
        />
      </Form.Group>
      <Button className="add-button" type="submit">
        Промени
      </Button>
    </Form>
  );
  // <Button variant="primary" type="submit">
  //   Submit
  // </Button>
};
export default EditItem;
