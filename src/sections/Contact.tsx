// src/sections/Contact.tsx
import {
  Button,
  Container,
  TextInput,
  Textarea,
  Title,
  Text,
  Paper,
} from "@mantine/core";

const Contact = () => {
  return (
    <section>
      <Container size="sm">
        <Title order={2} className="section-title">
          Остались вопросы?
        </Title>

        <Text size="lg" className="section-subtitle">
          Оставьте заявку — мы свяжемся с вами и подскажем, с чего начать.
        </Text>

        <Paper p="xl" radius="lg" withBorder className="contact-paper">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Форма отправлена 🚀");
            }}
          >
            <TextInput
              label="Ваше имя"
              placeholder="Иван"
              required
              radius="md"
              size="md"
              styles={{
                label: { color: "#cfd8dc" },
                input: {
                  backgroundColor: "#1e1e2f",
                  color: "white",
                  borderColor: "#555",
                },
              }}
              mb="md"
            />

            <TextInput
              label="Email"
              placeholder="you@example.com"
              required
              radius="md"
              size="md"
              styles={{
                label: { color: "#cfd8dc" },
                input: {
                  backgroundColor: "#1e1e2f",
                  color: "white",
                  borderColor: "#555",
                },
              }}
              mb="md"
            />

            <Textarea
              label="Сообщение"
              placeholder="Хочу узнать подробнее о курсах..."
              minRows={4}
              radius="md"
              styles={{
                label: { color: "#cfd8dc" },
                input: {
                  backgroundColor: "#1e1e2f",
                  color: "white",
                  borderColor: "#555",
                },
              }}
              mb="md"
            />

            <Button
              type="submit"
              fullWidth
              size="md"
              radius="xl"
              variant="gradient"
              gradient={{ from: "#00c6ff", to: "#0072ff", deg: 45 }}
              className="button-glow"
            >
              Отправить заявку
            </Button>
          </form>
        </Paper>
      </Container>
    </section>
  );
};

export default Contact;
