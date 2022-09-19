import Layout from "../components/layout";
import {useAuth} from "../hooks/use-auth";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home() {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/auth');
        }
    }, [user]);

    return (
        <Layout/>
    );
}
