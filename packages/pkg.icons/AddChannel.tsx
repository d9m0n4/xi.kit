import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const AddChannel = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path d="M11.12 2.039c-1.804.181-3.413.768-4.84 1.767-3.542 2.48-5.102 6.953-3.858 11.059a9.762 9.762 0 0 0 2.517 4.196 9.792 9.792 0 0 0 3.333 2.217c3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.255 16.379 22 14.234 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.62 2.002A7.98 7.98 0 0 1 19.182 8.5a7.965 7.965 0 0 1-1.417 9.03A7.977 7.977 0 0 1 12 19.999c-3.765 0-7.052-2.668-7.823-6.351a7.995 7.995 0 0 1 4.324-8.831 7.919 7.919 0 0 1 4.239-.776m-1.488 3.037c-.255.156-.252.131-.252 2.12V11H9.19c-1.725 0-1.816.004-1.938.078-.222.136-.252.246-.252.93 0 .536.01.628.078.74.156.255.131.252 2.12.252H11v1.802c0 1.989-.003 1.964.252 2.12.112.068.203.078.748.078.545 0 .636-.01.748-.078.255-.156.252-.131.252-2.12V13h1.81c1.725 0 1.816-.004 1.938-.078.222-.135.252-.247.252-.922s-.03-.787-.252-.922c-.122-.074-.213-.078-1.938-.078H13V9.19c0-1.725-.004-1.816-.078-1.938-.136-.222-.246-.252-.93-.252-.536 0-.628.01-.74.078" />
  </SvgIcon>
);
