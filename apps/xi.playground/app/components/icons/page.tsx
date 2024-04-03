import {
  Account,
  Activity,
  Add,
  Announce,
  ArrowUp,
  Bold,
  Burger,
  CategoryAdd,
  Calendar,
  Camera,
  Chat,
  Check,
  Cite,
  Clip,
  Clock,
  Close,
  ChannelAdd,
  ChevronUp,
  Copy,
  Code,
  Edit,
  Emotions,
  Endcall,
  Exit,
  External,
  Eyeoff,
  Eyeon,
  File,
  Flag,
  Folder,
  Food,
  Grid,
  H1,
  H2,
  H3,
  Hand,
  Heart,
  Home,
  PeopleInvite,
  Italic,
  Link,
  Maximize,
  Microphone,
  Divider,
  Move,
  Movie,
  Music,
  Nature,
  Notification,
  Objects,
  Ol,
  Palette,
  Photo,
  Picture,
  Places,
  Play,
  Screenshare,
  Search,
  Send,
  Settings,
  Stroke,
  Task,
  Text,
  Trash,
  ThinArrowRight,
  TelegramFilled,
  Ul,
  Underline,
  Updates,
  Users,
  Key,
  SoundTwo,
  Plus,
  Speaker,
  Window,
  Laptop,
  CaretUp,
  Conference,
  Group,
  Crown,
  CrossCircle,
  ChevronBottom,
  ChevronRight,
  ChevronLeft,
} from '@xipkg/icons';

const iconsDict = [
  <Account />,
  <Activity />,
  <Add />,
  <Announce />,
  <ArrowUp />,
  <Bold />,
  <Burger />,
  <Calendar />,
  <CategoryAdd />,
  <Camera />,
  <Chat />,
  <Check />,
  <ChannelAdd />,
  <ChevronUp />,
  <ChevronLeft />,
  <ChevronRight />,
  <ChevronBottom />,
  <Cite />,
  <Clip />,
  <Clock />,
  <Close />,
  <Copy />,
  <Code />,
  <Edit />,
  <Emotions />,
  <Endcall />,
  <Exit />,
  <External />,
  <Eyeoff />,
  <Eyeon />,
  <File />,
  <Flag />,
  <Folder />,
  <Food />,
  <Grid />,
  <H1 />,
  <H2 />,
  <H3 />,
  <Hand />,
  <Heart />,
  <Home />,
  <PeopleInvite />,
  <Italic />,
  <Link />,
  <Maximize />,
  <Microphone />,
  <Divider />,
  <Move />,
  <Movie />,
  <Music />,
  <Nature />,
  <Notification />,
  <Objects />,
  <Ol />,
  <Palette />,
  <Photo />,
  <Picture />,
  <Places />,
  <Play />,
  <Screenshare />,
  <Search />,
  <Send />,
  <Settings />,
  <Stroke />,
  <Speaker />,
  <Task />,
  <Text />,
  <Trash />,
  <ThinArrowRight />,
  <TelegramFilled />,
  <Ul />,
  <Underline />,
  <Updates />,
  <Users />,
  <Key />,
  <SoundTwo />,
  <Plus />,
  <Window />,
  <Laptop />,
  <CaretUp />,
  <Conference />,
  <Group />,
  <Crown />,
  <CrossCircle />,
];

const iconsDictNames = [
  'Account',
  'Activity',
  'Add',
  'Announce',
  'ArrowUp',
  'Bold',
  'Burger',
  'Calendar',
  'CategoryAdd',
  'Camera',
  'Chat',
  'Check',
  'ChannelAdd',
  'ChevronUp',
  'ChevronLeft',
  'ChevronRight',
  'ChevronBottom',
  'Cite',
  'Clip',
  'Clock',
  'Close',
  'Copy',
  'Code',
  'Edit',
  'Emotions',
  'Endcall',
  'Exit',
  'External',
  'Eyeoff',
  'Eyeon',
  'File',
  'Flag',
  'Folder',
  'Food',
  'Grid',
  'H1',
  'H2',
  'H3',
  'Hand',
  'Heart',
  'Home',
  'PeopleInvite',
  'Italic',
  'Link',
  'Maximize',
  'Microphone',
  'Divider',
  'Move',
  'Movie',
  'Music',
  'Nature',
  'Notification',
  'Objects',
  'Ol',
  'Palette',
  'Photo',
  'Picture',
  'Places',
  'Play',
  'Screenshare',
  'Search',
  'Send',
  'Settings',
  'Stroke',
  'Speaker',
  'Task',
  'Text',
  'Trash',
  'ThinArrowRight',
  'TelegramFilled',
  'Ul',
  'Underline',
  'Updates',
  'Users',
  'Key',
  'SoundTwo',
  'Plus',
  'Window',
  'Laptop',
  'CaretUp',
  'Conference',
  'Group',
  'Crown',
  'CrossCircle',
];

const Icons = () => (
  <div className="p-2">
    <div className="grid grid-rows-6 grid-flow-col gap-4">
      {iconsDict.map((icon, index) => {
        return (
          <div
            className="h-[48px] w-[56px] flex flex-col justify-center place-items-center"
            key={index.toString()}
          >
            <div>{icon}</div>
            <span className="text-[10px]">{iconsDictNames[index]}</span>
          </div>
        );
      })}
    </div>
  </div>
);

export default Icons;
