import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gray-100 dark:ring-gray-800">
        <Image
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">{bio}</p>
    </div>
  );
}
