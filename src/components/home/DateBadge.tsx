type DateBadgeProps = {
  date: string; // ISO
};

export function DateBadge({ date }: DateBadgeProps) {
  const d = new Date(date);
  const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const day = d.getDate().toString();

  return (
    <div className="flex h-12 w-12 shrink-0 flex-col overflow-hidden rounded-md border bg-white text-center shadow-sm border-[rgba(27,51,128,0.08)]">
      <div className="bg-[rgba(27,51,128,0.06)] px-1 py-0.5 text-[11px] font-medium leading-none tracking-wide text-[#545E6B]">
        {month}
      </div>
      <div className="flex flex-1 items-center justify-center text-[18px] font-medium leading-none text-[#1B3380]">
        {day}
      </div>
    </div>
  );
}
