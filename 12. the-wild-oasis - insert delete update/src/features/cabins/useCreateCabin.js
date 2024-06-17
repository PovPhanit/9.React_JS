import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
export function useCreateCabin(){
    const queryClient=useQueryClient();
    const {mutate:createCabin,isLoading:isCreating}=useMutation({
        mutationFn:createEditCabin,
        onSuccess:()=>{
            //success data
            toast.success("New cabin successfully created");
            //load data in display
            queryClient.invalidateQueries({
                queryKey:["cabin"]
            });
            //reset form
        },
        onError:(err)=>{
            toast.error(err.message);
        }
    });
    return{isCreating,createCabin};
}