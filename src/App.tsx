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
        }}
      >
        <Col
          span={8}
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
        <Col span={16}>
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
      <Content>
        <Row>
          <Col
            style={{
              height: "90vh",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
          >
            <Row style={{ height: "100%" }}>
              <Col
                span={24}
                style={{
                  textAlign: "left",
                  paddingLeft: "42px",
                  paddingRight: "42px",
                  paddingTop: "20%",
                }}
              >
                <Title>Good Morning!</Title>
                <Text>
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
      <Footer></Footer>
    </>
  );
}

export default App;
