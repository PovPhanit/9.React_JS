import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin(){
    const queryClient = useQueryClient();

    const { mutate: editCabin, isLoading: isEditing } = useMutation({
      mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
      onSuccess: () => {
        //success data
        toast.success("Cabin successfully edited");
        //load data in display
        queryClient.invalidateQueries({
          queryKey: ["cabin"],
        });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

    return {isEditing,editCabin};
}