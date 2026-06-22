"use client";

import { useState } from "react";

export default function ListingDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = text.length > 180;

  return (
    <div>
      <p
        className={`text-sm leading-relaxed text-muted-foreground whitespace-pre-line break-words ${
          expanded ? "" : "line-clamp-1"
        }`}
      >
        {text}
      </p>

      {shouldTruncate && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className=" inline-flex items-center text-xs font-medium text-primary hover:underline cursor-pointer"
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}


// "use client";

// import { useState } from "react";

// export default function ListingDescription({ text }: { text: string }) {
//   const [expanded, setExpanded] = useState(false);

//   // Adjust this number (character count) based on how wide your card is 
//   // to make sure it fills up exactly one line before breaking.
//   const characterLimit = 45; 
//   const shouldTruncate = text.length > characterLimit;

//   // If not expanded, slice the text short so the button stays on the first line
//   const displayedText = shouldTruncate && !expanded 
//     ? `${text.slice(0, characterLimit)}...` 
//     : text;

//   return (
//     // whitespace-nowrap ensures it never wraps to line 2 when collapsed
//     <div className={`text-sm text-muted-foreground break-words ${expanded ? "" : "whitespace-nowrap overflow-hidden text-ellipsis"}`}>
//       <span className="inline">{displayedText}</span>
      
//       {shouldTruncate && (
//         <button
//           type="button"
//           onClick={() => setExpanded(!expanded)}
//           // 'inline-block' with a tiny margin keeps it neatly tacked onto the end
//           className="inline-block font-semibold text-primary hover:underline ml-1.5 text-xs bg-background shrink-0 cursor-pointer"
//         >
//           {expanded ? "See Less" : "See More"}
//         </button>
//       )}
//     </div>
//   );
// }