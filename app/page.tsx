import { Container, Text, Title } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <Container size="sm" py="xl">
      <Title ta="center">Mantine View</Title>
      <Text c="dimmed" ta="center" mt="md" mb="xl">
        Mantine の導入確認用ページです。
      </Text>
      <ColorSchemeToggle />
    </Container>
  );
}
