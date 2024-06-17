import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import styled from "styled-components";


import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({ cabinToEdit = {} }) {
  console.log(cabinToEdit);
  //data from get Cabin to edit
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);
  console.log(cabinToEdit);
  console.log(isEditSession);
  //handleSubmit : for submit
  //formState    : for pull error or status
  //reset        : for reset form
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    //defaultValue in Form
    defaultValues: isEditSession ? editValues : {},
  });

  //get errors from require
  const { errors } = formState;
  console.log(errors);

  const { isCreating, createCabin } = useCreateCabin();
  const {isEditing,editCabin} = useEditCabin();

  const isWorking = isCreating || isEditing;
  //handleSubmit for click submit by func onSubmit
  //
  //when click submit value is register will store in data
  function onSubmit(data) {
    console.log(data);
    console.log(typeof data.image);
    const image = typeof data.image === "string" ? data.image : data.image[0];
    //
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => reset(),
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => reset(),
        }
      );
    // mutate(data);
    // mutate({...data, image:data.image[0]})
  }
  function onErrors(errors) {
    //block error
    console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onErrors)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.name?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "this field is required",
            min: {
              value: 1,
              message: "capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("reqularPrice", {
            required: "this field is required",
            min: { value: 1, message: "Capacity should be at best 1" },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "this field is required",
            validate: (value) =>
              value <= getValues().reqularPrice ||
              "Discount should be less than reqular price",
          })}
        />
      </FormRow>

      <FormRow label="Description" errors={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow2>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? `Edit Cabin` : `Create new cabin`}
        </Button>
      </FormRow2>
    </Form>
  );
}

export default CreateCabinForm;
