import Image from "next/image";
import styles from "./page.module.css";
import { getGlobal } from '@platformatic/globals'

export default async function Home() {
  'use server';

  const platformatic = getGlobal()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={platformatic.basePath + "/images/next.svg"}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className={styles.title}>Welcome to Next.js + Platformatic!</h1>
        <h3>Coming from the "basic" Node.js server</h3>
        <div className={styles.ctas}>
          {(await (await fetch("http://node.plt.local/", { cache: 'no-store' })).json()).content}
        </div>
        <h3>Coming from Fastify</h3>
        <div className={styles.ctas}>
          {(await (await fetch("http://fastify.plt.local/", { cache: 'no-store' })).json()).content}
        </div>
      </main>
    </div>
  );
}
