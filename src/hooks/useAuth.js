import { useContext } from "react"
import { AuthContext } from "../Firebase/AuthProvider"

const useAuth = () => {
   return useContext(AuthContext);
}
export default useAuth;