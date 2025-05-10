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
    <section>
      <Container>
        <h2 className="section-heading">Доступные курсы</h2>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {courses.map((course, index) => (
            <Paper
              key={index}
              p="xl"
              radius="lg"
              withBorder
              className="course-card"
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
                variant="gradient"
                gradient={{ from: "#00c6ff", to: "#0072ff", deg: 45 }}
                radius="xl"
                fullWidth
                mt="md"
                className="button-glow"
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
