import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to <br />
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          ChordCloud
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Let's get you started storing your files here. <br />
        (Source code for this project is {' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
            here
        </Anchor>
        ) 
      </Text>
        <Text c="lime" ta="center" size="lg" maw={580} mx="auto" >
        Contact me via email to get access
        </Text>
    </>
  );
  // return (
  //   <>
  //     <Title className={classes.title} ta="center" mt={100}>
  //       Welcome to{' '}
  //       <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
  //         Mantine
  //       </Text>
  //     </Title>
  //     <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
  //       This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
  //       Vite integration follow{' '}
  //       <Anchor href="https://mantine.dev/guides/vite/" size="lg">
  //         this guide
  //       </Anchor>
  //       . To get started edit pages/Home.page.tsx file.
  //     </Text>
  //   </>
  // );
}
