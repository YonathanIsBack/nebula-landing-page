import type { MenuProps } from "antd";
import { Col, Divider, Flex, Menu, Row, Tag, Typography, Image } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import "./App.css";

const { Text, Title } = Typography;
type MenuItem = Required<MenuProps>["items"][number];

const greetings = {
  morning: "Good Morning!",
  noon: "Good Noon!",
  afternoon: "Good Afternoon!",
  night: "Good Night!",
};

function App() {
  const [greeting, setGreeting] = useState(greetings.morning);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 11 && hour >= 5) {
      setGreeting(greetings.morning);
    }
    if (hour < 13 && hour >= 11) {
      setGreeting(greetings.noon);
    }
    if (hour < 22 && hour >= 13) {
      setGreeting(greetings.afternoon);
    }
    if ((hour >= 0 && hour < 5) || (hour >= 22 && hour <= 24)) {
      setGreeting(greetings.night);
    }
  }, []);

  const onClickMenu = ({ key }) => {
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items: MenuItem[] = [
    {
      label: "Home",
      key: "home",
      icon: "",
    },
    {
      label: "About Me",
      key: "about-me",
      icon: "",
    },
    {
      label: "Background",
      key: "background",
      icon: "",
    },
    {
      label: "Work Done",
      key: "work-done",
      icon: "",
    },
    {
      label: "Contact Person",
      key: "contact-person",
      icon: "",
    },
    {
      label: "About Something Else",
      key: "about-something-else",
      icon: "",
    },
  ];

  return (
    <>
      <Row
        style={{
          borderBottomWidth: "1px",
          borderColor: "rgba(5, 5, 5, 0.06)",
          borderBottomStyle: "solid",
          backgroundColor: "white",
          width: "1126px",
          position: "fixed",
          zIndex: 1,
        }}
      >
        <Col
          span={6}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Title level={3} style={{ margin: "0" }}>
            User Why Nebula
          </Title>
        </Col>
        <Col span={18}>
          <Menu
            mode="horizontal"
            items={items}
            onClick={onClickMenu}
            style={{
              justifyContent: "flex-end",
              borderBottomWidth: "0px",
              height: "100%",
            }}
          />
        </Col>
      </Row>
      <Content id="home">
        <Row>
          <Col
            style={{
              marginTop: "45px",
              height: "90vh",
              width: "100%",
              background: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("/landing-page-background.webp")`,
              backgroundSize: "cover",
            }}
          >
            <Row style={{ height: "100%" }}>
              <Col
                span={24}
                style={{
                  textAlign: "left",
                  paddingLeft: "42px",
                  paddingRight: "42px",
                  paddingTop: "30%",
                }}
              >
                <Title style={{ color: "white" }}>{greeting}</Title>
                <Text style={{ color: "white" }}>
                  My name is Yonathan and I am an IT Professional currently
                  working as a Fullstack Engineer in Indonesia. Experienced and
                  passionate on Website, API, Database, Mobile and Application
                  Development.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <Content
        id="about-me"
        style={{
          scrollMarginTop: "45px",
          height: "95vh",
        }}
      >
        <Row>
          <Col
            span={14}
            style={{
              borderRightColor: "rgba(5, 5, 5, 0.06)",
              borderRightStyle: "solid",
              borderRightWidth: "1px",
            }}
          >
            <Title>About Me</Title>
            <Divider />
            <Content
              style={{
                textAlign: "left",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              <Title level={5}>My name is</Title>
              <Text>Yonathan Pandapotan</Text>
              <Divider />
              <Title level={5}>I Have Experience on</Title>
              <Text>Language</Text>
              <Flex gap="small" align="center" wrap>
                <Tag>Java</Tag>
                <Tag>PHP</Tag>
                <Tag>Javascript</Tag>
              </Flex>
              <br />
              <Text>Framework</Text>
              <Flex gap="small" align="center" wrap>
                <Tag>Spring Boot</Tag>
                <Tag>Laravel</Tag>
                <Tag>React</Tag>
                <Tag>React Native</Tag>
                <Tag>Next Js</Tag>
                <Tag>Sveltekit</Tag>
                <Tag>Express Js</Tag>
              </Flex>
              <br />
              <Text>Database</Text>
              <Flex gap="small" align="center" wrap>
                <Tag>Mysql</Tag>
                <Tag>MariaDb</Tag>
                <Tag>PostgreSQL</Tag>
                <Tag>MongoDB</Tag>
              </Flex>
              <br />
              <Text>CI/CD And Devops</Text>
              <Flex gap="small" align="center" wrap>
                <Tag>Git</Tag>
                <Tag>Jenkin</Tag>
                <Tag>Docker</Tag>
                <Tag>Red Hat OCP</Tag>
              </Flex>
            </Content>
          </Col>
          <Col span={10}>
            <Image
              width="100%"
              height="95vh"
              style={{ objectFit: "cover" }}
              preview={false}
              alt="basic"
              src="banner-image.webp"
            />
          </Col>
        </Row>
      </Content>
      <Content
        id="background"
        style={{
          height: "95vh",
        }}
      ></Content>
      <Footer></Footer>
    </>
  );
}

export default App;
