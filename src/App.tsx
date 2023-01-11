import React, { useRef, useState } from 'react';
import './App.css';
import { Anchor, Avatar, Box, Button, Image, CardBody, CardHeader, grommet, Grommet, Header, Heading, Meter, Page, PageContent, PageHeader, Paragraph, Stack, Text, Markdown } from 'grommet';
import { Moon, Sun, Home, Notification, ChatOption } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';
// @ts-ignore
import cv from "./static/cv.pdf"

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#11AA7F'
    },
    font: {
      family: "cursive",
      size: "18px",
      height: "20px",
    },
  },
});

const flexwrap: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap'
}

const AppBar = (props: any) => (
  <Header
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    {...props}
  />
)

const CardTemplate = ({ title, children }: { title?: string, children?: any }) => {
  return (
    <Box pad="small" justify="evenly" align='center'>
      {title && <CardHeader >
        <Heading level={2} margin="none" >
          {title}
        </Heading>
      </CardHeader>}
      <CardBody pad="small">
        {children}
      </CardBody>
    </Box>
  )
}

const Skill = ({ title, value }: { title: string, value: number }) => {
  return (
    <Box direction='column' align='center'>
      <Stack anchor='center'>
        <Meter
          type="circle"
          margin="medium"
          values={[{
            value: value
          }]}
          size="small"
        />
        <Text margin="medium" size='xlarge'>{title}</Text>
      </Stack>
    </Box>
  )
}

const LinkTemplate = ({ href, name, linkToLogo }: { href: any, name?: string, linkToLogo?: string }) => {
  return (
    <Anchor href={href} target="_blank" margin="small"><Avatar background="brand" src={linkToLogo}>{name}</Avatar></Anchor>
  )
}


function App() {
  const [dark, setDark] = useState(true);

  return (
    <Grommet theme={theme} themeMode={dark ? "dark" : 'light'} full>
      <Page>
        <AppBar>
          <Text size='large'>
            Marc-Antoine Robin
          </Text>
          <Button
            a11yTitle={dark ? "light mode" : 'dark mode'}
            icon={dark ? <Moon /> : <Sun />}
            onClick={() => setDark(!dark)}
          />
        </AppBar>
        <PageContent>
          <Box margin="small"></Box>
          <CardTemplate>
            <Box direction='row' justify='evenly' style={flexwrap}>
              <LinkTemplate href={cv} name={"CV"} />
              <LinkTemplate href={"https://github.com/robinm3"} linkToLogo="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              <LinkTemplate href={"https://www.linkedin.com/in/marc-antoine-robin"} linkToLogo="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F03%2FColor-of-the-LinkedIn-Logo.jpg&f=1&nofb=1&ipt=3574f9f820310ae8c775b941ba57b718f37cf2754bfd6719684f04e810479a88&ipo=images" />
            </Box>
          </CardTemplate>
          <CardTemplate >
            <Box direction='row-responsive' justify='evenly' >
              <Image
                src="https://aeglo.ift.ulaval.ca/executives/finissant.jpeg"
                width="360rem"
                margin="small"
              />
              <Box width="medium" direction='column' justify='center'>
                <Paragraph size='xxlarge'
                  margin="small">
                  Finissant en génie logiciel, développeur fullstack et artiste amateur.
                </Paragraph>
              </Box>
            </Box>
          </CardTemplate>
        </PageContent>
      </Page>

    </Grommet >
  );
}

export default App;
