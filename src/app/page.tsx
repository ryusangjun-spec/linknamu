import DarkModeToggle from "@/components/DarkModeToggle";
import LinkCardList from "@/components/LinkCardList";
import Profile from "@/components/Profile";
import { LinkItem } from "@/components/LinkCard";

const links: LinkItem[] = [
  { id: "1", label: "블로그", url: "https://example.com/blog" },
  { id: "2", label: "인스타그램", url: "https://instagram.com" },
  { id: "3", label: "깃허브", url: "https://github.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-6 py-12">
      <div className="flex w-full justify-end">
        <DarkModeToggle />
      </div>
      <Profile
        name="김개발"
        bio="풀스택 개발자 : 요즘에는 AI 개발에 관심이 많아요"
        imageUrl="/profile.jpg"
      />
      <LinkCardList links={links} />
    </main>
  );
}
