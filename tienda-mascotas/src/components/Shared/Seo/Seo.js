import Head from "next/head";

export function Seo(props) {
    const { title = "Tienda Mascotas", description = "Los mejores alimentos para tus mascotas, a un precio competitivo." } = props;

    return (
        <Head>
            <title>{title}</title>
            <meta property="description" content= {description} />
        </Head>
    )
}