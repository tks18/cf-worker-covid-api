# Worker Based Covid Vaccination Stats API

## by [Shan.tk](https://sudharshan.tk)

A Cloudflare Worker Based Vaccination Stats API (India) using COWIN API

Try it Now ! - [here](https://vaccine-stats-api.shan-tk.workers.dev/)

Based on my [Vaccine Stats Plugin](https://github.com/tks18/covid-stats-module)

## Endpoints

#### Show States List

Lists all the States with their Data

**URL** : `/states`

**Method** : `GET`

##### Success Response

**Code** : `200 OK`

**Content examples**

```json
[
  {
    state_id: 1,
    state_code: 'AN',
    api_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  ...// list of all States
]
```

#### Vaccination Data

Complete Data Related to Vaccination in India (Today's / Historical)

**URL** : `/vaccine`

**Method** : `GET`

**Params**:

- state - Optional

  **_if is sent it should be a number from 0 upto 35_**

##### Success Response

**Code** : `200 OK`

**Content examples**.

_if state_id is sent then the following data will be related to a particular state_

```json
{
  "name": "India",
  "date": "15-09-2021",
  "tillDate": {
    "dose1": 577812557,
    "dose2": 185172142,
    "male": 398167258,
    "female": 361204640,
    "others": 164907,
    "aefi": {
      "number": 29948,
      "perc": 0.005
    },
    "ageWise": {
      "total": 759536805,
      "vac_18_45": 391787457,
      "vac_45_60": 222047818,
      "above_60": 145701530
    },
    "population": {
      "number": 1332900000,
      "percentage": {
        "dose1": {
          "num": "43.35%"
        },
        "dose2": {
          "num": "13.89%"
        }
      }
    },
    "comparisons": {
      "dose1": {
        "num": "-38.76%",
        "negative": true
      },
      "dose2": {
        "num": "-19.73%",
        "negative": true
      }
    }
  },
  "today": {
    "total": 4167179,
    "dose1": 2266736,
    "dose2": 1900443,
    "male": 2142341,
    "female": 2023785,
    "others": 1051,
    "aefi": 65,
    "ageWise": {
      "total": 4888155,
      "vac_18_45": 3469611,
      "vac_45_60": 955033,
      "above_60": 463511
    }
  },
  "vaccineWiseStats": {
    "covishield": {
      "number": 670268214,
      "perc": "87.85%"
    },
    "covaxin": {
      "number": 88408213,
      "perc": "11.59%"
    },
    "sputnik": {
      "number": 860378,
      "perc": "0.1128%"
    }
  }
}
```

#### Show Covid Cases Details

Stats of Covid Cases Related to India

**URL** : `/cases`

**Method** : `GET`

**Params**:

- type - Required

  **_Type of Data Requested, Accepts Following Values_**

  - "complete" - Sends all Historical Data as well as today's data for States and their Districts

  - "historical" - Sends Only the Historical Stats Data for States

  - "today" - Send only the Data relating to Today's Changes for States as well as total India

- state - Optional

  **_if is sent it should be a State ALPHA ID (shall be found from /state endpoint)_**

##### Success Response

**Code** : `200 OK`

**Content examples**

- If type is "today"

```json
{
  "today": {
    "confirmed": 33315527,
    "deceased": 443528,
    "other": 12906,
    "recovered": 32514644,
    "tested": 546055796,
    "vaccinated1": 574657255,
    "vaccinated2": 184255022
  },
  "yesterday": {
    "confirmed": 33288025,
    "deceased": 443247,
    "other": 12901,
    "recovered": 32476651,
    "tested": 544444967,
    "vaccinated1": 570511241,
    "vaccinated2": 181727083
  },
  "changes": {
    "today": {
      "confirmed": 27502,
      "deceased": 281,
      "other": 5,
      "recovered": 37993,
      "tested": 1610829,
      "vaccinated1": 4146014,
      "vaccinated2": 2527939
    },
    "yesterday": {
      "confirmed": 24414,
      "deceased": 340,
      "other": 6,
      "recovered": 39815,
      "tested": 1430891,
      "vaccinated1": 5676493,
      "vaccinated2": 2724188
    }
  },
  "states": [
    {
      "code": "AN",
      "name": "Andaman and Nicobar Islands",
      "id": 1,
      "today": {
        "confirmed": 7592,
        "deceased": 129,
        "recovered": 7448,
        "tested": 517648,
        "vaccinated1": 275024,
        "vaccinated2": 117136
      },
      "yesterday": {
        "confirmed": 7584,
        "deceased": 129,
        "recovered": 7447,
        "tested": 515139,
        "vaccinated1": 273062,
        "vaccinated2": 115236
      },
      "changes": {
        "today": {
          "confirmed": 8,
          "deceased": 0,
          "recovered": 1,
          "tested": 2509,
          "vaccinated1": 1962,
          "vaccinated2": 1900
        },
        "yesterday": {
          "confirmed": 2,
          "deceased": 0,
          "recovered": 3,
          "tested": 1452,
          "vaccinated1": 1704,
          "vaccinated2": 830
        }
      }
    }
    // Continues for all States
  ]
}
```

- if type is "historical"

```json
{
  "states": [
    {
      "code": "AN",
      "name": "Andaman and Nicobar Islands",
      "id": 1,
      "confirmed": 7592,
      "deceased": 129,
      "recovered": 7448,
      "tested": 517648,
      "population": 397000,
      "lastUpdated": "2021-09-15T14:20:10+05:30",
      "districts": [
        {
          "name": "Nicobars",
          "population": 36842
        },
        {
          "name": "North and Middle Andaman",
          "population": 105597
        },
        {
          "name": "South Andaman",
          "population": 238142
        },
        {
          "name": "Unknown",
          "confirmed": 7592,
          "deceased": 129,
          "recovered": 7448
        }
      ]
    }
    // Continues for all States and Districts
  ]
}
```

- if type is "complete"

```json
{
  "historicalData": {
    "states": [
      {
        "code": "AN",
        "name": "Andaman and Nicobar Islands",
        "id": 1,
        "confirmed": 7592,
        "deceased": 129,
        "recovered": 7448,
        "tested": 517648,
        "population": 397000,
        "lastUpdated": "2021-09-15T14:20:10+05:30",
        "districts": [
          {
            "name": "Nicobars",
            "population": 36842
          },
          {
            "name": "North and Middle Andaman",
            "population": 105597
          },
          {
            "name": "South Andaman",
            "population": 238142
          },
          {
            "name": "Unknown",
            "confirmed": 7592,
            "deceased": 129,
            "recovered": 7448
          }
        ]
      }
    ]
    // Continues for all States and Districts
  }
}
```

**Every Endpoint will accept state param so data can be Drilled down to Each State**
