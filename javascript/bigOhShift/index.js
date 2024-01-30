const tokens = ["token1", "token2"];

const requests = [
  ["GET", "https://example.com?token=token13345&name=sanskar&age=23"],
  [
    "POST",
    "https://example.com?token=token2&password=test123234&name=kanak&age=19",
  ],
  ["GET", "https://example.com?token=token3&name=jhon&age=34"],
];

function extractQueries(uri) {
  const queryPart = uri.split("?")[1];
  if (!queryPart) {
    return null;
  }

  const paramObj = {};
  queryPart.split("&").forEach((query) => {
    const [key, value] = query.split("=");
    paramObj[key] = value;
  });
  return paramObj;
}

const PASSWORD_REGEX = /^[0-9a-zA-Z]*$/g;
function getTokenValid(requests, tokens) {
  const result = requests.map((request) => {
    const [method, uri] = request;
    const params = extractQueries(uri);
    let isValidToken = tokens.includes(params.token);

    if (method === "POST") {
      isValidToken =
        isValidToken &&
        PASSWORD_REGEX.test(params.password) &&
        params.password.length >= 8;
    }

    return {
      method: method,
      isValid: isValidToken,
      name: params.name,
      age: params.age,
    };
  });

  return result;
}

console.log(getTokenValid(requests, tokens));
