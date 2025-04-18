import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>mentalmentor 心理饅頭</title>
        <meta name="description" content="簡約、溫暖的心理師媒合平台" />
      </Head>
      <main className="min-h-screen bg-white flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-primary">mentalmentor 心理饅頭</h1>
        <p className="text-lg text-gray-700">簡約、溫暖、溫柔、感性的心理師媒合平台</p>
      </main>
    </>
  );
}
