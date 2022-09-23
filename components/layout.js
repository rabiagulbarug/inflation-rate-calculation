import {useRouter} from "next/router";

const Layout = ({children}) => {
    const router = useRouter();

    return (
        <div>
            <div className="content-wrapper">
                {router.route === '/' ? children
                    : children}
            </div>
        </div>
    );
}

export default Layout;
