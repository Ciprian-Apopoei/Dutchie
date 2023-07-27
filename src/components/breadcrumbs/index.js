import Styles from "./Breadcrumbs.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Breadcrumbs() {
  const router = useRouter();
  const { pathname } = router;

  console.log("pathname", router);
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  function getTag(segment) {
    let tagTitle = segment.replaceAll("-", " ");

    return tagTitle;
  }

  return (
    <div className={Styles.breadCrumbsWrapper}>
      <div className="container">
        <div className={Styles.breadCrumbs}>
          <Link className={Styles.breadCrumbs__link} href="/">
            Home
          </Link>

          {pathSegments.map((segment, index) => (
            <Link
              key={index}
              href={`/${pathSegments.slice(0, index + 1).join("/")}`}
              className={Styles.breadCrumbs__link}
            >
              {getTag(segment)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
