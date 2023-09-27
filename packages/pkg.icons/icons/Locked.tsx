import { Svg, IconProps  } from '../Svg';

export const Locked = ({ ...props }: IconProps) => (
  <Svg {...props}>
    <path
      d="M11.34 2.046c-.711.09-1.522.404-2.16.834-1.154.779-1.966 2.115-2.138 3.519C7.018 6.595 7 7.639 7 8.869V11H5.927c-1.235 0-1.35.021-1.628.299C3.98 11.617 4 11.277 4 16.5s-.02 4.883.299 5.201c.324.324-.322.299 7.701.299s7.377.025 7.701-.299c.319-.318.299.022.299-5.201s.02-4.883-.299-5.201c-.278-.278-.393-.299-1.628-.299H17V8.869c0-1.23-.018-2.274-.042-2.47a5.2 5.2 0 0 0-.839-2.223c-.271-.405-.89-1.024-1.295-1.295a5.07 5.07 0 0 0-3.484-.835m1.239 2.015c.606.125 1.1.391 1.535.825.304.305.494.586.648.958.229.556.238.67.238 3.014V11H9V8.858c0-2.344.009-2.458.238-3.014a3.009 3.009 0 0 1 2.734-1.841c.171-.002.444.024.607.058M18 16.5V20H6v-7h12v3.5m-7 0V18h2v-3h-2v1.5"
      fillRule="evenodd"
    />
  </Svg>
);
