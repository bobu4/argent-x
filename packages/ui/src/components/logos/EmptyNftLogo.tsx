import { chakra } from "@chakra-ui/react"
import type { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={28} height={28} rx={4} fill="#404040" />
    <path
      d="M13.0625 11.1875C13.0625 11.8779 12.5029 12.4375 11.8125 12.4375C11.1221 12.4375 10.5625 11.8779 10.5625 11.1875C10.5625 10.4971 11.1221 9.9375 11.8125 9.9375C12.5029 9.9375 13.0625 10.4971 13.0625 11.1875Z"
      fill="#8C8C8C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.75 6.1875C6.88706 6.1875 6.1875 6.88706 6.1875 7.75V20.25C6.1875 21.1129 6.88706 21.8125 7.75 21.8125H20.25C21.1129 21.8125 21.8125 21.1129 21.8125 20.25V7.75C21.8125 6.88706 21.1129 6.1875 20.25 6.1875H7.75ZM8.0625 8.0625V15.4867L9.13981 14.4094C9.28456 14.2632 9.45676 14.1471 9.64654 14.0676C9.83766 13.9876 10.0428 13.9464 10.25 13.9464C10.4572 13.9464 10.6623 13.9876 10.8535 14.0676C11.0432 14.147 11.2154 14.2632 11.3602 14.4093L12.75 15.7992L16.0148 12.5344C16.1596 12.3882 16.3318 12.2721 16.5215 12.1926C16.7127 12.1126 16.9178 12.0714 17.125 12.0714C17.3322 12.0714 17.5373 12.1126 17.7285 12.1926C17.9183 12.2721 18.0905 12.3882 18.2353 12.5344L19.9375 14.2367V8.0625H8.0625ZM10.25 15.9508L8.0625 18.1383V19.9375H19.9375V16.8883L17.125 14.0758L13.8602 17.3406C13.7154 17.4868 13.5432 17.6029 13.3535 17.6824C13.1623 17.7624 12.9572 17.8036 12.75 17.8036C12.5428 17.8036 12.3377 17.7624 12.1465 17.6824C11.9568 17.6029 11.7846 17.4868 11.6398 17.3407L10.25 15.9508Z"
      fill="#8C8C8C"
    />
  </svg>
)
export default chakra(SvgComponent)