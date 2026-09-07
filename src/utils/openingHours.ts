type Period = {
  days: number[];
  opens?: string;
  closes?: string;
};

export function groupPeriodsByDays(periods: Period[]) {
  return Object.values(
    periods.reduce((acc, period) => {
      const key = period.days.join(",");

      if (!acc[key]) {
        acc[key] = {
          days: period.days,
          periods: [],
        };
      }

      acc[key].periods.push({
        opens: period.opens,
        closes: period.closes,
      });

      return acc;
    }, {} as Record<
      string,
      {
        days: number[];
        periods: { opens?: string; closes?: string }[];
      }
    >)
  );
}