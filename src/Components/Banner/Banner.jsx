// import React from "react";

// const Banner = () => {
//   return (
//     <div className="px-4 w-full">
//       <div className="bg-base-200 lg:w-10/12 mx-auto rounded-2xl overflow-hidden">
//         <div className="flex flex-col lg:flex-row w-full lg:h-[600px]">
//           {/* Left Side - Image */}
//           <div className="w-full lg:w-2/3">
//             <img
//               src="/stud.webp"
//               className="w-full h-full object-cover"
//               alt="Student"
//             />
//           </div>

//           {/* Right Side - Text */}
//           <div
//             className="w-full lg:w-1/3 text-white p-8 flex flex-col justify-center text-right"
//             style={{
//               backgroundColor: "maroon",
//               clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0 100%)",
//             }}
//           >
//             <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//               Box Office News!
//             </h1>
//             <p className="py-4 text-lg">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>

//             <ul className="list-disc pl-5 mb-4">
//               <li>Feature One with details</li>
//               <li>Feature Two with details</li>
//               <li>Feature Three with details</li>
//             </ul>

//             <button className="btn bg-white text-maroon font-bold hover:bg-gray-200">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";

const Banner = () => {
  return (
    <div className="px-4 w-full">
      <div className="bg-base-200 lg:w-10/12 mx-auto rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full h-[600px]">
          {/* Left Side - Image with Clip-Path */}
          <div
            className="w-full lg:w-2/3 h-full"
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
            }}
          >
            <img
              src="/stud.webp"
              className="w-full h-full object-cover"
              alt="Student"
            />
          </div>

          {/* Right Side - Normal Text */}
          <div className="w-full lg:w-1/3 h-full  p-8 flex flex-col justify-center text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Features!</h1>

            <ul className="list-disc pl-5 mb-4">
              <li>Class Schedule Tracker</li>
              <li>Budget Tracker</li>
              <li>Q&A Generator</li>
              <li>Study Planner</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
