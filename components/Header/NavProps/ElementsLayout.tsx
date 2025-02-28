import Link from "next/link";
import { usePathname } from "next/navigation";

type ELProps = {
  MenuData: any;
  menuGrid: string;
  num1: number;
  num2: number;
}

const ElementsLayout = ({ MenuData, menuGrid, num1, num2 }: ELProps) => {

  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <div className="col-lg-4 col-xxl-4 single-mega-item">
      <ul className="mega-menu-item">
        {MenuData &&
          MenuData.menuData.map((data: { menuType: string, menuItems: any}, index: number) => {
            if (data.menuType === menuGrid) {
              const elements = data.menuItems?.map(
                (value: {id: number, link: string; title: string, coming: string, badgeText: string}, innerIndex: number) =>
                  value.id >= num1 &&
                  value.id <= num2 && (
                    <li key={innerIndex}>
                      <Link
                        className={isActive(value.link) ? "active" : ""}
                        href={value.coming ? "/maintenance" : value.link}
                      >
                        {value.title}
                        {value.coming ? (
                          <span className="rbt-badge-card ms-3">
                            {value.coming}
                          </span>
                        ) : value.badgeText ? (
                          <span className="rbt-badge-card ms-3">
                            {value.badgeText}
                          </span>
                        ) : (
                          ""
                        )}
                      </Link>
                    </li>
                  )
              );
              return elements;
            }
          })}
      </ul>
    </div>
  )
}

export default ElementsLayout
