// src/sections/Pricing.tsx
import { Button, Container, Paper, Text, Group } from "@mantine/core";

const plans = [
  {
    name: "Базовый",
    price: "0₽",
    features: ["Демо-доступ на 3 дня", "1 курс", "Без поддержки"],
    gradient: "linear-gradient(135deg, #2d2d44, #3e3e5e)",
  },
  {
    name: "Профи",
    price: "2 990₽",
    features: ["Все курсы", "Чат с наставником", "Сертификат"],
    gradient: "linear-gradient(135deg, #304352, #d7d2cc)",
  },
  {
    name: "Максимум",
    price: "4 990₽",
    features: ["Всё из Профи", "Индивидуальная проверка", "Карьерный трек"],
    gradient: "linear-gradient(135deg, #42275a, #734b6d)",
  },
];

const Pricing = () => {
  return (
    <section>
      <Container>
        <h2 className="section-heading">Тарифы и цены</h2>

        <Group
          position="center"
          spacing="xl"
          align="stretch"
          style={{ flexWrap: "wrap" }}
        >
          {plans.map((plan, index) => (
            <Paper
              key={index}
              p="xl"
              radius="lg"
              withBorder
              className="pricing-card"
              style={{ background: plan.gradient }}
            >
              <div>
                <h3 className="pricing-title">{plan.name}</h3>
                <Text size="xl" weight={700} className="pricing-price">
                  {plan.price}
                </Text>
                <ul className="pricing-features">
                  {plan.features.map((f, i) => (
                    <li key={i} className="pricing-feature">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                mt="md"
                radius="xl"
                fullWidth
                variant="gradient"
                gradient={{ from: "#00c6ff", to: "#0072ff", deg: 45 }}
                className="button-glow"
              >
                Выбрать
              </Button>
            </Paper>
          ))}
        </Group>
      </Container>
    </section>
  );
};

export default Pricing;
