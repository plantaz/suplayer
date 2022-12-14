import { Button, Input, Logo, Text } from "@atoms";

export default function Home() {
  return (
    <div>
      <Logo />
      <Text>Teste</Text>
      <Input type='text' placeholder='teste' />
      <Button>
        <Text>Teste</Text>
      </Button>
    </div>
  );
}
