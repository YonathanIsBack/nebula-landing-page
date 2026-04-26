import { Menu, Image, Row, Col, Typography } from "antd";
import type { MenuProps } from "antd";
import { useState } from "react";
import "./App.css";
import { Content, Footer, Header } from "antd/es/layout/layout";

const { Text, Title } = Typography;
type MenuItem = Required<MenuProps>["items"][number];

function App() {
  const [current, setCurrent] = useState("mail");
  const items: MenuItem[] = [
    {
      label: <a href="#home">Home</a>,
      key: "home",
      icon: "",
    },
    {
      label: <a href="#about-me">About Me</a>,
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

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

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
          zIndex: 1
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
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
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
                <Title style={{ color: "white" }}>Good Morning!</Title>
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
      <Content id="about-me">
        <Row
        style={{
          height: "100vh"
        }}>
        </Row>
      </Content>
      <Footer></Footer>
    </>
  );
}

export default App;
