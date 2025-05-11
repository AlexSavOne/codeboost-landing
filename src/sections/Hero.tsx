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
    <section className="hero">
      <Container size="lg" className="container">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div className="hero-content">
            <Text className="hero-badge" size="sm">
              Новый курс 2025
            </Text>

            <div className="hero-text-wrapper">
              <Title className="hero-title">Прокачай свои IT‑навыки</Title>
              <Text className="hero-subtitle">
                Онлайн‑курсы от экспертов. Учись в удобное время, в любом месте.
              </Text>
            </div>

            <Button
              className="hero-button button-glow"
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: "#00c6ff", to: "#0072ff", deg: 45 }}
            >
              Начать обучение
            </Button>
          </div>

          <Image
            className="hero-image"
            src="/images/hero.jpg"
            alt="Образование"
          />
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Hero;
