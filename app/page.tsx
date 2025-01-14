import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Next.js Starter App!</h1>
        <p className={styles.description}>
          Get started by editing <code>app/page.tsx</code>
        </p>
      </main>
    </div>
  );
}
