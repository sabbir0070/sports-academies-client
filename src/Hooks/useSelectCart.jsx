
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectCart = () => {
const {user,loading} = useAuth();
const {refetch, data: selectedClass =[],isLoading} = useQuery({
queryKey: ['selectClass', user?.email],
enabled: !loading,
queryFn: async ()=>{
const res = await fetch (`http://localhost:4000/selectClass?email=${user?.email}`)
return res.json();

}
})
return [selectedClass,refetch,isLoading]
};

export default useSelectCart;
