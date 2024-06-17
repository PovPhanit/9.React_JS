import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi} from "../../services/apiSettings";

export function useUpdateSettings(){
    const queryClient = useQueryClient();

    const { mutate: updateSetting, isLoading:isUpdating } = useMutation({
      mutationFn: updateSettingApi,
      onSuccess: () => {
        //success data
        toast.success("Setting successfully edited");
        //load data in display
        queryClient.invalidateQueries({
          queryKey: ["setting"],
        });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

    return {isUpdating,updateSetting};
}