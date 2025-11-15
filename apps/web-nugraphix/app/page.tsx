'use client';

import {
  Button,
  Text,
  Heading,
  Card,
  TextField,
  Checkbox,
  Textarea,
  Switch,
  Avatar,
  Spinner,
  Flex,
  Stack,
  Container,
  Select,
} from "@nugraphix/ui";


export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Container width="lg">
        <Stack gap={4}>
          <Heading level={1} align="center">
            NuGraphix UI Library
          </Heading>

          <Text align="center" variant="muted">
            Atoms & molecules shared across all NuGraphix projects.
          </Text>

          <Flex gap={3} align="center" justify="center">
            <Avatar name="Marc Ive" />
            <Avatar name="Nu Graphix" size="sm" />
            <Avatar
              name="Demo User"
              size="lg"
              src="https://i.pravatar.cc/100?img=3"
            />
          </Flex>

          <Flex gap={3} align="center" justify="center">
            <Spinner size="sm" />
            <Spinner />
            <Spinner size="lg" />
          </Flex>

          <Card padding="lg" className="space-y-4">
            <Heading level={3}>Project Settings</Heading>

            <Stack gap={2}>
              <TextField
                label="Project name"
                placeholder="NuGraphix Monorepo"
                required
              />

              <Select defaultValue="dev">
                <option value="dev">Development</option>
                <option value="staging">Staging</option>
                <option value="prod">Production</option>
              </Select>

              <Textarea
                placeholder="Describe this environment…"
                size="sm"
              />

              <Switch
                label="Enable maintenance mode"
              />
              <Checkbox
                label="I understand that this affects live users"
              />
            </Stack>

            <Flex justify="end" gap={2}>
              <Button variant="ghost">Cancel</Button>
              <Button>Save changes</Button>
            </Flex>
          </Card>

          <Text variant="caption" align="center">
            © {new Date().getFullYear()} NuGraphix
          </Text>
        </Stack>
      </Container>
    </main>
  );
}
