import Image from "next/image";
import Link from "next/link";
import { signOut, useSession} from "next-auth/react"

import UserData from "@/data/user.json";

const User = () => {

  const { data: session } = useSession()

  // console.log(session)

  // if (!session?.user) return null

  return (
    <>
      <div className="rbt-user-menu-list-wrapper">
        {/* {UserData &&
          UserData.user.map((person: {img: string; name: string; userList: any}, index: number) => ( */}
            <div className="inner">
              <div className="rbt-admin-profile">
                <div className="admin-thumbnail">
                  <Image
                    src="/images/team/avatar.jpg"
                    width={43}
                    height={43}
                    alt="User Images"
                  />
                </div>
                <div className="admin-info">
                  <span className="name">{session?.user?.name}</span>
                  <Link
                    className="rbt-btn-link color-primary"
                    href="/instructor/instructor-profile"
                  >
                    Профайл
                  </Link>
                </div>
              </div>
              {/* <ul className="user-list-wrapper">
                {person.userList.map((list: { link: string; icon: string; text: string}, innerIndex: number) => (
                  <li key={innerIndex}>
                    <Link href={list.link}>
                      <i className={list.icon}></i>
                      <span>{list.text}</span>
                    </Link>
                  </li>
                ))}
              </ul> */}
              {/* <hr className="mt--10 mb--10" />
              <ul className="user-list-wrapper">
                <li>
                  <Link href="#">
                    <i className="feather-book-open"></i>
                    <span>{session?.user?.email}</span>
                  </Link>
                </li>
              </ul> */}
              <hr className="mt--10 mb--10" />
              <ul className="user-list-wrapper">
                <li>
                  <Link href="/instructor/instructor-settings">
                    <i className="feather-settings"></i>
                    <span>Тохиргоо</span>
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={() => signOut({ callbackUrl: '/login', redirect:true })}>
                    <i className="feather-log-out"></i>
                    <span>Гарах</span>
                  </Link>
                </li>
              </ul>
            </div>
          {/* ))} */}
      </div>
    </>
  )
}

export default User