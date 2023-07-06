import { List, ListItem, Text } from '@mantine/core';

/**
 * Home page component
 * ====================================
 * @type {NextPage}
 */
export default function Home() {
  return (
    <section className="p-6">
      <h1>Welcome to Medium Clone</h1>
      <span>This is a Medium website clone. Powerd by:</span>
      <List spacing="md" listStyleType="disc" className="my-10">
        <List.Item>Next JS</List.Item>
        <List.Item>Tailwind CSS</List.Item>
        <List.Item>Mantine UI Library</List.Item>
        <List.Item>Netlify</List.Item>
        <List.Item>Datasquirel</List.Item>
      </List>

      <Text className="text-slate-500">And Much More ...</Text>
      <Text className="font-bold">Like for me to complete this project.</Text>
    </section>
  );
}
