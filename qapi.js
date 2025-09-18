// API module - fetch quiz questions
export async function fetchQuestions() {
  const url = "https://opentdb.com/api.php?amount=5&category=18&type=multiple";
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
