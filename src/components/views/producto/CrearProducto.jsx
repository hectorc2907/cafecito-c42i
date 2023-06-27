import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Form, Button } from "react-bootstrap";

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const crearProducto = () => {
    Swal.fire("Guardado", "El producto se agrego correctamente", "success");
    reset();
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(crearProducto)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("producto", {
              required: "Debe Ingresar el Nombre del Producto",
              pattern: {
                value: /(?!.*[\.\-\_]{2,})^[a-zA-Z\.\-\_]{3,50}$/gm,
                message:
                  "El usuario debe contener solo letras sin numeros o caracteres especiales",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.producto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "Debe Ingresar el Precio del Producto",
              pattern: {
                value: /^(([0-9]){0,})((\.)?[0-9]){1,7}$/g,
                message: "El precio debe contener solo numeros",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "Debe Ingresar la URL de alguna imagen",
              pattern: {
                value:
                  /(?:(?:https?:\/\/))[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/=]*(\.jpg|\.png|\.jpeg))/g,
                message: "El formato de la imagen deb estar en jpg, jpeg o png",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select {...register("opcion",{
            required: "Debe Elegir una opcion valida",
            pattern:{
              value: "bebida caliente" || "bebida fria" || "dulce" || "salado",
              message: "La opcion seleccionada no es correcta"
            }
          })}>
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.opcion?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;
