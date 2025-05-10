// src/sections/Testimonials.tsx
import { Container, Grid, Paper, Text, Avatar, Group } from "@mantine/core";

const reviews = [
  {
    name: "Мария",
    city: "Москва",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80&fit=facearea&facepad=3",
    comment:
      "Курс по React был невероятно полезен! Всё чётко, по делу, с практикой. Наставник помогал, когда было непонятно.",
    rating: "★★★★★",
  },
  {
    name: "Игорь",
    city: "Санкт-Петербург",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=60&q=80&fit=facearea&facepad=3",
    comment:
      "Прошёл JS-интенсив и наконец понял замыкания и промисы. Спасибо за структурированный подход!",
    rating: "★★★★★",
  },
  {
    name: "Светлана",
    city: "Спб",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=60&q=80&fit=facearea&facepad=3",
    comment:
      "Очень крутой курс! Удобный формат, всё онлайн, задания приближены к реальности. Чувствую уверенность!",
    rating: "★★★★☆",
  },
];

const Testimonials = () => {
  return (
    <section>
      <Container>
        <h2 className="section-heading">Отзывы студентов</h2>

        <Grid gutter="xl">
          {reviews.map((review, index) => (
            <Grid.Col sm={4} key={index}>
              <Paper p="xl" radius="lg" withBorder className="testimonial-card">
                <Group spacing="md" align="center">
                  <Avatar src={review.avatar} radius="xl" size={48} />
                  <div>
                    <Text className="testimonial-name">{review.name}</Text>
                    <Text size="sm" className="testimonial-city">
                      {review.city}
                    </Text>
                  </div>
                </Group>

                <Text size="sm" className="testimonial-comment">
                  “{review.comment}”
                </Text>

                <Text className="testimonial-rating">{review.rating}</Text>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Testimonials;
