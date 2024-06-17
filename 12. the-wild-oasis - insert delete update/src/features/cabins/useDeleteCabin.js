import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi} from "../../services/apiCabins";
import toast from "react-hot-toast";
export function useDeleteCabin(){

    const queryClient = useQueryClient();
    const { isLoading: isDeleting, mutate:deleteCabin } = useMutation({
        //delete data from cabin API (database)
    //click use mutate and send ID to deleteCabin
    mutationFn: deleteCabinApi,
    //delete success refresh
    onSuccess: () => {
        //Style toast
        toast.success("Cabin successfully deleted");
        queryClient.invalidateQueries({
            queryKey: ["cabin"],
        });
    },
    //fail delete
    // onError:(err)=>alert(err.message),
    onError: (err) => toast.error(err.message),
});

return { isDeleting , deleteCabin}
}