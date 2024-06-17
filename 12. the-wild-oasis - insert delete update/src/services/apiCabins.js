import supabase, { supabaseUrl } from "./supabase";

//get data from database
async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}
export default getCabins;

export async function createEditCabin(newCabin, id) {
  console.log(id);
  //edit true because have url supabase
  //create false because new image
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  //randomfileImage
  console.log(`${Math.random()}-${newCabin.image.name}`);
  console.log(imageName);
  //path Image will supabase
  const imagePath = hasImagePath?newCabin.image:`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  console.log(imagePath);
  //https://pyzpgrstqsjcqygowhpm.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  //1. create/edit cabin
  let query = supabase.from("cabins");

  //A) create cabin to supabase
  if (!id) query= query.insert([{ ...newCabin, image: imagePath }]);

  //B) edit
  if (id) 
    query=query.update({ ...newCabin, image: imagePath })
      .eq("id", id);

      //select current data create
    const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("cabins could not be created");
  }


  //2.upload image to storage in supabase (new bucket)
if(hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  console.log(data);

  //3.Delete cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not be upload and the cabin was not created"
    );
  }
  return data;
}
export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  //randomfileImage
  console.log(`${Math.random()}-${newCabin.image.name}`);
  console.log(imageName);
  //path Image will supabase
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  console.log(imagePath);
  //https://pyzpgrstqsjcqygowhpm.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  //1. create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);
  if (error) {
    console.error(error);
    throw new Error("cabins could not be created");
  }
  //2.upload image to storage in supabase (new bucket)
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  console.log(data);
  //3.Delete cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not be upload and the cabin was not created"
    );
  }
  return data;
}

//delete data from database
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabins could not be deleted");
  }
  return data;
}

// export async function createCabin(newCabin){

// const { data, error } = await supabase
// .from('cabins')
// .insert([newCabin])
// .select()
// if (error) {
//   console.error(error);
//   throw new Error("cabins could not be created");
// }
// return data;
// }
