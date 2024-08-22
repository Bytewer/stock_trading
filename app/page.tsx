import { Button } from "@/components/ui/button";
import { TVChartContainer } from "@/components/tv/tv";
import { ResolutionString } from "@/public/charting_library/charting_library";

export default function Home() {
  return (
    <div className="flex-1 ">
      <TVChartContainer
        symbol="6000"
        library_path="/charting_library/"
        locale="zh"
        autosize={true}
        interval={"1d" as ResolutionString}
      />
    </div>
  );
}
