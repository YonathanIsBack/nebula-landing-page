import { useState } from "react";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Card,
  Timeline,
  Image,
  Typography,
} from "antd";
import {
  HomeOutlined,
  UserOutlined,
  HistoryOutlined,
  ProjectOutlined,
  MailOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const App = () => {
  const [current, setCurrent] = useState("home");
  const [darkTheme, setDarkTheme] = useState(false);

  const onMenuClick = (event: { key: string }) => {
    setCurrent(event.key);
    const element = document.getElementById(event.key);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const getTextThemeClass = (isDarkTheme: boolean) => {
    return isDarkTheme ? "dark-theme-text" : "light-theme-text";
  };

  const getThemeClass = (isDarkTheme: boolean) => {
    return isDarkTheme ? "dark-theme" : "light-theme";
  };

  const getCardThemeClass = (isDarkTheme: boolean) => {
    return isDarkTheme ? "dark-theme-card" : "light-theme-card";
  };

  const sections = [
    { key: "home", label: "Home", icon: <HomeOutlined /> },
    { key: "about", label: "About Me", icon: <UserOutlined /> },
    { key: "background", label: "Background", icon: <HistoryOutlined /> },
    { key: "work", label: "Work Done", icon: <ProjectOutlined /> },
    { key: "contact", label: "Contact Person", icon: <MailOutlined /> },
    {
      key: "else",
      label: "About Something Else",
      icon: <InfoCircleOutlined />,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className={getThemeClass(darkTheme)}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom:
            "var(--ant-line-width) var(--ant-line-type) var(--ant-color-split)",
        }}
      >
        <Menu
          theme={darkTheme ? "dark" : "light"}
          mode="horizontal"
          selectedKeys={[current]}
          onClick={onMenuClick}
          items={sections.map((section) => ({
            key: section.key,
            icon: section.icon,
            label: section.label,
          }))}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Button
          type="primary"
          onClick={toggleTheme}
          style={{ marginLeft: "auto" }}
        >
          {darkTheme ? "Light Mode" : "Dark Mode"}
        </Button>
      </Header>

      <Content
        className={getThemeClass(darkTheme)}
        style={{
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
      >
        <section
          id="home"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            textAlign: "center",
            padding: "24px",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
            <Title style={{ color: "#fff" }}>Good morning.</Title>
            <Paragraph style={{ fontSize: "1.5rem", color: "#fff" }}>
              My name is Yonathan and I am an IT Professional currently working
              as a Fullstack Engineer in Indonesia. Experienced and passionate
              on Website, API, Database, Mobile and Application Development.
            </Paragraph>
          </div>
        </section>

        <section
          id="about"
          className={getThemeClass(darkTheme)}
          style={{
            padding: "48px 24px",
          }}
        >
          <Title
            level={2}
            className={getTextThemeClass(darkTheme)}
            style={{ textAlign: "center" }}
          >
            About Me
          </Title>
          <Row justify="center" style={{ marginTop: "24px" }}>
            <Col xs={24} md={18} lg={12}>
              <Card
                className={darkTheme ? "dark-theme-card" : "light-theme-card"}
              >
                <Title level={3} className={getTextThemeClass(darkTheme)}>
                  My Name: Yonathan P.
                </Title>
                <Title level={4} className={getTextThemeClass(darkTheme)}>
                  I have experience in:
                </Title>
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <Title className={getTextThemeClass(darkTheme)} level={5}>
                      Language:
                    </Title>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ padding: "8px 0" }}>Java</li>
                      <li style={{ padding: "8px 0" }}>PHP</li>
                      <li style={{ padding: "8px 0" }}>Javascript</li>
                    </ul>
                  </Col>
                  <Col xs={24} md={12}>
                    <Title className={getTextThemeClass(darkTheme)} level={5}>
                      Framework:
                    </Title>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ padding: "8px 0" }}>Spring Boot</li>
                      <li style={{ padding: "8px 0" }}>Laravel</li>
                      <li style={{ padding: "8px 0" }}>React</li>
                      <li style={{ padding: "8px 0" }}>React Native</li>
                      <li style={{ padding: "8px 0" }}>Next Js</li>
                      <li style={{ padding: "8px 0" }}>Sveltekit</li>
                      <li style={{ padding: "8px 0" }}>Express Js</li>
                    </ul>
                  </Col>
                  <Col xs={24} md={12}>
                    <Title className={getTextThemeClass(darkTheme)} level={5}>
                      Database:
                    </Title>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ padding: "8px 0" }}>MySQL</li>
                      <li style={{ padding: "8px 0" }}>MariaDB</li>
                      <li style={{ padding: "8px 0" }}>PostgreSQL</li>
                      <li style={{ padding: "8px 0" }}>MongoDB</li>
                    </ul>
                  </Col>
                  <Col xs={24} md={12}>
                    <Title className={getTextThemeClass(darkTheme)} level={5}>
                      CI/CD And DevOps:
                    </Title>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ padding: "8px 0" }}>Git</li>
                      <li style={{ padding: "8px 0" }}>Jenkins</li>
                      <li style={{ padding: "8px 0" }}>Docker</li>
                      <li style={{ padding: "8px 0" }}>Red Hat OCP</li>
                    </ul>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </section>

        <section
          id="background"
          className={getThemeClass(darkTheme)}
          style={{
            padding: "48px 24px",
          }}
        >
          <Title
            level={2}
            className={getTextThemeClass(darkTheme)}
            style={{ textAlign: "center" }}
          >
            Background
          </Title>
          <Row justify="center" style={{ marginTop: "24px" }}>
            <Col xs={24} md={20} lg={16}>
              <Timeline
                className={darkTheme ? "dark-timeline" : "light-timeline"}
                mode="alternate"
                items={[
                  {
                    title: (
                      <Title
                        className={getTextThemeClass(darkTheme)}
                        level={5}
                        style={{ margin: 0 }}
                      >
                        August 2020
                      </Title>
                    ),
                    content: (
                      <Card className={getCardThemeClass(darkTheme)}>
                        <Row gutter={16} align="middle">
                          <Col xs={24} md={24}>
                            <Image
                              src="/esa-unggul-university.webp"
                              alt="graduated-from-university"
                              style={{ width: "100%", borderRadius: "8px" }}
                            />
                          </Col>
                          <Col xs={24} md={24}>
                            <Title
                              level={4}
                              className={getTextThemeClass(darkTheme)}
                            >
                              Graduated from University
                            </Title>
                            <Paragraph className={getTextThemeClass(darkTheme)}>
                              I Completed my Bachelor's degree in Information
                              Technology in 2020. However i took a break before
                              continuing my journey.
                            </Paragraph>
                          </Col>
                        </Row>
                      </Card>
                    ),
                  },
                  {
                    title: (
                      <Title
                        className={getTextThemeClass(darkTheme)}
                        level={5}
                        style={{ margin: 0 }}
                      >
                        April 2021
                      </Title>
                    ),
                    content: (
                      <Card className={getCardThemeClass(darkTheme)}>
                        <Row gutter={16} align="middle">
                          <Col xs={24} md={24}>
                            <Image
                              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                              alt="2020"
                              style={{ width: "100%", borderRadius: "8px" }}
                            />
                          </Col>
                          <Col xs={24} md={24}>
                            <Title
                              level={4}
                              className={getTextThemeClass(darkTheme)}
                            >
                              First Job as Application Developer
                            </Title>
                            <Paragraph className={getTextThemeClass(darkTheme)}>
                              Landed my first job at Haluan Rekadaya Konsultindo
                              (HRK) as Application Engineer or IT Developer. My
                              focus in here is to develop ERP Application
                              (Robustapp) as well as integerating the
                              application and improve the existing business.
                            </Paragraph>
                          </Col>
                        </Row>
                      </Card>
                    ),
                  },
                  {
                    title: (
                      <Title
                        className={getTextThemeClass(darkTheme)}
                        level={5}
                        style={{ margin: 0 }}
                      >
                        August 2023
                      </Title>
                    ),
                    content: (
                      <Card className={getCardThemeClass(darkTheme)}>
                        <Row gutter={16} align="middle">
                          <Col xs={24} md={24}>
                            <Image
                              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                              alt="2022"
                              style={{ width: "100%", borderRadius: "8px" }}
                            />
                          </Col>
                          <Col xs={24} md={24}>
                            <Title
                              level={4}
                              className={getTextThemeClass(darkTheme)}
                            >
                              Closing Existing Chapter
                            </Title>
                            <Paragraph className={getTextThemeClass(darkTheme)}>
                              After a long journey, with hardship, friendship
                              and lots of experience, i decided it is time to
                              close this chapter of my journey and continue to
                              another. I'm grateful for all the learning,
                              improvement and dedication from all my Coworker.
                            </Paragraph>
                          </Col>
                        </Row>
                      </Card>
                    ),
                  },
                  {
                    title: (
                      <Title
                        className={getTextThemeClass(darkTheme)}
                        level={5}
                        style={{ margin: 0 }}
                      >
                        August 2023
                      </Title>
                    ),
                    content: (
                      <Card className={getCardThemeClass(darkTheme)}>
                        <Row gutter={16} align="middle">
                          <Col xs={24} md={24}>
                            <Image
                              src="/leveling-up.webp"
                              alt="2024"
                              style={{ width: "100%", borderRadius: "8px" }}
                            />
                          </Col>
                          <Col xs={24} md={24}>
                            <Title
                              level={4}
                              className={getTextThemeClass(darkTheme)}
                            >
                              Leveling Up
                            </Title>
                            <Paragraph className={getTextThemeClass(darkTheme)}>
                              I continue my journey in Pt Bank BTPN, Tbk,
                              continuing as Creative Hacknology Intensive
                              Program. It was such an interesting journey with
                              hurdle, hardship, new thigs to learn and Aspiring
                              Mentor, i managed to survive and secure my
                              journey.
                            </Paragraph>
                          </Col>
                        </Row>
                      </Card>
                    ),
                  },
                  {
                    title: (
                      <Title
                        className={getTextThemeClass(darkTheme)}
                        level={5}
                        style={{ margin: 0 }}
                      >
                        We Are Here
                      </Title>
                    ),
                    content: (
                      <Card className={getCardThemeClass(darkTheme)}>
                        <Row gutter={16} align="middle">
                          <Col xs={24} md={24}>
                            <Image
                              src="/current-role.webp"
                              alt="2024"
                              style={{ width: "100%", borderRadius: "8px" }}
                            />
                          </Col>
                          <Col xs={24} md={24}>
                            <Title
                              level={4}
                              className={getTextThemeClass(darkTheme)}
                            >
                              Current Role
                            </Title>
                            <Paragraph className={getTextThemeClass(darkTheme)}>
                              I'm currently continuing my journey as a Fullstack
                              Engineer focusing on building scalable
                              applications while also maintaining microservices
                              architectures, fullfulling user needs, tackling
                              problems and prioritizing critical component.
                            </Paragraph>
                          </Col>
                        </Row>
                      </Card>
                    ),
                  },
                  {
                    title: (
                      <Title
                        className={getTextThemeClass(darkTheme)}
                        level={5}
                        style={{ margin: 0 }}
                      >
                        The Future?
                      </Title>
                    ),
                    content: (
                      <Card className={getCardThemeClass(darkTheme)}>
                        <Row gutter={16} align="middle">
                          <Col xs={24} md={24}>
                            <Image
                              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                              alt="2024"
                              style={{ width: "100%", borderRadius: "8px" }}
                            />
                          </Col>
                          <Col xs={24} md={24}>
                            <Title
                              level={4}
                              className={getTextThemeClass(darkTheme)}
                            >
                              Where To Next?
                            </Title>
                            <Paragraph className={getTextThemeClass(darkTheme)}>
                              I'm aiming to improve myself not only as engineer
                              but also in management. I'm trying to level up my
                              skill by moving myself toward Project Managements
                              or even becoming Scrum Master.
                            </Paragraph>
                          </Col>
                        </Row>
                      </Card>
                    ),
                  },
                ]}
              />
            </Col>
          </Row>
        </section>

        <section
          id="work"
          style={{
            padding: "48px 24px",
            backgroundColor: darkTheme ? "#141414" : "#f0f2f5",
          }}
        >
          <Title
            level={2}
            style={{ textAlign: "center", color: darkTheme ? "#fff" : "#000" }}
          >
            Work Done
          </Title>
          <Row justify="center" style={{ marginTop: "24px" }} gutter={[16, 16]}>
            {[
              {
                title: "E-commerce Website",
                image:
                  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                title: "Mobile App",
                image:
                  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                title: "API Development",
                image:
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                title: "Database Design",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                title: "DevOps Setup",
                image:
                  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                title: "UI/UX Design",
                image:
                  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
            ].map((work, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Card
                  hoverable
                  className={getCardThemeClass(darkTheme)}
                  cover={
                    <Image
                      alt={work.title}
                      src={work.image}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                >
                  <Card.Meta
                    title={work.title}
                    className={getTextThemeClass(darkTheme)}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Contact Person Section */}
        <section
          id="contact"
          className={getThemeClass(darkTheme)}
          style={{
            padding: "48px 24px",
          }}
        >
          <Title
            className={getTextThemeClass(darkTheme)}
            level={2}
            style={{ textAlign: "center" }}
          >
            Contact Person
          </Title>
          <Row justify="center" style={{ marginTop: "24px" }}>
            <Col xs={24} md={12} lg={8}>
              <Card className={getCardThemeClass(darkTheme)}>
                <Title level={4} className={getTextThemeClass(darkTheme)}>
                  Yonathan Pandapotan
                </Title>
                <Paragraph className={getTextThemeClass(darkTheme)}>
                  <Text strong className={getTextThemeClass(darkTheme)}>
                    Phone:
                  </Text>{" "}
                  +62 895-6105-0590
                </Paragraph>
                <Paragraph className={getTextThemeClass(darkTheme)}>
                  <Text strong className={getTextThemeClass(darkTheme)}>
                    Email:
                  </Text>{" "}
                  why.user.biz@gmail.com
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </section>

        <section
          id="else"
          className={getThemeClass(darkTheme)}
          style={{
            padding: "48px 24px",
          }}
        >
          <Title
            level={2}
            className={getTextThemeClass(darkTheme)}
            style={{ textAlign: "center" }}
          >
            About Something Else
          </Title>
          <Row justify="center" style={{ marginTop: "24px" }} gutter={24}>
            <Col xs={24} md={12}>
              <Image
                src="/hobbies-arknights.webp"
                alt="Something Else"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Col>
            <Col xs={24} md={12}>
              <Card className={getCardThemeClass(darkTheme)}>
                <Title level={4} className={getTextThemeClass(darkTheme)}>
                  I'm An Arknight Enjoyer
                </Title>
                <Paragraph className={getTextThemeClass(darkTheme)}>
                  By the way, i'm an arknights player and enjoyer. I've been
                  playing this game since 2021 and plannig to keep on playing.
                  So if you're interested you could add me in the game.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </section>
      </Content>
    </Layout>
  );
};

export default App;
