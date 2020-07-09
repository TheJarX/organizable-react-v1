import {apiUrl} from "../utils";

// const logoutUser = async (user) => {
//     try {
//         const response = await fetch(`${apiUrl}/logout`, {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json",
//                 Authorization: `Token token="${user.token}"`,
//             },
//         });
//
//         if (response.ok) {
//             return {data: true};
//         } else {
//             const data = await response.json();
//             return {error: data.errors.message};
//         }
//     } catch (error) {
//         console.log(error);
//         return {error: "Network error"};
//     }
// };
//
// export {loginUser, logoutUser};