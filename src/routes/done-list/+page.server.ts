
import { getDoneList } from "../../controller/doneList";

export async function load() {
  const data = await getDoneList();
  return { list: data }
}