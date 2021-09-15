const statesList = [
  {
    state_id: 1,
    state_code: 'AN',
    api_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_id: 2,
    state_code: 'AP',
    api_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_id: 3,
    state_code: 'AR',
    api_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_id: 4,
    state_code: 'AS',
    api_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_id: 5,
    state_code: 'BR',
    api_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_id: 6,
    state_code: 'CH',
    api_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_id: 7,
    state_code: 'CG',
    api_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_id: 8,
    state_code: 'DH',
    api_code: 'DN',
    state_name: 'Dadra and Nagar Haveli',
  },
  {
    state_id: 37,
    state_code: 'DD',
    api_code: 'DD',
    state_name: 'Daman and Diu',
  },
  {
    state_id: 9,
    state_code: 'DL',
    api_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_id: 10,
    state_code: 'GA',
    api_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_id: 11,
    state_code: 'GJ',
    api_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_id: 12,
    state_code: 'HR',
    api_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_id: 13,
    state_code: 'HP',
    api_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_id: 14,
    state_code: 'JK',
    api_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_id: 15,
    state_code: 'JH',
    api_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_id: 16,
    state_code: 'KA',
    api_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_id: 17,
    state_code: 'KL',
    api_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_id: 18,
    state_code: 'LA',
    api_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_id: 19,
    state_code: 'LD',
    api_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_id: 20,
    state_code: 'MP',
    api_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_id: 21,
    state_code: 'MH',
    api_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_id: 22,
    state_code: 'MN',
    api_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_id: 23,
    api_code: 'ML',
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_id: 24,
    state_code: 'MZ',
    api_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_id: 25,
    state_code: 'NL',
    api_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_id: 26,
    state_code: 'OD',
    api_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_id: 27,
    state_code: 'PY',
    api_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_id: 28,
    state_code: 'PB',
    api_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_id: 29,
    state_code: 'RJ',
    api_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_id: 30,
    state_code: 'SK',
    api_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_id: 31,
    state_code: 'TN',
    api_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_id: 32,
    state_code: 'TS',
    api_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_id: 33,
    state_code: 'TR',
    api_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_id: 34,
    state_code: 'UP',
    api_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_id: 35,
    state_code: 'UK',
    api_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_id: 36,
    state_code: 'WB',
    api_code: 'WB',
    state_name: 'West Bengal',
  },
];

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

const dateFormatter = (date, reverse) => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  if (reverse) {
    return [day, month, year].join('-');
  }
  return [year, month, day].join('-');
};

const getRelevantDates = (previous, last3Days) => {
  let today = new Date();
  let yesterday = new Date(today);
  let prevYesterday = new Date(today);
  if (previous) {
    today.setDate(today.getDate() - 1);
    yesterday.setDate(today.getDate() - 1);
    prevYesterday.setDate(today.getDate() - 2);
    today = dateFormatter(today.toDateString());
    yesterday = dateFormatter(yesterday.toDateString());
    prevYesterday = dateFormatter(prevYesterday.toDateString());
    const returnObj = last3Days
      ? { today, yesterday, prevYesterday }
      : { today, yesterday };
    return returnObj;
  }
  yesterday.setDate(yesterday.getDate() - 1);
  prevYesterday.setDate(yesterday.getDate() - 1);
  today = dateFormatter(today.toDateString());
  yesterday = dateFormatter(yesterday.toDateString());
  prevYesterday = dateFormatter(prevYesterday.toDateString());
  const returnObj = last3Days
    ? { today, yesterday, prevYesterday }
    : { today, yesterday };
  return returnObj;
};

const checkNegative = (number, suffix) => ({
  num: suffix ? `${number}${suffix}` : number,
  negative: number < 0,
});

const objTodelta = (obj1, obj2) => {
  const data = {};
  for (const props in obj1) {
    data[props] = obj1[props] - obj2[props];
  }
  return data;
};

