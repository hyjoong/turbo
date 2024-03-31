import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Code>web project</Code>
      <Card title='app title' href='/'>
        card content
      </Card>
      <Button>Click me</Button>
    </main>
  );
}
