async function getFoos() {
  const response = await fetch("http://localhost:5000/api/foos");
  const json = await response.json();
  console.log(json);
}

getFoos();

async function getJobs() {
  const response = await fetch("http://localhost:5000/api/jobs");
  const json = await response.json();
  // console.log(json);
}

getJobs();
