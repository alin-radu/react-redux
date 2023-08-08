const apiUrl = 'https://opentdb.com/api.php?amount=10&category=27&type=boolean';

export const fetchQuizAPI = () => {
  return fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((loadedQuestions) => loadedQuestions.results)
    .catch((error) => Promise.reject(error));
};
