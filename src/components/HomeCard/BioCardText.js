// import PropTypes from "prop-types";
// import { useState } from "react";
// import { Text, BtnExpander } from "./BioCardText.styled";

// function BioCardText({
//   children,
//   collapsedNumWords = 24,
//   expandButtonText = "Show more",
//   collapseButtonText = "Show less",
//   expanded = false,
// }) {
//   const [isExpended, setIsExpended] = useState(expanded);

//   const displayText = isExpended
//     ? children
//     : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`;

//   return (
//     <div>
//       <Text>
//         {children.split(" ").length > collapsedNumWords
//           ? displayText
//           : children}
//         {children.split(" ").length > collapsedNumWords && (
//           <BtnExpander onClick={() => setIsExpended((exp) => !exp)}>
//             {isExpended ? collapseButtonText : expandButtonText}
//           </BtnExpander>
//         )}
//       </Text>
//     </div>
//   );
// }

// BioCardText.propTypes = {
//   collapsedNumWords: PropTypes.number,
//   expandButtonText: PropTypes.string,
//   collapseButtonText: PropTypes.string,
//   buttonColor: PropTypes.string,
//   className: PropTypes.string,
//   expanded: PropTypes.bool,
// };
