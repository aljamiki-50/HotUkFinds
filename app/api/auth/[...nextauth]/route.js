import nextAuth from "next-auth";
import { authOptions } from "./options";
// import options, { authOptions } from "./options";




const handler = nextAuth(authOptions);


export { handler as GET, handler as POST };
