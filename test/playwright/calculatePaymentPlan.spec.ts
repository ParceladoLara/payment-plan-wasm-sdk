import { test, expect } from "@playwright/test";

test.describe("CalculatePaymentPlan page", () => {
  test("should render message", async ({ page }) => {
    const expectedText = `

{
  "installment": 24,
  "dueDate": "2024-03-18T03:00:00.000Z",
  "accumulatedDays": 731,
  "daysIndex": 0.561985770761778,
  "accumulatedDaysIndex": 18.014166849381613,
  "interestRate": 0.0235,
  "installmentAmount": 502.69,
  "installmentAmountWithoutTAC": 0,
  "totalAmount": 12064.56,
  "debitService": 3009.0499999999993,
  "customerDebitServiceAmount": 3009.0499999999993,
  "customerAmount": 502.69,
  "calculationBasisForEffectiveInterestRate": 492.04375,
  "merchantDebitServiceAmount": 0,
  "merchantTotalAmount": 440,
  "settledToMerchant": 8360,
  "mdrAmount": 440,
  "effectiveInterestRate": 0.0242,
  "totalEffectiveCost": 0.0268,
  "eirYearly": 0.332954,
  "tecYearly": 0.373929,
  "eirMonthly": 0.0242,
  "tecMonthly": 0.0268,
  "totalIOF": 255.51,
  "contractAmount": 9055.51,
  "contractAmountWithoutTAC": 0,
  "tacAmount": 0,
  "IOFPercentage": 0.000082,
  "overallIOF": 0.0038,
  "disbursementDate": "2022-03-18T03:00:00.000Z",
  "paidTotalIOF": 255.54,
  "paidContractAmount": 9055.54,
  "preDisbursementAmount": 8800.03,
  "invoices": [
    {
      "accumulatedDays": "31",
      "factor": 0.977039570089471,
      "accumulatedFactor": 0.977039570089471,
      "mainIOFTAC": 289.885515,
      "debitService": 212.804485,
      "dueDate": "2022-04-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "61",
      "factor": 0.953551014026522,
      "accumulatedFactor": 1.930590584115993,
      "mainIOFTAC": 296.69782460249996,
      "debitService": 205.9921753975,
      "dueDate": "2022-05-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "94",
      "factor": 0.929598336717808,
      "accumulatedFactor": 2.860188920833801,
      "mainIOFTAC": 303.6702234806587,
      "debitService": 199.01977651934126,
      "dueDate": "2022-06-20T03:00:00.000Z"
    },
    {
      "accumulatedDays": "122",
      "factor": 0.909259536351008,
      "accumulatedFactor": 3.7694484571848093,
      "mainIOFTAC": 310.8064737324542,
      "debitService": 191.8835262675458,
      "dueDate": "2022-07-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "153",
      "factor": 0.886419436614634,
      "accumulatedFactor": 4.655867893799443,
      "mainIOFTAC": 318.11042586516686,
      "debitService": 184.57957413483314,
      "dueDate": "2022-08-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "185",
      "factor": 0.86510943723528,
      "accumulatedFactor": 5.520977331034723,
      "mainIOFTAC": 325.5860208729983,
      "debitService": 177.1039791270017,
      "dueDate": "2022-09-19T03:00:00.000Z"
    },
    {
      "accumulatedDays": "214",
      "factor": 0.845246152636702,
      "accumulatedFactor": 6.366223483671425,
      "mainIOFTAC": 333.23729236351375,
      "debitService": 169.45270763648625,
      "dueDate": "2022-10-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "245",
      "factor": 0.8240140339113,
      "accumulatedFactor": 7.190237517582725,
      "mainIOFTAC": 341.0683687340563,
      "debitService": 161.62163126594368,
      "dueDate": "2022-11-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "276",
      "factor": 0.805094317440387,
      "accumulatedFactor": 7.995331835023112,
      "mainIOFTAC": 349.0834753993066,
      "debitService": 153.60652460069335,
      "dueDate": "2022-12-19T03:00:00.000Z"
    },
    {
      "accumulatedDays": "306",
      "factor": 0.785739417608204,
      "accumulatedFactor": 8.781071252631316,
      "mainIOFTAC": 357.2869370711903,
      "debitService": 145.40306292880965,
      "dueDate": "2023-01-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "339",
      "factor": 0.766002075356075,
      "accumulatedFactor": 9.547073327987391,
      "mainIOFTAC": 365.68318009236333,
      "debitService": 137.00681990763667,
      "dueDate": "2023-02-20T03:00:00.000Z"
    },
    {
      "accumulatedDays": "367",
      "factor": 0.749242618420912,
      "accumulatedFactor": 10.296315946408303,
      "mainIOFTAC": 374.2767348245339,
      "debitService": 128.4132651754661,
      "dueDate": "2023-03-20T03:00:00.000Z"
    },
    {
      "accumulatedDays": "396",
      "factor": 0.732039685794677,
      "accumulatedFactor": 11.02835563220298,
      "mainIOFTAC": 383.0722380929104,
      "debitService": 119.61776190708956,
      "dueDate": "2023-04-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "426",
      "factor": 0.714441058547147,
      "accumulatedFactor": 11.742796690750126,
      "mainIOFTAC": 392.0744356880938,
      "debitService": 110.61556431190618,
      "dueDate": "2023-05-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "458",
      "factor": 0.697265511751411,
      "accumulatedFactor": 12.440062202501537,
      "mainIOFTAC": 401.288184926764,
      "debitService": 101.40181507323597,
      "dueDate": "2023-06-19T03:00:00.000Z"
    },
    {
      "accumulatedDays": "487",
      "factor": 0.681255995839813,
      "accumulatedFactor": 13.12131819834135,
      "mainIOFTAC": 410.718457272543,
      "debitService": 91.971542727457,
      "dueDate": "2023-07-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "518",
      "factor": 0.664143219708338,
      "accumulatedFactor": 13.785461418049687,
      "mainIOFTAC": 420.37034101844773,
      "debitService": 82.31965898155225,
      "dueDate": "2023-08-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "549",
      "factor": 0.648894205861671,
      "accumulatedFactor": 14.434355623911358,
      "mainIOFTAC": 430.2490440323813,
      "debitService": 72.44095596761873,
      "dueDate": "2023-09-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "579",
      "factor": 0.633294440611724,
      "accumulatedFactor": 15.067650064523082,
      "mainIOFTAC": 440.35989656714224,
      "debitService": 62.330103432857776,
      "dueDate": "2023-10-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "612",
      "factor": 0.61738643238328,
      "accumulatedFactor": 15.685036496906362,
      "mainIOFTAC": 450.70835413647006,
      "debitService": 51.981645863529934,
      "dueDate": "2023-11-20T03:00:00.000Z"
    },
    {
      "accumulatedDays": "640",
      "factor": 0.603878556022668,
      "accumulatedFactor": 16.28891505292903,
      "mainIOFTAC": 461.3000004586771,
      "debitService": 41.38999954132289,
      "dueDate": "2023-12-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "671",
      "factor": 0.588709458645293,
      "accumulatedFactor": 16.877624511574325,
      "mainIOFTAC": 472.140550469456,
      "debitService": 30.549449530543978,
      "dueDate": "2024-01-18T03:00:00.000Z"
    },
    {
      "accumulatedDays": "703",
      "factor": 0.574556567045507,
      "accumulatedFactor": 17.452181078619834,
      "mainIOFTAC": 483.2358534054882,
      "debitService": 19.45414659451176,
      "dueDate": "2024-02-19T03:00:00.000Z"
    },
    {
      "accumulatedDays": "731",
      "factor": 0.561985770761778,
      "accumulatedFactor": 18.014166849381613,
      "mainIOFTAC": 494.5918959605172,
      "debitService": 8.098104039482786,
      "dueDate": "2024-03-18T03:00:00.000Z"
    }
  ]
}`;
    await page.goto("/");
    await page.click('button:has-text("Calculate Payment Plan")');
    await expect(page.locator("pre")).toContainText(expectedText.trim());
  });
});
