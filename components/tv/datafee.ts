import {
  DatafeedConfiguration,
  HistoryCallback,
  LibrarySymbolInfo,
  PeriodParams,
  ResolutionString,
  ResolveCallback,
  DatafeedErrorCallback,
  SearchSymbolsCallback,
  SubscribeBarsCallback,
  SymbolResolveExtension,
  GetMarksCallback,
  TimescaleMark,
  ServerTimeCallback,
  Mark,
  IExternalDatafeed,
  IDatafeedChartApi,
  DOMCallback,
  OnReadyCallback,
  IExternalSaveLoadAdapter,
  ChartData,
  ChartMetaInfo,
  ChartTemplate,
  ChartTemplateContent,
  LineToolsAndGroupsLoadRequestContext,
  LineToolsAndGroupsLoadRequestType,
  LineToolsAndGroupsState,
  StudyTemplateData,
  StudyTemplateMetaInfo,
  IDatafeedQuotesApi,
  QuotesCallback,
  QuotesErrorCallback,
  IBasicDataFeed,
  SearchSymbolResultItem,
  Bar,
} from "@/public/charting_library";
// import { subscribeOnStream, unsubscribeFromStream } from "./streaming";
import { v4 as uuidv4 } from "uuid";
const lastBarsCache = new Map<string, any>();
const configurationData: DatafeedConfiguration = {
  supported_resolutions: [
    "IT" as ResolutionString,
    "5T" as ResolutionString,
    "100T" as ResolutionString, //tick
    "1S" as ResolutionString,
    "2S" as ResolutionString,
    "100S" as ResolutionString, // second
    "1" as ResolutionString,
    "2" as ResolutionString,
    "100" as ResolutionString, // minute
    "60" as ResolutionString,
    "120" as ResolutionString,
    "240" as ResolutionString, //hour
    "1D" as ResolutionString,
    "2D" as ResolutionString,
    "100D" as ResolutionString, //day
    "1W" as ResolutionString,
    "2W" as ResolutionString,
    "240W" as ResolutionString, //week
    "1M" as ResolutionString,
    "2M" as ResolutionString,
    "100M" as ResolutionString, //month
    "12M" as ResolutionString,
    "24M" as ResolutionString,
    "48M" as ResolutionString, //year
  ],
  exchanges: [
    { value: "", name: "所有市场", desc: "所有市场" },
    { value: "sh", name: "上海", desc: "上海" },
  ],
  symbols_types: [
    {
      name: "所有类型",
      value: "",
    },
    {
      name: "A股票",
      value: "stock",
    },
  ],
  supports_marks: true,
  supports_time: true,
};
export class CustomDataFeed implements IDatafeedChartApi, IExternalDatafeed, IDatafeedQuotesApi {
  getQuotes(
    symbols: string[],
    onDataCallback: QuotesCallback,
    onErrorCallback: QuotesErrorCallback
  ): void {
    console.log("[getQuotes]:symbols:", symbols);
  }
  subscribeQuotes(
    symbols: string[],
    fastSymbols: string[],
    onRealtimeCallback: QuotesCallback,
    listenerGUID: string
  ): void {
    console.log("[subscribeQuotes]:listenerGUID:", listenerGUID);
  }
  unsubscribeQuotes(listenerGUID: string): void {
    console.log("[unsubscribeQuotes]:listenerGUID:", listenerGUID);
  }
  onReady(callback: OnReadyCallback): void {
    console.log("[onReady]");
    setTimeout(() => {
      callback(configurationData);
    });
  }
  getMarks(
    symbolInfo: LibrarySymbolInfo,
    from: number,
    to: number,
    onDataCallback: GetMarksCallback<Mark>,
    resolution: ResolutionString
  ): void {
    console.log("[getMarks]");
    onDataCallback([
      {
        id: 1,
        time: to,
        color: "red",
        text: "this is the mark pop-up text",
        label: "m",
        labelFontColor: "blue",
        minSize: 25,
      },
    ]);
  }
  getTimescaleMarks(
    symbolInfo: LibrarySymbolInfo,
    from: number,
    to: number,
    onDataCallback: GetMarksCallback<TimescaleMark>,
    resolution: ResolutionString
  ): void {
    console.log("[getTimescaleMarks]");
    let marks: TimescaleMark[] = [];
    marks = [
      {
        id: 1,
        time: from,
        color: "red",
        label: "as",
        tooltip: ["lorem", "lpsum"],
      },
    ];
    onDataCallback(marks);
  }
  getServerTime(callback: ServerTimeCallback): void {
    callback(new Date().getTime() / 1000);
  }
  searchSymbols(
    userInput: string,
    exchange: string,
    symbolType: string,
    onResult: SearchSymbolsCallback
  ): void {
    console.log("[searchSymbols]");
    const symbols: SearchSymbolResultItem[] = [
      {
        symbol: "600000",
        description: "上证",
        exchange: "sh",
        type: "stock",
      },
    ];
    onResult(symbols);
  }
  resolveSymbol(
    symbolName: string,
    onResolve: ResolveCallback,
    onError: DatafeedErrorCallback,
    extension?: SymbolResolveExtension
  ): void {
    const symbols: SearchSymbolResultItem[] = [
      {
        symbol: "600000",
        description: "上证",
        exchange: "sh",
        type: "stock",
      },
    ];
    let sym;
    if (symbols) {
      sym = symbols[0];
      let sd: LibrarySymbolInfo = {
        name: sym.description,
        description: sym.description,
        type: sym.type,
        session: "1700-0200",
        exchange: sym.exchange,
        listed_exchange: "",
        timezone: "Asia/Shanghai",
        format: "price",
        pricescale: 8,
        minmov: 1,
      };
      setTimeout(() => {
        onResolve(sd);
      });
    } else {
      onError("cannot resolve symbol");
      return;
    }
  }
  getBars(
    symbolInfo: LibrarySymbolInfo,
    resolution: ResolutionString,
    periodParams: PeriodParams,
    onResult: HistoryCallback,
    onError: DatafeedErrorCallback
  ): void {
    const { from, to, firstDataRequest } = periodParams;
    if (from < 1684368000) {
      onResult([], { noData: true });
      return;
    }
    let bars: Bar[] = [
      {
        time: 1717778616000,
        open: 47.08,
        high: 49.08,
        close: 46.08,
        low: 46.08,
      },
    ];
    onResult(bars);
  }
  subscribeBars(
    symbolInfo: LibrarySymbolInfo,
    resolution: ResolutionString,
    onTick: SubscribeBarsCallback,
    listenerGuid: string,
    onResetCacheNeededCallback: () => void
  ): void {
    console.log("[subscribeBars]");
  }
  unsubscribeBars(listenerGuid: string): void {
    console.log("[unsubscribeBars]");
  }
  getVolumeProfileResolutionForPeriod(
    currentResolution: ResolutionString,
    from: number,
    to: number,
    symbolInfo: LibrarySymbolInfo
  ): ResolutionString {
    // 获取时间段的毫秒数
    const periodMs = to - from;

    // 根据时间段和当前分辨率计算成交量分布图分辨率
    if (periodMs < 60 * 1000) {
      // 小于 1 分钟
      return "1" as ResolutionString; // 使用 1 秒分辨率
    } else if (periodMs < 60 * 60 * 1000) {
      // 小于 1 小时
      return "5" as ResolutionString; // 使用 5 秒分辨率
    } else if (periodMs < 24 * 60 * 60 * 1000) {
      // 小于 1 天
      return "15" as ResolutionString; // 使用 15 秒分辨率
    } else if (periodMs < 7 * 24 * 60 * 60 * 1000) {
      // 小于 1 周
      return "60" as ResolutionString; // 使用 1 分钟分辨率
    } else {
      // 大于 1 周
      return "D" as ResolutionString; // 使用日线分辨率
    }
  }
}
export class CustomSaveLoadAdapter implements IExternalSaveLoadAdapter {
  getAllCharts(): Promise<ChartMetaInfo[]> {
    //   throw new Error("Method not implemented.");

    return Promise.resolve([]);
  }
  removeChart(id: string | number): Promise<void> {
    // throw new Error("Method not implemented.");
    return Promise.resolve();
  }
  saveChart(chartData: ChartData): Promise<string | number> {
    // throw new Error("Method not implemented.");

    return Promise.resolve("");
  }
  getChartContent(chartId: number | string): Promise<string> {
    // throw new Error("Method not implemented.");
    return Promise.resolve("");
  }
  getAllStudyTemplates(): Promise<StudyTemplateMetaInfo[]> {
    // throw new Error("Method not implemented.");
    return Promise.resolve([]);
  }
  removeStudyTemplate(studyTemplateInfo: StudyTemplateMetaInfo): Promise<void> {
    // throw new Error("Method not implemented.");
    return Promise.resolve();
  }
  saveStudyTemplate(studyTemplateData: StudyTemplateData): Promise<void> {
    // throw new Error("Method not implemented.");
    return Promise.resolve();
  }
  getStudyTemplateContent(studyTemplateInfo: StudyTemplateMetaInfo): Promise<string> {
    // throw new Error("Method not implemented.");
    return Promise.resolve("");
  }
  getDrawingTemplates(toolName: string): Promise<string[]> {
    // throw new Error("Method not implemented.");
    return Promise.resolve([]);
  }
  loadDrawingTemplate(toolName: string, templateName: string): Promise<string> {
    // throw new Error("Method not implemented.");
    return Promise.resolve("");
  }
  removeDrawingTemplate(toolName: string, templateName: string): Promise<void> {
    // throw new Error("Method not implemented.");
    return Promise.resolve();
  }
  saveDrawingTemplate(toolName: string, templateName: string, content: string): Promise<void> {
    //   throw new Error("Method not implemented.");
    return Promise.resolve();
  }
  getChartTemplateContent(templateName: string): Promise<ChartTemplate> {
    // throw new Error("Method not implemented.");
    return Promise.resolve({
      content: {},
    });
  }
  getAllChartTemplates(): Promise<string[]> {
    // throw new Error("Method not implemented.");
    return Promise.resolve([]);
  }
  saveChartTemplate(newName: string, theme: ChartTemplateContent): Promise<void> {
    // throw new Error("Method not implemented.");
    return Promise.resolve();
  }
  removeChartTemplate(templateName: string): Promise<void> {
    // throw new Error("Method not implemented.");

    return Promise.resolve();
  }
  saveLineToolsAndGroups(
    layoutId: string | undefined,
    chartId: string | number,
    state: LineToolsAndGroupsState
  ): Promise<void> {
    //   throw new Error("Method not implemented.");
    return Promise.resolve();
  }
  loadLineToolsAndGroups(
    layoutId: string | undefined,
    chartId: string | number,
    requestType: LineToolsAndGroupsLoadRequestType,
    requestContext: LineToolsAndGroupsLoadRequestContext
  ): Promise<Partial<LineToolsAndGroupsState> | null> {
    // throw new Error("Method not implemented.");
    return Promise.resolve(null);
  }
}
