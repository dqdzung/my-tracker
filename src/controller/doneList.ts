import { supabase } from "$lib/supabaseClient";

export const getDoneList = async () => {
  const { data } = await supabase.from("list").select();
  return data ?? [];
}