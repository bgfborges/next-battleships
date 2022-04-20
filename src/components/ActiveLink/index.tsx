import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps {
    children: string;
    path: string;
}

export function ActiveLink({children, path}) {
    const { asPath } = useRouter();

    const activeClassName = asPath === path
    ? 'active'
    : '';

    return(
    <li className={activeClassName}>
        <Link href={path}>
            <a>{children}</a>
        </Link>
    </li>
    );
}