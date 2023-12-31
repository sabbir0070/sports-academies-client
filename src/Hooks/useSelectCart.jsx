
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./UseAxiosSecure";

const useSelectCart = () => {
const [axiosSecure] = useAxiosSecure();
const {user,loading} = useAuth();
console.log(user);
// const token = localStorage.getItem('access-token');
const {refetch, data: selectedClass =[],isLoading} = useQuery({
queryKey: ['selectClass', user?.email],
enabled: !loading,
queryFn: async ()=>{
const res = await axiosSecure(`/selectClass?email=${user?.email}`)
// console.log('res from axios',res);
return res.data;
}
})
return [selectedClass,refetch,isLoading]
};

export default useSelectCart;

// queryFn: async ()=>{
// const res = await fetch (`https://sports-academies-server-nine.vercel.app/selectClass?email=${user?.email}`,{
// headers:{
// authorization:`bearer ${token}`
// }
// })
// return res.json();

// }