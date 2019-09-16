// TODO: 보완 예정
import { Location } from "./constants";

const getLocation = (url: string) => {
  if (url.includes("http://orcz.com/Borderlands_3:_Golden_Key")) {
    return Location.WIKI;
  }
  if (url.includes("https://borderlands.com/") && url.endsWith("/vip-codes/")) {
    return Location.SHIFT;
  }
  throw Error("Location is invalid");
};

export default getLocation;
