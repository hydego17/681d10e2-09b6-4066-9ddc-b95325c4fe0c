import { DayJsClient } from "./dayjs-client";
import { DayJsServer } from "./dayjs-server";

export function DayJsProvider() {
  return (
    <>
      <DayJsServer />
      <DayJsClient />
    </>
  );
}
