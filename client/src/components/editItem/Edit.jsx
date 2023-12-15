import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Authentication from "../../contexts/auth";
import { validData } from "../../util/validator";

import { useForm } from "../../hooks/useForm";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as itemService from "../../API/itemApi";

import "./Edit.Module.css";

const EditItem = () => {
    const { itemId } = useParams();
    const navigate = useNavigate();
    const [hasError, setHasError] = useState(false);
    const [err, setErr] = useState({});
    const [item, setItem] = useState({
        name: "",
        imageUrl: "",
        description: "",
        itemId: itemId,
    });

    useEffect(() => {
        itemService.getItem(itemId).then((result) => {
            setItem(result);
        });
    }, [itemId]);

    const goBack = () => {
        navigate(`/catalog/more/${itemId}`);
    };
    const onChange = (e) => {
        setItem((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };
    const onBluring = (data) => {
        try {
            const result = validData(data);
            setErr((state) => ({
                ...state,
                [data.target.name]: "",
            }));
            setHasError(false);
        } catch (error) {
            setErr((state) => ({
                ...state,
                [data.target.name]: error.message,
            }));
            setHasError(true);
        }
    };
    console.log(Object.values(err));

    const EditItemHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await itemService.editItem(values, itemId);

            navigate(`/catalog/more/${itemId}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Form className="add-form" onSubmit={EditItemHandler}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Име на продукта</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={onChange}
                        onBlur={onBluring}
                        value={item.name}
                        name="name"
                        placeholder="име..."
                    />
                </Form.Group>
                {hasError && <p>{err.message}</p>}
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Добави снимка</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={onChange}
                        onBlur={onBluring}
                        value={item.imageUrl}
                        name="imageUrl"
                        placeholder="http://..."
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Информация за продукта</Form.Label>
                    <Form.Control
                        className="form-textarea"
                        as="textarea"
                        onBlur={onBluring}
                        onChange={onChange}
                        value={item.description}
                        name="description"
                        placeholder="добави..."
                    />
                </Form.Group>
                <div className="my_buttons">
                    {hasError ? (
                        <Button className="edit" disabled>
                            Промени
                        </Button>
                    ) : (
                        <Button className="edit" type="submit">
                            Промени
                        </Button>
                    )}

                    <Button
                        type="button"
                        className="about-btns"
                        id="back"
                        to="/catalog"
                        onClick={goBack}
                    >
                        Назад
                    </Button>
                </div>
            </Form>
        </>
    );
};
export default EditItem;
