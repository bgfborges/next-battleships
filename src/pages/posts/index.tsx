import { GetStaticProps } from 'next';
import Head from 'next/head';
import { client } from '../../services/prismic';
import styles from './styles.module.scss';
import { RichText } from 'prismic-dom';
import Link from 'next/link';

type Post = {
    slug: string;
    featured: string;
    title: string;
    excerpt: string;
    updatedAt: string; 
}

interface PostsProps {
    posts: Post[];
}

export default function Posts( { posts }: PostsProps ) {
 return (
    <>
        <Head>
            <title>Spotted Posts | Love Battleships</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                { posts.map( post => (
                    <Link href={`/posts/${post.slug}`} key={post.slug}>
                        <a>
                            <time>{ post.updatedAt }</time>
                            <strong>{ post.title }</strong>
                            <p>{post.excerpt}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </main>
    </>
 );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = client;
    
    const documents = await prismic.getAllByType('post', {
        fetch: ['post.title', 'post.content', 'post.featured'],
        pageSize: 100
    });

    const posts = documents.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find( content => content.type === 'paragraph')?.text ?? ' ',
            updatedAt: new Date( post.last_publication_date ).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: {
            posts: posts
        }
    }
}