import Layout from "../../components/layout/layout";

export default function Users(props: { dataUser: any; }) {
    const { dataUser } = props;

    return (
        <Layout pageTitle='User Page'>
            {dataUser.map((key: any) => (
                <>
                    <p>{key.name}</p>
                    <p>{key.email}</p>
                </>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUser = await res.json();
    return {
        props: {
            dataUser,
        }
    }
};