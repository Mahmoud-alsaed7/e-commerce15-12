import { getusertoken } from "@/app/Helpers/getUserToken";
import Getuserid from "@/components/getuserid/getuserid";
import { jwtDecode } from "jwt-decode";

export default async function allorders(){
  const token = await getusertoken();
  const decoded: any = jwtDecode(token!);
  const userId = decoded.id; 
  return (
    <>
      <Getuserid userId={userId}/>
    </>
  );
}
