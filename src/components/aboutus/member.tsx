import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  socialId: string;
  link: string;
  role: string;
};

const Member: React.FC<Props> = ({ id, name, socialId, link, role }) => {
  return (
    <div>
      <Image
        src={`/assets/team/team_face_${id}.png`}
        width={1366}
        height={1555}
        alt={`${name}`}
      ></Image>
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className=" text-lg font-light mb-2">
        <Link href={link} target="_blank">
          {socialId}
        </Link>
      </div>
      <div className="text-xl">{role}</div>
    </div>
  );
};

export default Member;
