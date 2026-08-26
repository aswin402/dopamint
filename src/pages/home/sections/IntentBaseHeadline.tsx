interface IntentBaseHeadlineProps {
  baseLogoSrc: string;
}

export function IntentBaseHeadline({ baseLogoSrc }: IntentBaseHeadlineProps) {
  return (
    <span
      aria-label="Intent-Based Agents"
      className="block font-serif italic font-bold text-[#55604e]"
    >
      <span aria-hidden="true" className="whitespace-nowrap">
        Intent-
        <img
          src={baseLogoSrc}
          alt=""
          className="mx-[0.025em] inline-block h-[0.56em] w-auto align-[-0.04em]"
        />
        d Agents
      </span>
    </span>
  );
}
