import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'


export default function Index() {
    return <MainLayout title={'Home Page'}>
        <h1>Hello Next.js</h1>
        <p>lorem seven</p>
        <p><Link href={'about'}><a>a</a></Link></p>
        <p><Link href={'posts'}><a>p</a></Link></p>
    </MainLayout>
}