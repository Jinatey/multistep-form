import { proxy } from "valtio";

export const state = proxy({
  name: "",
  email: "",
  number: "",
  plan: "",
  duration: "",
});
