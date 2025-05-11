// src/sections/Courses.tsx
import {
  Container,
  Title,
  Text,
  Button,
  Paper,
  SimpleGrid,
} from "@mantine/core";

const courses = [
  {
    title: "React + TypeScript",
    desc: "Создание интерфейсов, хуки, роутинг, работа с API.",
    duration: "6 недель",
  },
  {
    title: "Основы Frontend",
    desc: "HTML, CSS, JS — идеальный старт для новичка.",
    duration: "4 недели",
  },
  {
    title: "Продвинутый JavaScript",
    desc: "Асинхронность, паттерны, оптимизация кода.",
    duration: "5 недель",
  },
];

const Courses = () => {
  return (
    <section className="courses">
      <Container size="lg" className="container">
        <Title order={2} className="section-heading">
          <span>Доступные курсы</span>
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {courses.map((course, index) => (
            <Paper
              key={index}
              className="course-card"
              p="xl"
              radius="lg"
              withBorder
            >
              <div>
                <Title order={4} className="course-title">
                  {course.title}
                </Title>
                <Text className="course-desc">{course.desc}</Text>
                <Text size="sm" className="course-duration">
                  ⏱ Длительность: {course.duration}
                </Text>
              </div>

              <Button
                className="button-glow"
                variant="gradient"
                gradient={{ from: "#00c6ff", to: "#0072ff", deg: 45 }}
                radius="xl"
                fullWidth
                mt="md"
              >
                Подробнее
              </Button>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Courses;
