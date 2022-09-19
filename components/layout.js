import {useRouter} from "next/router";

const Layout = ({children}) => {
    const router = useRouter();

    return (
        <>
            <div className="content-wrapper py-2 px-2">
                {router.route === '/' ? children
                    : children}
            </div>
        </>
    );
}

export default Layout;
