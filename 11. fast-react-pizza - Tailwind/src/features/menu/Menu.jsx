import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  //data in API will store in useLoaderData
  const menu=useLoaderData();
  console.log(menu);
  return <ul className="divide-y divide-stone-200 px-2 ">
    {menu.map((pizza=> <MenuItem pizza={pizza} key={pizza.id}/>))}
  </ul>;
}

export async function loader(){
  //send data from API
  const menu=await getMenu();
  return menu;
}
export default Menu;
