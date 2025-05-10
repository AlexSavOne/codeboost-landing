// src/components/Footer.tsx
import {
  Container,
  Group,
  Text,
  Anchor,
  Stack,
  ActionIcon,
  Flex,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Flex
          justify="space-between"
          align="flex-start"
          direction={{ base: "column", sm: "row" }}
          gap="xl"
        >
          <Stack spacing={6}>
            <Text className="footer-text">
              &copy; {new Date().getFullYear()} CodeBoost. Все права защищены.
            </Text>
            <Text className="footer-author">Created by AlexSavOne</Text>
          </Stack>

          <Stack spacing={10} align={{ base: "flex-start", sm: "flex-end" }}>
            <Group spacing="md">
              <Anchor href="#" className="footer-link">
                Политика конфиденциальности
              </Anchor>
              <Anchor href="#" className="footer-link">
                Поддержка
              </Anchor>
            </Group>

            <Group spacing="sm">
              <ActionIcon
                variant="light"
                size="lg"
                color="cyan"
                component="a"
                href="#"
              >
                <IconBrandGithub size="1.2rem" />
              </ActionIcon>
              <ActionIcon
                variant="light"
                size="lg"
                color="cyan"
                component="a"
                href="#"
              >
                <IconBrandTelegram size="1.2rem" />
              </ActionIcon>
              <ActionIcon
                variant="light"
                size="lg"
                color="cyan"
                component="a"
                href="#"
              >
                <IconBrandYoutube size="1.2rem" />
              </ActionIcon>
            </Group>
          </Stack>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
