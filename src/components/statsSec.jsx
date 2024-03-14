import { useIntersectionObserver } from "@/hooks";
import CountUp from "react-countup";

export default function StatsSection() {
  const [activeSec, ref] = useIntersectionObserver();
  return (
    <>
      <div id="stats" ref={ref.home} className="border-t border-muted m-10 ">
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-16 pt-16">
          <div className="flex items-center gap-4">
            <span className="text-3xl">
              {activeSec === "stats" && (
                <CountUp start={0} end={324} duration={1} />
              )}
              {/* 324 */}
              <span className="text-[#5956E8]">+</span>
            </span>
            <span className="text-muted">
              CLIENTS <br /> WORLDWIDE
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl">
              {activeSec === "stats" && (
                <CountUp start={0} end={975} duration={1} />
              )}
              <span className="text-[#FF1850]">+</span>
            </span>

            <span className="text-muted">
              PROJECTS <br /> COMPLETED
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl">
              {activeSec === "stats" && (
                <CountUp start={0} end={25} duration={1} />
              )}
              <span className="text-[#FFDC60]">+</span>
            </span>
            <span className="text-muted">
              TEAM <br /> MEAMBERS
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl">
              {activeSec === "stats" && (
                <CountUp start={0} end={8} duration={3} />
              )}
              m<span className="text-[#38E55E]">+</span>
            </span>
            <span className="text-muted">
              REVENUE <br /> GENERATED
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
