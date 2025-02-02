import { chakra } from "@chakra-ui/react"
import type { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m12.844 15.75 1.08-1.08a1.127 1.127 0 0 0-1.594-1.593l-1.08 1.08-1.406-1.407 1.08-1.08a1.127 1.127 0 0 0-1.594-1.593l-1.08 1.08-1.454-1.453a1.127 1.127 0 0 0-1.594 1.594l.33.327-1.919 1.92a3.375 3.375 0 0 0 0 4.774l.24.238-2.399 2.397a1.127 1.127 0 1 0 1.594 1.594l2.397-2.398.238.239a3.38 3.38 0 0 0 4.773 0l1.919-1.92.33.33a1.127 1.127 0 0 0 1.593-1.594l-1.454-1.455Zm-3.98 3.046a1.125 1.125 0 0 1-1.595 0l-2.065-2.068a1.125 1.125 0 0 1 0-1.594l1.921-1.915 3.656 3.656-1.918 1.92ZM22.55 1.452a1.125 1.125 0 0 0-1.594 0l-2.4 2.4-.238-.239a3.38 3.38 0 0 0-4.773 0l-1.921 1.918-.33-.33a1.127 1.127 0 1 0-1.593 1.594l7.5 7.5a1.127 1.127 0 0 0 1.594-1.594l-.327-.326 1.92-1.92a3.375 3.375 0 0 0 0-4.774l-.238-.238 2.398-2.397a1.125 1.125 0 0 0-.003-1.592l.005-.002ZM18.8 8.858l-1.926 1.923-3.656-3.656 1.92-1.92a1.125 1.125 0 0 1 1.594 0l2.069 2.067a1.123 1.123 0 0 1 0 1.594l-.001-.008Z"
    />
  </svg>
)
export default chakra(SvgComponent)
