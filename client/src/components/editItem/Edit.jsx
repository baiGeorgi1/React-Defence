import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Authentication from "../../contexts/auth";

import { useForm } from "../../hooks/useForm";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as itemService from "../../API/itemApi";

import "./Edit.Module.css";

const EditItem = () => {
  const { EditItemHandler } = useContext(Authentication);
  const { itemId } = useParams();
  const [item, setItem] = useState({
    name: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    itemService.getItem(itemId).then((result) => {
      setItem(result);
    });
  }, [itemId]);
  //const { CreateItemHandler } = useContext(Authentication);

  const { formValues, onChange, onSubmit } = useForm(item, EditItemHandler);

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
      <div className="my_buttons">
        <Button className="edit" type="submit">
          Промени
        </Button>
        <Button className="back" type="submit">
          Назад
        </Button>
      </div>
    </Form>
  );
  // <Button variant="primary" type="submit">
  //   Submit
  // </Button>
};
export default EditItem;
