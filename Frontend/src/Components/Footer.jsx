// import { FaBlog } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const MyFooter = () => {
//   return (
//     <footer className="w-full bg-[#C3DDFD] p-12 mt-4 ">
//       <div className="mx-auto flex  flex-col justify-between items-center space-x-12 md:flex-row px-4 lg:px-24">
//         <div className="w-full px-4 md:w-1/2 lg:px-0 flex flex-col justify-between items-start ">
//           <h1 className="max-w-sm text-3xl font-bold">Subscribe to Us</h1>
//           <form
//             action=""
//             className="mt-4 inline-flex w-full items-center md:w-3/4"
//           >
//             <input
//               className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//               type="email"
//               placeholder="Enter your email"
//             ></input>
//             <button
//               type="button"
//               className="ml-4 rounded bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//             >Enter </button>
//           </form>
//         </div>
//         <div className="mt-8 flex flex-row gap-20  justify-between md:mt-0 lg:w-3/4 lg:flex-row">
//           {Array.from({ length: 3 }).map((_, i) => (
//             <div key={i} className="mb-8 lg:mb-0">
//               <p className="mb-6 text-lg font-semibold text-gray-700 ">
//                 Company
//               </p>
//               <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
//                 <li>About us</li>
//                 <li>Company History</li>
//                 <li>Our Team</li>
//                 <li>Our Vision</li>
//                 <li>Press Release</li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//       <hr className="my-4" />
//       <div className="mx-auto max-w-4xl mt-5 items-center justify-between px-4 md:flex lg:px-0">
//         <div className="inline-flex items-center">
//           <Link
//             to="/"
//             className=" text-2xl font-bold text-blue-700 flex items-center"
//           >
//             <FaBlog className=" inline-block ml-4 text-3xl font-bold" />
//             Name
//           </Link>
//           <span className="ml-4 text-3xl font-bold"></span>
//         </div>
//         <div className="mt-4 md:mt-0">
//           <p className="text-sm font-medium text-gray-500">
//             © 2024 . All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default MyFooter;