const textLoader = (percentage) => {
  const loader = [];
  for (let n = 0; n < 20; n++) {
    if (percentage < (n + 1) * 5) {
      loader.push('░');
    } else {
      loader.push('▓');
    }
  }
  const text = loader.join('');
  return text;
};

const numToLoader = (number, suffix) => ({
  num: suffix ? `${number}${suffix}` : number,
  loader: textLoader(number),
});

const vaccineUrlConstructor = (state = null, district = null, date) => {
  const url = 'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports';
  let constructedUrl;
  if (
    (state === null || !Number.isInteger(state)) &&
    (district === null || !Number.isInteger(district)) &&
    date
  ) {
    constructedUrl = `${url}?date=${date}`;
  } else if (
    state !== null &&
    Number.isInteger(state) &&
    (district === null || !Number.isInteger(district)) &&
    date
  ) {
    constructedUrl = `${url}?state_id=${state}&date=${date}`;
  } else if (
    (state === null || !Number.isInteger(state)) &&
    district !== null &&
    Number.isInteger(district) &&
    date
  ) {
    constructedUrl = `${url}?district_id=${district}&date=${date}`;
  } else if (
    state !== null &&
    Number.isInteger(state) &&
    district !== null &&
    Number.isInteger(district) &&
    date
  ) {
    constructedUrl = `${url}?state_id=${state}&district_id=${district}&date=${date}`;
  } else {
    constructedUrl = null;
  }
  return constructedUrl;
};

const vaccineDatafromApi = async (state, district, date) => {
  const url = vaccineUrlConstructor(state, district, date);
  const response = await fetch(url, {
    method: 'get',
  });
  const resp = await response.json();
  if (response.status === 200 && resp) {
    return {
      success: true,
      data: resp,
      error: null,
    };
  }
  return {
    success: false,
    data: null,
    error: 'No Data from API',
  };
};

const getVaccineData = async (state = null, district = null) => {
  const dates = getRelevantDates();
  const responses = {};
  for (const date in dates) {
    const response = await vaccineDatafromApi(state, district, dates[date]);
    if (response.success) {
      responses[date] = response.data;
    } else {
      response[date] = null;
    }
  }
  return responses;
};

const casesBuildDailyNosUrl = (stateLevel, stateId) => {
  const baseUrl = 'https://api.covid19india.org/v4/min/';
  const baseFile = 'timeseries';
  const baseFileFormat = '.min.json';
  if (stateLevel && stateId) {
    return `${baseUrl}${baseFile}-${stateId}${baseFileFormat}`;
  }
  return `${baseUrl}${baseFile}${baseFileFormat}`;
};

const casesDefaultUrl = (stateLevel, stateId) => {
  const totalNosData = 'https://api.covid19india.org/v4/min/data.min.json';
  const dailyNosData = casesBuildDailyNosUrl(stateLevel, stateId);
  return { totalNosData, dailyNosData };
};

const getCasesDatafromAPI = async (apiPath) => {
  const response = await fetch(apiPath, {
    method: 'get',
  });
  const resp = await response.json();
  if (response.status === 200 && resp) {
    return {
      success: true,
      data: resp,
      error: null,
    };
  }
  return {
    success: false,
    data: null,
    error: 'Something Happened Server Side',
  };
};

const getCasesData = async (stateLevel, stateId) => {
  const responses = {};
  const api = casesDefaultUrl(stateLevel, stateId);
  for (const path in api) {
    const response = await getCasesDatafromAPI(api[path]);
    responses[path] = response;
  }
  return responses;
};

