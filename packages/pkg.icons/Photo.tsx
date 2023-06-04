import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const Photo = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path d="m8.095 2.99-.908.99-1.804.021c-1.781.02-1.806.021-2.043.115-.679.27-1.158.814-1.296 1.476-.062.299-.062 12.517 0 12.816.157.75.798 1.391 1.548 1.548.3.062 16.516.062 16.816 0a2.062 2.062 0 0 0 1.548-1.548c.062-.299.062-12.517 0-12.816-.138-.662-.617-1.206-1.296-1.476-.237-.094-.262-.095-2.043-.115l-1.804-.021-.908-.99-.907-.99H9.002l-.907.99m6.934 2.008.911.999 2.03.001L20 6v12H4V6l2.03-.002 2.03-.001.911-.999L9.882 4h4.236l.911.998M11.34 7.046a5.136 5.136 0 0 0-1.444.43A5.042 5.042 0 0 0 7.075 11.1c-.073.368-.073 1.432 0 1.8.393 1.979 1.821 3.474 3.794 3.969.633.159 1.629.159 2.262 0 .989-.248 1.782-.7 2.453-1.396.657-.683 1.047-1.394 1.285-2.342.097-.387.108-.503.108-1.131s-.011-.744-.108-1.131a5.335 5.335 0 0 0-.577-1.429 5.038 5.038 0 0 0-4.952-2.394m1.226 2.016c.228.043.466.126.752.265.367.178.464.248.786.569.321.322.391.419.569.786.432.89.434 1.74.008 2.621-.594 1.226-1.949 1.907-3.257 1.637a3.002 3.002 0 0 1-2.105-1.637c-.426-.881-.424-1.731.008-2.621.178-.367.248-.464.569-.786.322-.321.419-.392.786-.569.642-.312 1.204-.391 1.884-.265" />
  </SvgIcon>
);
