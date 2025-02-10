import { Avatar, Button, Card, Group, Text } from "@mantine/core";

const userData = [
  {
    name: "Bill Headbanger",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    stats: [
      { value: "34K", label: "Followers" },
      { value: "187", label: "Follows" },
      { value: "1.6K", label: "Posts" },
    ],
  },
  {
    name: "Alice Rocker",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    stats: [
      { value: "12K", label: "Followers" },
      { value: "432", label: "Follows" },
      { value: "900", label: "Posts" },
    ],
  },
  {
    name: "Alice Rocker",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    stats: [
      { value: "12K", label: "Followers" },
      { value: "432", label: "Follows" },
      { value: "900", label: "Posts" },
    ],
  }, {
    name: "Alice Rocker",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    stats: [
      { value: "12K", label: "Followers" },
      { value: "432", label: "Follows" },
      { value: "900", label: "Posts" },
    ],
  }, {
    name: "Alice Rocker",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    stats: [
      { value: "12K", label: "Followers" },
      { value: "432", label: "Follows" },
      { value: "900", label: "Posts" },
    ],
  }, {
    name: "Alice Rocker",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    stats: [
      { value: "12K", label: "Followers" },
      { value: "432", label: "Follows" },
      { value: "900", label: "Posts" },
    ],
  }, {
    name: "Alice Rocker",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    stats: [
      { value: "12K", label: "Followers" },
      { value: "432", label: "Follows" },
      { value: "900", label: "Posts" },
    ],
  }, {
    name: "Alice Rocker",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    stats: [
      { value: "12K", label: "Followers" },
      { value: "432", label: "Follows" },
      { value: "900", label: "Posts" },
    ],
  },
];

export function UserCardImage() {
  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {userData.map((user, index) => (
        <Card key={index} withBorder padding="xl" radius="md">
          <Card.Section
            h={140}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
            }}
          />
          <Avatar
            src={user.avatar}
            size={80}
            radius={80}
            mx="auto"
            mt={-30}
          />
          <Text ta="center" fz="lg" fw={500} mt="sm">
            {user.name}
          </Text>
          <Text ta="center" fz="sm" c="dimmed">
            Fullstack engineer
          </Text>
          <Group mt="md" justify="center" gap={30}>
            {user.stats.map((item) => (
              <div key={item.label} className="text-center">
                <Text ta="center" fz="lg" fw={500}>
                  {item.value}
                </Text>
                <Text ta="center" fz="sm" c="dimmed">
                  {item.label}
                </Text>
              </div>
            ))}
          </Group>
          <Button fullWidth radius="md" mt="xl" size="md" variant="default">
            Follow
          </Button>
        </Card>
      ))}
    </div>
  );
}
