const URL = "http://localhost:3030/jsonstore/honey";

export const createItem = async (formValues) => {
  console.log(formValues);
  const response = await fetch(URL, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  return await response.json();
};
