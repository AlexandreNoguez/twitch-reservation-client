// import { useEffect } from "react";
// import { login } from "@/services/AuthService";
// import useStore from "@/store";

// export default function useSession() {
//     const store = useStore();

//     async function getUser() {
//         try {
//             const user = await login();
//             store.setAuthUser(user);
//         } catch (error) {
//             console.error(error);

//         }
//     }

//     useEffect(() => {
//         if (!store.authUser) {
//             getUser();
//         }
//     }, [])

//     return store.authUser;
// }