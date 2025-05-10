// src/sections/Hero.tsx
import {
  Button,
  Container,
  Text,
  Title,
  SimpleGrid,
  Image,
} from "@mantine/core";

const Hero = () => {
  return (
    <section>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" verticalSpacing="xl">
          <div style={{ textAlign: "left" }}>
            <Text
              size="sm"
              style={{
                textTransform: "uppercase",
                color: "#00c6ff",
                letterSpacing: "2px",
                marginBottom: "0.8rem",
              }}
            >
              Новый курс 2025
            </Text>

            <Title
              order={1}
              style={{
                fontSize: "3.4rem",
                fontWeight: 900,
                color: "white",
                textShadow: "0 0 20px rgba(0, 198, 255, 0.4)",
                marginBottom: "1rem",
              }}
            >
              Прокачай свои IT‑навыки
            </Title>

            <Text size="lg" style={{ marginBottom: "2rem", color: "#d0d0d0" }}>
              Онлайн‑курсы от экспертов. Учись в удобное время, в любом месте.
            </Text>

            <Button
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: "#00c6ff", to: "#0072ff", deg: 45 }}
              style={{
                fontWeight: 600,
                boxShadow: "0 0 18px rgba(0, 198, 255, 0.4)",
              }}
            >
              Начать обучение
            </Button>
          </div>

          <Image
            src="/images/hero.jpg"
            alt="Образование"
            radius="lg"
            style={{ boxShadow: "0 0 30px rgba(0, 255, 255, 0.15)" }}
          />
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Hero;
