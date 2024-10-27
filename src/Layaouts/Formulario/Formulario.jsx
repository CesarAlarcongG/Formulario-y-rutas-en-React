import React from 'react';
import './Formulario.css';
import { useForm } from 'react-hook-form';
import { Input } from '../../Components/Input';
import { Boton } from '../../Components/Boton';

export const Formulario = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Función para manejar el envío del formulario
  const mostraDatos = (data) => {
    console.log(data);
  };

  
  return (
    <form onSubmit={handleSubmit(mostraDatos)}>
      <Input
        nombreLabel="Nombre"
        inputType="text"
        {...register("nombre", { required: "Nombre es requerido" })}
        error={errors.nombre}
      />
      <Input
        nombreLabel="Apellido"
        inputType="text"
        {...register("apellido", { required: "Apellido es requerido" })}
        error={errors.apellido}
      />
      <Input
        nombreLabel="Correo"
        inputType="email"
        {...register("correo", { required: "Correo es requerido" })}
        error={errors.correo}
      />
      <Input
        nombreLabel="Contraseña"
        inputType="password"
        {...register("contraseña", { required: "Contraseña es requerida" })}
        error={errors.contraseña}
      />
      <Boton textoBoton="Enviar formulario" />
    </form>
  );
};