const populateHistoricalCaseStats = (rawData, stateLevel, stateId) => {
  const populatedStats = {
    states: [],
  };
  for (const state in rawData) {
    if (rawData.hasOwnProperty(state)) {
      const stateData = rawData[state];
      const { confirmed } = stateData.total;
      const { deceased } = stateData.total;
      const { recovered } = stateData.total;
      const { tested } = stateData.total;
      const { vaccinated } = stateData.total;
      const { population } = stateData.meta;
      if (state === 'TT') {
        populatedStats.confirmed = confirmed;
        populatedStats.deceased = deceased;
        populatedStats.recovered = recovered;
        populatedStats.tested = tested;
        populatedStats.vaccinated = vaccinated;
        populatedStats.population = population;
        populatedStats.lastUpdated = stateData.meta.last_updated;
      } else {
        const stateDetails = statesList.filter(
          (states) => states.api_code === state,
        )[0];
        const relevantData = {
          code: state,
          name: stateDetails.state_name,
          id: stateDetails.state_id,
          confirmed,
          deceased,
          recovered,
          tested,
          vaccinated,
          population,
          lastUpdated: stateData.meta.last_updated,
          districts: [],
        };
        const { districts } = stateData;
        for (const district in districts) {
          if (districts.hasOwnProperty(district)) {
            const districtLevelData = districts[district];
            const districtData = {
              name: district,
              confirmed: districtLevelData.total.confirmed,
              deceased: districtLevelData.total.deceased,
              recovered: districtLevelData.total.recovered,
              tested: districtLevelData?.total?.tested,
              vaccinated: districtLevelData?.total?.vaccinated,
              population: districtLevelData?.meta?.population,
            };
            relevantData.districts.push(districtData);
          }
        }
        populatedStats.states.push(relevantData);
      }
    }
  }
  if (!stateLevel) {
    return populatedStats;
  }
  const stateData = populatedStats.states.filter(
    (state) => state.code === stateId,
  )[0];
  return stateData;
};

const getPopulationData = async () => {
  const api = casesDefaultUrl();
  const response = await getCasesDatafromAPI(api.totalNosData);
  if (response.success) {
    const stats = populateHistoricalCaseStats(response.data);
    const populationStats = {};
    populationStats.states = stats.states.map((state) => ({
      state: state.name,
      id: state.id,
      code: state.code,
      population: state.population,
    }));
    populationStats.total = stats.population;
    return {
      success: true,
      data: populationStats,
    };
  }
  return {
    success: false,
    data: null,
    error: null,
  };
};

const populateVaccinationStats = async (vaccineData, stateLevel, stateId) => {
  const todayData = vaccineData.today;
  const yestData = vaccineData.yesterday;
  const populationData = await getPopulationData();

  const connectedStateAPIID =
    stateLevel &&
    stateId &&
    populationData.data.states.filter((state) => state.id == stateId)[0];

  const relevantPopulationData = stateLevel
    ? connectedStateAPIID.population
    : populationData.data.total;

  const overallVaccinationsStats = {
    name: stateLevel ? connectedStateAPIID.state : 'India',
    date: dateFormatter(todayData.timestamp, true),
    tillDate: {
      dose1: todayData.topBlock.vaccination.tot_dose_1,
      dose2: todayData.topBlock.vaccination.tot_dose_2,
      male: todayData.topBlock.vaccination.male,
      female: todayData.topBlock.vaccination.female,
      others: todayData.topBlock.vaccination.others,
      aefi: {
        number: todayData.topBlock.vaccination.aefi,
        perc: todayData.aefiPercentage,
      },
      ageWise: todayData.vaccinationByAge,
      population: {
        number: relevantPopulationData,
        percentage: {
          dose1: numToLoader(
            +(
              (todayData.topBlock.vaccination.tot_dose_1 /
                relevantPopulationData) *
              100
            ).toFixed(2),
            '%',
          ),
          dose2: numToLoader(
            +(
              (todayData.topBlock.vaccination.tot_dose_2 /
                relevantPopulationData) *
              100
            ).toFixed(2),
            '%',
          ),
        },
      },
      comparisons: {
        dose1: checkNegative(
          +(
            ((todayData.topBlock.vaccination.today_dose_one -
              yestData.topBlock.vaccination.today_dose_one) /
              yestData.topBlock.vaccination.today_dose_one) *
            100
          ).toFixed(2),
          '%',
        ),
        dose2: checkNegative(
          +(
            ((todayData.topBlock.vaccination.today_dose_two -
              yestData.topBlock.vaccination.today_dose_two) /
              yestData.topBlock.vaccination.today_dose_two) *
            100
          ).toFixed(2),
          '%',
        ),
      },
    },
    today: {
      total: todayData.topBlock.vaccination.today,
      dose1: todayData.topBlock.vaccination.today_dose_one,
      dose2: todayData.topBlock.vaccination.today_dose_two,
      male: todayData.topBlock.vaccination.today_male,
      female: todayData.topBlock.vaccination.today_female,
      others: todayData.topBlock.vaccination.today_others,
      aefi: todayData.topBlock.vaccination.today_aefi,
      ageWise: objTodelta(
        todayData.vaccinationByAge,
        yestData.vaccinationByAge,
      ),
    },
    vaccineWiseStats: {
      covishield: {
        number: todayData.topBlock.vaccination.covishield,
        perc: `${+(
          (todayData.topBlock.vaccination.covishield /
            (todayData.topBlock.vaccination.tot_dose_1 +
              todayData.topBlock.vaccination.tot_dose_2)) *
          100
        ).toFixed(2)}%`,
      },
      covaxin: {
        number: todayData.topBlock.vaccination.covaxin,
        perc: `${+(
          (todayData.topBlock.vaccination.covaxin /
            (todayData.topBlock.vaccination.tot_dose_1 +
              todayData.topBlock.vaccination.tot_dose_2)) *
          100
        ).toFixed(2)}%`,
      },
      sputnik: {
        number: todayData.topBlock.vaccination.sputnik,
        perc: `${+(
          (todayData.topBlock.vaccination.sputnik /
            (todayData.topBlock.vaccination.tot_dose_1 +
              todayData.topBlock.vaccination.tot_dose_2)) *
          100
        ).toFixed(4)}%`,
      },
    },
  };
  return overallVaccinationsStats;
};

