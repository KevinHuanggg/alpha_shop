# Alpha Shop

透過 [Create React App] 搭建電商平台 Alpha Shop 的購物車結帳畫面。

## 專案畫面

![image](images/screenshot-step-2.png)
![image](images/screenshot-devtool.png)

## 功能

- 畫面

  - StepProgress：標示「寄送地址、運送方式、付款資訊」三個操作階段
    - Step1：寄送地址表單。
    - Step2：運送方式表單。
    - Step3：付款資訊表單。
    - Steps：顯示分別寄送地址、運送方式、付款資訊三個階段的各自表單內容。
  - ProgressControl：「上一步」、「下一步」和「確認下單」的按鈕。
  - Cart：顯示購物車目前的產品名稱、數量、運費以及小記總額。
    - CartItem：個別商品。

- 進度更新

  - 08/09

    - 完成右側購物車增加與減少按鈕功能以及運費( 金額<1000 運費$120 )、小記的計算功能。

  - 08/06

    - 新增右側購物籃元件。

  - Before：目前僅完成 Step1 的表單及 ProgressControl 的多個按鈕，尚未完成 Step2、Step3 以及切換分頁功能。

## 安裝與執行

1. 請先確認環境有安裝 node.js 與 npm。
2. 開啟終端機(Terminal)進入到存放專案的本機位置，執行以下將專案 clone：

   ```
   git clone https://github.com/James-Lee-01/3-ALPHA_Shop.git
   ```

3. 進入存放此專案的資料夾，開啟之後，透過終端機輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，繼續輸入以下內容執行程式：

```
npm start
```

5. 打開瀏覽器進入到此網址: `http://localhost:3000`
6. 若欲暫停使用， 輸入:

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 18.16.0
- React 18.2.0
