import { useQuery } from "@tanstack/react-query";
import getCabins from "../../services/apiCabins";

export function useCabins(){
      //get data from apiCabin(database)
  const {isLoading,data:cabins,error}=useQuery({
    queryKey:['cabin'],
    //get data
    queryFn: getCabins,
  })
  return {isLoading,cabins,error};
}