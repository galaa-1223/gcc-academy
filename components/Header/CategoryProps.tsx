import Link from 'next/link'

type CProps = {
  title: string;
  CategoryData: any;
  CategoryNum: any;
  isActive: boolean;
}

const CategoryProps = ({ title, CategoryData, CategoryNum, isActive }: CProps ) => {
  return (
    <li className={`dropdown-parent-list ${isActive ? "active" : ""}`}>
      <Link href="#">{title}</Link>
      <div className="dropdown-child-wrapper">
        <div className="child-inner">
          {CategoryData &&
            CategoryNum.map((cate: { link: string, text: string}, index: number) => (
              <div className="dropdown-child-list" key={index}>
                <Link href={cate.link}>{cate.text}</Link>
              </div>
            ))}
        </div>
      </div>
    </li>
  )
}

export default CategoryProps
