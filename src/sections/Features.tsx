// src/sections/Features.tsx
import { Container, Grid, Text, Paper } from "@mantine/core";

const features = [
  {
    emoji: "💻",
    title: "Современные технологии",
    desc: "Актуальные знания по React, TypeScript, Node.js и другим стеку.",
  },
  {
    emoji: "🧠",
    title: "Фокус на практике",
    desc: "Задачи и проекты, приближённые к работе в реальных компаниях.",
  },
  {
    emoji: "🤖",
    title: "Поддержка наставников",
    desc: "Помощь в коде, советы, ревью — не останешься один.",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <h2 className="section-heading">Почему выбирают CodeBoost</h2>
        <Grid gutter="xl">
          {features.map((item, index) => (
            <Grid.Col sm={4} key={index}>
              <Paper p="xl" radius="lg" withBorder className="feature-card">
                <div className="feature-emoji">{item.emoji}</div>
                <h3 className="feature-title">{item.title}</h3>
                <Text className="feature-desc">{item.desc}</Text>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
