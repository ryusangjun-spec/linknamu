export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

type LinkCardProps = LinkItem & {
  clickCount: number;
  onClickLink?: () => void;
};

export default function LinkCard({
  label,
  url,
  clickCount,
  onClickLink,
}: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClickLink}
      className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
    >
      <span />
      <span className="text-center font-medium">{label}</span>
      <span className="justify-self-end text-xs text-gray-400 dark:text-gray-500">
        {clickCount}회
      </span>
    </a>
  );
}
