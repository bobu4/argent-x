import { chakra } from "@chakra-ui/react"
import type { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.2711 0.99997C9.58857 0.999173 6.99378 1.95541 4.95328 3.69674C2.91278 5.43807 1.56045 7.85024 1.13947 10.4995C0.718482 13.1488 1.25646 15.8613 2.65666 18.1494C4.05686 20.4375 6.22742 22.151 8.77803 22.9817H9.05034C9.18319 22.99 9.31628 22.9699 9.44078 22.9228C9.56527 22.8757 9.67833 22.8026 9.77245 22.7085C9.86657 22.6144 9.93961 22.5013 9.98671 22.3769C10.0338 22.2524 10.0539 22.1193 10.0457 21.9864V21.7892C10.0457 21.6296 10.0457 21.4136 10.0457 20.7657C10.0365 20.7042 10.0151 20.6451 9.98287 20.5919C9.95063 20.5388 9.90814 20.4925 9.85787 20.4559C9.80333 20.4117 9.73959 20.3804 9.67134 20.3642C9.6031 20.3479 9.53207 20.3472 9.4635 20.362C6.947 20.9066 6.41178 19.3291 6.37422 19.2258C6.0591 18.3911 5.49535 17.6733 4.75915 17.1694C4.71504 17.1312 4.66794 17.0967 4.6183 17.0661C4.72742 17.0074 4.85223 16.9844 4.97512 17.0004C5.21113 17.0332 5.43462 17.1265 5.62385 17.2713C5.81307 17.4161 5.9616 17.6075 6.05496 17.8267C6.41821 18.4592 7.01262 18.9261 7.71313 19.1293C8.41365 19.3324 9.16565 19.2559 9.81092 18.9159C9.88017 18.8856 9.94108 18.8391 9.98849 18.7803C10.0359 18.7214 10.0684 18.652 10.0832 18.5779C10.1192 18.1435 10.3051 17.7352 10.6091 17.4229C10.6766 17.363 10.7253 17.2849 10.7496 17.1979C10.7738 17.111 10.7725 17.0189 10.7457 16.9327C10.719 16.8465 10.6679 16.7699 10.5987 16.7119C10.5295 16.654 10.4451 16.6172 10.3555 16.606C8.13013 16.3525 5.85777 15.5731 5.85777 11.7326C5.83901 10.7682 6.19205 9.83348 6.84371 9.12224C6.90373 9.05595 6.94357 8.9739 6.95854 8.88573C6.97351 8.79757 6.96299 8.70696 6.92822 8.62458C6.66726 7.89548 6.67058 7.0979 6.93761 6.371C7.80508 6.52477 8.61928 6.89633 9.30387 7.45084C9.36043 7.49076 9.42526 7.5174 9.49354 7.52878C9.56183 7.54016 9.6318 7.53598 9.69825 7.51657C10.537 7.28903 11.402 7.17223 12.2711 7.16914C13.1434 7.16987 14.0118 7.28671 14.8533 7.51657C14.9184 7.53452 14.9866 7.53794 15.0531 7.52658C15.1197 7.51522 15.1829 7.48936 15.2383 7.45084C15.924 6.89807 16.7377 6.52672 17.6045 6.371C17.8602 7.094 17.8602 7.88279 17.6045 8.6058C17.5698 8.68818 17.5593 8.77879 17.5742 8.86695C17.5892 8.95512 17.629 9.03717 17.6891 9.10346C18.334 9.80759 18.6865 10.7309 18.675 11.6857C18.675 15.5262 16.3933 16.2961 14.1585 16.5497C14.0668 16.5592 13.98 16.5955 13.9088 16.6541C13.8376 16.7126 13.7853 16.7908 13.7582 16.8789C13.7312 16.967 13.7307 17.0611 13.7568 17.1495C13.7829 17.2379 13.8344 17.3167 13.9049 17.376C14.1129 17.5907 14.2719 17.8479 14.3707 18.13C14.4696 18.4121 14.5061 18.7123 14.4777 19.0098V21.9958C14.4731 22.1426 14.501 22.2886 14.5594 22.4234C14.6178 22.5581 14.7054 22.6782 14.8157 22.7752C14.9563 22.8804 15.1195 22.9513 15.2923 22.9823C15.4651 23.0133 15.6427 23.0034 15.8111 22.9536C18.3446 22.106 20.4945 20.3859 21.8773 18.1C23.2601 15.8142 23.7857 13.1115 23.3604 10.474C22.9351 7.8366 21.5866 5.43605 19.5554 3.70074C17.5242 1.96542 14.9426 1.00824 12.2711 0.99997Z"
      fill="currentColor"
    />
  </svg>
)
export default chakra(SvgComponent)