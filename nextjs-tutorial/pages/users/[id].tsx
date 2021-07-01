import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout/layout";

export default function Dashboard() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout pageTitle='Dashboard page'>
            <p>
                Dashboard Page
                {id}
            </p>
        </Layout>
    )
}