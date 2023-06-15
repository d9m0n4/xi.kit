import { Grid as GridLayout, Typography, Stack } from '@mui/material';
import { LayoutPages } from 'kit/LayoutPages';
import {
  Account,
  Activity,
  Add,
  AddCategory,
  AddChannel,
  Announce,
  Arrow,
  Bold,
  Burger,
  Calendar,
  Camera,
  Chat,
  Check,
  Cite,
  Clip,
  Clock,
  Close,
  Copy,
  Code,
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
  Invite,
  Italic,
  Link,
  Maximize,
  Microphone,
  Minus,
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
  Ul,
  Underline,
  Updates,
  Users,
  icons,
} from '@xipkg/icons';

const iconsDict = [
  <Account />,
  <Activity />,
  <Add />,
  <AddCategory />,
  <AddChannel />,
  <Announce />,
  <Arrow />,
  <Bold />,
  <Burger />,
  <Calendar />,
  <Camera />,
  <Chat />,
  <Check />,
  <Cite />,
  <Clip />,
  <Clock />,
  <Close />,
  <Copy />,
  <Code />,
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
  <Invite />,
  <Italic />,
  <Link />,
  <Maximize />,
  <Microphone />,
  <Minus />,
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
  <Task />,
  <Text />,
  <Trash />,
  <Ul />,
  <Underline />,
  <Updates />,
  <Users />,
];

const Icons = () => (
  <LayoutPages>
    <GridLayout sx={{ p: 4, maxWidth: '624px' }} container spacing={4}>
      {iconsDict.map((icon, index) => {
        console.log('icon', icon);
        return (
          <GridLayout key={index.toString()} item>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{ width: '64px', height: '64px' }}
            >
              {icon}
              <Typography variant="s">{icons[index]}</Typography>
            </Stack>
          </GridLayout>
        );
      })}
    </GridLayout>
  </LayoutPages>
);

export default Icons;
