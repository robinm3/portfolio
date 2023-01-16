import React, { useState } from "react";
import "./App.css";
import {
  Anchor,
  Avatar,
  Box,
  Button,
  Image,
  CardBody,
  CardHeader,
  grommet,
  Grommet,
  Header,
  Heading,
  Meter,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Stack,
  Text,
  Markdown,
  Tip,
} from "grommet";
import { Moon, Sun } from "grommet-icons";
import { deepMerge } from "grommet/utils";
// @ts-ignore
import cv from "./static/cv.pdf";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#11AA7F",
    },
    font: {
      family: "cursive",
      size: "18px",
      height: "20px",
    },
  },
});

const flexwrap: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};

const AppBar = (props: any) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
  />
);

const CardTemplate = ({
  title,
  children,
}: {
  title?: string;
  children?: any;
}) => {
  return (
    <Box pad="small" justify="evenly" align="center">
      {title && (
        <CardHeader>
          <Heading level={2} margin="none">
            {title}
          </Heading>
        </CardHeader>
      )}
      <CardBody pad="small">{children}</CardBody>
    </Box>
  );
};

const LinkTemplate = ({
  href,
  name,
  linkToLogo,
  tip,
}: {
  href: any;
  name?: string;
  linkToLogo?: string;
  tip?: string;
}) => {
  return (
    <Tip
      content={
        tip && (
          <Box pad="small" gap="small" width={{ max: "small" }}>
            <Text weight="bold">{tip}</Text>
          </Box>
        )
      }
    >
      <Anchor href={href} target="_blank" margin="small">
        <Avatar background="brand" src={linkToLogo}>
          {name}
        </Avatar>
      </Anchor>
    </Tip>
  );
};

function App() {
  const [dark, setDark] = useState(true);

  return (
    <Grommet theme={theme} themeMode={dark ? "dark" : "light"} full>
      <Image
        className="moving"
        src="https://cdn-icons-png.flaticon.com/512/1913/1913288.png"
      ></Image>
      <Image
        className="moving"
        src="https://cdn-icons-png.flaticon.com/512/870/870194.png"
      ></Image>
      <Page>
        <AppBar>
          <Text size="large">Marc-Antoine Robin</Text>
          <Button
            a11yTitle={dark ? "light mode" : "dark mode"}
            icon={dark ? <Moon /> : <Sun />}
            onClick={() => setDark(!dark)}
          />
        </AppBar>
        <PageContent>
          <Box margin="small"></Box>
          <CardTemplate>
            <Box direction="row" justify="evenly" style={flexwrap}>
              <LinkTemplate href={cv} name={"CV"} tip={"Curriculum Vitae"} />
              <LinkTemplate
                href={"https://github.com/robinm3"}
                tip="Github"
                linkToLogo="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              />
              <LinkTemplate
                href={"https://www.linkedin.com/in/marc-antoine-robin"}
                tip="Linkedin"
                linkToLogo="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F03%2FColor-of-the-LinkedIn-Logo.jpg&f=1&nofb=1&ipt=3574f9f820310ae8c775b941ba57b718f37cf2754bfd6719684f04e810479a88&ipo=images"
              />
            </Box>
          </CardTemplate>
          <CardTemplate>
            <Box direction="row-responsive" justify="evenly">
              <Image
                src="https://aeglo.ift.ulaval.ca/executives/finissant.jpeg"
                margin="small"
                className="image"
              />
              <Box width="medium" direction="column" justify="center">
                <Paragraph size="xxlarge" margin="small">
                  Finissant en génie logiciel, développeur fullstack et artiste
                  amateur.
                </Paragraph>
              </Box>
            </Box>
          </CardTemplate>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
