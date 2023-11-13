# Highlights

## Libraries and UI
- I used recharts to build the chart and chakra-ui as you asked. I've never used both libraries. I had to learn them quickly. For that reason there are
many things to improve.
- I followed the IU located in https://web-66f1t0l51-bags.vercel.app. It reloads and crashes, so it took me too time to. Finally, I configured Dev tools in Chrome to disabled internet connection to avoid reloading the page.

## Architecture and design
- I mocked data in a json file. I considered it as the database. I created a dataservice to fetch data and transform separated from UI. It simulates a delay to see the "Loading..." message. 
- All controls load the whole file and take the data that they need. Finally data are transformed based on UI.
- I created interfaces for data and for UI components.
- Components that load data use a custom hook: useFetch that fetches data and set error or loading values.

## Feature enhancements
- Improve Loading... and Error message with a spinner or nice UI control
- Create component that manages loading and error to avoid repeating code
- Improve Chakra UI styiling to avoid using hardcoded attributes.
- Improve main layout and fixed responsive issue.
- Disable tabs in BusinessHealth and DebtAndPayments controls when they are fetching data to avoid unnecesary loading.
- Refactor AnnualizedRevenue to move the chart code into a new component.