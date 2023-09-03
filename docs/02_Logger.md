# Logger

## 目的

Log 在實務上非常實用，可以幫助你來除錯、監控、記錄和協作。

## 實作

- 參考 GCP 與微軟體分級制度

| 日誌級別    | 值   | 描述                                     |
|------------|-----|------------------------------------------|
| DEFAULT    | 0   | 無指定嚴重程度的日誌。                  |
| DEBUG      | 100 | 調試或追蹤資訊。                         |
| INFO       | 200 | 常規資訊，例如持續狀態或性能。           |
| NOTICE     | 300 | 正常但重要的事件，例如啟動、關閉或配置更改。|
| WARNING    | 400 | 警告事件可能會引起問題。                |
| ERROR      | 500 | 錯誤事件可能會引起問題。                |
| CRITICAL   | 600 | 致命事件導致更嚴重的問題或停機。       |
| ALERT      | 700 | 必須立即採取行動的事件。                 |
| EMERGENCY  | 800 | 一個或多個系統無法使用。                  |


| 日誌級別   | 值  | 描述                                                                                                                           |
|------------|----|--------------------------------------------------------------------------------------------------------------------------------|
| Trace      | 0  | 包含最詳細訊息的日誌。這些訊息可能包含敏感應用程式資料。這些日誌在默認情況下已禁用，不應在生產環境中啟用。             |
| Debug      | 1  | 用於開發期間的互動調查的日誌。這些日誌主要包含用於除錯的資訊，無長期價值。                                                |
| Information| 2  | 追蹤應用程式的一般流程的日誌。這些日誌應該具有長期價值。                                                                     |
| Warning    | 3  | 強調應用程式流程中的異常或意外事件的日誌，但不會導致應用程式執行停止。                                                    |
| Error      | 4  | 強調因故障而導致當前執行流程停止的日誌。這些錯誤應指示當前活動的失敗，而不是整個應用程式的失敗。                   |
| Critical   | 5  | 描述不可恢復的應用程式或系統崩潰，或需要立即處理的嚴重失敗的日誌。                                                     |
| None       | 6  | 停用指定類別的日誌記錄。                                                                                                  |


- 透過介面與 DI 作隔離
- 比較 DI Library
  - [npm trend](https://npmtrends.com/awilix-vs-bottlejs-vs-inversify-vs-node-dependency-injection-vs-tsyringe-vs-typedi-vs-typescript-ioc)
  - [google trend](https://trends.google.com.tw/trends/explore?date=today%205-y&q=inversify,awilix,typeDI&hl=zh-TW)

## 參考

- [Dependency Injection in Node.js + TypeScript](https://masoudx.medium.com/dependency-injection-in-typescript-7bb8fdd2863c)
- [GCP LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- [Azure Log](https://learn.microsoft.com/en-us/azure/azure-functions/configure-monitoring?tabs=v2)