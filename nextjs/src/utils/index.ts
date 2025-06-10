export function calculateDateByDays(
  daysDifference: number,
  operator: "+" | "-" = "+"
) {
  const today = new Date();

  const date = new Date(today);
  date.setDate(
    operator === "+"
      ? today.getDate() + daysDifference
      : today.getDate() - daysDifference
  );

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