const populateCurrentCaseStats = (timeData, isToday, stateLevel, stateId) => {
  const subGroupName = stateLevel ? 'districts' : 'states';
  const fillSubGroupData = (todayData, yestData, prevYesterdayData) => ({
    today: todayData,
    yesterday: yestData,
    changes: {
      today: objTodelta(todayData, yestData),
      yesterday: objTodelta(yestData, prevYesterdayData),
    },
  });
  let currentStats = {
    [subGroupName]: [],
  };
  let relevantDates;
  if (isToday) {
    relevantDates = getRelevantDates(false, true);
  } else {
    relevantDates = getRelevantDates(true, true);
  }
  const { today, yesterday, prevYesterday } = relevantDates;
  if (!stateLevel) {
    for (const state in timeData) {
      if (timeData.hasOwnProperty(state)) {
        const stateData = timeData[state];
        if (state === 'TT' && !stateLevel) {
          currentStats = {
            ...fillSubGroupData(
              stateData.dates[today].total,
              stateData.dates[yesterday].total,
              stateData.dates[prevYesterday].total,
            ),
            ...currentStats,
          };
        } else if (state !== 'UN' && !stateLevel) {
          const stateDetails = statesList.filter(
            (states) => states.api_code === state,
          )[0];
          const stats = {
            code: state,
            name: stateDetails.state_name,
            id: stateDetails.state_id,
            ...fillSubGroupData(
              stateData.dates[today].total,
              stateData.dates[yesterday].total,
              stateData.dates[prevYesterday].total,
            ),
          };
          currentStats.states.push(stats);
        }
      }
    }
  } else if (stateLevel && stateId) {
    const stateData = statesList.filter(
      (state) => state.api_code === stateId,
    )[0];
    currentStats = {
      name: stateData.state_name,
      code: stateData.state_code,
      id: stateData.state_id,
      ...fillSubGroupData(
        timeData[stateId].dates[today].total,
        timeData[stateId].dates[yesterday].total,
        timeData[stateId].dates[prevYesterday].total,
      ),
      ...currentStats,
    };
    const { districts } = timeData[stateId];
    for (const district in districts) {
      if (
        districts.hasOwnProperty(district) &&
        !['Unknown', 'Other State'].includes(district)
      ) {
        const districtData = districts[district];
        const stats = {
          name: district,
          ...fillSubGroupData(
            districtData?.dates[today]?.total,
            districtData?.dates[yesterday]?.total,
            districtData?.dates[prevYesterday]?.total,
          ),
        };
        currentStats.districts.push(stats);
      }
    }
  }

  return currentStats;
};

