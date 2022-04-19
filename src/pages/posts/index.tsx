import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
    return(
        <>
        <Head>
            <title>Spotted Love Posts | LoveBattleships</title>
        </Head>

        <main>
            <div>
                <a>
                    <time>17 de Abril de 2021</time>
                    <strong>Why I started love my best friend</strong>
                    <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.</p>
                </a>
            </div>
        </main>
        </>
    )
}