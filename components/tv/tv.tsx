"use client";
import { useEffect, useRef } from "react";
import {
  TradingTerminalWidgetOptions,
  LanguageCode,
  ResolutionString,
  widget,
} from "@/public/charting_library";
import { CustomDataFeed, CustomSaveLoadAdapter } from "./datafee";
export const TVChartContainer = (props: Partial<TradingTerminalWidgetOptions>) => {
  const chartContainerRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    const widgetOptions: TradingTerminalWidgetOptions = {
      symbol: props.symbol,
      datafeed: new CustomDataFeed(),
      save_load_adapter: new CustomSaveLoadAdapter(),
      interval: props.interval as ResolutionString,
      container: chartContainerRef.current,
      library_path: props.library_path,
      locale: props.locale as LanguageCode,
      disabled_features: [
        "use_localstorage_for_settings",
        "adaptive_logo",
        "add_to_watchlist",
        "open_account_manager",
        "trading_notifications",
        "multiple_watchlists",
        "always_pass_called_order_to_modify",
        "trading_account_manager",
        "right_toolbar",
        "order_panel",
        "order_info",
        "show_order_panel_on_start",
        "order_panel_close_button",
        "chart_hide_close_order_button",
      ],
      enabled_features: [
        "study_templates",
        "show_object_tree",
        "dom_widget",
        "hide_right_toolbar",
        "hide_right_toolbar_tabs",
        "items_favoriting",
        "chart_template_storage",
        "snapshot_trading_drawings",
        "left_toolbar",
      ],
      charts_storage_url: props.charts_storage_url,
      charts_storage_api_version: props.charts_storage_api_version,
      client_id: props.client_id,
      user_id: props.user_id,
      fullscreen: props.fullscreen,
      autosize: props.autosize,
    };
    const tvWidget = new widget(widgetOptions);
    tvWidget.onChartReady(() => {
      tvWidget.headerReady().then(() => {
        const button = tvWidget.createButton();
        button.setAttribute("title", "Click to show a notification popup");
        button.classList.add("apply-common-tooltip");
        button.addEventListener("click", () => {
          tvWidget.showNoticeDialog({
            title: "Notification",
            body: "cha id",
            callback: () => {
              console.log("notice");
            },
          });
        });
        button.innerHTML = "check api";
      });
    });
    return () => {
      tvWidget.remove();
    };
  }, [props]);
  return (
    <>
      <div ref={chartContainerRef} className="h-full w-dvw"></div>
    </>
  );
};
