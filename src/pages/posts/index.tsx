import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
 return (
    <>
        <Head>
            <title>Spotted Posts | Love Battleships</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time>15 de abril de 2022</time>
                    <strong>Lipsum generator: Lorem Ipsum - All the facts</strong>
                    <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.</p>
                </a>
                <a href="#">
                    <time>15 de abril de 2022</time>
                    <strong>Lipsum generator: Lorem Ipsum - All the facts</strong>
                    <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.</p>
                </a>
                <a href="#">
                    <time>15 de abril de 2022</time>
                    <strong>Lipsum generator: Lorem Ipsum - All the facts</strong>
                    <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.</p>
                </a>
            </div>
        </main>
    </>
 );
}