const vaccinationHandler = async (stateID, districtID) => {
  const stateLevel = !!stateID;
  const vaccineRawData = await getVaccineData(stateID, districtID);
  if (vaccineRawData.today && vaccineRawData.yesterday) {
    const constructedVaccineData = await populateVaccinationStats(
      vaccineRawData,
      stateLevel,
      stateID,
    );
    return constructedVaccineData;
  }
  return [];
};

const caseHandler = async (type, stateId, today) => {
  const stateLevel = !!stateId;
  const isToday = !!today;
  const casesData = await getCasesData(true, stateId);
  const { totalNosData, dailyNosData } = casesData;
  let returnData = {};
  if (type === 'complete') {
    if (totalNosData.success && dailyNosData.success) {
      const historicalData = await populateHistoricalCaseStats(
        totalNosData.data,
        stateLevel,
        stateId,
      );
      const todaysData = await populateCurrentCaseStats(
        dailyNosData.data,
        isToday,
        stateLevel,
        stateId,
      );
      returnData = { historicalData, todaysData };
    }
  } else if (type === 'historical') {
    if (totalNosData.success) {
      const historicalData = await populateHistoricalCaseStats(
        totalNosData.data,
        stateLevel,
        stateId,
      );
      returnData = historicalData;
    }
  } else if (type === 'today') {
    if (dailyNosData.success) {
      const todaysData = await populateCurrentCaseStats(
        dailyNosData.data,
        isToday,
        stateLevel,
        stateId,
      );
      returnData = todaysData;
    }
  }
  return returnData;
};

const defaultResponse = {
  message:
    'Hi, This is Shan.tk, Made this covid API Based on COWIN and COVIN19India APIs. This API is Only Related to INDIA Stats',
  website: 'https://sudharshan.tk',
  documentation: 'https://github.com/tks18/cf-worker-covid-api',
  endpoints: [
    {
      url: '/cases',
      desc: 'Data Related to Cases',
    },
    {
      url: '/vaccine',
      desc: 'Data Related to Vaccination',
    },
    {
      url: '/states',
      desc: 'List of States and their Data for use in other endpoints',
    },
  ],
};

async function checkProperUrl(request) {
  let url = new URL(request.url);
  let path = decodeURI(url.pathname);
  let stateID = url.searchParams.get('state');
  let districtID = url.searchParams.get('district');
  if (path === '/vaccine') {
    const vaccineData = await vaccinationHandler(stateID, districtID);
    return new Response(JSON.stringify(vaccineData, null, 2), {
      headers: { 'content-type': 'application/json;charset=UTF-8' },
    });
  } else if (path === '/cases') {
    let type = url.searchParams.get('type');
    let today = url.searchParams.get('today');
    if (type) {
      const casesData = await caseHandler(type, stateID, today);
      return new Response(JSON.stringify(casesData, null, 2), {
        headers: { 'content-type': 'application/json;charset=UTF-8' },
      });
    } else {
      const errorResponse = {
        error:
          'Cases Endpoint Requires type query parameter. type accepts following values - complete, historical, today',
      };
      return new Response(JSON.stringify(errorResponse, null, 2), {
        headers: { 'content-type': 'application/json;charset=UTF-8' },
      });
    }
  } else if (path === '/states') {
    return new Response(JSON.stringify(statesList, null, 0), {
      headers: { 'content-type': 'application/json;charset=UTF-8' },
    });
  }
  return new Response(JSON.stringify(defaultResponse, null, 0), {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
  });
}

async function handleRequest(request) {
  const response = await checkProperUrl(request);
  return response;
}
