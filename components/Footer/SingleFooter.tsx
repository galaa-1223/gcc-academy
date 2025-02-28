import Link from "next/link";

type SingleFooterType = {
  classOne: string;
  title: string;
  footerType: any;
}

const SingleFooter = ({ classOne, title, footerType }: SingleFooterType) => {
  return (
    <div className={classOne}>
      <div className="footer-widget">
        <h5 className="ft-title">{title}</h5>
        <ul className="ft-link">
          {footerType.map((value: { link: string; text: string}, innerIndex: number) => (
            <li key={innerIndex}>
              <Link href={value.link}>{value.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SingleFooter
